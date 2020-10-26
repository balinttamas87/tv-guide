import React from "react";
import styles from "./styles.module.css";

function ServiceProgramList({ children }: any) {
	return <div className={styles["service-program-list"]}>{children}</div>;
}

export default ServiceProgramList;
