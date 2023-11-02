import { ReactEventHandler, ReactNode } from 'react'

type IButtonProps = {
  children: ReactNode
  onClick?: ReactEventHandler
  className?: string
  type?: 'button' | 'submit' | 'reset'
}
const PrimaryButton = ({
  children,
  onClick,
  className,
  type
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        className ? className : ''
      } w-full text-white bg-primary hover:bg-teal-900  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
      {children}
    </button>
  )
}

export default PrimaryButton
