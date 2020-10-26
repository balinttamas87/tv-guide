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
			<div
				style={{
					display: "flex",
					background: "linear-gradient(90deg,#0644a1,#862e81)",
				}}
			>
				{schedule.events.map((event: any) => (
					<div
						key={event.eid}
						style={{
							display: "block",
							// background: "rgba(2, 89, 199, 1)",
							// background: "rgba(9, 119, 225, 1)",
							// background: "#0644a1",
							// background: "linear-gradient(90deg,#0644a1,#862e81)",
							color: "#ffffff",
							border: "1px solid rgba(85, 174, 254, 0.2)",
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
