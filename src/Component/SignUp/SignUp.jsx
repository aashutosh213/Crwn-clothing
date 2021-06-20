import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../Firebase/Utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignUp.scss';

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("password do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
            });

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) =>{
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title' >I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text'
                        label='Name'
                        onChange={this.handleChange}
                        value={displayName}
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        onChange={this.handleChange}
                        value={email}
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        onChange={this.handleChange}
                        value={password}
                        required
                    />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        onChange={this.handleChange}
                        value={confirmPassword}
                        required
                    />
                    <CustomButton type='submit' > SIGN UP </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;