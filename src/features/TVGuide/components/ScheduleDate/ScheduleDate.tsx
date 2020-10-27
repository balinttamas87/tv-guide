import React from "react";
import styles from "./styles.module.css";

function ScheduleDate({ onSelectDate, dateString, index, selectedIndex }: any) {
	const isSelected = selectedIndex === index;

	return (
		<li
			onClick={onSelectDate}
			className={`${styles["schedule-date-list__item"]}
			 ${isSelected ? ` ${styles["schedule-date-list__item--selected"]}` : ""}`}
		>
			{dateString}
		</li>
	);
}

export default ScheduleDate;
