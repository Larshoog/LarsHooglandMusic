import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import MusicPlayerSlider from "../components/audioplayer";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{sitehTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Lars Hoogland is de legend</p>
            </section>
            {/*<MusicPlayerSlider/>*/}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

