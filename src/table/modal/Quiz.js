import React, { useState } from 'react';

import Elements from '../data/Elements';

import './Modal.css';

function Quiz(props) {
  const {
    clickedElement,
  } = props;
  const [quizCheckboxes, setQuizCheckboxes] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);

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
  const testArr = elementInfo.test
  return (
    <div>
      <div className="quizTitle">Выберите одно или несколько утверждений, которые являются верными:</div>

      {testArr[quizIndex].map((item, index) => {
        const isItemOff = quizCheckboxes.find(check => check === index) === undefined;
        return (
          <div className={`quizItem ${(isItemOff ? 'colorOff' : 'colorOn')}`} key={String(index)}>
            <button
              className={isItemOff ? "quizCheckboxOff" : "quizCheckboxOn"}
              onClick={() => handleCheckboxClicked(index)} />
            <div className="quizNumber">{index + 1}.</div>
            <div className="quizQuestion">{item.q()}</div>
          </div>
        );
      })}
      <div className="quizFooter">
        {`Тест № ${quizIndex + 1} ( Всего тестов: ${testArr.length} )`}
        <button
          className="quizButton"
          onClick={() => {
            const newQuizIndex = (quizIndex + 1 < testArr.length) ? quizIndex + 1 : 0;
            setQuizIndex(newQuizIndex);
          }}>
          Проверить ответы
          </button>
      </div>
    </div >
  )
}

export default Quiz;

