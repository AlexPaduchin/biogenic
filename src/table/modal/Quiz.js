import React, { useState, Fragment } from 'react';

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

      <div className="quizTitle">Выберите одно или несколько утверждений, которые являются верными:</div>

      {elementInfo.test[0].map((item, index) => (
        <div className="quizItem">
          <button
            className={quizCheckboxes.find(check => check === index) === undefined ? "quizCheckboxOff" : "quizCheckboxOn"}
            onClick={() => handleCheckboxClicked(index)} />
          <div className="quizNumber">{index + 1}.</div>
          <div className="quizQuestion">{item.q()}</div>
        </div>
      ))}
    </div >
  )
}

export default Quiz;

