import React, { useState } from 'react';

import Elements from '../data/Elements';

import './Modal.css';

function Quiz(props) {
  const {
    clickedElement,
  } = props;
  const [quizInProgress, setQuizInProgress] = useState(-1);

  console.log('Quiz props = ', props);

  const elementInfo = Elements[clickedElement];

  if (!elementInfo || !elementInfo.test) {
    return <div>Извините. Тесты для этого элемента еще не подготовлены.</div>
  }
  console.log('Quiz elementInfo = ', elementInfo);

  return (
    <div className="quiz">
      {elementInfo.test[0].map((item, index) => <div key={item.q}>{item.q()}</div>)}
    </div>
  )
}

export default Quiz;
