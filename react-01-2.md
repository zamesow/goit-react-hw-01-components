<!--
- содержимое папки public не проходит через webpack, оптимизаторы, что либо, поэтому храним всё в src
- props = properties
- propTypes доустанавливать npm i prop-types
- абсолютные импорты ставить выше локальных
- && - если слева тру, то выполнито то, что справа
- значения {false}, {null}, {undefined} не рендерятся
- если есть проп, то на него должен быть проптайп
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

<!--
- пример с &&
- между открывающимся и закрывающимся тегами всё, что находится не в { } - рендерится как строка
- массивы можно мэпать и строить коллекции, они зарендарятся как отдельные элементы
 -->

export default function App() { return ( <div>{[1,2,3,4,5]}.map(el =>

<div>{el}</div>); </div> ) }

<!--
- генерирование уникального id в {uuidv1()} путём дополнительной ф-ции, приведёт к постоянному ререндерингу всех коллекций, это не ок
- при возвращении из мэпа id должен стоять на самом корневом элементе
 -->
<!--
- рендер по-условию (к примеру пропс не пришел или фолс, в таком случае разметку рендерить не надо)
 -->

Section.js

function Section({ title }) { return ( <div> {title && <h2>{title}</h2>} </div>
); } export default Section;

<!-- в таком случае прописать проптайп title: PropTypes.string - не обязательный!-->
<!-- import Section -->

App.js

export default function App() { return ( <div> <Section title="Топ недели" />
<Section /> </div> ); }

<!--
- если поставить двойные теги (откр-закр), то то, что написано между ними относится к свойству children и это будет массив, если там больше одного элемента
 -->
 <Section title="Топ недели">Элемент children</Section>

 <!-- [<PaintingList />, <PaintingList />] -->
 <Section title="Топ недели">
    <PaintingList items={paintings} />
    <PaintingList items={paintings} />
 </Section>

 <!-- 
 - чтоб зарендерить, надо вставить проп children.
 - зарендерится прямо под children
 - для работы с children в react есть специальный API - React.Children.map(), .forEach(), .count() и др...
 - children: PropType.node
  -->

Section.js

function Section({ title, children }) { return ( <div> {title &&
<h2>{title}</h2>} {children} </div> ); } export default Section;
