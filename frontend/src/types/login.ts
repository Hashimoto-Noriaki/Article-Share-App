export type LoginInfoType = {
    id:number;
    name: string;
    email: string;
    password: string;
}

//今後拡張にあたって、追加される可能性があるもの
//createdAt	string (ISO日付)	登録日時 (「いつ登録したか」を表示する)
// updatedAt	string (ISO日付)	最終更新日時（プロフィール変更など）
// avatarUrl	string	アイコン画像（Gravatar, S3などに保存）
// bio	string	自己紹介やプロフィール文
// role	`'user'	'admin'`
// articlesCount	number	投稿した記事数（表示用にキャッシュ）
// likesCount	number	もらったいいね数（プロフィールに表示）


export type LoginReturnType = {
    id:number;
    name: string;
    email: string;
}

//今後拡張にあたって、追加される可能性があるもの
// avatarUrl	ログイン後ヘッダーにアイコンを表示したい
// role	権限チェック（admin画面、記事編集可能か）
// articlesCount	マイページやプロフィールで表示するため
// likesCount	同上
// bio	ユーザー名の下にちょっとした自己紹介
// createdAt	マイページなどで「参加日」として表示
// updatedAt	プロフィール最終更新日を表示する場合

//ログイン時(ContextAPIを使用してMVP開発用)
export type LoginUserType = {
    id: number;
    name: string;
};
