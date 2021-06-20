import React from 'react';
import SignIn from '../../Component/SignIn/SignIn';
import SignUp from '../../Component/SignUp/SignUp';
import './SignInAndSignUpPage.scss'

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndSignUpPage;