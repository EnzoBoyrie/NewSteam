import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/">
          <img src="./assets/icons/Steam.png" alt="NewSteam Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={styles.links}>
        <li className={styles.linkItem}><Link className={styles.link} to="/store">Store</Link></li>
        <li className={styles.linkItem}><Link className={styles.link} to="/library">Library</Link></li>
        <li className={styles.linkItem}><Link className={styles.link} to="/community">Community</Link></li>
      </ul>

      {/* Search Bar */}
      <div className={styles.search}>
        <input type="text" placeholder="Search games, friends..." />
        <button className={styles.searchButton}>
          <img src="./assets/icons/search-icon.svg" alt="Search" />
        </button>
      </div>

      {/* User Profile */}
      <div className={styles.user}>
        {/* Notifications */}
        <div className={styles.notifications}>
          <button className={styles.notificationButton}>
            <img src="./assets/icons/notification-icon.svg" alt="Notifications" />
          </button>
        </div>

        {/* Steam News */}
        <div className={styles.steamNews}>
          <button className={styles.newsButton}>
            <img src="./assets/icons/news-icon.svg" alt="Steam News" />
          </button>
        </div>

        {/* User Profile */}
        <button className={styles.userButton}>
          <img src="/user-icon.svg" alt="User Profile" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;