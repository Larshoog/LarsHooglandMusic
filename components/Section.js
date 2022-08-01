import styles from './Section.module.css'

const Section = ({children}) => (
    <div className={styles.section}>
        {children}
    </div>
)

export default Section
