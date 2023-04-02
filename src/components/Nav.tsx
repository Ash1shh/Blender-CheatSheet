import React from 'react';

function Nav() {
    return (
        <nav
            className="flex flex-row items-center justify-between text-gray-800 bg-purple-50        px-4 py-5">
            <div className="flex flex-col">
                <div className="text-violet-700 font-semibold text-xl">
                    <a href="">
                        Blender Cheatsheet
                    </a>
                </div>
                <span className="text-sm  font-thin">3.0 Keyboard Shortcuts </span>
            </div>
            <ul className="flex flex-row items-center text-sm">
                <li className="flex pr-5 lg:pr-10 font-thin text-sm lg:text-lg underline">
                    <a href="">v1.2</a>
                </li>
                <li className="flex flex-col">
                    <a href="/">
                        <i className="fab fa-github text-violet-700 text-4xl"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;