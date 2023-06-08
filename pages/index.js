import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import ContentImage from "../components/ContentImage";
import Section from "../components/Section";

const Index = () => (
    <Layout pagetype="home" imageCredits="📷 Kelly Alexandre">
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage imageUrl={'/images/IMG_6424.jpg'} linkUrl={'bands'}
                              title={'Bands'}/>
                <ContentImage imageUrl={'/images/owee.jpg'} linkUrl={'bio'} title={'Over Lars'}/>
            </Section>
        </div>
    </Layout>
)

export default Index
