import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref){
    const id = useId()
    return (
        <div className='w-full   outline-none  duration-200'>
            {label && <label className='inline-block mb-1 pl-1 text-gray-800' htmlFor={id}>{label}</label>}
            <input type={type} className={`px-3 py-2 rounded-lg  border border-gray-200 focus:bg-gray-50 text-black w-full ${className}`}   
            ref={ref}
            id={id}
            {...props}
            
            />
            <div className='flex justify-end pr-2'>
            
            </div>
        </div>
    )
})

export default Input