import Head from 'next/head';
import Layout, {siteTitle} from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import ContentImage from "../components/ContentImage";
import Section from "../components/Section";

const Index = () => (
    <Layout pagetype="home">
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage imageUrl={'/images/IMG_6424.jpg'} linkUrl={'bands'}
                              title={'Bands'}/>
                <ContentImage imageUrl={'/images/owee.jpg'} linkUrl={'bio'} title={'Bio'}/>
            </Section>
        </div>
    </Layout>
)

