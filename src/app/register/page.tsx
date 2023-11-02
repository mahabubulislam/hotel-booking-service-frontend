import RegisterForm from '@/components/Register/RegisterForm'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Register | Ocean Stay'
}
const Register = () => {
  return (
    <section className='bg-accent'>
      <RegisterForm />
    </section>
  )
}

export default Register
