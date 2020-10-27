import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, selectedDate } from "../../store/tvGuideSlice";
import styles from "./styles.module.css";

function ScheduleDates() {
	const dispatch = useDispatch();
	const date = useSelector(selectedDate);

	const onSelectDate = (e: any) => {
		dispatch(selectDate(e.target.innerHTML));
	};

	return (
		<ul className={styles["schedule-date-list"]}>
			<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
				{date === "20200129" ? <strong>20200129</strong> : "20200129"}
			</li>
			<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
				{date === "20200130" ? <strong>20200130</strong> : "20200130"}
			</li>
			<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
				{date === "20200131" ? <strong>20200131</strong> : "20200131"}
			</li>
			<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
				{date === "20200201" ? <strong>20200201</strong> : "20200201"}
			</li>
			<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
				{date === "20200202" ? <strong>20200202</strong> : "20200202"}
			</li>
			<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
				{date === "20200203" ? <strong>20200203</strong> : "20200203"}
			</li>
			<li onClick={onSelectDate} className={styles["schedule-date-list__item"]}>
				{date === "20200204" ? <strong>20200204</strong> : "20200204"}
			</li>
		</ul>
	);
}

export default ScheduleDates;
