import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import bandInfo from "../../lib/data.json";
import Section from "../../components/Section";
import ContentImage from "../../components/ContentImage";
import ContentText from "../../components/ContentText";
import { getAllBandIds, getBandData } from "../../lib/projects";

const Bands = ({ id, name, bio, text, imageUrl, buttonUrl }) => (
    <Layout pagetype={name}>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage
                    imageUrl={imageUrl}
                    linkUrl={buttonUrl}

                />
                <ContentText
                    title={name}
                    text={bio}
                    buttonUrl={buttonUrl}
                    buttonText={"Listen here!"}
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
