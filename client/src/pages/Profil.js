import React, { useState } from 'react';
import SignUpForm from '../components/Log/SignUpForm';

const Profil = () => {

    const [signUp, setSignUp] = useState();




    return (
        <div className="signUp">
            Hello profil
            <SignUpForm />
        </div>
    );
};

export default Profil;