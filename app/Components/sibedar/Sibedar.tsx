"use client";

import Link from 'next/link';
import React, { FC } from 'react';
import AddTaskModal from '../Modal/AddTaskModal';
import { useStore } from '@/app/ui/store/SibedarStore';
import './styles.css';

const Sidebar: FC = () => {
    const { activeTab, setActiveTab, tags } = useStore();

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: '100vh' }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item mb-2">
                    <Link href="/" className={`nav-link ${activeTab === 'All Notes' ? 'active' : ''} link-dark d-flex align-items-center`} onClick={() => setActiveTab('All Notes')}>
                        <i className="bi bi-pencil-square me-2"></i>
                        All Notes
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link href="/" className={`nav-link ${activeTab === 'Favourites' ? 'active' : ''} link-dark d-flex align-items-center`} onClick={() => setActiveTab('Favourites')}>
                        <i className="bi bi-star me-2"></i>
                        Favourites
                    </Link>
                </li>
                <hr />
                <li className="nav-item mb-2">
                    <span className="link-dark d-flex align-items-center tags-header">
                        <i className="bi bi-tag me-2"></i>
                        Tags
                    </span>
                </li>
                <ul className="list-unstyled ps-3 mt-3">
                    {tags.map((tag, index) => (
                        <li key={index} className="mb-2">
                            <Link href="/" className={`nav-link ${activeTab === tag.name ? 'active' : ''} link-dark d-flex align-items-center`} onClick={() => setActiveTab(tag.name)}>
                                <i className={`bi bi-dot ${tag.colorClass} me-2 fs-2`}></i>
                                {tag.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
            <div className="mt-auto d-flex">
                <AddTaskModal />
            </div>
        </div>
    );
}

export default Sidebar;