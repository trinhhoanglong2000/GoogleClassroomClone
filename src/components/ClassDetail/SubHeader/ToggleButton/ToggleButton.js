import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link, useParams } from 'react-router-dom';
export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');
    const params = useParams()
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
            <Link style={{ textDecoration: 'none' }} to={`/ClassDetail/${params.id}`}>
                <ToggleButton value="Stream" sx={{color:'black'}} > Stream</ToggleButton>
            </Link>
            <Link style={{ color: 'black', textDecoration: 'none' }} to={`/ClassDetail/${params.id}/Classwork`}>
                <ToggleButton value="Classwork" sx={{color:'black'}}>Classwork
                </ToggleButton>
            </Link>
            <Link style={{ color: 'black', textDecoration: 'none' }} to={`/ClassDetail/${params.id}/People`}>
                <ToggleButton value="People" sx={{color:'black'}} >People
                </ToggleButton>
            </Link>

        </ToggleButtonGroup>
    );
}