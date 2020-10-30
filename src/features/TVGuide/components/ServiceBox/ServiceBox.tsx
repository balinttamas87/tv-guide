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
					// Could store breakpoints in a constants folder
					// Greater than 1201px - Extra large screens, TV
					// 1025px - 1200px - Desktops, large screens
					srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/300x300.png`}
					media="(min-width: 1025px)"
				/>
				<source
					// 769px - 1024px - Small screens, laptops
					srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/150x150.png`}
					media="(min-width: 769px)"
				/>
				<source
					// 481px - 768px - Tablets
					srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/100x100.png`}
					media="(min-width: 481px)"
				/>
				<img
					className={styles["service-logo"]}
					// 320px - 480px - Mobile
					srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/50x50.png`}
					alt={title}
				/>
			</picture>
			<span>{number}</span>
		</div>
	);
}

export default ServiceBox;
