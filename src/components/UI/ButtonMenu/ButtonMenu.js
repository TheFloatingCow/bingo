import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';
import classes from './ButtonMenu.module.css';

class ButtonMenu extends Component {

    render () {
        return (
            <div className={classes.ButtonMenu}>
                <Button clicked={this.props.openNewMenu}>NEW</Button>
                <Button clicked={this.props.openEditMenu}>EDIT</Button>
            </div>
        )
    }
}

export default ButtonMenu;