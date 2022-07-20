import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";

export default function Home({ }) {
    return (
        <Layout pagetype={'shows'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.gridwrapper}>
                <Contentblock imageUrl={'/images/IMG_6424.jpg'} linkUrl={'bands'} buttonUrl={'bands'} contenttitle={'Bands'}/>
                <Contentblock imageUrl={'/images/owee.jpg'} linkUrl={'bio'} buttonUrl={'bands'} contenttitle={'Bio'}/>
                {/*<Contentblock imageUrl={'/images/IMG_6539.jpg'}/>*/}
                {/*<Contentblock imageUrl={'/images/IMG_9686.jpg'}/>*/}
            </div>
        </Layout>
    );
}

