/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// создаём элемент, указываем тип элемента ('a' - ссылка), объект настроек (атрибуты, проксы, свойства), дети (элементы между <d></div>)
// const link = React.createElement('a', { href: 'reactjs.org' }, 'Ссылочка');

// const jsxlink = <a href="reactjs.org">Ссылочка</a >;

// console.log(link);
// console.log(jsxlink);

// рендерим наш элемент и указываем куда
// ReactDOM.render(link, document.getElementById("root"));

// const template = (
//   <div>
//     <img
//       src={painting.url}
//       alt="Feathers. Art abstract" />
//     <h2>{painting.title}</h2>
//     <p>
//       Автор: <a href={painting.author.url}>{painting.author.tag}</a>
//     </p>
//     <p>Цена: {painting.price} кредитов</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// ReactDOM.render(template, document.getElementById("root"));