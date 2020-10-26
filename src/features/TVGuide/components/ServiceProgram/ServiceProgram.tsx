import React from "react";
import styles from "./styles.module.css";

const getWidth = (duration: number) => {
	const widthOfOneHourBlock = 280; // px
	return `${(duration / 3600) * widthOfOneHourBlock}px`;
};

function ServiceProgram({ event }: any) {
	return (
		<div
			key={event.eid}
			className={styles["service-program"]}
			style={{ width: getWidth(event.d) }}
		>
			{event.t}
		</div>
	);
}

export default ServiceProgram;