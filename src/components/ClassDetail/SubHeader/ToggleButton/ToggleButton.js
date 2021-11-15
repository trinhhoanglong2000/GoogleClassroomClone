import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {  Link } from 'react-router-dom';
export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            
            <ToggleButton value="Stream"> <Link to="/ClassDetail">Stream</Link></ToggleButton>
            <ToggleButton value="Classwork"><Link to="/ClassDetail/Classwork">Classwork</Link></ToggleButton>
            <ToggleButton value="People"><Link to="/ClassDetail/People">People</Link></ToggleButton>
        </ToggleButtonGroup>
    );
}