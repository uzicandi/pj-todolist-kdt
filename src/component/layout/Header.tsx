import React from 'react';
import styles from './Header.module.css';
import LogoIconFull from '../../assets/images/doit.png';
import LogoIconSimple from '../../assets/images/doit_icon.png'
import Image from 'next/image';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      {/* 작은 화면에서는 doit_simple.svg, 큰 화면에서는 doit.svg */}
      <div className={styles.logoContainer}>
        <picture>
          <source media="(min-width: 744px)" srcSet={LogoIconFull.src} />
          <Image src={LogoIconSimple} alt="do it;" className={styles.logo} />
        </picture>
      </div>
    </nav>
  )
}

export default Header;