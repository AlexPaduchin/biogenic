import React, { useState } from 'react';

import './Modal.css';

function Quiz(props) {
  const {
    clickedElement,
    closeModal,
    elements
  } = props;
  const [quizCheckboxes, setQuizCheckboxes] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [resultChecking, setResultChecking] = useState(undefined);
  const [summary, setSummary] = useState(undefined);

  const handleCheckboxClicked = (i) => {
    const newQuizCheckboxes = quizCheckboxes.filter(elem => elem !== i);
    if (newQuizCheckboxes.length === quizCheckboxes.length) {
      newQuizCheckboxes.push(i);
    }
    setQuizCheckboxes(newQuizCheckboxes);
  }
  console.log('Quiz props = ', props);
  console.log('Quiz resultChecking = ', resultChecking);

  const elementInfo = elements[clickedElement];

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

  const newSummary = summary === undefined ? resultChecking : (summary && resultChecking);
  if (newSummary === false) {
    localStorage.setItem(clickedElement, JSON.stringify(newSummary));
  }

  return (
    <div>
      {titleMessage}
      {testArr[quizIndex].map((item, index) => {
        const isItemOff = quizCheckboxes.find(check => check === index) === undefined;
        return (
          <div
            className={`quizItem ${(isItemOff ? 'colorOff' : 'colorOn')}`}
            key={String(index)}
            onClick={() => handleCheckboxClicked(index)} >
            <button className={isItemOff ? "quizCheckboxOff" : "quizCheckboxOn"} />
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
              if (quizIndex + 1 < testArr.length) {
                setQuizIndex(quizIndex + 1);
                setQuizCheckboxes([]);
                setResultChecking(undefined);
                setSummary(newSummary);
              } else {
                localStorage.setItem(clickedElement, JSON.stringify(newSummary));
                closeModal();
              }
            }}>
            {(quizIndex + 1 < testArr.length) ? 'Перейти к следующему тесту' : 'Завершить тест и сохранить результат'}
          </button>
        )}

      </div>
      <div className="quizLine"></div>
    </div >
  )
}

export default Quiz;

