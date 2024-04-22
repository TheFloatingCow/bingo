import React from 'react';

import classes from './NewModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import ButtonMenu from '../../components/UI/ButtonMenu/ButtonMenu';

const NewModal = (props) => {

    const { closeMenu, newBoard } = props;

    return (
        <Aux className={classes.NewModal}>
            Create new board?
            <ButtonMenu
                menuType="NewModal"
                button1Func={closeMenu}
                button2Func={newBoard}
                button1Text="Cancel"
                button2Text="Confirm" />
        </Aux>
    )
}

export default NewModal;