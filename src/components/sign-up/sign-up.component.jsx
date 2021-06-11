import React from 'react';
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

class SignUp extends React.Component {
   constructor() {
      super();

      this.state = defaultState;
   }

   handleSubmit = async event => {
      event.preventDefault();

      const { signUpStart } = this.props;
      const { displayName, email, password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
         alert("passwords don't match");
         return;
      }

      signUpStart({ displayName, email, password });
   };

   handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
         <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
               <FormInput
                  name="displayName"
                  type="text"
                  value={displayName}
                  handleChange={this.handleChange}
                  required
                  label="display name"
               />
               <FormInput
                  name="email"
                  type="email"
                  value={email}
                  handleChange={this.handleChange}
                  required
                  label="email"
               />
               <FormInput
                  name="password"
                  type="password"
                  value={password}
                  handleChange={this.handleChange}
                  required
                  label="password"
               />
               <FormInput
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  handleChange={this.handleChange}
                  required
                  label="confirm password"
               />
               <div className="buttons">
                  <CustomButton type="submit"> Sign Up </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
