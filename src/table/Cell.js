import React, { useMemo } from 'react';
import './Table.css';

import Elements from './data/Elements';

const Cell = ({
	elem,
	setClickedElement
}) => {

	return useMemo(() => {
		const elemInfo = Elements[elem] || {};
		let color = elemInfo.color ? ' bColor' + elemInfo.color : '';
		const opacity = elemInfo.description === undefined
			? ' opacity'
			: '';
		color = color + opacity;

		return (
			<div
				className={color}
				onClick={() => {
					setClickedElement(elem);
				}}
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
		);
	}, [elem, setClickedElement]);
};

export default Cell;
