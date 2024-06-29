import * as React from "react";

import styles from "../../components/Card/styles.module.scss";

interface CardProps {
     src: { name: string; src: string };
}

export const Card = ({ src }: CardProps) => (
     <span className={styles.card}>
          {/* <img className={styles.card__blur} src={src.src} alt={src.name} /> */}
          <img className={styles.card__img} src={src.src} alt={src.name} />
     </span>
);
