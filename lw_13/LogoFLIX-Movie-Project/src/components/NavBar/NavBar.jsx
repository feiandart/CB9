import styles from './navbar.module.scss'
import Logo from '../Logo/Logo'

const NavBar = () => {
    const menuList = ['Home', 'About', 'Contact'];

    return (
        <nav className={styles.navbarContainer}>
            <Logo />
            <ul className={styles.menuList}>
                {menuList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </nav>
    )
}

export default NavBar