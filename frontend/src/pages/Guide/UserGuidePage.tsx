import { Link } from 'react-router-dom';

export const UserGuidePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="bg-white p-12 rounded-lg shadow-md max-w-3xl w-full bg-gradient-to-r from-cyan-300 to-cyan-600 text-gray-800">
                <h1 className="text-3xl font-bold mb-6  text-center">
                    テックブログ共有アプリ 利用ガイド
                </h1>
                <p className="text-lg mb-4">
                    QiitaやZennなど技術ブログをエンジニア同士で共有できるプラットフォームです。
                </p>
                <p className="text-lg mb-4">
                    自分が「これ良いな！」と思った記事があれば、ぜひここで共有してください。<br/>
                    投稿された記事はみんなが検索して見つけることができます。
                </p>
                <p className="text-lg mb-4">
                    現在は、お気に入りの記事をシェアする場として完全無料でご利用いただけます。
                    将来的には、自分で直接記事を書いて投稿できる機能も提供予定です。
                </p>
                <p className="text-lg mb-6">
                    気軽にエンジニア同士でナレッジを共有し合いましょう！
                </p>
                <div className="text-center mt-8">
                    <p className="font-semibold">
                        🎉 料金は一切不要です。安心してご利用ください。
                    </p>
                </div>
            </div>
            <div className="mt-5">
                <button 
                    className="w-[300px] mt-8 border-2 border-solid border-blue-100 bg-blue-300 hover:bg-blue-600 font-bold px-10 py-5 rounded-full shadow transition hover:"
                >
                    <Link to="/">戻る</Link>
                </button>
            </div>
        </div>
    );
};
