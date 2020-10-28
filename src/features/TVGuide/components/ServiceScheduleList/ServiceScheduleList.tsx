import React from "react";
import ServiceProgramList from "../ServiceProgramList/ServiceProgramList";
import type Schedule from "../../../../types/Schedule";
import styles from "./styles.module.css";

interface Props {
	schedules: Schedule[];
}

function ServiceScheduleList({ schedules }: Props) {
	return (
		<div className={styles["service-schedule-wrapper"]}>
			{schedules.map((schedule: Schedule) => (
				<ServiceProgramList schedule={schedule} key={schedule.sid} />
			))}
		</div>
	);
}

export default ServiceScheduleList;
