import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonServiceProgramList() {
	return (
		<div
			style={{
				width: "100vw",
				display: "flex",
				flexWrap: "nowrap",
				flexDirection: "column",
				position: "absolute",
				top: "-67px",
				left: "200px",
			}}
		>
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
