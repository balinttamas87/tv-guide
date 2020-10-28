import React from "react";
import dayjs from "dayjs";
import type { ProgramDetails } from "../../ProgramModal";
import styles from "./styles.module.css";

interface Props {
	programDetails: ProgramDetails;
}

function ProgramModalBodyContent({ programDetails }: Props) {
	const {
		t: title,
		st: startTime,
		d: durationInSeconds,
		seasonnumber: seasonNumber = 0,
		episodenumber: episodeNumber = 0,
		eg: genre,
		esg: subGenre = "",
		sy: synopsis,
	} = programDetails;

	const formattedStartTime = dayjs
		.unix(startTime)
		.format("dddd MMM DD, hh:mm A");

	const formattedDuration = `${durationInSeconds / 60} minutes`;

	return (
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
}

export default ProgramModalBodyContent;
