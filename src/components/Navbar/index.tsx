import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <NavLink to="/" activeClassName={styles.active} className={styles.link} exact={true}>
          Welcome
        </NavLink>
        <NavLink to="/newstories" activeClassName={styles.active} className={styles.link}>
          News
        </NavLink>
        <NavLink to="/topstories" activeClassName={styles.active} className={styles.link}>
          Top
        </NavLink>
        <NavLink to="/beststories" activeClassName={styles.active} className={styles.link}>
          Best
        </NavLink>
      </div>
    </div>
  );
};
