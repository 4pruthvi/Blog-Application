import React, { Children } from 'react'

// below syntax is used to create a button component which can be reused in the application and it accepts children, type, bgColor, textColor, className and other props as parameters
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    
    return (
        <button className={`px-6 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
} 

export default Button
