import React from "react";
import { FixedSizeList } from "react-window";
import type Service from "../../../../types/Service";
import ServiceBox from "../ServiceBox/ServiceBox";

interface Props {
	services: Service[];
	serviceBoxListRef: any;
	serviceScheduleListRef: any;
}

function ServiceList({
	services,
	serviceBoxListRef,
	serviceScheduleListRef,
}: Props) {
	const Row = ({ index, style }: any) => (
		<span style={style} key={services[index]?.["sid"]}>
			<ServiceBox
				key={services[index]?.["sid"]}
				number={services[index]?.["c"]}
				id={services[index]?.["sid"]}
				title={services[index]?.["t"]}
			/>
		</span>
	);

	return (
		<div>
			<FixedSizeList
				height={1340}
				itemCount={546}
				itemSize={67}
				width={200}
				ref={serviceBoxListRef}
				onScroll={(scrollParams) => {
					serviceScheduleListRef?.current?.scrollTo(scrollParams.scrollOffset);
				}}
			>
				{Row}
			</FixedSizeList>
		</div>
	);
}

export default ServiceList;
