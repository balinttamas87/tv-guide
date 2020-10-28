import React from "react";
import styles from "./styles.module.css";
import dayjs from "dayjs";

interface Props {
	key: string;
	onSelectDate: (date: string) => void;
	date: string;
	index: number;
	selectedIndex: number;
}

function ScheduleDate({ onSelectDate, date, index, selectedIndex }: Props) {
	const isSelected = selectedIndex === index;

	const className = `${styles["schedule-date-list__item"]}
	${isSelected ? ` ${styles["schedule-date-list__item--selected"]}` : ""}`;

	const formattedDate = dayjs(`${date}`, "YYYYMMDD").format("ddd, MMM DD");

	return (
		<li onClick={() => onSelectDate(date)} className={className}>
			{formattedDate}
		</li>
	);
}

export default ScheduleDate;
