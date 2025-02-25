// Import all necessary packages
// Describe our test suite
//  Write the tests
//  Render component to the virtual dom
// Select the elements form the DOM you want to test
// Assert the expected results

import {render, screen} from '@testing-library/react'
import UserStatus from '../../src/components/UserStatus'


describe('UserStatus component', () => {
    it('should display a welcome message when a email is provided', () =>{
       render(<UserStatus email='johndoe@gmail.com' />) 
       const welcomeMessage = screen.getByText(/Welcome/i)
       expect(welcomeMessage).toBeInTheDocument()
    })

    it('should display the sign up button when no email is provided', () =>{
        render(<UserStatus email='' />)
        const signUp = screen.getByText(/Sign Up/i)
        expect(signUp).toBeInTheDocument()
    })
})