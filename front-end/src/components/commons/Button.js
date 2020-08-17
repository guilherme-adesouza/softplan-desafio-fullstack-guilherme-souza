import React from "react";
import "../commons/Button.css";

const Button = ({
                    label = '',
                    className = '',
                    children = null,
                    description = '',
                    ...props
                }) => {
    return (
        <button className={`btn waves-effect waves-light ${className}`} title={description} {...props}>
            {children}
            {label}
        </button>
    )
};

export default Button;
