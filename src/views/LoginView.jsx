import LoginForm from '@/components/LoginForm'
import ResetPasswordModal from '@/components/ResetPasswordModal'
import SignupModal from '@/components/SignupModal'
import React, { useState } from 'react'

const LoginView = () => {
  const [resetPasswordModalVisible, setResetPasswordModalVisible] =
    useState(false)
  const [signupModalVisible, setSignupModalVisible] = useState(false)
  return (
    <div className="flex">
      <div className="picture-section">
        <div className="login-background" />
      </div>
      <div className="form-section">
        <LoginForm
          setResetPasswordModal={setResetPasswordModalVisible}
          setSignupModalVisible={setSignupModalVisible}
        />
      </div>
      <ResetPasswordModal
        show={resetPasswordModalVisible}
        setShow={setResetPasswordModalVisible}
      />
      <SignupModal show={signupModalVisible} setShow={setSignupModalVisible} />
    </div>
  )
}

export default LoginView
