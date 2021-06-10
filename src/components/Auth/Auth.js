import React from 'react';
import Input from './Input';

const Auth = () => {

    const handleChange = () => {}
    const handleShowPassword = () => {}

    return (
        <div>
            <Input name="email" type="email" label="Email" handleChange={handleChange} handleShowPassword={handleShowPassword} />
        </div>
    );
};

export default Auth;