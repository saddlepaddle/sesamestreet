import React, { HTMLAttributes } from 'react';

const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...props}
            className="w-40 rounded bg-gradient-to-r from-indigo-400 to-fuchsia-600 px-3 py-2 font-bold text-white drop-shadow-2xl transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-700 focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2"
        >
            Testf
        </button>
    );
};

export default Button;
