import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import bandInfo from "../../lib/data.json";
import Section from "../../components/Section";
import ContentImage from "../../components/ContentImage";
import ContentText from "../../components/ContentText";

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
