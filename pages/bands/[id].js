import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import bandInfo from "../../lib/data.json";
import Section from "../../components/Section";
import ContentImage from "../../components/ContentImage";
import ContentText from "../../components/ContentText";
import {getAllBandIds} from "../../lib/projects";

const Bands = () => (
    <Layout pagetype="OLIVE GREEN">
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage
                    imageUrl={"/images/olivegreen.jpg"}
                    linkUrl={"/"}

                />
                <ContentText
                    title={"OLIVE GREEN"}
                    text={"bla"}
                    buttonUrl={"a"}
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
        id,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    // Fetch necessary data for the blog post using params.id
    const bandData = getBandData(params.id);
    return {
        props: {
            bandData,
        },
    };
}
