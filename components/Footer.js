import utilStyles from "../styles/utils.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Fab} from "@mui/material";


const Footer = () => (
    <div className={utilStyles.footer}>
        <Fab color="primary"><InstagramIcon/></Fab>
        <Fab color="primary"><FacebookIcon/></Fab>
        <Fab color="primary"><LinkedInIcon/></Fab>
    </div>

)

export default Footer