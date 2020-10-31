import React from "react";
import Skeleton from "react-loading-skeleton";
// import Skeleton from "react-loading-skeleton";
import styles from "../ServiceBox/styles.module.css";

const SkeletonRow = ({ number, id, title }: any) => {
	return (
		<>
			<div className={styles["service-box"]} style={{ background: "black" }}>
				<picture className={styles["service-picture"]}>
					<img
						className={styles["service-logo"]}
						// 320px - 480px - Mobile
						srcSet={`https://cdn.skyq.sky.com/recruitment/tvguide/logos/${id}/50x50.png`}
						alt={title}
					/>
				</picture>
				<span>{number}</span>
			</div>
			<div style={{ display: "flex", width: "100vw", background: "black" }}>
				<div style={{ width: "300px" }}>
					<p>paragraph</p>
				</div>
			</div>
		</>
	);
};

export default SkeletonRow;

// .service-box {
// 	display: flex;
// 	justify-content: space-between;
// 	padding-left: 1rem;
// 	padding-right: 1rem;
// 	letter-spacing: 0;
// 	list-style: none;
// 	box-sizing: border-box;
// 	color: #ffffff;
// 	line-height: 67px;
// 	height: 67px;
// 	border-bottom: 1px solid rgba(85, 174, 254, 0.2);
// 	background: linear-gradient(90deg, #0644a1, #862e81);
// 	width: 200px;
// }

// .service-picture {
// 	display: flex;
// 	align-items: center;
// }

// .service-logo {
// 	max-height: 35px;
// 	max-width: 100px;
// }
