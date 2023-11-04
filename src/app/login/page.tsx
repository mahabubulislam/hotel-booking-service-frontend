import LoginForm from '@/components/Login/LoginForm'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Login | Ocean Stay'
}
const Login = () => {
  return (
    <main className='bg-accent'>
      <LoginForm />
    </main>
  )
}

export default Login
