import React, { useState } from 'react';

import Elements from '../data/Elements';

import './Modal.css';
import { nullLiteral } from '@babel/types';

function Quiz(props) {
  const {
    clickedElement,
  } = props;
  const [quizCheckboxes, setQuizCheckboxes] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);

  const [resultChecking, setResultChecking] = useState(undefined);

  const handleCheckboxClicked = (i) => {
    const newQuizCheckboxes = quizCheckboxes.filter(elem => elem !== i);
    if (newQuizCheckboxes.length === quizCheckboxes.length) {
      newQuizCheckboxes.push(i);
    }
    setQuizCheckboxes(newQuizCheckboxes);
  }
  console.log('Quiz props = ', props);
  console.log('Quiz resultChecking = ', resultChecking);

  const elementInfo = Elements[clickedElement];

  if (!elementInfo || !elementInfo.test) {
    return <div>Извините. Тесты для этого элемента еще не подготовлены.</div>
  }
  console.log('Quiz elementInfo = ', elementInfo);
  const testArr = elementInfo.test;
  let titleMessage;
  switch (resultChecking) {
    case undefined:
      titleMessage = <div className="quizTitle">Выберите одно или несколько утверждений, которые являются верными:</div>
      break;
    case true:
      titleMessage = <div className="quizTitleRight">Верно!</div>
      break;
    case false:
      titleMessage = <div className="quizTitleFalse">Результат не верный.</div>
      break;
    default: titleMessage = null;
      break;
  }
  return (
    <div>
      {titleMessage}
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
      <div className="quizTitle">
        {`Тест № ${quizIndex + 1} ( Всего тестов: ${testArr.length} )`}
        {quizCheckboxes.length > 0 && resultChecking === undefined && (
          < button
            className="quizButton"
            onClick={() => {
              const newResultChecking = testArr[quizIndex].every((elem, index) => {
                const quizAnswer = quizCheckboxes.find(check => check === index) !== undefined;
                console.log('quizCheckboxes = ', quizCheckboxes);
                console.log('elem.answer = ', elem.answer);
                console.log('quizAnswer= ', quizAnswer);
                return ((elem.answer === true) === quizAnswer);
              });
              setResultChecking(newResultChecking);
            }}>
            Проверить ответы
          </button>
        )}
        {quizCheckboxes.length > 0 && resultChecking !== undefined && (
          <button
            className="quizButton"
            onClick={() => {
            }}>
            {(quizIndex + 1 < testArr.length) ? 'Перейти к следующему тесту' : 'Завершить тест'}
          </button>
        )}

      </div>
      <div className="quizLine"></div>
    </div >
  )
}

export default Quiz;

