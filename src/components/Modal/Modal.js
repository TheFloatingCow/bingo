import React, { Component } from 'react';

import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './Modal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Modal extends Component {
    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.clicked} />
                <div
                    className={`${classes.LightModal}
                                ${this.props.theme === "dark" ? classes.DarkModal : classes.LightModal}`}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(80vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;