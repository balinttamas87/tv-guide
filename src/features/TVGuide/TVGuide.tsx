import React from "react";
import ServiceBox from "./components/ServiceBox/ServiceBox";

function TVGuide({ services, schedule }: any) {
	const getWidth = (duration: number) => {
		const widthOfOneHourBlock = 280; // 280px
		return `${(duration / 3600) * widthOfOneHourBlock}px`;
	};

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div>
				{services.map((service: any) => (
					<ServiceBox
						key={service.sid}
						number={service.c}
						format={service.sf}
						genre={service.sg}
						id={service.sid}
						title={service.t}
					/>
				))}
			</div>
			{/* { border: "1px solid black" } */}
			<div style={{ display: "flex" }}>
				{schedule.events.map((event: any) => (
					<div
						key={event.eid}
						style={{
							display: "block",
							border: "1px solid black",
							lineHeight: "67px",
							width: getWidth(event.d),
							height: "67px",
							overflow: "hidden",
						}}
					>
						{event.t}
					</div>
				))}
			</div>
		</div>
	);
}

export default TVGuide;
