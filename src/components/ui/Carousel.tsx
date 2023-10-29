'use client'
import { ReactNode } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
type CarouselProps = {
  children: ReactNode
  settings: Settings
}
const Carousel = ({ children, settings }: CarouselProps) => {
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
