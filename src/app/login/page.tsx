import LoginForm from '@/components/Login/LoginForm'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Login | Ocean Stay'
}
const Login = () => {
  return (
    <section className='bg-accent'>
      <LoginForm />
    </section>
  )
}

export default Login
