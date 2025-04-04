import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour vérifier si l'utilisateur est connecté
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer l'ouverture de la modale
  const [isLoginView, setIsLoginView] = useState(true); // État pour basculer entre login et register

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      {/* User Profile or Login Icon */}
      <div className={styles.user}>
        {isLoggedIn ? (
          <button className={`${styles.userButton} ${isLoggedIn ? 'loggedIn' : ''}`}>
            <img src="/user-icon.svg" alt="User Profile" />
          </button>
        ) : (
          <button className={`${styles.userButton} ${isLoggedIn ? 'loggedIn' : ''}`} onClick={handleLoginClick}>
            <img src="./assets/icons/login-icon.svg" alt="Login" />
          </button>
        )}
      </div>

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {isLoginView ? (
              <div className={styles.authBlock}>
                <button className={styles.closeButton} onClick={closeModal}>X</button>
                <h2>Login</h2>
                <form>
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit">Login</button>
                </form>
                <p>
                  Don't have an account?{' '}
                  <span onClick={() => setIsLoginView(false)} className={styles.switchView}>
                    Register
                  </span>
                </p>
              </div>
            ) : (
              <div className={styles.authBlock}>
                <button className={styles.closeButton} onClick={closeModal}>X</button>
                <h2>Register</h2>
                <form>
                  <input type="text" placeholder="Username" required />
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit">Register</button>
                </form>
                <p>
                  Already have an account?{' '}
                  <span onClick={() => setIsLoginView(true)} className={styles.switchView}>
                    Login
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;