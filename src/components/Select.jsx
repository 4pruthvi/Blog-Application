import React, { useId, forwardRef } from 'react'

//select component is used to render a select dropdown with the given options, label and className, it also accepts all the other props such as onChange, value etc. and it uses forwardRef to get the reference of the select field and it is passed as a prop to the select component
function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label 
            htmlFor={id} 
            className=''></label>} 
            <select
            id={id}
            {...props}
            ref = {ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >   
            {/* // ? is used to check if the options array is not null or undefined before mapping through it, this is a common practice to avoid errors when the options array is not passed as a prop or it is empty. */}
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
//another syntax for forwardRef is to wrap the component with forwardRef and pass the ref as a second argument to the component function, this way we can use the ref directly in the component without using forwardRef again, this is a cleaner syntax and it is recommended to use this syntax in React-19 and above.
export default React.forwardRef(Select)
