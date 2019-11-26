import React from 'react';

import Elements from '../data/Elements';

import './Modal.css';

function Modal(props) {
	const {
		clickedElement,
		closeModal,
	} = props;
	console.log('Modal props = ', props);

	const Description = Elements[clickedElement].description ||
		(() => <div>Нет информации по этому элементу</div>);

	console.log('Elements[clickedElement] = ', Elements[clickedElement]);
	console.log('Elements[clickedElement].description = ', Elements[clickedElement].description);


	return (
		<div onClick={closeModal}>
			<div className="popup__full_screen_div_opacity" />
			<div className="popup__full_screen_div">
				<div className="popup__window">

					<div className="popup__title">Информация:</div>


					<div className="popup__list">
						<Description />
					</div>
					<div className="modalButton">
						<button>Закрыть</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
