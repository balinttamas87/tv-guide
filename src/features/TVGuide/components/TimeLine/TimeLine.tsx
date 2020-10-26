import React from "react";
import TimeBlock from "../TimeBlock/TimeBlock";
import styles from "./styles.module.css";

function TimeLine() {
	return (
		<div className={styles["time-line-wrapper"]}>
			<div className={styles["time-line-scrollable"]}>
				<div className={styles["time-line"]}>
					{Array(48)
						.fill(null)
						.map((__, index) => (
							<TimeBlock durationInMinutes={index * 30} key={index} />
						))}
				</div>
			</div>
		</div>
	);
}

export default TimeLine;
