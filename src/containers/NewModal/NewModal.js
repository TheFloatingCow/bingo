import React from 'react';

import classes from './NewModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import ButtonMenu from '../../components/UI/ButtonMenu/ButtonMenu';

const NewModal = (props) => {

    const { closeMenu, newBoard, theme } = props;

    return (
        <Aux className={`${classes.LightNewModal}
                        ${theme === "dark" ? classes.DarkNewModal : classes.LightNewModal}`}>
            Create new board?
            <ButtonMenu
                menuType="NewModal"
                button1Func={closeMenu}
                button2Func={newBoard}
                button1Text="Cancel"
                button2Text="Confirm"
                theme={theme} />
        </Aux>
    )
}

export default NewModal;