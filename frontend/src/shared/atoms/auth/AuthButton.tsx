type PropsType = {
    children:ReactNode;
}

export const AuthButton = ({children}: PropsType) => {
    return (
        <button className="w-full bg-emerald-600 hover:shadow-lg text-white rounded-lg font-bold py-3 mt-5  shadow hover:bg-emerald-500 transition">
            {children}
        </button>
    )
}