import LoginForm from '@/components/LoginForm'
import ResetPasswordModal from '@/components/ResetPasswordModal'
import React, { useState } from 'react'

const LoginView = () => {
  const [resetPasswordModalVisible, setResetPasswordModalVisible] =
    useState(false)
  return (
    <div className="flex">
      <div className="picture-section">
        <div className="login-background" />
      </div>
      <div className="form-section">
        <LoginForm setModal={setResetPasswordModalVisible} />
      </div>
      <ResetPasswordModal
        show={resetPasswordModalVisible}
        setShow={setResetPasswordModalVisible}
      />
    </div>
  )
}

export default LoginView
