// из этого файла мы передаём пропсы и рендерим разметку
import React, { Component } from 'react';
// import paintings from './paintings.json';
// import PaintingList from './components/PaintingList/PaintingList';
// import Panel from './components/Panel/Panel';
// import Notification from './components/Notification/Notification';
// import Layout from './components/Layout/Layout';
// import Alert from './components/Alert/Alert';
// 35)
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// 36)
import TodoList from "./components/TodoList";
import initialTodos from "./todos.json";
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((number) => <div>{number}</div>));
// const colors = ["red", "yellow", "blue", "green"];

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// 
    // 37)
class App extends Component {
    // 38)
    state = {
    // 40)
        todos: initialTodos,
    };
    // 41)
    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    }

    render() {
        const { todos } = this.state;

        const totalTodoCounts = todos.length;
        // 44)
        // const completedTodos = todos.filter(todo => todo.completed);
        // console.log(completedTodos.length);

        const completedTodosCounts = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

        return (
            <>
                <div>
                    <p>Общее количество: {totalTodoCounts}</p>
                    <p>Количество выполненных: {completedTodosCounts}</p>
                </div>

                <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
                {/* 14) */}
                {/* <Counter initialValue={123} /> */}
                {/* <Counter /> */}

                {/* 19) */}
                {/* <Dropdown /> */}

                {/* 23) */}
                {/* <ColorPicker options={colorPickerOptions} /> */}
            </>

            // <Layout> 
            
            //     {/* <Alert text="Шеф, каг дила?" type="" /> */}
            //     <Alert text="Шеф, два счётчика" type="success" />
            //     <Alert text="Шеф, внимание" type="warning" />
            //     <Alert text="Шеф, всё пропало" type="error" />

            //         <Notification text="Всё хорошо" type="success" />

            //         <Notification text="Жопа полная" type="error" />

            //         <СolorPicker options={colorPickerOptions} />
            //         <Panel title="Последние новости">
            //             <p>
            //                 lorem30
            //         </p>

            //             <a href="">Читать...</a>
            //         </Panel>
            //         <Panel>
            //             <p>
            //                 lorem30
            //         </p>
            //         </Panel>
            //         <Panel text="Популярные работы">
            //             <PaintingList paintings={paintings} />
            //         </Panel>
            
            //         {/* {numbers.map((number) => <div>{number}</div>)} */}
            //         {/* тот же пример, только с ul-li */}
            //         {/* коллекция цветов, где в роли ключа сами данные (массив colors) */}
            
            //         {/* <ul>
            //         {colors.map((color) => (
            //             <li key={color}>
            //                 {color};
            //             </li>
            //         ))}
            //     </ul> */}
 
            //         {/* <Painting
                
            //         url={paintings[0].url}
            //         title={paintings[0].title}
            //         price={paintings[0].price}
            //         authorUrl={paintings[0].author.url}
            //         tag={paintings[0].author.tag}
            //         quantity={paintings[0].quantity} />
        
            // <Painting
            //     url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg" title="Bird. Animal art abstract"
            //     price={400}
            //     authorUrl="https://pixabay.com/users/ractapopulous-24766/"
            //         tag="ractapopulous"
            //     quantity={paintings[2].quantity} /> */}

    
            // </Layout>
        );
    };
};

// const App = () => {
//     return (
//         <>
//             {/* 14) */}
//             {/* <Counter initialValue={123} /> */}
//             {/* <Counter /> */}

//             {/* 19) */}
//             {/* <Dropdown /> */}

//             {/* 23) */}
//             {/* <ColorPicker options={colorPickerOptions} /> */}
//         </>

//         // <Layout> 
            
//         //     {/* <Alert text="Шеф, каг дила?" type="" /> */}
//         //     <Alert text="Шеф, два счётчика" type="success" />
//         //     <Alert text="Шеф, внимание" type="warning" />
//         //     <Alert text="Шеф, всё пропало" type="error" />

//         //         <Notification text="Всё хорошо" type="success" />

//         //         <Notification text="Жопа полная" type="error" />

//         //         <СolorPicker options={colorPickerOptions} />
//         //         <Panel title="Последние новости">
//         //             <p>
//         //                 lorem30
//         //         </p>

//         //             <a href="">Читать...</a>
//         //         </Panel>
//         //         <Panel>
//         //             <p>
//         //                 lorem30
//         //         </p>
//         //         </Panel>
//         //         <Panel text="Популярные работы">
//         //             <PaintingList paintings={paintings} />
//         //         </Panel>
            
//         //         {/* {numbers.map((number) => <div>{number}</div>)} */}
//         //         {/* тот же пример, только с ul-li */}
//         //         {/* коллекция цветов, где в роли ключа сами данные (массив colors) */}
            
//         //         {/* <ul>
//         //         {colors.map((color) => (
//         //             <li key={color}>
//         //                 {color};
//         //             </li>
//         //         ))}
//         //     </ul> */}
 
//         //         {/* <Painting
                
//         //         url={paintings[0].url}
//         //         title={paintings[0].title}
//         //         price={paintings[0].price}
//         //         authorUrl={paintings[0].author.url}
//         //         tag={paintings[0].author.tag}
//         //         quantity={paintings[0].quantity} />
        
//         // <Painting
//         //     url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg" title="Bird. Animal art abstract"
//         //     price={400}
//         //     authorUrl="https://pixabay.com/users/ractapopulous-24766/"
//         //         tag="ractapopulous"
//         //     quantity={paintings[2].quantity} /> */}

    
//         // </Layout>
//     );
// };

export default App;