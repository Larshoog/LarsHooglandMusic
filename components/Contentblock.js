import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {bandinfo} from "../lib/data.json";
import {Button} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Contentblock = ({imageUrl, linkUrl, buttonUrl, contenttitle, contenttext, type}) => {
    return (
        type === 'img' ? (
            <div className={utilStyles.content}>
                <Link href={linkUrl}>
                    <a>
                        <Image
                            src={imageUrl}
                            layout={"fill"}
                            objectFit={"cover"}
                        />
                        <div className={utilStyles.blockcontainer}>
                            <h2 className={utilStyles.headingXl}>{contenttitle}</h2>
                        </div>
                    </a>
                </Link>

            </div>
        ) : (
            <div className={utilStyles.content}>
                <h2 className={utilStyles.headingLg}>{contenttitle}</h2>
                <p>{contenttext}</p>
                <div className={utilStyles.buttoncontainer}>
                    <Button variant="contained" color="primary" startIcon={<MusicNoteIcon/>}><Link href={buttonUrl}><a>Listen
                        here</a></Link></Button>
                </div>
            </div>
        )

    )
}

export default Contentblock
