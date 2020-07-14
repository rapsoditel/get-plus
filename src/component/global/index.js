import React from 'react';
import './index.scss';

export const TextBox = ({ id, label, value, type, width, onChange, disabled }) => {
    return (
        <React.Fragment>
            <div className='field text-box' style={{ width: width }}>
                <label>{label}</label>
                <input id={id} value={value} type={type} onChange={onChange} className={disabled?'disabled':null} />
            </div>
        </React.Fragment>
    )
}

TextBox.defaultProps = {
    label: '',
    value: '',
    type: 'text',
    width: '300px',
    disabled: false
}

export const SelectBox = ({ label, data, width, value }) => {
    let source = [];

    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            source.push(<option key={i} value={data[i]}>{data[i]}</option>)
        }
    } else {
        source.push(<option key={0}>No data</option>)
    }
    return (
        <React.Fragment>
            <div className='field select-box' style={{ width: width }}>
                <label>{label}</label>
                <select value={value}>
                    {source}
                </select>
            </div>

        </React.Fragment>
    )
}

SelectBox.defaultProps = {
    data: [],
    width: '300px',
    label: ''
}


export const Button = ({text, onClick}) =>{
    return(
        <React.Fragment>
            <button 
                onClick={onClick}
                className='button default'
            >
                {text}
            </button>
        </React.Fragment>
    )
}

Button.defaultProps={
    text:'Button'
}