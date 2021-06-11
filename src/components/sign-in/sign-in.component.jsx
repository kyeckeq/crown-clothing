import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const defaultState = {
   email: '',
   password: ''
};

class SignIn extends React.Component {
   constructor() {
      super();
      this.state = defaultState;
   }

   handleSubmit = async event => {
      event.preventDefault();
      const { email, password } = this.state;
      const { emailSignInStart } = this.props;
      emailSignInStart(email, password);
   };

   handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      const { email, password } = this.state;
      const { googleSignInStart } = this.props;

      return (
         <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form className="sign-in-form" onSubmit={this.handleSubmit}>
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
               <div className="buttons">
                  <CustomButton type="submit"> Sign in </CustomButton>
                  <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                     Sign in with Google
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
