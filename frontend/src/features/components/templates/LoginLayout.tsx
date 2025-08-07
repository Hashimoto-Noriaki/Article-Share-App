import { Link, Outlet } from 'react-router-dom';

export const LoginLayout = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-cyan-300 to-cyan-600 p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-yellow-400 font-bold text-3xl mb-3">
              テックブログ共有部屋
            </h1>
            <p className="text-white text-2xl">
              ×エンジニア同士で記事を共有しよう
            </p>
          </div>
          <nav>
            <ul className="flex gap-10 text-white font-bold p-5 text-lg">
              <li className="hover:text-yellow-400">
                <Link to="/guide">利用ガイド</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/register_article">記事を登録する</Link>
              </li>
              <li className="hover:text-yellow-400">
                <p>マイページ</p>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/logout">ログアウト</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
