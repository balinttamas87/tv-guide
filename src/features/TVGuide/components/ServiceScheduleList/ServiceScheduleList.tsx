import React from "react";
import ServiceProgramList from "../ServiceProgramList/ServiceProgramList";
import styles from "./styles.module.css";

function ServiceScheduleList({ schedules }: any) {
	return (
		<div className={styles["service-schedule-wrapper"]}>
			{schedules.map((schedule: any) => (
				<ServiceProgramList schedule={schedule} key={schedule.sid} />
			))}
		</div>
	);
}

export default ServiceScheduleList;
