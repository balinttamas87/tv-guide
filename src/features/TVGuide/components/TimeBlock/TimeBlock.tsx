import React from "react";
import styles from "./styles.module.css";

interface Props {
	durationInMinutes: number;
}

function TimeBlock({ durationInMinutes }: Props) {
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
