import YouTube from 'react-youtube'
import Layout from '../../components/Layout'
import utilStyles from '../../styles/utils.module.css'
import Section from '../../components/Section'
import ContentImage from '../../components/ContentImage'
import ContentText from '../../components/ContentText'
import { getAllBandIds, getBandData } from '../../lib/projects'
import Lineup from '../../components/Lineup'
import ContentTextButtonless from "../../components/Contentblock";
import ContentCenterButtonless from "../../components/ContentCenterButtonless";

const opts = {
    height: '423',
    width: '754',
}

const Bands = ({ id, name, bio, heading2, bio2, text, imageUrl, imageUrl3, buttonUrl, lineup, imageUrl2, imageCredits, youtubeId }) => (
    <Layout pagetype={name} imageCredits={imageCredits}>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage imageUrl={imageUrl2} linkUrl={buttonUrl} />
                <ContentText title={name} text={bio} buttonUrl={buttonUrl} buttonText={'Luister hier!'} />
            </Section>
            {youtubeId ? (
                youtubeId.map((t) => (
                    <Section>
                        <div className={utilStyles.tubewrapper}>
                            <YouTube iframeClassName={utilStyles.yt} videoId={t} opts={opts} />
                        </div>
                    </Section>
                ))
            ) : (
                <Section />
            )}
            {bio2 ?
            <Section>
                <ContentImage
                    imageUrl={imageUrl3}
                    linkUrl={buttonUrl}

                />
                <ContentCenterButtonless
                    title={heading2}
                    text={bio2}
                    buttonUrl={buttonUrl}
                    buttonText={"Luister hier!"}
                />
            </Section> : <Section/>}
            <Section>
                <Lineup text={lineup} />
            </Section>
        </div>
    </Layout>
)

export default Bands

export async function getStaticPaths() {
    // Return a list of possible value for id
    const id = getAllBandIds()
    return {
        paths: id,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: getBandData(params.id),
    }
}
