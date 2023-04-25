import Head from 'next/head';
import styles from './layout.module.css';
import Header from "./Header";
import {useRouter} from "next/router";
import Footer from "./Footer";

const name = 'Lars Hoogland';
export const siteTitle = 'Lars Hoogland Music';

const coverImgs = {
    '/': '/images/IMG_6515.jpg',
    '/bands': '/images/IMG_6424.jpg',
    '/bio': '/images/IMG_9127.jpg',
    '/shows': '/images/flow4.jpg',
    '/store': '/images/sbresized.jpg',
    '/contact': '/images/tpm1.jpg',
    '/watch': '/images/GL-174.jpg',
    '/bands/[id]': '/images/olivegreen.jpg',
}

const Layout = ({ children, pagetype }) => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Header pagetype={pagetype} imageUrl={coverImgs[router.pathname] ?? '/images/IMG_6515.jpg'}/>
            <main>
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout
