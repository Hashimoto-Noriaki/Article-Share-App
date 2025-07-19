FROM node:18

WORKDIR /app

# 依存関係を先にコピー（キャッシュ効かせる）
COPY package*.json ./
RUN npm install

# Prismaスキーマを確実にコピー
COPY prisma ./prisma

# その他のコード（srcなど）をコピー
COPY . .

# Prisma Clientの生成
RUN npx prisma generate

# NestJSアプリのビルド
RUN npm run build

EXPOSE 4000
CMD ["node", "dist/main"]
