import React from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Check from '../../components/UI/Checkbox/Checkbox';
import Checkbox from '@mui/material/Checkbox'; // Checkbox
import FormGroup from '@mui/material/FormGroup'; // FormGroup
import FormControlLabel from '@mui/material/FormControlLabel'; // FormControlLabel
import Box from '@mui/material/Box'; // Box

const EditModal = () => {

    const [checked, setChecked] = React.useState([true, true]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange4 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange5 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange6 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange7 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    let checkList = [];
    let key = 0;

    

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="General"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} size="large" />} />
            <FormControlLabel
                label="Academic"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} size="large" />} />
            <FormControlLabel
                label="Driving"
                control={<Checkbox checked={checked[2]} onChange={handleChange4} size="large" />} />
            <FormControlLabel
                label="Sports"
                control={<Checkbox checked={checked[3]} onChange={handleChange5} size="large" />} />
            <FormControlLabel
                label="Cooking"
                control={<Checkbox checked={checked[4]} onChange={handleChange6} size="large" />} />
            <FormControlLabel
                label="Work"
                control={<Checkbox checked={checked[5]} onChange={handleChange7} size="large" />} />
        </Box>
    );

    return (
        <Aux className={classes.EditModal}>
            EditModal contents
            <FormGroup>
                <FormControlLabel label="Select all" control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                        size="large" />
                } />
            </FormGroup>
            {children}
        </Aux>
    )
}

export default EditModal;