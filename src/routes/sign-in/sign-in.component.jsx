import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

import { createUserDocumnetFromAuth } from '../../utils/firebase/firebase.utils'

import React from 'react'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumnetFromAuth(user)
        // console.log(response)
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with google Popup</button>
        </div>
    )
}

export default SignIn;

