import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table/Table';
import * as serviceWorker from './serviceWorker';

import Elements from './table/data/Elements';

const reshuffle = (arr) => {
  const arr1 = arr.map(item => [Math.random(), item]);
  arr1.sort((a, b) => a[0] - b[0]);
  return arr1.map(([_, item]) => item);
}

const newElements = {};
Object.entries(Elements).forEach((elem) => {
  const [key, value] = elem;
  if (value.test === undefined) {
    newElements[key] = value;
  } else {
    const { test } = value;
    const newTest1 = reshuffle(test);
    const newTest2 = newTest1.map(arr => reshuffle(arr));
    console.log('newTest2 =  ', newTest2);
    newElements[key] = { ...value, test: newTest2 };
  }
});

ReactDOM.render(<Table elements={newElements} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
