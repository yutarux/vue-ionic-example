<template>
  <ion-app class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>バッジテスト</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button @click="incrementBadgeCount">Click!</ion-button>
      <ion-button @click="clearBadgeCount">Clear</ion-button>
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { Badge } from '@ionic-native/badge/ngx'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  private badge: Badge = new Badge()

  mounted () {}

  async incrementBadgeCount () {
    await this.badge.increase(1)
  }

  async clearBadgeCount () {
    await this.badge.clear()
  }
}
</script>
