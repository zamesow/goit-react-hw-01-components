import React from 'react';
// import './Counter.css';

class Counter extends React.Component {
    handleIncrement = event => {
        console.log('Кликнули в увеличить');

        const target = event.target;

        setTimeout(() => {
            console.log(target);
        }, 1000);
    };

    handleDecrement = event => {
        console.log('Кликнули в уменьшить');
        console.log(event.type);
    };

    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">0</span>

                <div className="Counter__controls">
                    <button type="button"
                        onСlick={this.handleIncrement}
                    >
                        Увеличить на 1
                    </button>
                    <button type="button"
                        onСlick={this.handleDecrement}
                    >
                        Уменьшить на 1
                    </button>
                </div>
            </div>
        );
    };
}

export default Counter;