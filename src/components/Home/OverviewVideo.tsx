'use client'
import thumbnailImg from '@/assets/thumbnail.jpg'
import Modal from '@/components/ui/Modal'
import { PlayIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'
const OverviewVideo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <div className='w-full'>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width='w-[60em]'
        height='h-[30rem]'
        padding='p-0'>
        <iframe
          width={'100%'}
          height={'100%'}
          src='https://www.youtube.com/embed/AVHozwCteL4?si=Gh-NHgJmkrH2rGM7'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
      </Modal>

      <div className='relative'>
        <Image
          src={thumbnailImg}
          className='w-full h-[580px]'
          width={1200}
          height={400}
          alt='Thumbnail'
        />
        <div
          className='absolute inset-0 flex items-center justify-center cursor-pointer'
          onClick={openModal}>
          <div className='border-white border rounded-full p-5 transition-all duration-300 transform hover:scale-110'>
            <PlayIcon color='white' width={'30px'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewVideo
