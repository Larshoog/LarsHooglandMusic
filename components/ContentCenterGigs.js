import { Button } from '@mui/material'
import { MusicNote as MusicNoteIcon } from '@mui/icons-material'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const ContentText = ({ title, text, buttonUrl }) => (
    <div className={utilStyles.contentnoskip}>
        <h2 className={utilStyles.headingLg}>{title}</h2>
        {Array.isArray(text) ? text.map((t) => <p>{t}</p>) : text}
    </div>
)

export default ContentText
