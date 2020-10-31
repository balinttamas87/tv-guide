import React from "react";
import type ProgramDetails from "../../../../types/ProgramDetails";
import { useDispatch } from "react-redux";
import { openProgramModal } from "../../store/tvGuideSlice";
import styles from "./styles.module.css";

interface Props {
	event: ProgramDetails;
}

const getWidth = (duration: number) => {
	const widthOfOneHourBlock = 280; // px
	return `${(duration / 3600) * widthOfOneHourBlock}px`;
};

function ServiceProgram({ event }: Props) {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(openProgramModal(event));
	};

	return (
		<div
			className={styles["service-program"]}
			style={{ width: getWidth(event.d) }}
		>
			<p onClick={onClick}>{event.t}</p>
		</div>
	);
}

export default ServiceProgram;
