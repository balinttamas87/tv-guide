import React from 'react';
import styles from "./styles.module.css";

interface Service { 
    number: string;
    format: string;
    genre: string;
    id: string;
    title: string;
}

function ServiceBox({ number, format, genre, id, title }: Service) {
    return (
        <div className={styles["service-box"]}>
        <picture className={styles["service-picture"]}>
          <source 
            srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/100x100.png`}
            media="(min-width: 481px)"
          />
          <source 
            srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/150x150.png`}
            media="(min-width: 769px)"
          />
          <source 
            srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/300x300.png`}
            media="(min-width: 1025px)"
          />
            <img className={styles["service-logo"]} srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/50x50.png`} alt={title} />
        </picture>
            <span>{number}</span>
        </div>
    );
}

export default ServiceBox;