import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Section from "../components/Section";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";
import bandInfo from '../lib/data.json'
import ContentTextButtonless from "../components/Contentblock";

const Bands = () => (
    <Layout pagetype="projects" imageCredits="📷 by Kelly Alexandre">
        <div className={utilStyles.gridwrapper}>
            {bandInfo.bands.map((band) => (
                <Section key={band.id}>
                    <ContentImage
                        imageUrl={band.imageUrl}
                        linkUrl={"bands/" + band.id}

                    />
                    <ContentText
                        title={band.name}
                        text={band.text}
                        buttonUrl={"bands/" + band.id}
                        buttonText="Meer Info"
                    />
                </Section>
            ))}
        </div>
        <div className={utilStyles.headingLg}><h1>AS A SIDEMAN</h1></div>
        <div className={utilStyles.gridwrapper}>
            {bandInfo.specialbands.map((band) => (
                <Section key={band.id}>
                    <ContentImage
                        imageUrl={band.imageUrl}
                        linkUrl={'bands'}
                    />
                    <ContentText
                        title={band.name}
                        text={band.text}
                        buttonUrl={band.buttonUrl}
                        buttonText="Meer Info"
                    />
                </Section>
            ))}
        </div>
    </Layout>
)

export default Bands
