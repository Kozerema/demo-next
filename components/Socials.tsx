import {FC} from "react";

import {socialsType} from "@/types";
import styles from "../styles/Socials.module.scss";

// type socialsType = Social[];

type socialsProps = {
  socials: socialsType[]
}

const Socials: FC<socialsProps> = ({socials}) => {

  if (!socials) {
    return null;
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"/>
      <ul className={styles.socials}>
        {socials && socials.map(({id, icon, path}) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} aria-hidden="true"/>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export {Socials};
