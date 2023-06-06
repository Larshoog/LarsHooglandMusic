import {Button} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const ContentText = ({title, text, buttonUrl, buttonText}) => (
    <div className={utilStyles.content}>
        <h2 className={utilStyles.headingLg}>{title}</h2>
        {Array.isArray(text) ? text.map((t) => <p>{t}</p>) : text}
        <div className={utilStyles.buttoncontainer}>
            <Link href={buttonUrl} passHref>
            <Button size="large" variant="contained" color="primary" startIcon={<MusicNoteIcon/>}>
                <a>{buttonText}</a>
            </Button>
            </Link>
        </div>
    </div>

)

export default ContentText
