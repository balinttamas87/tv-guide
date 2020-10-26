import React from "react";
import ServiceProgram from "../ServiceProgram/ServiceProgram";
import styles from "./styles.module.css";

function ServiceProgramList({ schedule }: any) {
	return (
		<div className={styles["service-program-list"]}>
			{schedule.events.map((event: any) => (
				<ServiceProgram event={event} key={event.eid} />
			))}
		</div>
	);
}

export default ServiceProgramList;
