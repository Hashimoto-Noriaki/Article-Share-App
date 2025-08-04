import { FaLaptopCode } from 'react-icons/fa';
// import { NotLoginLayout } from '../../features/components/templates/NotLoginLayout';
import styles from './WelcomePage.module.css';

export const WelcomePage = () => {
    return (
        // <NotLoginLayout>
        <>
            <div className= {styles.banner}>
                <h1 className={styles.title}>
                    <FaLaptopCode className="text-5xl"/>テックブログ共有アプリ
                </h1>
                <p className="text-3xl">×エンジニア同士で有益な記事を共有しよう</p>
            </div>
            <p className="text-center text-2xl p-10">お気に入りの技術記事があれば投稿しよう🎵</p>
        </>
    )
}
 {/* </NotLoginLayout> */}