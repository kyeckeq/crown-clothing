import React from 'react';
import styled from 'styled-components';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Block = styled.div`
   width: 850px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin: 30px auto;
`;

const SignInAndSignUpPage = () => (
   <Block>
      <SignIn />
      <SignUp />
   </Block>
);

export default SignInAndSignUpPage;
