import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';

const Input = ({half, name, type, label, autoFocus, handleChange, handleShowPassword}) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                variant="outlined"
                required
                fullWidth
                name={name}
                label={label}
                type={type}
                onChange={handleChange}
                autoFocus={autoFocus}
                InputProps={name === "password" ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : {}}

            />
        </Grid>
    );
};

export default Input;