import type ProgramDetails from "./ProgramDetails";

export default interface Schedule {
	date: string;
	sid: string;
	events: ProgramDetails[];
}
