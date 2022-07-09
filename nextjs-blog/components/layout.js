import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import CoverImage from "./coverimage";
import NavItem from "./navitem";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const name = 'Lars Hoogland';
export const siteTitle = 'Lars Hoogland Music';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CoverImage imageUrl="/images/IMG_6515.jpg"/>
            <main>{children}</main>
        </div>
    );
}