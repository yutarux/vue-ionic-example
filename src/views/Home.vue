<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- <ion-grid>
        <ion-row>
          <ion-col col-6 col-md-4 col-xl-3 v-for="book in books" :key="book.id">
            <div v-if="book.images.length > 0"
                 class="image-container"
                 :style="{ backgroundImage: `url(${book.images[0].sourceUrl})` }">
            </div>
          </ion-col>
        </ion-row>
      </ion-grid> -->

    <div class="images">
      <div class="one-image" v-for="book in books" :key="book.id">
        <img :src="book.images[0].sourceUrl">
      </div>
    </div>

      <!-- <ion-grid fixed="true">
        <ion-row>
          <ion-col v-for="book in books" :key="book.id" size-sm="4">
            <ion-card>
              <ion-img v-if="book.images.length > 0" :src="book.images[0].sourceUrl"></ion-img>
              <ion-card-header>
                <ion-card-title>{{book.title}}</ion-card-title>
                <ion-card-subtitle>{{book.title}}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                {{book.title}}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid> -->
      <ion-fab-button color="primary">Primary</ion-fab-button>
    </ion-content>
    <hr/>
    <ion-button @click="onAddButtonClick">追加</ion-button>
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
