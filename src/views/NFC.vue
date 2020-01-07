<template>
  <ion-app class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>NFCテスト</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="(message, index) in messages" :key="index">
          <ion-label>{{message}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { NFC, Ndef } from '@ionic-native/nfc/ngx'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  private nfc: NFC = new NFC()
  private ndef: Ndef = new Ndef()
  private messages: string[] = []

  mounted () {
    // for ios
    this.nfc.beginSession(() => { this.messages.push('begin session.') }, () => { this.messages.push('faild to begin session.') })

    this.nfc.addNdefListener(() => {
      this.messages.push('successfully attached ndef listener')
    }, (err: Error) => {
      this.messages.push('error attaching ndef listener:' + err.name + err.message)
    }).subscribe((event) => {
      this.messages.push('received ndef message. the tag contains: ' + event.tag)
      this.messages.push('decoded tag id', this.nfc.bytesToHexString(event.tag.id))

      // let message = this.ndef.textRecord('Hello world');
      // this.nfc.share([message]).then(onSuccess).catch(onError);
    })
  }

  async onButtonClick () {

  }
}
</script>
