import Head from 'next/head';
import Layout, {siteTitle} from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Section from "../components/Section";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";

const Bio = () => (
    <Layout pagetype="bio">
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentText
                    title="Bio"
                    linkUrl="bands"
                    buttonUrl="bands"
                    text="Orginally a blues bassist, Lars Hoogland adopted the upright bass at the age of 18. Since then, he has mainly focused on playing and writing (contemporary) jazz music. Inspired by legendary bass players such as Charles Mingus and Jaco Pastorius, he provides a strong foundation for his peers but isn't shy to lay down a bass solo either. Lars has shared the stage or the studio with musicians such as John Helliwell, Benjamin Herman, Efraïm Trujillo, Bart Wirtz, Andy Scott, Nils van Haften, and others. During his time as the bassist for Harlem Lake, he traveled to Memphis, Tennessee where he and his band spent the week playing in several iconic blues clubs on Beale Street as a featured band in the 2019 International Blues Challenge. Today, Lars is making his mark on the music scene as a"/>
                <ContentImage imageUrl="/images/owee.jpg" linkUrl="bands" buttonUrl="bands"/>
            </Section>
        </div>
    </Layout>
)

export default Bio
