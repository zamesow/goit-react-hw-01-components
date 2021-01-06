import React from 'react';

    // 17)
const Controls = ({ onIncrement, onDecrement }) => (
    <div className="Counter__controls">
        <button type="button"
            // onClick={this.handleIncrement}
            // 17)
            onClick={onIncrement}
        >
            Увеличить на 1
                    </button>
        <button type="button"
            // onClick={this.handleDecrement}
            // 17)
            onClick={onDecrement}
        >
            Уменьшить на 1
                    </button>
    </div>
);

export default Controls;