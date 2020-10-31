import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ServiceProgramList from "../ServiceProgramList/ServiceProgramList";
import type Schedule from "../../../../types/Schedule";
import type Service from "../../../../types/Service";
import ServiceBox from "../../../TVGuide/components/ServiceBox/ServiceBox";
import {
	selectSelectedDate,
	selectIsLoading,
	getSchedules,
} from "../../store/tvGuideSlice";
import styles from "./styles.module.css";
import SkeletonServiceProgramList from "../ServiceProgramList/Skeleton/SkeletonServiceProgramList";

interface Props {
	schedules: Schedule[];
	services: Service[];
}

function ServiceScheduleList({ schedules, services }: Props) {
	const dispatch = useDispatch();
	const date = useSelector(selectSelectedDate);
	const isLoading = useSelector(selectIsLoading);
	const numberOfItemsToRender = 20;
	const numberOfServices = 546;
	const itemSizeInPx = 67;
	const rowWidthInPx = 6920;

	const hasMoreToLoad = schedules.length < numberOfServices;

	const itemCount = hasMoreToLoad ? schedules.length + 15 : schedules.length;

	const isItemLoaded = (index: number) =>
		index < schedules.length && schedules[index] !== null;

	const loadMoreItems = (startIndex: number, stopIndex: number) => {
		// Do not call the api again while the previous results are still loading
		if (isLoading) return Promise.resolve();

		const range = { startIndex, stopIndex };
		return Promise.resolve(dispatch(getSchedules({ services, date, range })));
	};

	return (
		<div className={styles["service-schedule"]}>
			<InfiniteLoader
				isItemLoaded={isItemLoaded}
				itemCount={itemCount}
				loadMoreItems={loadMoreItems}
				minimumBatchSize={15}
				threshold={15}
			>
				{({ onItemsRendered, ref }) => (
					<div className={styles["service-schedule__list"]}>
						<FixedSizeList
							height={itemSizeInPx * numberOfItemsToRender}
							itemCount={itemCount}
							itemSize={itemSizeInPx}
							width={rowWidthInPx}
							overscanCount={10}
							onItemsRendered={onItemsRendered}
							ref={ref}
						>
							{({ index, style }) => (
								<div style={style} className={styles["service-schedule__row"]}>
									<>
										<ServiceBox
											number={services[index]?.c}
											id={services[index]?.sid}
											title={services[index]?.t}
										/>
										{!isItemLoaded(index) ? (
											<SkeletonServiceProgramList />
										) : (
											<ServiceProgramList
												schedule={schedules[index]}
												key={schedules[index]?.["sid"]}
											/>
										)}
									</>
								</div>
							)}
						</FixedSizeList>
					</div>
				)}
			</InfiniteLoader>
		</div>
	);
}

export default ServiceScheduleList;
