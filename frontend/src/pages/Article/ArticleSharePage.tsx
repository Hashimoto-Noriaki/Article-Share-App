import { FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Footer } from '../../shared/components/atoms/Footer/Footer';

export const ArticleSharePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="bg-gradient-to-r from-cyan-300 to-cyan-600 p-5">
                    <div className="flex justify-between">
                        <div> 
                            <h1 className="text-yellow-400 font-bold text-3xl mb-3">テックブログ共有部屋</h1>
                            <p className="text-white text-2xl">×エンジニア同士で記事を共有しよう</p>
                        </div>
                        <nav>
                            <ul className="flex gap-10 text-white font-bold p-5 text-lg">
                                <li className="hover:text-yellow-400">
                                    <Link to='/guide'>利用説明</Link>
                                </li>
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
                <main className="flex-grow flex flex-col items-center mt-5">
                    <div className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-white px-5 py-8 rounded-md w-full max-w-5xl text-center shadow-lg">
                        <h1 className="text-5xl font-bold mb-10 flex items-center justify-center">
                            <FaLaptopCode className="text-3xl"/>テックブログ共有アプリ
                        </h1>
                        <p className="text-3xl">ここに有益な記事を共有していこう</p>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}
