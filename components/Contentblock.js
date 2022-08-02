import {Button} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const ContentTextButtonless = ({title, text, buttonUrl}) => (
    <div className={utilStyles.content}>
        <h2 className={utilStyles.headingLg}>{title}</h2>
        <p>{text}</p>
    </div>

)

export default ContentTextButtonless
