import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Section from "../components/Section";
import ContentImage from "../components/ContentImage";
import ContentTextButtonless from "../components/Contentblock";

const Bio = () => (
    <Layout pagetype="bio">
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentTextButtonless
                    title="Bio"
                    linkUrl="bands"
                    buttonUrl="bands"
                    text="Lars Hoogland (1998) is an upcoming jazz bassist from the Netherlands. Lars finds his inspiration in legendary bassists such as Milt Hinton and Ron Carter.

<br><br>
In 2021, Lars released the album <i>Yagan</i> alongside fellow musicians Kris Ransijn and Luuk Withagen. Inspired by Wayne Shorter and the second Miles Davis Quintet, <i>Yagan</i> is heavily rooted in post-bop traditions, while also incorporating musical elements from all around the world, ranging from Tibetan folk music to Chilean rhythms.
<br><br>
Today, Lars is making his mark on the music scene as a reliable musician that provides a strong foundation for his peers, while leaving space for improvisation and interaction.
<br><br>
During his time as the bassist for blues band Harlem Lake, Lars travelled to Memphis, Tennessee where he and his band performed as a featured artist in the 2019 International Blues Challenge.
<br><br>
    Afterwards, Lars enrolled in the Conservatory of Rotterdam (Codarts), where he studied both bass guitar and upright bass with teachers including Frans van Geest, Alessandro Fongaro, Marius Beets and Stefan Lievestro.
        <br><br>
            Lars has shared the stage or the studio with musicians such as John Helliwell, Benjamin Herman, Efraïm Trujillo, Bart Wirtz, Andy Scott, Nils van Haften, and others.
"/>

                <ContentImage imageUrl="/images/owee.jpg" linkUrl="bands" buttonUrl="bands"/>
            </Section>
        </div>
    </Layout>
)

export default Bio

