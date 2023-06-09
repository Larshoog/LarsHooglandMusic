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
const Listen = () => (
    <Layout pagetype={"Luister"} imageCredits="📷 Veerle Bastiaanssen">
       <div className={utilStyles.spotifycontainer}>
        <iframe
            className={utilStyles.spotify}
            src="https://open.spotify.com/embed/playlist/7FRN9bwf5owU0ZEpVK3D3i?utm_source=generator"
                height="700" frameBorder="0" allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"/>
       </div>
    </Layout>
)

export default Listen
