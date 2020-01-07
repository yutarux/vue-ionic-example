<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>本棚</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="primary" @click="onAddButtonClick">
          追加
          <!-- TODO: ionic/vueのバグでiconが表示されない https://github.com/ionic-team/ionic/issues/18837 -->
          <!-- <ion-icon name="add-circle-outline"></ion-icon> -->
        </ion-fab-button>
      </ion-fab>
      <div class="images">
        <div class="one-image" v-for="book in books" :key="book.id">
          <img :src="book.images[0].sourceUrl">
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins

export class Book {
  public id: string = ''
  public isdn: string = ''
  public title: string = ''
  // public auther: string = ''
  // public remarks: string = ''
  // public createdAt?: Date = undefined
  public images: BookImage[] = []
}

export class BookImage {
  sourceUrl: string = ''
}

@Component({})
export default class extends Vue {
  public books: Book[] = []

  async mounted () {
    this.books = await this.getItem()
  }

  /**
   * @todo Repostitory的なところにいれてDIしたい
   */
  public async getItem () {
    const { value } = await Storage.get({ key: 'books' })
    return JSON.parse(value || '')
  }

  onLogoClick () {
    this.$router.push('/about')
  }

  onAddButtonClick () {
    this.$router.push('/create_book')
  }
}
</script>

<style lang="scss" scoped>
.image-container {
  min-height: 200px;
  background-size: cover;
}
@media (min-width: 0px) {
        .images {
            column-count: 2;
        }
}

@media (min-width: 420px) {
    .images {
        column-count: 3;
    }
}

@media (min-width: 720px) {
    .images {
        column-count: 4;
    }
}

.one-image {
    margin: 2px;
}
</style>
