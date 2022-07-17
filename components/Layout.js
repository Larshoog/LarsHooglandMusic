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
}

const Layout = ({ children, home }) => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {home ? (
            <Header home imageUrl={coverImgs[router.pathname] ?? '/images/IMG_6515.jpg'}/>
                ) : (
                <Header imageUrl={coverImgs[router.pathname] ?? '/images/IMG_6515.jpg'}/>
                )}
            <main>{children}</main>
            {/*<Button variant="contained" color="secondary">Click me</Button>*/}
        </div>
    )
}

export default Layout
