import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import path from 'path';
import Layout, {siteTitle} from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";
import fs from 'fs';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'lib/data.json');
    const jsonData = await fs.readFileSync(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}
