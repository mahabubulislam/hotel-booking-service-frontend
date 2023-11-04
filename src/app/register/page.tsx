import RegisterForm from '@/components/Register/RegisterForm'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Register | Ocean Stay'
}
const Register = () => {
  return (
    <main className='bg-accent'>
      <RegisterForm />
    </main>
  )
}

export default Register
