import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import {
	closeProgramModal,
	selectProgramDetailsInModal,
} from "../TVGuide/store/tvGuideSlice";
import Modal from "../../components/Modal/Modal";
import styles from "./styles.module.css";

interface Props {
	isOpen: boolean;
}

interface ProgramDetails {
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
	const programDetails = useSelector(selectProgramDetailsInModal);

	const onCloseModal = () => {
		dispatch(closeProgramModal());
	};

	const {
		t: title,
		st: startTime,
		d: durationInSeconds,
		seasonnumber: seasonNumber = 0,
		episodenumber: episodeNumber = 0,
		eg: genre,
		esg: subGenre = "",
		sy: synopsis,
	}: ProgramDetails = programDetails;

	const formattedStartTime = dayjs
		.unix(startTime)
		.format("dddd MMM DD, hh:mm A");

	const formattedDuration = `${durationInSeconds / 60} minutes`;

	const modalBodyContent = (
		<div>
			<h2 className={styles["program-modal__heading"]}>{title}</h2>
			<p className={styles["program-modal__paragraph"]}>
				<span>{`${formattedStartTime}, `}</span>
				<span>{formattedDuration}</span>
			</p>
			<p className={styles["program-modal__paragraph"]}>
				{seasonNumber ? <span>{`Season ${seasonNumber} | `}</span> : null}
				{episodeNumber ? <span>{`Episode ${episodeNumber} | `}</span> : null}
				<span>{genre}</span>
				{subGenre ? <span>{` / ${subGenre}`}</span> : null}
			</p>
			<p className={styles["program-modal__synopsis"]}>{synopsis}</p>
		</div>
	);

	return (
		<Modal
			isOpen={isOpen}
			onCloseModal={onCloseModal}
			modalBodyContent={modalBodyContent}
		/>
	);
}

export default ProgramModal;
