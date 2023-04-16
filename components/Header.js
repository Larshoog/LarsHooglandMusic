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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Link from "next/link";


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
                {
                    <Link href={"/"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                }
                {
                    <Link href={"bands"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MusicNoteIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Projects"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                }
                {
                    <Link href={"bio"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Bio"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                }
                {
                    <Link href={"shows"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CalendarMonthIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Shows"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                }
                {
                    <Link href={"store"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingCartIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Store"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                }
                {
                    <Link href={"contact"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MailIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Contact"/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                }
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
                            onClick={toggleDrawer('left', true)}><Menu/></IconButton>
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
                    {nav.map(navItem => (
                        <NavItem text={navItem.label} href={navItem.url} key={navItem.url}/>
                    ))}
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
