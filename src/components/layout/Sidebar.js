import React from "react";
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendar,
    FaRegCalendarAlt
} from 'react-icons/fa';

export const Sidebar = () => (
    <div className='sidebar' data-testid='sidebar'>
        <ul className='sidebar__generic'>
            <li>
                <span>
                    <FaInbox />
                </span>
                <span>Inbox</span>
            </li>
            <li>
                <span>
                    <FaRegCalendar />
                </span>
                <span>Today</span>
            </li>
            <li>
                <span>
                    <FaRegCalendarAlt />
                </span>
                <span>Next 7 days</span>
            </li>
        </ul>
        <div className='sidebar__middle'>
            <span>
                <FaChevronDown />
            </span>
            <span>Projects</span>
        </div>
        <ul className='sidebar__Projects'>
            Projects will be here
        </ul>
        WILL ADD PROJECT COMPONENTS HERE
    </div>
)