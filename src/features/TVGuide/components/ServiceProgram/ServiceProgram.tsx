import React from "react";
import { useDispatch } from "react-redux";
import { openProgramModal } from "../../store/tvGuideSlice";
import styles from "./styles.module.css";

const getWidth = (duration: number) => {
	const widthOfOneHourBlock = 280; // px
	return `${(duration / 3600) * widthOfOneHourBlock}px`;
};

function ServiceProgram({ event }: any) {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(openProgramModal(event));
	};

	return (
		<div
			key={event.eid}
			className={styles["service-program"]}
			style={{ width: getWidth(event.d) }}
		>
			<p onClick={onClick}>{event.t}</p>
		</div>
	);
}

export default ServiceProgram;
