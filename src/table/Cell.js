import React from 'react';
import './Table.css';

const Cell = ({
	elem,
	setClickedElement,
	clickedElement,
	elements
}) => {
	const elemInfo = elements[elem] || {};
	const color = elemInfo.color ? ' bColor' + elemInfo.color : '';
	let isActiveClass;
	if (elemInfo.description === undefined) {
		isActiveClass = "cellShadowNormal"
	} else {
		if (clickedElement === '') {
			switch (localStorage.getItem(elem)) {
				case undefined: isActiveClass = 'cellShadowActiveBlack'; break;
				case 'true': isActiveClass = 'cellShadowActiveGreen'; break;
				case 'false': isActiveClass = 'cellShadowActiveRed'; break;
				default: isActiveClass = 'cellShadowActiveBlack'; break;
			}
			// console.log('elem = ', elem)
			// console.log('isActiveClass = ', isActiveClass)
		} else {
			isActiveClass = "cellShadowNormal"
		}
	}

	// console.log('Cell elem = ', elem)
	// console.log('Cell elemInfo = ', elemInfo)


	return (
		<div
			className="relativePosition"
			onClick={() => {
				setClickedElement(elem);
			}}
		>
			<div className={isActiveClass}>
				<div className={color}
				>
					{elemInfo.color === 'Green' ? (
						<div className="cellWidth">
							<div className="cellKeyAndNum">
								<div className="cellKey">{elem}</div>
								<div>{elemInfo.num}</div>
							</div>
							<div className="cellFlexEnd">
								<div>{elemInfo.name}</div>
							</div>
							<div className="cellFlexStart">
								<div>{elemInfo.weight}</div>
							</div>
						</div>
					) : (
							<div className="cellWidth">
								<div className="cellKeyAndNum">
									<div>{elemInfo.num}</div>
									<div className="cellKey">{elem}</div>
								</div>
								<div className="cellFlexStart">
									<div>{elemInfo.name}</div>
								</div>
								<div className="cellFlexEnd">
									<div>{elemInfo.weight}</div>
								</div>
							</div>
						)}
				</div>
			</div >
		</div >
	);
};

export default Cell;
