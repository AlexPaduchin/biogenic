import React, { useState } from 'react';

import Elements from '../data/Elements';

import './Modal.css';

function Quiz(props) {
  const {
    clickedElement,
  } = props;
  const [quizCheckboxes, setQuizCheckboxes] = useState([]);

  const handleCheckboxClicked = (i) => {
    const newQuizCheckboxes = quizCheckboxes.filter(elem => elem !== i);
    if (newQuizCheckboxes.length === quizCheckboxes.length) {
      newQuizCheckboxes.push(i);
    }
    setQuizCheckboxes(newQuizCheckboxes);
  }
  console.log('Quiz props = ', props);

  const elementInfo = Elements[clickedElement];

  if (!elementInfo || !elementInfo.test) {
    return <div>Извините. Тесты для этого элемента еще не подготовлены.</div>
  }
  console.log('Quiz elementInfo = ', elementInfo);

  return (
    <div>

      <table className="quizBorderNone">
        <thead>
          <tr>
            <th colSpan={3}>
              <div className="quizTitle">Выберите одно или несколько утверждений, которые являются верными:</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {elementInfo.test[0].map((item, index) => (
            <tr>
              <td>
                <div className="quizDispayInline">
                  <button
                    className={quizCheckboxes.find(check => check === index) === undefined ? "quizCheckboxOff" : "quizCheckboxOn"}
                    onClick={() => handleCheckboxClicked(index)} />
                </div>
              </td>
              <td className="quizWidth">
                <div className="quizDispayInline">{index + 1}.</div>
              </td>
              <td><div className="quizDispayInlineText">{item.q()}</div></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Quiz;
