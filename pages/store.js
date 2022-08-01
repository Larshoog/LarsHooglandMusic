import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";
import Section from "../components/Section";

const Store = () => (
    <Layout pagetype={"store"}>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <Contentblock
                    imageUrl="/images/IMG_6424.jpg"
                    linkUrl="bands"
                    buttonUrl="bands"
                    contenttitle="Bands"
                />
                <Contentblock
                    imageUrl="/images/owee.jpg"
                    linkUrl="bio"
                    buttonUrl="bands"
                    contenttitle="Bio"
                />
            </Section>
        </div>
    </Layout>
)

export default Store
