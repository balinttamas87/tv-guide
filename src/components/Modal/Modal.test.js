import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";


describe("Test Modal component", () => {
	it("should render Modal with the body content provided as a component", () => {
		const ModalBodyContent = () => (<div>content of modal body</div>);
		const { queryByText } = render(
			<Modal
				isOpen={true}
				onCloseModal={() => { }}
				modalBodyContent={<ModalBodyContent />}
			/>
		);

		expect(queryByText(/content of modal body/i)).not.toBeNull();

	});

	it("should not render anything", () => {
		const ModalBodyContent = () => (<div>content of modal body</div>);

		const { queryByText } = render(
			<Modal
				isOpen={false}
				onCloseModal={() => { }}
				modalBodyContent={<ModalBodyContent />}
			/>
		);

		expect(queryByText(/content of modal body/i)).toBeNull();
	});

	it("should call onCloseModal when clicking the close button", () => {
		const onCloseModal = jest.fn();
		const ModalBodyContent = () => (<div>content of modal body</div>);

		const { queryByText } = render(
			<Modal
				isOpen={true}
				onCloseModal={onCloseModal}
				modalBodyContent={<ModalBodyContent />}
			/>
		);

		const closeButton = queryByText(/Close/i).closest('button');
		fireEvent.click(closeButton)

		expect(onCloseModal).toHaveBeenCalled();
	});

});
