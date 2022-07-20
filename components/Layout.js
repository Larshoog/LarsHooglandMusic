import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from "./Header";
import NavItem from "./NavItem";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {useRouter} from "next/router";
import {Button} from "@mui/material";

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
                @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@800&display=swap');
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header pagetype={pagetype} imageUrl={coverImgs[router.pathname] ?? '/images/IMG_6515.jpg'}/>
            <main>{children}</main>
        </div>
    )
}

export default Layout
