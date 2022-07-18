import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {bandinfo} from "../lib/data.json";

const Contentblock = ({imageUrl, linkUrl, contenttitle, contenttext, type}) => {
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
                <h2>{contenttitle}</h2>
                <p>{contenttext}</p>
            </div>
        )

    )
}

export default Contentblock
