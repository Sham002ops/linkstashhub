import React, { ReactElement } from 'react'

type Variants ="primary" | "secondary"
export interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg" | "xs";
    text?: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
    transition?: "1" | "2" | "3";
}

const variantStyles = {
  "primary": "bg-purple-700 text-white",
  "secondary": "bg-purple-100 text-purple-700"
}

const transitionStyle = {
  "1": "transition ease-in-out delay-150 bg-purple-700 hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 duration-150",
  "2": "transition ease-in-out delay-150 bg-purple-700 hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 duration-300",
  "3": "transition ease-in-out delay-150 bg-purple-100 hover:-translate-y-1 hover:scale-110 hover:bg-purple-100 duration-300"
} 
const sizeStyles = {
  "xs" : "py-1 px-1" ,
  "sm" : "py-2 px-2" ,
  "md" : "py-2 px-4",
  "lg" : "py-4 px-6"
}

const defaultStyles = "rounded-md p-4 flex"
const Button = ({variant, text, startIcon, onClick, endIcon, size,fullWidth, transition, loading}: ButtonProps) => {
  return <button onClick={onClick} className={` justify-center ${transition ? transitionStyle[transition] : ''} ${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles}
   ${fullWidth ? " w-full": ""} ${loading ? "opacity-45" : ""} `} disabled={loading}>
    {startIcon ? <div className='pt-1 pr-2 '>{startIcon}</div>: null } {text}  {endIcon}</button>
}

<Button variant="primary" size="md" onClick={()=>{}} text={"asd"} ></Button>
export default Button