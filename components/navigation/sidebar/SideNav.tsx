
'use client'
import { usePathname } from 'next/navigation';
import styles from '@/styles/module/SideNav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';
import { RiHome3Fill } from 'react-icons/ri';
import { IoChatbubbleOutline, IoSettingsOutline } from 'react-icons/io5';

export default function SideNav() {
    const pathname = usePathname();
    interface IsActiveFunction {
        (path: string): boolean;
    }

    const isActive: IsActiveFunction = (path) => pathname === path;

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <Image className={styles.logo} src="https://placehold.co/600x400/png" alt="Logo" width={60} height={60} />
                <li>
                    <Link href="/" className={`${styles.navItem} ${isActive('/') ? styles.activeNavItem : ''}`}>
                        <RiHome3Fill />
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={`${styles.navItem} ${isActive('/about') ? styles.activeNavItem : ''}`}>
                        <IoMdMore />
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={`${styles.navItem} ${isActive('/contact') ? styles.activeNavItem : ''}`}>
                        <FaTelegramPlane />
                    </Link>
                </li>
            </ul>

            <div className={styles.navFooter}>
                <Link href="/chat" className={styles.navItemFooter}>
                    <IoChatbubbleOutline />
                </Link>
                <Link href="/settings" className={styles.navItemFooter}>
                    <IoSettingsOutline />
                </Link>
            </div>
        </nav>
    );
}
