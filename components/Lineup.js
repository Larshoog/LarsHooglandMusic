import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

const Lineup = ({title, text, buttonUrl}) => (
    <div className={utilStyles.contentwide}>
        <h2 className={utilStyles.headingLg}>{"Bezetting"}</h2>
        {Array.isArray(text) ? text.map((t) => <p>{t}</p>) : text}
    </div>
)

export default Lineup
