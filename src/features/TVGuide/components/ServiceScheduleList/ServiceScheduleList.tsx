import React from "react";
import { FixedSizeList } from "react-window";
import ServiceProgramList from "../ServiceProgramList/ServiceProgramList";
import type Schedule from "../../../../types/Schedule";
import type Service from "../../../../types/Service";
import ServiceBox from "../../../TVGuide/components/ServiceBox/ServiceBox";
import styles from "./styles.module.css";

interface Props {
	schedules: Schedule[];
	services: Service[];
}

function ServiceScheduleList({ schedules, services }: Props) {
	const numberOfItemsToRender = 20;
	const numberOfServices = 546;
	const itemSizeInPx = 67;
	const rowWidthInPx = 6920;

	return (
		<div className={styles["service-schedule-wrapper"]}>
			<FixedSizeList
				height={itemSizeInPx * numberOfItemsToRender}
				itemCount={numberOfServices}
				itemSize={itemSizeInPx}
				width={rowWidthInPx}
			>
				{({ index, style }) => (
					<div style={style} className={styles["service-schedule-row"]}>
						<ServiceBox
							number={services[index]?.c}
							id={services[index]?.sid}
							title={services[index]?.t}
						/>
						<ServiceProgramList
							schedule={schedules[index]}
							key={schedules[index]?.["sid"]}
						/>
					</div>
				)}
			</FixedSizeList>
		</div>
	);
}

export default ServiceScheduleList;
