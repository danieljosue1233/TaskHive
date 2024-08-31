"use client"

import { FC, useState } from "react";

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

                <li role="button" className="dropdown-item d-flex align-items-center" onClick={() => handleSelect("Personal", "text-success")}>
                    <i className="bi bi-dot text-success me-2 fs-3"></i>Personal
                </li>

                <li role="button" className="dropdown-item d-flex align-items-center" onClick={() => handleSelect("Work", "text-warning")}>
                    <i className="bi bi-dot text-warning me-2 fs-3"></i>Work
                </li>

                <li role="button" className="dropdown-item d-flex align-items-center" onClick={() => handleSelect("Social", "text-primary")}>
                    <i className="bi bi-dot text-primary me-2 fs-3"></i>Social
                </li>

                <li role="button" className="dropdown-item d-flex align-items-center" onClick={() => handleSelect("Important", "text-danger")}>
                    <i className="bi bi-dot text-danger me-2 fs-3"></i>Important
                </li>
            </ul>
        </div>
    );
};

export default TaskDropdown;