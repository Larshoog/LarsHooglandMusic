import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

const ContentImage = ({title, linkUrl, imageUrl}) => (
    <div className={utilStyles.content}>
        <Link href={linkUrl}>
            <a>
                <Image
                    src={imageUrl}
                    layout="fill"
                    objectFit="cover"
                />
                <div className={utilStyles.blockcontainer}>
                    <h2 className={utilStyles.headingXl}>{title}</h2>
                </div>
            </a>
        </Link>
    </div>
)

export default ContentImage
