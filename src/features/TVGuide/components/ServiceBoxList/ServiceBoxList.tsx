import React from "react";
import type Service from "../../../../types/Service";
import ServiceBox from "../ServiceBox/ServiceBox";

interface Props {
	services: Service[];
}

function ServiceList({ services }: Props) {
	return (
		<div>
			{services.map((service: Service) => (
				<ServiceBox
					key={service.sid}
					number={service.c}
					id={service.sid}
					title={service.t}
				/>
			))}
		</div>
	);
}

export default ServiceList;
