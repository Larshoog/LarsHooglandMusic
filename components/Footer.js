import utilStyles from '../styles/utils.module.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Fab } from '@mui/material'

const Footer = () => (
    <div className={utilStyles.footer}>
        <div className={utilStyles.fabcontainer}>
            <Fab color="secondary" href="https://www.instagram.com/lars.hoogland">
                <InstagramIcon />
            </Fab>
        </div>
        <div className={utilStyles.fabcontainer}>
            <Fab color="secondary" href="https://www.facebook.com/lars.hoogland/">
                <FacebookIcon />
            </Fab>
        </div>
        <div className={utilStyles.fabcontainer}>
            <Fab color="secondary" href="https://www.linkedin.com/in/lars-hoogland-a3a313152/">
                <LinkedInIcon />
            </Fab>
        </div>
    </div>
)

export default Footer
