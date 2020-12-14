// из этого файла мы передаём пропсы и рендерим разметку
import React from 'react';
import Logo from './components/Logo';
import paintings from './paintings.json';
import PaintingList from './components/PaintingList';
import Panel from './components/Panel';
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((number) => <div>{number}</div>));
// const colors = ["red", "yellow", "blue", "green"];

const App = () => {
    return (
        <div>
            <Panel title="Последние новости">
                <p>
                 lorem50
                </p>

                <a href="">Читать...</a>
                </Panel>
            <Logo
                text="Главный компонент-контейнер приложения"
            />
            <Panel>
                <p>
                    lorem30
                </p>
            </Panel>
            <PaintingList paintings={paintings} />
            
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
    </div>
    );
};

export default App;