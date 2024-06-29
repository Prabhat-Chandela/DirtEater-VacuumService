import React, { useId } from 'react'

const Inputbox = React.forwardRef(function Inputbox({
  label,
  labelbg = "bg-[#030f27]",
  labelTextCol = "text-white",
  type = "text",
  className = "",
  ...props

}, ref) {

  const id = useId()

  return (
    <div className='w-full flex relative flex-col'>

      {label && <label className={`w-fit absolute -top-3 left-3 ${labelbg} ${labelTextCol} px-3 py-1 text-sm font-semibold rounded-lg  inline-block mb-1`} htmlFor={id}>{label}</label>}

      <input type={type} className={`px-3 py-5 rounded-lg bg-transparent placeholder:white/30 text-[#017BCC] outline-none border-white focus:border-[#017BCC]  duration-200 border  ${className}`}
        ref={ref} id={id}
        {...props} />

    </div>
  )
})


export default Inputbox