import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const defaultState = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
};

const SignUp = ({ signUpStart }) => {
   const [userCredentials, setUserCredentials] = useState(defaultState);

   const handleSubmit = async event => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = userCredentials;
      if (password !== confirmPassword) {
         alert("passwords don't match");
         return;
      }

      signUpStart({ displayName, email, password });
   };

   const handleChange = event => {
      const { name, value } = event.target;
      setUserCredentials({ ...userCredentials, [name]: value });
   };

   const { displayName, email, password, confirmPassword } = userCredentials;

   return (
      <div className="sign-up">
         <h2>I do not have an account</h2>
         <span>Sign up with your email and password</span>

         <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
               name="displayName"
               type="text"
               value={displayName}
               handleChange={handleChange}
               required
               label="display name"
            />
            <FormInput name="email" type="email" value={email} handleChange={handleChange} required label="email" />
            <FormInput
               name="password"
               type="password"
               value={password}
               handleChange={handleChange}
               required
               label="password"
            />
            <FormInput
               name="confirmPassword"
               type="password"
               value={confirmPassword}
               handleChange={handleChange}
               required
               label="confirm password"
            />
            <div className="buttons">
               <CustomButton type="submit"> Sign Up </CustomButton>
            </div>
         </form>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
