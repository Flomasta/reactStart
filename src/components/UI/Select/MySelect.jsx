import React from 'react';

const MySelect = ({options, defaultValue,value,onChange}) => {
    return (
        <div>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <select value={value}
                onChange={event=>onChange(event.target.value)}
                >
                    <option disabled value=''>{defaultValue}</option>
                    {options.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default MySelect;
