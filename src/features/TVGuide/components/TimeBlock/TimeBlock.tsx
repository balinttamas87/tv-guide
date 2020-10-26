import React from "react";
import styles from "./styles.module.css";

function TimeBlock({ durationInMinutes }: any) {
	const formatNumberToTimeString = (durationInMinutes: number) => {
		const hour = String(Math.floor(durationInMinutes / 60)).padStart(2, "0");
		const minutes = String(Math.floor(durationInMinutes % 60)).padStart(2, "0");
		return `${hour}:${minutes}`;
	};

	return (
		<div className={styles["time-block"]}>
			{formatNumberToTimeString(durationInMinutes)}
		</div>
	);
}

export default TimeBlock;
