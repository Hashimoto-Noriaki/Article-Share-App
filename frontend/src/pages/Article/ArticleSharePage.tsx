import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '../../shared/hooks/useLoginUser';
import { FaLaptopCode } from 'react-icons/fa';
import { Footer } from '../../shared/components/atoms/Footer/Footer';

export const ArticleSharePage = () => {
  const { loginUser } = useLoginUser();
  const navigate = useNavigate();

  // ✅ 未ログインなら /login にリダイレクト
  useEffect(() => {
    if (!loginUser) {
      navigate('/login');
    }
  }, [loginUser, navigate]);

  // ✅ リダイレクト中は何も表示しない
  if (!loginUser) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center mt-5">
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-white px-5 py-8 rounded-md w-full max-w-5xl text-center shadow-lg">
          <h1 className="text-5xl font-bold mb-10 flex items-center justify-center">
            <FaLaptopCode className="text-3xl" />テックブログ共有アプリ
          </h1>
          <p className="text-3xl">ここに有益な記事を共有していこう</p>
        </div>
        <div className="mt-5 text-lg">
          <p>ユーザーID: {loginUser.id}</p>
          <p>ユーザー名: {loginUser.name}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
