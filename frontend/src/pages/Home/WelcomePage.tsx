

export const WelcomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-cyan-400 p-5">
                <div className="flex justify-between">
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
            <main className="flex-grow flex flex-col items-center justify-center p-8">
                <div className="bg-cyan-400 text-white px-16 py-24 rounded-md w-full max-w-5xl text-center">
                    <h1 className="text-5xl font-bold mb-10">テックブログ共有アプリ</h1>
                    <p className="text-3xl">×エンジニア同士で記事を共有しよう</p>
                </div>
                <p className="text-center text-2xl mt-10">エンジニア同士で有益な記事を共有しよう</p>
            </main>
            <footer  className="mt-10 font-bold bg-cyan-400 text-white w-full p-7 text-center">
                <p>© 2025 テックブログ共有アプリ</p>
            </footer>
        </div>
    )
}
