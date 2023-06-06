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
    '/shows': '/images/jjpica.jpg',
    '/store': '/images/sbresized.jpg',
    '/contact': '/images/tpm1.jpg',
    '/watch': '/images/GL-174resized.jpg',
    '/listen': '/images/yatjj.jpg',
    '/bands/olive-green': '/images/og.png',
    '/bands/bebop-poetry': '/images/BEL04218.jpg',
    '/bands/lars-hoogland-trio': '/images/tpm1resized.jpg',
    '/bands/salted-butter': '/images/IMG_9462.jpg',
    '/bands/between-the-lines': '/images/IMG_6424.jpg',
    '/bands/artoise': '/images/IMG_9246.jpg',
    '/bands/kris-ransijn-trio': '/images/IMG_9503.jpg',
    '/bands/hoogland-quartet': '/images/owee.jpg',
}

const Layout = ({ children, pagetype, imageCredits }) => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Header pagetype={pagetype} imageUrl={coverImgs[router.asPath] ?? '/images/IMG_6515.jpg'} imageCredits={imageCredits}/>
            <main>
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout
