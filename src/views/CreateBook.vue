<template>
  <ion-app class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>書籍登録</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label>ISBN</ion-label>
        <IonInputVue type="text" name="isbn" v-model="isbn"></IonInputVue>
        <ion-button item-right type="button" @click="onSearchClick">
          検索
          <ion-icon name="md-arrow-forward"></ion-icon>
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-button item-right type="button" @click="startScan">
          バーコードスキャン
          <ion-icon name="md-arrow-forward"></ion-icon>
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-button item-right type="button" @click="save" :disabled="!canSave">
          保存
          <ion-icon name="md-arrow-forward"></ion-icon>
        </ion-button>
      </ion-item>
      {{result}}
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { Badge } from '@ionic-native/badge/ngx'
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { Plugins } from '@capacitor/core'
import { OpenDbApiResponse } from '../entity/entity'
import { Book } from './Home.vue'
const { Storage } = Plugins

type OpenDbApiResult = {

}

@Component({})
export default class extends Vue {
  public isbn: string = '4049121883'
  public result: OpenDbApiResponse[] = []
  public scaner = new BarcodeScanner()
  public item: any = {}// for debug

  async mounted () {}

  public get canSave () {
    return this.result !== null
  }

  public async onSearchClick () {
    // TODO: APIアクセスはリポジトリ等に分離してDIしたい
    this.result = (await axios.get<OpenDbApiResponse[]>(`https://api.openbd.jp/v1/get?isbn=${this.isbn}`)).data
  }

  public async getItem () {
    // TODO: ストレージアクセスはリポジトリ等に分離してDIしたい、できればSQLiteを使いたい（ionic/vueでは未対応？）
    const { value } = await Storage.get({ key: 'books' })
    return JSON.parse(value || JSON.stringify([]))
  }

  public async save () {
    if (this.result == null) { return }
    const a = (this.result[0].onix.CollateralDetail.SupportingResource || []).flatMap(x => (x.ResourceVersion || []).map(y => { return { sourceUrl: y.ResourceLink } }))
    console.debug(a)
    const book: Book = {
      id: '',
      title: this.result[0].onix.DescriptiveDetail.TitleDetail.TitleElement.TitleText.content,
      isdn: this.result[0].onix.RecordReference,
      images: a
    }

    // TODO: ストレージアクセスはリポジトリ等に分離してDIしたい、できればSQLiteを使いたい（ionic/vueでは未対応？）
    // 追加処理（LocalStorageにjsonで入れてるのでちょっとダサい）
    const books = await this.getItem()
    await Storage.set(
      { key: 'books', value: JSON.stringify([book, ...books]) }
    )

    alert('保存しました')
    this.$router.push('/')
  }

  public async startScan () {
    try {
      const result = await this.scaner.scan()
      this.isbn = result.text
      // TODO: 読み取り結果がisbnか確認すること
      this.onSearchClick()
    } catch (e) {
      alert(e)
      this.$router.back()
    }
  }
}
</script>
