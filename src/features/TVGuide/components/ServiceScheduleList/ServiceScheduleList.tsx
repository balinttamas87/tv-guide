import React from "react";
import ServiceProgramList from "../ServiceProgramList/ServiceProgramList";
import type Schedule from "../../../../types/Schedule";
import styles from "./styles.module.css";

import { FixedSizeList } from "react-window";

interface Props {
	schedules: Schedule[];
	serviceBoxListRef: any;
	serviceScheduleListRef: any;
}

function ServiceScheduleList({
	schedules,
	serviceBoxListRef,
	serviceScheduleListRef,
}: Props) {
	const Row = ({ index, style }: any) => (
		<span style={style} key={schedules[index]?.["sid"]}>
			<ServiceProgramList
				schedule={schedules[index]}
				key={schedules[index]?.["sid"]}
			/>
		</span>
	);
	return (
		<div className={styles["service-schedule-wrapper"]}>
			<FixedSizeList
				height={1340}
				itemCount={546}
				itemSize={67}
				width={6720}
				ref={serviceScheduleListRef}
				onScroll={(scrollParams) => {
					serviceBoxListRef?.current?.scrollTo(scrollParams.scrollOffset);
				}}
			>
				{Row}
			</FixedSizeList>
		</div>
	);
}

export default ServiceScheduleList;
