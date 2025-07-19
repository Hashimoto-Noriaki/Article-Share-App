import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "../schemas/loginSchema";
import { Link } from 'react-router-dom';
import { login } from '../../../api/login';
import { FaLaptopCode } from 'react-icons/fa';
import { AuthButton } from '../../../shared/components/atoms/auth/AuthButton';
import { Input } from '../../../shared/components/atoms/Input/Input';

export const LoginPage = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        try {
            await login(data);
            //成功時の処理を後ほど追加
        } catch {
            setError("email", {
                type: "manual",
                message: "メールアドレスかパスワードが間違っています",
        });
    }
};

    return (
        <div className="flex items-center justify-center max-h-screen bg-white p-10">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-10 rounded-lg shadow-lg w-full max-w-md text-center">
                <h1 className="text-2xl flex items-center justify-center mb-5">
                    <FaLaptopCode /> テックブログ共有アプリ
                </h1>
                {errors.email && (
                    <p className="text-red-500 font-bold mt-1">⚠ メールアドレスかパスワードを間違えています</p>
                )}
                <h2 className="text-xl font-bold mb-6">ログイン</h2>
                <form className="flex flex-col gap-6 text-left" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p className="font-bold mb-3">メールアドレス</p>
                        <Input
                            type="email"
                            {...register("email")}
                            placeholder="email"
                        />
                    </div>
                    <div>
                        <p className="font-bold mb-3">パスワード</p>
                        <Input
                            type="password"
                            {...register("password")}
                            placeholder="password"
                        />
                    </div>
                    <AuthButton type="submit">
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
