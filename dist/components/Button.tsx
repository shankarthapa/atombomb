import React from 'react';

export const Button = ({
    bgColor = 'yellow',
    textColor = 'black',
    children,
    ...rest
}: any) => {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }} {...rest}>
            {children}
        </button>
    )
}