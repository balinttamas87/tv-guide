import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./styles.module.css";

function SkeletonServiceProgramList() {
	return (
		<div className={styles["skeleton-service-program-list"]}>
			<SkeletonTheme
				color="rgba(187, 187, 187, 0.2)"
				highlightColor="rgba(255,255,255, 0.1)"
			>
				<Skeleton duration={1.2} height={60} />
			</SkeletonTheme>
		</div>
	);
}

export default SkeletonServiceProgramList;
