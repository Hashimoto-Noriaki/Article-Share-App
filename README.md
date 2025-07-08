## 技術構成
- TypeScript
- React
- Nest.js
- ReactNative
- Tailwind
- CSS Modules
- Biome
- StoryBook
- Docker(マルチステージビルド)
- GitHubActions


## フロントエンド
### サーバー起動
```
npm run dev
```

### フロント設計
|設計|内容|
|----|---|
|features|ページ専属ロジック|
|shared|共通コンポーネント|
|pages|ルーティング|

### 静的解析ツールBiome
ESLintとPrettierより高速
開発スピード重視

```
npm run lint

npm run format
```

### StoryBook
```
npm run storybook
```
http://localhost:6006/ 

## バックエンド


## スマホアプリ

XCode(テスト（iOSシミュレータや実機）、デプロイ（App Store用ビルド）時にインストール)
