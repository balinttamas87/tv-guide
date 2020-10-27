import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, selectedDate } from "../../store/tvGuideSlice";
import ScheduleDate from "../ScheduleDate/ScheduleDate";
import toAPIAcceptedDateFormat from "../../../../helpers/dateFormatters/toAPIAcceptedDateFormat";
import styles from "./styles.module.css";

function ScheduleDates() {
	const dispatch = useDispatch();
	const date = useSelector(selectedDate);

	const onSelectDate = (e: any) => {
		dispatch(selectDate(e.target.innerHTML));
	};

	// get 7 consecutive dates starting from today's date for service schedules
	const getScheduleDates = (): string[] => {
		// today's date is 29/01/2020 for the sake of this project
		const dateObject = new Date(2020, 0, 29);
		const fullYear = dateObject.getFullYear();
		const month = dateObject.getMonth();
		const date = dateObject.getDate();

		return Array(7)
			.fill(null)
			.map((__, index) => {
				const dateString = toAPIAcceptedDateFormat(
					new Date(fullYear, month, date + index)
				);
				return dateString;
			});
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
