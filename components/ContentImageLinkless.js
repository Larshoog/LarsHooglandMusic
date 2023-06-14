import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ContentImage = ({ title, linkUrl, imageUrl }) => (
    <div className={utilStyles.content}>
        <Image src={imageUrl} layout="fill" objectFit="contain" />
        <div className={utilStyles.blockcontainer}>
            <h2 className={utilStyles.headingXl}>{title}</h2>
        </div>
    </div>
)

export default ContentImage
