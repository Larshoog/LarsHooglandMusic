import styles from "./layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import NavItem from "./NavItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Drawer, Fab, Grow} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import {IconButton} from "@mui/material";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';



const Header = ({imageUrl, name, pagetype}) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Projects', 'Bio', 'Shows', 'Store', 'Contact'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }
    return (
        <header className={styles.header}>
            <Image
                priority
                src={imageUrl}
                layout={"fill"}
                alt={name}
                objectFit={"cover"}
            />
            <div className={utilStyles.mobilemenu}>
                        <IconButton color="secondary"
                                variant="contained"
                                aria-label="open drawer"
                                onClick={toggleDrawer('left', true)}><Menu /></IconButton>
                        <Drawer
                            anchor='left'
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                        >
                            {list('left')}
                        </Drawer>

            </div>
            <Grow in timeout={1000}>
                <div className={utilStyles.navbar}>
                    <NavItem text="Home" href={"/"}/>
                    <NavItem text="Projects" href={"bands"}/>
                    <NavItem text="Bio" href={"bio"}/>
                    <NavItem text="Shows" href={"shows"}/>
                    <NavItem text="Store" href={"store"}/>
                    <NavItem text="Contact" href={"contact"}/>

                </div>
            </Grow>
            {pagetype === 'home' ? (
                <>
                    <div className={utilStyles.logocontainer}>
                        <div className={utilStyles.logo}>
                            <Grow in timeout={1500}>
                                <h1 className={utilStyles.headingXl}>Lars</h1>
                            </Grow>
                            <Grow in timeout={2000}>
                                <h1 className={utilStyles.headingXl}>Hoogland</h1>
                            </Grow>
                            <Grow in timeout={2500}>
                                <h1 className={utilStyles.headingXl}>Music</h1>
                            </Grow>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={utilStyles.logocontainer}>
                        <Grow in timeout={2500}>
                            <h1 className={utilStyles.headingXl}>{pagetype}</h1>
                        </Grow>
                    </div>
                </>
            )}
            <div className={utilStyles.scrollarrow}>
                <Grow in timeout={1500}>
                    <Fab onClick={handleScroll} color="primary">
                        <KeyboardArrowDownIcon fontSize="large"/>
                    </Fab>
                </Grow>
            </div>
        </header>
    )
}

export default Header
