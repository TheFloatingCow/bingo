import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';

class ButtonMenu extends Component {

    render () {
        return (
            <Aux>
                <Button>NEW</Button>
                <Button clicked={this.props.openMenu}>EDIT</Button>
            </Aux>
        )
    }
}

export default ButtonMenu;