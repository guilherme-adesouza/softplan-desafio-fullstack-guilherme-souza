import React, {useRef, useEffect} from "react"


const DropdownTrigger = ({ 
                            dropdownId = 'random_id', 
                            children,
                            className = '',
                            ...props
                        }) => {

    const dropdown = useRef(null);

    return (
        <a ref={dropdown} href="#" data-target={dropdownId} className={`dropdown-trigger ${className}`}{...props}>
            {children}
        </a>
    )
}

export default DropdownTrigger;