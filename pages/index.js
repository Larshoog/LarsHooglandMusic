import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";

export default function Home({ allPostsData }) {
    return (
        <Layout pagetype={'home'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.gridwrapper}>
                    <Contentblock type={'img'} imageUrl={'/images/IMG_6424.jpg'} linkUrl={'bands'} contenttitle={'Bands'}/>
                    <Contentblock type={'img'} imageUrl={'/images/owee.jpg'} linkUrl={'bio'} contenttitle={'Bio'}/>
                    {/*<Contentblock imageUrl={'/images/IMG_6539.jpg'}/>*/}
                    {/*<Contentblock imageUrl={'/images/IMG_9686.jpg'}/>*/}
            </div>
            {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
            {/*    <h2 className={utilStyles.headingLg}>Blog</h2>*/}
            {/*    <ul className={utilStyles.list}>*/}
            {/*        {allPostsData.map(({ id, date, title }) => (*/}
            {/*            <li className={utilStyles.listItem} key={id}>*/}
            {/*                <Link href={`/posts/${id}`}>*/}
            {/*                    <a>{title}</a>*/}
            {/*                </Link>*/}
            {/*                <br />*/}
            {/*                {date}*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</section>*/}
        </Layout>
    );
}

