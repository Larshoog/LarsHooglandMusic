import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import path from 'path';
import Layout, {siteTitle} from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";
import fs from 'fs';

export default function Home(props) {
    const bands = props.bands;
    return (
        <Layout pagetype={'bands'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.gridwrapper}>
                {bands.map(band => {
                        if (band.id % 2 !== 0) {
                            return (<>
                                <Contentblock imageUrl={band.imageUrl} linkUrl={'bands'} contenttitle={band.name}
                                              type={'img'}/>
                                <Contentblock contenttitle={band.name} contenttext={band.text}/>
                            </>)
                        }
                        return (<>
                                <Contentblock contenttitle={band.name} contenttext={band.text}/>
                                <Contentblock imageUrl={band.imageUrl} linkUrl={'bands'} contenttitle={band.name}
                                              type={'img'}/>

                            </>
                        )
                    }
                )}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'lib/data.json');
    const jsonData = await fs.readFileSync(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}
