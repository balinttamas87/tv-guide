import React from "react";
import styles from "./styles.module.css";

function ScheduleDate({ onSelectDate, selectedDate, dateString }: any) {
	return (
		<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
			{selectedDate === dateString ? <strong>{dateString}</strong> : dateString}
		</li>
	);
}

export default ScheduleDate;
