import { ComponentProps } from 'react';

export const Input = (props:ComponentProps<'input'>) => {
    return (
        <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
            {...props}
        />
    )
}
