import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	closeProgramModal,
	selectProgramDetailsInModal,
} from "../TVGuide/store/tvGuideSlice";
import Modal from "../../components/Modal/Modal";
import ProgramModalBodyContent from "./components/ProgramModalBodyContent/ProgramModalBodyContent";

interface Props {
	isOpen: boolean;
}

export interface ProgramDetails {
	eid: string;
	st: number;
	d: number;
	t: string;
	sy: string;
	eg: string;
	esg?: string;
	seasonnumber?: number;
	episodenumber?: number;
	programmeuuid: string;
	seriesuuid: string;
	seasonuuid: string;
	r: string;
	s: boolean;
	ad: boolean;
	hd: boolean;
	new: boolean;
}

function ProgramModal({ isOpen }: Props) {
	const dispatch = useDispatch();
	const programDetails: ProgramDetails = useSelector(
		selectProgramDetailsInModal
	);

	const onCloseModal = () => {
		dispatch(closeProgramModal());
	};

	return (
		<Modal
			isOpen={isOpen}
			onCloseModal={onCloseModal}
			modalBodyContent={
				<ProgramModalBodyContent programDetails={programDetails} />
			}
		/>
	);
}

export default ProgramModal;
