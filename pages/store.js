import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import Section from '../components/Section'
import ContentImage from '../components/ContentImage'

const Store = () => (
    <Layout pagetype={'store'}>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage imageUrl="/images/yagan.png" linkUrl="contact" title="YAGAN" />
                <ContentImage imageUrl="/images/achter.jpg" linkUrl="store" title="More coming soon" />
            </Section>
        </div>
    </Layout>
)

export default Store
