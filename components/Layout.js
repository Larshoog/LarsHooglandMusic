import Head from 'next/head';
import styles from './layout.module.css';
import Header from "./Header";
import {useRouter} from "next/router";

const name = 'Lars Hoogland';
export const siteTitle = 'Lars Hoogland Music';

const coverImgs = {
    '/': '/images/IMG_6515.jpg',
    '/bands': '/images/IMG_6424.jpg',
    '/bio': '/images/IMG_9127.jpg',
    '/shows': '/images/achter.jpg',
    '/store': '/images/IMG_9686.jpg',
    '/contact': '/images/IMG_9462.jpg',
}

const Layout = ({ children, pagetype }) => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header pagetype={pagetype} imageUrl={coverImgs[router.pathname] ?? '/images/IMG_6515.jpg'}/>
            <main>{children}</main>
        </div>
    )
}

export default Layout
