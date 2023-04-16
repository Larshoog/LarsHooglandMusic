import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import bandInfo from "../../lib/data.json";
import Section from "../../components/Section";
import ContentImage from "../../components/ContentImage";
import ContentText from "../../components/ContentText";

const Bands = () => (
    <Layout pagetype="projects">
        <div className={utilStyles.gridwrapper}>
            {bandInfo.bands.map((band) => (
                <Section key={band.id}>
                    <ContentImage
                        imageUrl={band.imageUrl}
                        linkUrl={band.buttonUrl}

                    />
                    <ContentText
                        title={band.name}
                        text={band.text}
                        buttonUrl={band.buttonUrl}
                    />
                </Section>
            ))}
        </div>
        <div className={utilStyles.headingLg}><h1>SPECIAL PROJECTS</h1></div>
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
                    />
                </Section>
            ))}
        </div>
    </Layout>
)

export default Bands
