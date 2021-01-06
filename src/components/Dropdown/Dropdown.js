import React, {Component} from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    // 19)
    state = {
        visible: false,
    };

    /* 20)
    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false })
    };
    */
    
    // 21)
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };
    
    render() {
        // 34)
        const { visible } = this.state;
        return (
            <div className="Dropdown">
                {/* 19)
                <button type="button"
                    className="Dropdown__toggle"
                    onClick={this.show}>
                    Показать
                </button>
                <button type="button"
                    className="Dropdown__toggle"
                    onClick={this.hide}>
                    Скрыть
                </button>
                
                <div className="Dropdown__menu">Выпадающее меню</div>
                */}
                
                {/* 21) */}
                {visible && (<div className="Dropdown__menu">Выпадающее меню</div>)}

                {/* 22) */}
                <button type="button"
                    className="Dropdown__toggle"
                    onClick={this.toggle}>
                    {visible ? 'Скрыть' : 'Показать'}
                </button>
                {/* onMouseOver - для ховера */}
            </div>
        );
    }
}

export default Dropdown;