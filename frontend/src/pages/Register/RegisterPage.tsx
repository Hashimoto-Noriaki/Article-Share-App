import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';

export const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center max-h-screen bg-white p-10">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-10 rounded-lg shadow-lg w-full max-w-md text-center">
                <h1 className="text-2xl flex items-center justify-center mb-5">
                    <FaLaptopCode /> テックブログ共有アプリ
                </h1>
                <h2 className="text-xl font-bold mb-6">新規登録する</h2>
                <form className="flex flex-col gap-6 text-left">
                    <div>
                        <p className="font-bold mb-3">名前</p>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                            placeholder="名前を入力してください*"
                        />
                    </div>
                    <div>
                        <p className="font-bold mb-3">メールアドレス</p>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                            placeholder="メールアドレスを入力してください"
                        />
                    </div>
                    <div>
                        <p className="font-bold mb-3">パスワード</p>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                            placeholder="8文字以上の半角英数字"
                        />
                    </div>
                    <button className="w-full bg-emerald-600 hover:shadow-lg text-white rounded-lg font-bold py-3 mt-5 mrounded-full shadow hover:bg-emerald-500 transition">
                        ログイン
                    </button>
                    <p className="mt-3 text-center text-xl underline hover:text-cyan-800">
                        <Link to = '/login'>ログインはこちら</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
