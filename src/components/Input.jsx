import React,{useId} from 'react'

// below syntax is used to create a input component which can be reused in the application and it accepts label, type, className and other props as parameters
// forwardRef is used to get the reference of the input field and it is passed as a prop to the input component
const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {/* below syntax if label is present or given then render label */}
            {label && <label 
            className='inline-block mb-1 pl-1' 
            // htmlFor is used to link the label with the input field using the id
            htmlFor={id}>
                {label}
            </label>
            }
            {/* below syntax is used to render the input field with the given type, className and ref */}
            <input 
            type={type}
            className = {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref} //ref is used to get the reference of the input field and it is passed as a prop to the input component
            id={id} //id is used to link the label with the input field using htmlFor
            {...props} //...props is used to pass all the other props to the input field such as placeholder, value, onChange etc.
            />
        </div>
    )
})

export default Input


// If you are using React-19, you don't need to use '' forwardRef '' anymore it is Deprecated in React-19, in this update, now you can treat "ref" directly as a prop,
// Use this:


// import React, { useId } from 'react';

// function Input(
//   { 
//     label, 
//     type = 'text', 
//     className = '', 
//     ref,        // pull in the ref  
//     ...props    // everything else  
//   }
// ) {
//   const id = useId();

//   return (
//     <div className="w-full">
//       {label && (
//         <label htmlFor={id} className="inline-block mb-1 pl-1">
//           {label}
//         </label>
//       )}
//       <input
//         id={id}
//         type={type}
//         ref={ref}
//         {...props}
//         className={`
//           px-3 py-2 rounded-lg bg-white text-black 
//           outline-none focus:bg-gray-50 duration-200 
//           border border-gray-200 w-full ${className}
//         `}
//       />
//     </div>
//   );
// }

// export default Input;
