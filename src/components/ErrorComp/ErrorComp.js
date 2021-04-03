import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Typography } from '@material-ui/core';

const ErrorComp = (props) => {
    return (
        <div>
            <Typography variant="subtitle1" style={{ color: 'red' }} gutterBottom>
                <ErrorOutlineIcon /> {props.data}
            </Typography>
        </div>
    )
}

export default ErrorComp;