import styles from "./layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const NavItem = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <a
                className={utilStyles.navitem}
            >
                {text}
            </a>
        </Link>
    );
};

export default NavItem;