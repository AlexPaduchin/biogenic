import React from 'react';

import Elements from '../data/Elements';

import './Modal.css';

function Modal(props) {
	const {
		clickedElement,
		closeModal,
	} = props;
	console.log('Modal props = ', props);

	const elementInfo = Elements[clickedElement];

	const Description = elementInfo.description ||
		(() => <div>Нет информации по этому элементу</div>);

	console.log('Modal elementInfo = ', elementInfo);

	return (
		<div onClick={closeModal}>
			<div className="popup__full_screen_div_opacity" />
			<div className="popup__full_screen_div">
				<div className="popup__window">
					<h1>{elementInfo.name}</h1>


					<div className="popup__list">
						{elementInfo &&
							<div style={{ paddingBottom: 15 }}>
								<table>
									<thead>
										<tr>
											<th className="modalTableHeader">
												Символ элемента
									</th>
											<th className="modalTableHeader">
												Массовая доля элемента в земной коре, %
									</th>
											<th className="modalTableHeader">
												Массовая доля элемента в организме человека, %
									</th>
											<th className="modalTableHeader">
												Признаки по классификации
									</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="modalTableHeader">
												{clickedElement}
											</td>
											<td className="modalTableHeader">
												{elementInfo.earthMassFraction}
											</td>
											<td className="modalTableHeader">
												{elementInfo.humanBodyMassFraction}
											</td>
											<td className="modalTableHeader">
												{elementInfo.classification}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						}
						<Description />
					</div>
					<div className="modalButtonContainer">
						<button className="modalButton">Закрыть</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
