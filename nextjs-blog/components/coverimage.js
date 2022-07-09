import styles from "./layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import NavItem from "./navitem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function CoverImage(props){
    const a = props.imageUrl
    return(
    <header className={styles.header}>
        <>

                    <Image
                        priority
                        src={props.imageUrl}
                        layout={"fill"}
                        alt={props.name}
                        objectFit={"cover"}
                    />
            <div className={utilStyles.navbar}>
                <NavItem text="Home" href={"/"}/>
                <NavItem text="Bands" href={"bands.js"}/>
                <NavItem text="Bio" href={"bio.js"}/>
                <NavItem text="Shows" href={"shows.js"}/>
                <NavItem text="Store" href={"store.js"}/>
                <NavItem text="Contact" href={"contact.js"}/>

            </div>
            <div className={utilStyles.logocontainer}>
                <div className={utilStyles.logo}>
                    <h1 className={utilStyles.headingXl}>Lars<br/>Hoogland<br/>Music</h1>
                </div>
            </div>
            <div className={utilStyles.scrollarrow}>
                <KeyboardArrowDownIcon/>
            </div>
        </>
    </header>
    )
}