### 記事共有アプリ
<img width="1404" height="771" alt="スクリーンショット 2025-07-25 1 03 52" src="https://github.com/user-attachments/assets/9e6ee8c7-ebac-4599-961f-39f7100fcfdc" />


## 技術構成
- TypeScript
- React
- Nest.js
- ReactNative
- Tailwind
- CSS Modules
- EXPO
- React-Hook-Form
- Zod
- StoryBook
- TypeSpec or Swagger(オープンAPIを用いたスキーマ駆動開発。スキーマファーストで作っていく。)
- Jest
- Testing Library
- Docker(マルチステージビルド)
- GitHubActions
- Prisma
- Biome
- ESLint Prettier
- GCP


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

### Docker
- ***ビルド***
```
cd frontend
docker compose build
```

- ***フロントエンド***
```
cd frontend
docker compose up -d
```

- ***docker停止***
```
docker compose down
```

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

### テスト
Jest、TestingLibrary
```
npm test
```


## スマホアプリ
XCode(テスト（iOSシミュレータや実機）、デプロイ（App Store用ビルド）時にインストール)
- アプリ起動
```
npm run web

npm run ios

npm run android
```
- EXPO
```
npx expo start
```
***QRコードをEXPO GOで読み取り。IOSはカメラでQRコードを読み取って、実機で動作確認***

## バックエンド
- 公式ドキュメント
https://docs.nestjs.com/

- サーバー起動
```
npm run start:dev
```

### Docker
- ***Dockerのみで起動***
```
docker-compose up --build
```

- ***ビルド***
```
cd frontend
docker compose build
```

- ***docker起動***
```
cd frontend
docker compose up -d
```

- ***docker停止***
```
docker compose down
```
