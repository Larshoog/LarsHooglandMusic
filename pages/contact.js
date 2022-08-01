import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";


export default function Home({}) {
    return (
        <Layout pagetype={'contact'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <form action="/send-data-here" method="post">
                <label htmlFor="first">First name:</label>
                <input type="text" id="first" name="first"/>
                <label htmlFor="last">Last name:</label>
                <input type="text" id="last" name="last"/>
                <button type="submit">Submit</button>
            </form>
        </Layout>
    );
}


