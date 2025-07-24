import { FaLaptopCode } from 'react-icons/fa';
import { NotLoginLayout } from '../../features/components/templates/NotLoginLayout';

export const WelcomePage = () => {
    return (
        <NotLoginLayout>
            <div className="bg-gradient-to-r from-rose-300 to-cyan-600 text-white px-16 py-24 rounded-md w-full max-w-5xl text-center shadow-lg rounded-2xl">
                <h1 className="text-5xl font-bold mb-10 flex items-center justify-center">
                    <FaLaptopCode className="text-5xl"/>テックブログ共有アプリ
                </h1>
                <p className="text-3xl">×エンジニア同士で有益な記事を共有しよう</p>
            </div>
            <p className="text-center text-2xl p-10">お気に入りの技術記事があれば投稿しよう🎵</p>
        </NotLoginLayout>
    )
}
