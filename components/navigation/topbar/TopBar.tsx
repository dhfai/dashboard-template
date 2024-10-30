'use client'

import styles from '@/styles/module/TopBar.module.scss';
import { IoMdSearch } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useState } from 'react';

export default function TopBar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Optionally add logic to toggle a global theme
    };

    return (
        <nav className={styles.topNav}>
            {/* Search bar */}
            <div className={styles.search}>
                <IoMdSearch className={styles.searchIcon} />
                <input type="text" placeholder="Search..." />
            </div>

            {/* Profile and dark mode switch */}
            <div className={styles.profile}>
                <FaUserCircle className={styles.profileImage} />
                {darkMode ? (
                    <BsSun className={styles.modeSwitch} onClick={toggleDarkMode} />
                ) : (
                    <BsMoon className={styles.modeSwitch} onClick={toggleDarkMode} />
                )}
            </div>
        </nav>
    );
}
