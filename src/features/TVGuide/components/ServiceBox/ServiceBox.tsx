import React from "react";
import type Service from "../../../../types/Service";
import styles from "./styles.module.css";

interface Props {
	number: Service["c"];
	id: Service["sid"];
	title: Service["t"];
}

function ServiceBox({ number, id, title }: Props) {
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
				<img
					className={styles["service-logo"]}
					srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/50x50.png`}
					alt={title}
				/>
			</picture>
			<span>{number}</span>
		</div>
	);
}

export default ServiceBox;
