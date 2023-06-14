import utilStyles from '../styles/utils.module.css'
import Image from 'next/legacy/image'

const ContentImage = ({ title, linkUrl, imageUrl }) => (
    <div className={utilStyles.content}>
        <Image src={imageUrl} layout="fill" objectFit="contain" />
        <div className={utilStyles.blockcontainer}>
            <h2 className={utilStyles.headingXl}>{title}</h2>
        </div>
    </div>
)

export default ContentImage
