import React from "react";
import type Schedule from "../../../../types/Schedule";
import type ProgramDetails from "../../../../types/ProgramDetails";
import ServiceProgram from "../ServiceProgram/ServiceProgram";
import styles from "./styles.module.css";

interface Props {
	schedule: Schedule;
}

function ServiceProgramList({ schedule }: Props) {
	return (
		<div className={styles["service-program-list"]}>
			{schedule.events.map((event: ProgramDetails) => (
				<ServiceProgram event={event} key={event.eid} />
			))}
		</div>
	);
}

export default ServiceProgramList;
