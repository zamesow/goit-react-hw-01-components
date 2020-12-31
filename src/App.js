// из этого файла мы передаём пропсы и рендерим разметку
import React from 'react';
import paintings from './paintings.json';
import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import СolorPicker from './components/ColorPicker/СolorPicker';
import Notification from './components/Notification/Notification';
import Layout from './components/Layout/Layout';
import Alert from './components/Alert/Alert';

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((number) => <div>{number}</div>));
// const colors = ["red", "yellow", "blue", "green"];

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
    return (
        <Layout>
            {/* <Alert text="Шеф, каг дила?" type="" /> */}
            <Alert text="Шеф, два счётчика" type="success" />
            <Alert text="Шеф, внимание" type="warning" />
            <Alert text="Шеф, всё пропало" type="error" />

                <Notification text="Всё хорошо" type="success" />

                <Notification text="Жопа полная" type="error" />

                <СolorPicker options={colorPickerOptions} />
                <Panel title="Последние новости">
                    <p>
                        lorem30
                </p>

                    <a href="">Читать...</a>
                </Panel>
                <Panel>
                    <p>
                        lorem30
                </p>
                </Panel>
                <Panel text="Популярные работы">
                    <PaintingList paintings={paintings} />
                </Panel>
            
                {/* {numbers.map((number) => <div>{number}</div>)} */}
                {/* тот же пример, только с ul-li */}
                {/* коллекция цветов, где в роли ключа сами данные (массив colors) */}
            
                {/* <ul>
                {colors.map((color) => (
                    <li key={color}>
                        {color};
                    </li>
                ))}
            </ul> */}
 
                {/* <Painting
                
                url={paintings[0].url}
                title={paintings[0].title}
                price={paintings[0].price}
                authorUrl={paintings[0].author.url}
                tag={paintings[0].author.tag}
                quantity={paintings[0].quantity} />
        
        <Painting
            url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg" title="Bird. Animal art abstract"
            price={400}
            authorUrl="https://pixabay.com/users/ractapopulous-24766/"
                tag="ractapopulous"
            quantity={paintings[2].quantity} /> */}

    
        </Layout>
    );
};

export default App;