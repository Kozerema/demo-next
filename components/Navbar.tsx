import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

import styles from "../styles/Navbar.module.scss";

const navigation = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Posts', path: '/posts'},
  {id: 3, title: 'Contacts', path: '/contacts'},
];

const Navbar: FC = () => {
  const {pathname} = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={60} height={60} alt="Header"/>
      </div>
      <div className={styles.links}>
        {navigation.map(({id, title, path}) => (
          <Link key={id} href={path}>
            <div className={pathname === path ? styles.active : undefined}>{title}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
