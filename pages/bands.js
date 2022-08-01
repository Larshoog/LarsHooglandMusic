import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Section from "../components/Section";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";
import bandInfo from '../lib/data.json'

const Bands = () => (
    <Layout pagetype="projects">
        <div className={utilStyles.gridwrapper}>
            {bandInfo.bands.map((band) => (
                <Section key={band.id}>
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

export default Bands
