import YouTube from 'react-youtube'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

const opts = {
    height: '423',
    width: '754',
}

const Watch = () => (
    <Layout pagetype={'kijk'} imageCredits="📷 Paula Goldebeld">
        <div className={utilStyles.tubewrapper}>
            <YouTube iframeClassName={utilStyles.yt} videoId="OQsi0ZMnelc" opts={opts} />
        </div>
        <div className={utilStyles.tubewrapper}>
            <YouTube iframeClassName={utilStyles.yt} videoId="EOwHNW2aA_4" opts={opts} />
        </div>
        <div className={utilStyles.tubewrapper}>
            <YouTube iframeClassName={utilStyles.yt} videoId="gp_cdSxK-Fs" opts={opts} />
        </div>
    </Layout>
)

export default Watch
