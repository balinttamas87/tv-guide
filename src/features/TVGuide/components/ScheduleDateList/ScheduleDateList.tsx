import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectDate,
	navigateSchedule,
	selectedDateIndex,
	selectScheduleDates,
} from "../../store/tvGuideSlice";
import ScheduleDate from "../ScheduleDate/ScheduleDate";
import styles from "./styles.module.css";

function ScheduleDates() {
	const dispatch = useDispatch();
	const scheduleDates = useSelector(selectScheduleDates);
	const selectedIndex = useSelector(selectedDateIndex);
	const date = scheduleDates[selectedIndex];

	const onSelectDate = (e: any) => {
		dispatch(selectDate(e.target.innerHTML));
	};

	const onNavigateSchedule = (direction: number) => {
		dispatch(navigateSchedule(direction));
	};

	return (
		<div className={styles["schedule-date-list-wrapper"]}>
			<button
				onClick={() => onNavigateSchedule(-1)}
				className={styles["schedule-date-list__navigation-button"]}
			>
				{"<"}
			</button>

			<ul className={styles["schedule-date-list"]}>
				{scheduleDates.map((dateString: string, index: number) => {
					return (
						<ScheduleDate
							key={dateString}
							onSelectDate={onSelectDate}
							selectedDate={date}
							dateString={dateString}
							index={index}
							selectedIndex={selectedIndex}
						/>
					);
				})}
			</ul>

			<button
				onClick={() => onNavigateSchedule(1)}
				className={styles["schedule-date-list__navigation-button"]}
			>
				{">"}
			</button>
		</div>
	);
}

export default ScheduleDates;
