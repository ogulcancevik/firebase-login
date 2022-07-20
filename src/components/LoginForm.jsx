import React from 'react'
import { Button, Form, Input } from 'antd'
import { login } from '@/firebase'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { SET_TOKEN } from '@/store/modules/auth'
import { useNavigate } from 'react-router-dom'
const LoginForm = ({ setModal }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async (values) => {
    const { email, password } = values
    const user = await login(email, password)
    if (!user) {
      toast.error('Login failed', {
        position: 'top-right'
      })
    } else {
      toast.success('Login success', {
        position: 'top-right'
      })
      const { accessToken } = user
      dispatch(SET_TOKEN(accessToken))
      navigate('/', {
        replace: true
      })
    }
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="mb-12 flex flex-col items-center">
        <h1 className="text-2xl">Welcome</h1>
        <div className="text-gray-400 text-xs">
          Enter your credentials to access your account
        </div>
      </div>
      <Form
        className="w-72"
        name="login"
        initialValues={{
          remember: true
        }}
        onFinish={handleLogin}
        autoComplete="off"
      >
        <div className="mb-1">E-mail</div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <div className="mb-1">Password</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="flex justify-end w-full">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div>
        <span className="text-gray-600">Forgot your password</span>
        <span
          onClick={() => setModal(true)}
          className="text-blue-400 font-medium cursor-pointer hover:text-blue-500 transition-all ml-1"
        >
          Reset Password
        </span>
      </div>
    </div>
  )
}

export default LoginForm
