import React from 'react';

import classes from './Input.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            let selectCSS = null;
            if (props.elementConfig.button) {
                selectCSS = {
                    width: "87%",
                    float: "left"
                }
            }
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    style={selectCSS}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ( 'slider' ):
            inputElement = (
                <Aux>
                    <input
                        className={inputClasses.join(' ')}
                        style={{width: '94%', float: 'left'}}
                        {...props.elementConfig}
                        type={'range'}
                        min={props.elementConfig.min}
                        max={props.elementConfig.max}
                        value={props.value}
                        onChange={props.changed} />
                    <div className={classes.Slider} >
                        {props.value}
                    </div>
                </Aux>
            )
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;