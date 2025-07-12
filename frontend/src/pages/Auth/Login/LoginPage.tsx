import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
import { AuthButton } from '../../../shared/components/atoms/auth/AuthButton';
import { Input } from '../../../shared/components/atoms/Input/Input';

export const LoginPage = () => {
    return (
        <div className="flex items-center justify-center max-h-screen bg-white p-10">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-10 rounded-lg shadow-lg w-full max-w-md text-center">
                <h1 className="text-2xl flex items-center justify-center mb-5">
                    <FaLaptopCode /> テックブログ共有アプリ
                </h1>
                <h2 className="text-xl font-bold mb-6">ログイン</h2>
                <form className="flex flex-col gap-6 text-left">
                    <div>
                        <p className="font-bold mb-3">メールアドレス</p>
                        <Input
                            type="email"
                            placeholder="メールアドレス*"
                        />
                    </div>
                    <div>
                        <p className="font-bold mb-3">パスワード</p>
                        <Input
                            type="password"
                            placeholder="********"
                        />
                    </div>
                    <AuthButton>
                        ログイン
                    </AuthButton>
                    <p className="mt-3 text-center text-xl underline hover:text-cyan-800">
                        <Link to ='/register'>新規登録はこちら</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}
