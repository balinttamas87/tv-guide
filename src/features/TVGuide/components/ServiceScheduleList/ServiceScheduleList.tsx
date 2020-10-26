import React from "react";
import styles from "./styles.module.css";

function ServiceScheduleList({ children }: any) {
	return <div className={styles["service-schedule-wrapper"]}>{children}</div>;
}

export default ServiceScheduleList;
