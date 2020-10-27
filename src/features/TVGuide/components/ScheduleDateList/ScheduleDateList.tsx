import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, selectedDate } from "../../store/tvGuideSlice";
import ScheduleDate from "../ScheduleDate/ScheduleDate";
import styles from "./styles.module.css";

function ScheduleDates() {
	const dispatch = useDispatch();
	const date = useSelector(selectedDate);

	const onSelectDate = (e: any) => {
		dispatch(selectDate(e.target.innerHTML));
	};

	const getScheduleDates = () => {
		return [
			"20200129",
			"20200130",
			"20200131",
			"20200201",
			"20200202",
			"20200203",
			"20200204",
		];
	};

	return (
		<ul className={styles["schedule-date-list"]}>
			{getScheduleDates().map((dateString) => {
				return (
					<ScheduleDate
						key={dateString}
						onSelectDate={onSelectDate}
						selectedDate={date}
						dateString={dateString}
					/>
				);
			})}
		</ul>
	);
}

export default ScheduleDates;
