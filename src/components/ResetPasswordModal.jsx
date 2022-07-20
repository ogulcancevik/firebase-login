import { resetPassword } from '@/firebase'
import { Input, Modal } from 'antd'
import React, { useState } from 'react'

const ResetPasswordModal = ({ show, setShow }) => {
  const [email, setEmail] = useState('')
  const handleOk = async () => {
    await resetPassword(email)
    setShow(false)
  }
  const handleCancel = () => {
    setShow(false)
  }
  return (
    <Modal
      title="Reset password"
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
    </Modal>
  )
}

export default ResetPasswordModal
