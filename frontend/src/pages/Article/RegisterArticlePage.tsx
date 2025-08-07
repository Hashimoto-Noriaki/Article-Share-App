import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
// import { AuthButton } from '../../../shared/components/atoms/auth/AuthButton';
import { InputForm } from '../../shared/components/atoms/InputForm/InputForm';

export const RegisterArticlePage = () => {
  return (
    <div className="flex items-center justify-center max-h-screen bg-white p-10">
      <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl flex items-center justify-center mb-5">
          <FaLaptopCode /> テックブログ共有アプリ
        </h1>
        <h2 className="text-xl font-bold mb-6">お気に入りの記事を登録する</h2>
        <p>登録したい記事のURLを貼ってください。</p>
        <form className="flex flex-col gap-6 text-left">
          <div>
            <p className="font-bold mb-3">記事のURL</p>
            <InputForm placeholder="URLを貼ってください。" />
          </div>
          <div>
            <p className="font-bold mb-3">記事の名前(*任意)</p>
            <InputForm placeholder="ご自由に書いてください" />
          </div>
          <button className="w-full bg-yellow-400 hover:shadow-lg text-white rounded-lg font-bold py-3 mt-5  shadow hover:bg-yellow-300 transition">
            登録する
          </button>
          <p className="mt-3 text-center text-xl underline hover:text-cyan-800">
            <Link to="/article_share">戻る</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
