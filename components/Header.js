import {
    CalendarMonth as CalendarMonthIcon,
    Home as HomeIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    Mail as MailIcon,
    Menu as MenuIcon,
    MusicNote as MusicNoteIcon,
    Person as PersonIcon,
    SmartDisplay as SmartDisplayIcon,
} from '@mui/icons-material'
import {
    Box,
    Drawer,
    Fab,
    Grow,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import Image from 'next/legacy/image'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import NavItem from './NavItem'

const nav = [
    { url: '/', label: 'Home', icon: <HomeIcon /> },
    { url: '/bands', label: 'Bands', icon: <MusicNoteIcon /> },
    { url: '/bio', label: 'Over', icon: <PersonIcon /> },
    { url: '/shows', label: 'Agenda', icon: <CalendarMonthIcon /> },
    { url: '/watch', label: 'Kijk', icon: <SmartDisplayIcon /> },
    { url: '/listen', label: 'Luister', icon: <MusicNoteIcon /> },
    { url: '/contact', label: 'Contact', icon: <MailIcon /> },
]

const Header = ({ imageUrl, name, pagetype, imageCredits }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setDrawerOpen(open)
    }

    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <header className={styles.header}>
            <div className={utilStyles.credits}>
                <p>{imageCredits}</p>
            </div>
            <Image priority src={imageUrl} layout="fill" alt={name} objectFit="cover" />
            <div className={utilStyles.mobilemenu}>
                <IconButton color="secondary" variant="contained" aria-label="open drawer" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            {nav.map((navItem) => (
                                <Link href={navItem.url} key={navItem.url} legacyBehavior>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>{navItem.icon}</ListItemIcon>
                                            <ListItemText primary={navItem.label} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </div>
            <Grow in timeout={1000}>
                <div className={utilStyles.navbar}>
                    {nav.map((navItem) => (
                        <NavItem text={navItem.label} href={navItem.url} key={navItem.url} />
                    ))}
                </div>
            </Grow>
            <div className={utilStyles.logocontainer}>
                {pagetype === 'home' ? (
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
                ) : (
                    <Grow in timeout={2500}>
                        <h1 className={utilStyles.headingXl}>{pagetype}</h1>
                    </Grow>
                )}
            </div>
            <div className={utilStyles.scrollarrow}>
                <Grow in timeout={1500}>
                    <Fab onClick={handleScroll} color="primary">
                        <KeyboardArrowDownIcon fontSize="large" />
                    </Fab>
                </Grow>
            </div>
        </header>
    )
}

export default Header
