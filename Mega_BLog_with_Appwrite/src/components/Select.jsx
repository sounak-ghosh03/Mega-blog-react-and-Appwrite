import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
    return (
        <div className="w-full">
            {label && <label htmlFor="{id}"></label>}
            <select
                {...props}
                id="{id}"
                ref={ref}
                className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none border-gray-200 focus:bg-gray-500 transition duration-200 w-full`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);
