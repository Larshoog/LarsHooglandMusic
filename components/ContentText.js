import {Button} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const ContentText = ({title, text, buttonUrl}) => (
    <div className={utilStyles.content}>
        <h2 className={utilStyles.headingLg}>{title}</h2>
        <p>{text}</p>
        <div className={utilStyles.buttoncontainer}>
            <Button variant="contained" color="primary" startIcon={<MusicNoteIcon/>}>
                <Link href={buttonUrl}>
                    <a>Listen here</a>
                </Link>
            </Button>
        </div>
    </div>

)

export default ContentText
