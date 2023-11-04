import ContactForm from '@/components/ContactForm/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Ocean Stay'
}
const Contact = () => {
  return (
    <main className='bg-accent'>
      <section className='flex py-20  container mx-auto'>
        <aside className='pt-10 text-white'>
          <section className='mb-10'>
            <p className='text-primary uppercase my-5'>Contact Information</p>
            <div>
              <h4 className='text-4xl mb-5'>Ocean Stay Pacific Hotel</h4>
              <address className='mb-5'>
                <p>572 - 636 Victoria Parade</p>
                <p>P.O. Box 19217</p>
                <p>Suva, Fiji</p>
              </address>
              <p>
                <strong>Phone Number :</strong>
                <a href='tel:+679 345 67 88'>+679 345 67 88</a>
              </p>
              <p>
                <strong>Email :</strong>
                <a href='mailto:info@cozystay.com'>info@cozystay.com</a>
              </p>
            </div>
          </section>
          <hr />
          <section className='grid grid-cols-2 gap-20 my-10'>
            <div className='flex flex-col gap-3'>
              <h3>Accommodation</h3>
              <div>
                <p>Enquiries & Bookings</p>
                <p>Phone: + 679 345 7788</p>
                <p>Email: stay@cozystay.com</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h3>Accommodation</h3>
              <div>
                <p>Enquiries & Bookings</p>
                <p>Phone: + 679 345 7788</p>
                <p>Email: stay@cozystay.com</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h3>Accommodation</h3>
              <div>
                <p>Enquiries & Bookings</p>
                <p>Phone: + 679 345 7788</p>
                <p>Email: stay@cozystay.com</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h3>Accommodation</h3>
              <div>
                <p>Enquiries & Bookings</p>
                <p>Phone: + 679 345 7788</p>
                <p>Email: stay@cozystay.com</p>
              </div>
            </div>
          </section>
        </aside>
        <aside>
          <ContactForm />
        </aside>
      </section>
    </main>
  )
}

export default Contact
