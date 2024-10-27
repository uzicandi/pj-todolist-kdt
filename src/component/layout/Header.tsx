import React from 'react';
import styles from './Header.module.css';
import LogoIconFull from '../../assets/images/doit.png';
import LogoIconSimple from '../../assets/images/doit_icon.png'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => router.push('/')}>
        <picture>
          <source media="(min-width: 744px)" srcSet={LogoIconFull.src} />
          <Image src={LogoIconSimple} alt="do it;" className={styles.logo} />
        </picture>
      </div>
    </nav>
  )
}

export default Header;