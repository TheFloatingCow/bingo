import React, { Component } from 'react';

import classes from './Training.css';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Input from '../UI/Input/Input';

class Training extends Component {
    state = {
        origin: {
            date: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'Date *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            location: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Location *'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 30
                },
                valid: false,
                touched: false
            },
            trainingType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'aerobic', displayValue: 'Aerobic'},
                        {value: 'anaerobic', displayValue: 'Anaerobic'},
                        {value: 'strength', displayValue: 'Strength'}
                    ],
                },
                value: 'aerobic',
                validation: {
                    required: true
                },
                valid: true,
                touched: false
            },
            sport: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Sport *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            rpe: {
                elementType: 'slider',
                elementConfig: {
                    min: '1',
                    max: '10',
                    placeholder: 'Rate of Perceived Exertion *'
                },
                value: '10',
                validation: {
                    required: true
                },
                valid: true,
                touched: false
            },
            duration: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Duration (mins) *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            distance: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Distance (km) *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            averageHR: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Average HR'
                },
                value: '',
                validation: {
                },
                valid: true
            },
            peakHR: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Peak HR'
                },
                value: '',
                validation: {
                },
                valid: true
            },
            timeInRed: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Time in Red Zone (mins)'
                },
                value: '',
                validation: {
                },
                valid: true
            },
            additionalComment: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Additional Comments'
                },
                value: '',
                validation: {
                    resize: 'none',
                    maxLength: 500
                },
                valid: true
            },
        },
        trainingForm: {},
        formIsValid: false
    }

    componentDidMount() {
        this.setState({trainingForm: this.state.origin});
    }

    modalClosedHandler = () => {
        this.setState({trainingForm: this.state.origin});
        this.props.modalClosed();
    }

    formSubmitHandler = (event) => {
        event.preventDefault(); // Prevents form submition (idk what that is)
        console.log("Form submitted!")
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedTrainingForm = {
            ...this.state.trainingForm
        };
        const updatedFormElement = { 
            ...updatedTrainingForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedTrainingForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedTrainingForm) {
            formIsValid = updatedTrainingForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({trainingForm: updatedTrainingForm, formIsValid: formIsValid});
    }

    render () {
        const formElements = [];
        for (let key in this.state.trainingForm) {
            formElements.push({
                id: key,
                item: this.state.trainingForm[key]
            });
        }
        let form = (
            <form onSubmit={this.formSubmitHandler}>
                {formElements.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.item.elementType}
                        elementConfig={formElement.item.elementConfig}
                        value={formElement.item.value}
                        invalid={!formElement.item.valid}
                        shouldValidate={formElement.item.validation}
                        touched={formElement.item.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button
                    btnType="Success"
                    disabled={!this.state.formIsValid} 
                    clicked={this.formSubmitHandler}>ADD</Button>
            </form>
        )
        return (
            <Aux className={classes.Training}>
                <Button
                    btnType="Danger"
                    clicked={this.modalClosedHandler}>
                    CLOSE
                </Button>
                {form}
            </Aux>
            
        )
    }
}

export default Training;