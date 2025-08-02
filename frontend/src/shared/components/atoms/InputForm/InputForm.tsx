import { forwardRef } from 'react';
import { ComponentPropsWithoutRef } from 'react';

export const InputForm = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
        {...props}
      />
    );
  }
);
