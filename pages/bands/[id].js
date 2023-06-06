import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import bandInfo from "../../lib/data.json";
import Section from "../../components/Section";
import ContentImage from "../../components/ContentImage";
import ContentText from "../../components/ContentText";
import { getAllBandIds, getBandData } from "../../lib/projects";
import Lineup from "../../components/Lineup";

const Bands = ({ id, name, bio, text, imageUrl, buttonUrl, lineup, imageUrl2, imageCredits }) => (
    <Layout pagetype={name} imageCredits={imageCredits}>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage
                    imageUrl={imageUrl2}
                    linkUrl={buttonUrl}

                />
                <ContentText
                    title={name}
                    text={bio}
                    buttonUrl={buttonUrl}
                    buttonText={"Luister hier!"}
                />
            </Section>
            <Section>
                <Lineup
                text={lineup}
                />
            </Section>
        </div>
    </Layout>
)

export default Bands

export async function getStaticPaths() {
    // Return a list of possible value for id
    const id = getAllBandIds();
    return {
        paths: id,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    return {
        props: getBandData(params.id)
    };
}
