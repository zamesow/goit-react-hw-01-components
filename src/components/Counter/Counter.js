import React from 'react';
import Value from './Value';
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
    // 15)
    static defaultProps = {
        initialValue: 0,
    };

    /* 3)
    handleIncrement = event => {
        console.log('Кликнули в увеличить');

        const { target } = event;

        setTimeout(() => {
            console.log(target);
        }, 1000);
    }; 
    
    handleDecrement = event => {
        console.log('Кликнули в уменьшить');
        console.log(event.type);
    };
    */
    
    /* 6)
    constructor() {
        super();
        this.state = {
            value: 5,
        };
     } */
    
     // 7)
     state = {
        // value: 10,
        //  14)
        value: this.props.initialValue, 
        };

    /* 8)
    handleIncrement = () => {
        this.state.value: 5,
        this.state = {x: 6},
    };
    */

    /* 9)
    handleIncrement = () => {
        this.setState({
            value: 15,
        });
    };

    handleDecrement = () => {
        this.setState({
            value: 5,
        });
    };
    */
    
    /* 10)
     currState = {
        value: 10,
        a: 1,
        b: 2,
    };
    
    update = {
        value: 123,
    };

    newState = {...this.currState, ...this.update} > {a: 1, b: 2, value: 123} */

    /* 11)
    handleIncrement = () => {
        this.setState({
            value: 15,
        }, () => {});
    }; */
    
    /* 12)
    handleIncrement = () => {
        this.setState({
            value: this.state.value + 1,
        });
        this.setState({
            value: this.state.value + 1,
        });
        this.setState({
            value: this.state.value - 1,
        });
    }; */ 
    
    /* 13) 
    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
        this.setState(prevState => ({
                value: prevState.value + 1,
            }));
        this.setState(prevState => {(
                value: prevState.value - 1,
            }));
    }; */
    
    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
    };

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        });
    };

    render() {
        // 34)
        const { value } = this.state;
        return (
            <div className="Counter">
                {/* const Controls = ({ onIncrement, onDecrement }) => (
                    <div className="Counter__controls">
                        <button type="button"
                            onClick={this.handleIncrement}
                        >
                            Увеличить на 1
                        </button>
                        <button type="button"
                            onClick={this.handleDecrement}
                        >
                            Уменьшить на 1
                        </button>
                    </div>
                ); */}
                {/* 17) - 18) */}
                <Value value={value} />

                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        );
    };
}

export default Counter;