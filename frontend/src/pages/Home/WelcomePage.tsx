

export const WelcomePage = () => {
    console.log('WelcomePage rendered');
    return (
        <div>
            <header className="bg-cyan-400 p-5">
                <div className="flex justify-between ">
                    <div>
                        <h1 className="text-yellow-400 font-bold text-3xl mb-3">テックブログ共有アプリ</h1>
                        <p className="text-white font-bold">×エンジニア同士で記事を共有しよう</p>
                    </div>
                    <nav>
                        <ul className="flex gap-5 text-white font-bold my-5 ">
                            <li className="hover:text-yellow-400">利用説明</li>
                            <li className="hover:text-yellow-400">新規ユーザー登録</li>
                            <li className="hover:text-yellow-400">ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
