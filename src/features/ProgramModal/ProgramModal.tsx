import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type ProgramDetails from "../../types/ProgramDetails";
import {
	closeProgramModal,
	selectProgramDetailsInModal,
} from "../TVGuide/store/tvGuideSlice";
import Modal from "../../components/Modal/Modal";
import ProgramModalBodyContent from "./components/ProgramModalBodyContent/ProgramModalBodyContent";

interface Props {
	isOpen: boolean;
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
