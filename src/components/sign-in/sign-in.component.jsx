import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const defaultState = {
   email: '',
   password: ''
};

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
   const [userCredentials, setUserCredentials] = useState(defaultState);

   const handleSubmit = async event => {
      event.preventDefault();
      const { email, password } = userCredentials;
      emailSignInStart(email, password);
   };

   const handleChange = event => {
      const { name, value } = event.target;
      setUserCredentials({...userCredentials, [name]: value });
   };

   const { email, password } = userCredentials;

   return (
      <div className="sign-in">
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>

         <form className="sign-in-form" onSubmit={handleSubmit}>
            <FormInput name="email" type="email" value={email} handleChange={handleChange} required label="email" />
            <FormInput
               name="password"
               type="password"
               value={password}
               handleChange={handleChange}
               required
               label="password"
            />
            <div className="buttons">
               <CustomButton type="submit"> Sign in </CustomButton>
               <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                  Sign in with Google
               </CustomButton>
            </div>
         </form>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
