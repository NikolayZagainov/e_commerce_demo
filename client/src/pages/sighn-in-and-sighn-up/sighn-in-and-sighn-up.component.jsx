import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sighn-in-and-sighn-up.styles.scss';

const SighnInAndUpPage = () => (
    <div className='sign-in-and-sighn-up'>
        <SignIn/>
        <SignUp/>
    </div>

);

export default SighnInAndUpPage;