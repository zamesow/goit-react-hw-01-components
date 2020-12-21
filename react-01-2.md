<!--
- содержимое папки public не проходит через webpack, оптимизаторы, что либо, поэтому храним всё в src
- props = properties
-->

<!--
- если есть jsx, то не нужно импортировать реакт в каждый компонент
  - бабел переводит jsx код в js
    - React.createElement('span', { children: 'Привет' }); - старое
    - const elem1 = <span>Привет</span>; - новое
- разница xml от html - в одинарных тегах должен быть вконце слэш /
- компонент - это ф-ция для динамических данных

- если рендерить с jsx-тег именованным с маленькой буквы <painting /> - то jsx
  создаст тег <painting></painting>, а если с большой, то он воспринимает как
  имя локальной переменной из доступной области видимости
  - если хотим передать настройки компонента (пропсы), то значение строки должно
    быть в двойных кавычках, а значение числа как jsx-выражение в фигурных
    скобках <Painting a="5" b={10} />
    - для этого в нашей ф-ции пишем только один параметр - props - function
      Painting(props) {return ()}; тогда он передастся как объект со всеми
      свойствами
    - ReactDOM.render(<Painting a="5" b={10} />,
      document.querySelector('#root'));
    - деструктуризацию при этом можно сделать отдельно через переменную внутри
      ф-ции, но лучше как параметр-->

<!--
- Названия файлов-компонентов можно называть как с маленькой, так и с большой буквы с расширением .js или .jsx (без разницы)
 -->

import ReactDOM from 'react-dom'; import paintings from './paintings.json';

function Paintings(props) { const { url, title } = props; return ( <div>
<img src={props.url} alt={props.title} width="480" /> <h2>{props.title}</h2>

</div> ); }

const paintings = paintings[0];

ReactDOM.render( <Painting a={painting.url} b={painting.title} />,
document.querySelector('#root'));

<!--
- если компонент Painting, то и локальную переменную лучше Painting
- импорт данных делаем в App()
    - собираем всё в ф-ции App и ретёрним на экспорт
- дефолтное значение можно передать сразу в деструктуризации {imageUrl = 'defaultImage', author = 'не известно'}
 -->

import defaultImage from './default.jpg';

function Paintings({imageUrl = 'defaultImage', author = 'не известно'}) { return
( <div> <img src={props.url} alt={props.title} width="480" />

<h2>{props.title}</h2> </div> ); };

export default Painting;
