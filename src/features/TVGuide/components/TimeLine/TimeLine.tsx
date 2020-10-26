import React from "react";
import styles from "./styles.module.css";

function TimeLine() {
	const formatNumberToTimeString = (durationInMinutes: number) => {
		const hour = String(Math.floor(durationInMinutes / 60)).padStart(2, "0");
		const minutes = String(Math.floor(durationInMinutes % 60)).padStart(2, "0");
		return `${hour}:${minutes}`;
	};

	return (
		<div className={styles["time-line-wrapper"]}>
			<div className={styles["time-line-scrollable"]}>
				<div className={styles["time-line"]}>
					{Array(48)
						.fill(null)
						.map((element, index) => (
							<div
								style={{
									display: "inline-block",
									width: "140px",
									paddingLeft: "1rem",
									fontWeight: "bold",
									fontSize: "1.15rem",
									borderRight: "1px solid rgba(85, 174, 254, 0.2)",
									lineHeight: "25px",
								}}
							>
								{formatNumberToTimeString(index * 30)}
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default TimeLine;
