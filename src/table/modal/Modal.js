import React, { useState, Fragment } from 'react';

import Elements from '../data/Elements';

import './Modal.css';

function Modal(props) {
	const {
		clickedElement,
		closeModal,
	} = props;
	const [quizProgress, setQuizProgress] = useState(-1);

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

					{quizProgress === -1 ?
						(
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
						) : (
							<div>{`Тест № ${quizProgress + 1}`}</div>
						)}

					<div className="modalButtonContainer">
						{quizProgress === -1 ?
							(
								<button className="modalButton" onClick={(e) => {
									e.stopPropagation();
									setQuizProgress(0);
								}}>
									Пройти тест
							</button>
							) : (
								<button className="modalButton" onClick={(e) => {
									e.stopPropagation();
									setQuizProgress(quizProgress + 1);
								}}>
									К следующему тесту
									</button>
							)}
						<button className="modalButton">Закрыть</button>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
