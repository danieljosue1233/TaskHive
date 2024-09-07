"use client";


import { FC, useState } from "react";
import { tags } from "@/app/data";

interface SelectedOption {
    option: string;
    colorClass: string;
}

interface TaskDropdownProps {
    onSelect?: (selectedOption: SelectedOption) => void;
}

const TaskDropdown: FC<TaskDropdownProps> = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<SelectedOption | null>(null);


    const handleSelect = (option: string, colorClass: string) => {
        const selected = { option, colorClass };
        setSelectedOption(selected);
        if (onSelect) {
            onSelect(selected);
        }
    };

    return (
        <div className="dropdown position-relative">
            <button
                className="btn btn-link p-0 btn-icon"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {selectedOption ? (
                    <i className={`bi bi-dot ${selectedOption.colorClass} fs-3`}></i>
                ) : (
                    <i className="bi bi-three-dots-vertical"></i>
                )}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {tags.map((option) => (
                    <li
                        key={option.name}
                        role="button"
                        className="dropdown-item d-flex align-items-center"
                        onClick={() => handleSelect(option.name, option.colorClass)}
                    >
                        <i className={`bi bi-dot ${option.colorClass} me-2 fs-3`}></i>{option.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskDropdown;
