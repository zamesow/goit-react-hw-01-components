import React, {Component} from 'react';

import './ColorPicker.css';

// const styles = {
//     option: {
//         display: 'inline-block',
//         width: 40,
//         height: 40,
//         margin: 4,
//     },
// };

/* const colorPicker = ({ options }) => {
    return (
        <div>
            <h2>Color Picker</h2>
            <div>
                {options.map(({ label, color }) =>
                    <span
                        key={label}
                        className="ColorPicker__option"
                        style={{
                            backgroundColor: color,
                        }}
                    ></span>
                )}
            </div>
        </div>);
}; */ 
 
// 23)
class ColorPicker extends Component {
    // 27)
    state = {
        activeOptionIdx: 1,
    };

    // 32)
    setActiveIdx = index => {
        this.setState({ activeOptionIdx: index });
    };

    // 31)
    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker__option'];

        if (index === this.state.activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active');
        }

        return optionClasses.join(' ');
    };

    render() {
        // 34)
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        // 33)
        const {label} = options[activeOptionIdx];
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                {/* 33) */}
                <p>Выбран цвет: {label} </p>
                <div>
                    {/* {options.map(({ label, color }) => */}
                    {/* 24), 28) */}
                    {this.props.options.map(({ label, color }, index) => (
                    // 31) эта переменная лишняя
                    // const optionClassName = this.makeOptionClassName(index);
                    /* 30)
                    const optionClasses = ['ColorPicker__option'];
                    if (index === this.state.activeOptionIdx) {
                        optionClasses.push('ColorPicker__option--active');
                    } */
                    // <span></span>
                    // 25)
                    <button
                        // className="ColorPicker__option"
                        /* 30)
                         className={optionClasses.join(' ')} */
                            
                        key={label}
                        // 31)
                        className={this.makeOptionClassName(index)}
                        style={{
                            backgroundColor: color,
                            
                            /* 29)
                            border: index === this.state.activeOptionIdx
                                ? '3px solid black'
                                : 'none', */
                        }}
                        // 32)
                        // onClick={this.setActiveIdx(index)}
                        onClick={() => this.setActiveIdx(index)}
                    ></button>
                    ))}
                </div>
            </div>
        );
    }
}

export default ColorPicker;