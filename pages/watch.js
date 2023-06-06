import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Contentblock from "../components/Contentblock";
import Section from "../components/Section";
import ContentImage from "../components/ContentImage";
import YouTube from "react-youtube";

const opts = {
    height: "423",
    width: "754",
};
const Watch = () => (
    <Layout pagetype={"watch"} imageCredits="📷 by Paula Goldebeld">
        <div className={utilStyles.tubewrapper}>
            <YouTube videoId="OQsi0ZMnelc" opts={opts}/>
        </div>
        <div className={utilStyles.tubewrapper}>
            <YouTube videoId="EOwHNW2aA_4" opts={opts}/>
        </div>
        <div className={utilStyles.tubewrapper}>
            <YouTube videoId="gp_cdSxK-Fs" opts={opts}/>
        </div>
    </Layout>
)

export default Watch
