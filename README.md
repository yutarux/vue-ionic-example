# vue-ionic

## 技術スタック
* Ionic
  * javascript用のUIフレームワーク
    * Angular、React、Vueに対応（Vueはまだベータ）
  * 動きのついてるBootstrapみたいなやつです
* Capacitor
  * HTML5ベースのアプリをPWA、IOS、Android、Win、Mac向けに変換するツール。
  * 所謂ガワアプリ（WebViewアプリ、ハイブリッドアプリ）作成ツール
* Vue
  * Javascriptのフレームワーク
* Typescript
   *  javascriptのスーパーセットな少し緩めの静的型付け言語
      *  別に必須ではないのとVueはファイルごとに記述言語を指定出来るので無理して使わなくてもよい

## Project setup
```
npm install
```

### Webブラウザ上での実行 + HotReload（開発中は基本的にこれで実行して確認、編集を行う）
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### ios向けのプロジェクト生成 & xcode起動
```
npm run build:ios
```

### cordva（ネイティブ機能を使用する）プラグインインストール
```
npm install ${cordova-plugin-name}
npx cap sync
npm install ${@ionic-native/ionic-plugin-name}
```
