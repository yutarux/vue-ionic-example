<template>
  <ion-app class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png">
      <hr />
      <ion-button @click="onLogoClick" full>Go to About Page</ion-button>
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  mounted () {}

  onLogoClick () {
    this.$router.push('/about')
  }
}
</script>
