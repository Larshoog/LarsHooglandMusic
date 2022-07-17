import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const Contentblock = ({imageUrl, linkUrl, contenttitle}) => {
    return (
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
    )
}

export default Contentblock
