import React, { useState, useEffect } from 'react';

import classes from './CheckboxMenu.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

const CheckboxMenu = (props) => {

    const { types, update } = props;

    let keys = Object.keys(types);
    let length = keys.length;

    const [checked, setChecked] = useState(Array(length - 1).fill(true));

    // Update parent state when state is changed
    useEffect(() => {
        let newTypes = { ...types };
        for (let i = 1; i < length; i++) {
            newTypes[keys[i]] = checked[i - 1];
        }
        update(newTypes);
    }, [checked]);
    // [checked, types, length, keys, update]
    // types, keys, update CREATE LOOP i think

    // Handle the Select all checkbox
    const handleParentChange = (event) => {
        setChecked(Array.from({ length: checked.length }, () => event.target.checked));
    };

    // Handle individual checkboxes
    const handleChange = (event, key) => {
        setChecked(checked => {
            const newChecked = [...checked];
            newChecked[key] = event.target.checked;
            return newChecked;
        });
    };

    // Capitalize the first letter of word
    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    // Create checklist
    let checklist = [];

    for (let i = 1; i < length; i++) {
        checklist.push(
            <FormControlLabel
                key={i - 1}
                label={capitalize(keys[i])}
                control={<Checkbox
                    key={i - 1}
                    checked={checked[i - 1]}
                    onChange={(event) => handleChange(event, i - 1)}
                    size="large" />} />
        )
    }

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {checklist}
        </Box>
    );

    return (
        <Aux className={classes.CheckboxMenu}>
            <FormGroup>
                <FormControlLabel label="Select all" control={
                    <Checkbox
                        checked={checked.every(element => element === true)}
                        indeterminate={!(checked.every(element => element === true)) && !checked.every(element => element === false)}
                        onChange={handleParentChange}
                        size="large" />
                } />
            </FormGroup>
            {children}
        </Aux>
    )
}

export default CheckboxMenu;