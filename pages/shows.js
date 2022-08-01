import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";
import Section from "../components/Section";

export default function Home({ }) {
    return (
        <Layout pagetype={'shows'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.gridwrapper}>
                <Section>
                <Contentblock imageUrl={'/images/IMG_6424.jpg'} linkUrl={'bands'} buttonUrl={'bands'} contenttitle={'Bands'}/>
                <Contentblock imageUrl={'/images/owee.jpg'} linkUrl={'bio'} buttonUrl={'bands'} contenttitle={'Bio'}/>
                </Section>
            </div>
        </Layout>
    );
}

