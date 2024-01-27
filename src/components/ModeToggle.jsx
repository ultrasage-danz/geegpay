import React, { useState } from 'react';

const ModeToggle = () => {
    const [mode, setMode] = useState('light');

    const toggleMode = (selectedMode) => {
        setMode(selectedMode);
    };

    return (
        <div id="mode-toggle" className='cursor-pointer space-y-2'>
            <svg className={`light-mode-toggle block relative ${mode === 'light' ? 'active-mode' : ''}`} width="64" height="64" xmlns="http://www.w3.org/2000/svg" onClick={() => toggleMode('light')}>
                <circle cx="9.3" cy="9.4" r="9.6" fill={mode === 'light' ? '#34CAA5' : 'none'} />
                <path  class="dark:fill-white fill-white mt-3" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                <path class="dark:fill-white fill-white mt-3" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
            </svg>

            <svg className={`dark-mode-toggle block relative ${mode === 'dark' ? 'active-mode' : ''}`} width="64" height="64" xmlns="http://www.w3.org/2000/svg" onClick={() => toggleMode('dark')}>
                <circle cx="9.7" cy="9.1" r="9.6" fill={mode === 'dark' ? '#34CAA5' : 'none'} />
                <path class="dark:fill-white fill-white" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                <path class="dark:fill-white fill-white" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
            </svg>
        </div>
    );
};

export default ModeToggle;
