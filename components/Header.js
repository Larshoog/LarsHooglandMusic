import styles from "./layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import NavItem from "./NavItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Fab, Grow} from "@mui/material";

const Header = ({imageUrl, name, pagetype}) => {
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
