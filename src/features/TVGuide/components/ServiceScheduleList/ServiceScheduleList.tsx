import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ServiceProgramList from "../ServiceProgramList/ServiceProgramList";
import type Schedule from "../../../../types/Schedule";
import type Service from "../../../../types/Service";
import ServiceBox from "../../../TVGuide/components/ServiceBox/ServiceBox";
import { selectSelectedDate, getSchedules } from "../../store/tvGuideSlice";
import styles from "./styles.module.css";

interface Props {
	schedules: Schedule[];
	services: Service[];
}

function ServiceScheduleList({ schedules, services }: Props) {
	const dispatch = useDispatch();
	const date = useSelector(selectSelectedDate);
	const numberOfItemsToRender = 20;
	const numberOfServices = 546;
	const itemSizeInPx = 67;
	const rowWidthInPx = 6920;

	const isItemLoaded = (index: number) =>
		index < schedules.length && schedules[index] !== null;

	const loadMoreItems = (startIndex: number, stopIndex: number) => {
		const range = { startIndex, stopIndex };
		return new Promise((resolve) => {
			resolve(dispatch(getSchedules({ services, date, range })));
		});
	};

	return (
		<InfiniteLoader
			isItemLoaded={isItemLoaded}
			itemCount={numberOfServices}
			loadMoreItems={loadMoreItems}
		>
			{({ onItemsRendered, ref }) => (
				<div className={styles["service-schedule-wrapper"]}>
					<FixedSizeList
						height={itemSizeInPx * numberOfItemsToRender}
						itemCount={numberOfServices}
						itemSize={itemSizeInPx}
						width={rowWidthInPx}
						overscanCount={10}
						onItemsRendered={onItemsRendered}
						ref={ref}
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
			)}
		</InfiniteLoader>
	);
}

export default ServiceScheduleList;
