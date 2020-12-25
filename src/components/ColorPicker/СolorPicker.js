import React from 'react';
import './ColorPicker.css';

// const styles = {
//     option: {
//         display: 'inline-block',
//         width: 40,
//         height: 40,
//         margin: 4,
//     },
// };

const colorPicker = ({ options }) => {
    console.log(options);
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
};

export default colorPicker;