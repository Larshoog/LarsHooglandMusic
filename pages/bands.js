import Head from 'next/head';
import path from 'path';
import Layout, {siteTitle} from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import fs from 'fs';
import Section from "../components/Section";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";

const Bands = ({bands}) => (
    <Layout pagetype={'projects'}>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <div className={utilStyles.gridwrapper}>
            {bands.map(band => (
                <Section>
                    <ContentImage
                        imageUrl={band.imageUrl}
                        linkUrl={'bands'}
                        title={band.name}
                    />
                    <ContentText
                        title={band.name}
                        text={band.text}
                        buttonUrl={band.buttonUrl}
                    />
                </Section>
            ))}
        </div>
    </Layout>
)

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'lib/data.json');
    const jsonData = await fs.readFileSync(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}

export default Bands
