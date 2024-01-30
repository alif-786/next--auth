import React from 'react'
import CardWrapper from './card-wrapper'

const LoginForm = () => {
  return (
      <CardWrapper
          headerLabel='Welcome back'
          backButtonHref='/auth/login'
          backButtonLabel="Don't have an account"
          showSocial
      >
        login form 
    </CardWrapper>
  )
}

export default LoginForm