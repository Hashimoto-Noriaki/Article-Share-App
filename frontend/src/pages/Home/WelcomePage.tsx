import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';

export const WelcomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-cyan-400 p-5">
                <div className="flex justify-between">
                    <div> 
                        <h1 className="text-yellow-400 font-bold text-3xl mb-3">テックブログ共有アプリ</h1>
                        <p className="text-white text-2xl">×エンジニア同士で記事を共有しよう</p>
                    </div>
                    <nav>
                        <ul className="flex gap-10 text-white font-bold p-5 text-lg">
                            <li className="hover:text-yellow-400">利用説明</li>
                            <li className="hover:text-yellow-400">
                                <Link to='/register'>新規ユーザー登録</Link>
                            </li>
                            <li className="hover:text-yellow-400">
                                <Link to='/login'>ログイン</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center">
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-white px-16 py-24 rounded-md w-full max-w-5xl text-center shadow-lg">
                    <h1 className="text-5xl font-bold mb-10 flex items-center justify-center">
                        <FaLaptopCode className="text-5xl"/>テックブログ共有アプリ
                    </h1>
                    <p className="text-3xl">×エンジニア同士で有益な記事を共有しよう</p>
                </div>
                <p className="text-center text-2xl p-10">お気に入りの技術記事があれば投稿しよう🎵</p>
            </main>
            <footer  className="mt-5 bg-cyan-400 text-white w-full p-7 text-center">
                <p className="text-sm font-bold">© 2025 テックブログ共有アプリ</p>
            </footer>
        </div>
    )
}
