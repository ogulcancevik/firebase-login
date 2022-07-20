import { resetPassword } from '@/firebase'
import { Input, Modal } from 'antd'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ResetPasswordModal = ({ show, setShow }) => {
  const [email, setEmail] = useState('')
  const handleOk = async () => {
    try {
      await resetPassword(email)
      toast.success('Password reset email sent')
      setShow(false)
    } catch (error) {
      toast.error(error.message)
    }
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
