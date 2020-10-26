import React from "react";
import ServiceBox from "../ServiceBox/ServiceBox";

function ServiceList({ services }: any) {
	return (
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
	);
}

export default ServiceList;
