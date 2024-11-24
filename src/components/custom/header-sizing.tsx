"use client";

import { useEffect, useState } from 'react';

function HeaderSizing() {
    const [headerSize, setHeaderSize] = useState(100); // Start with default value of 100

    useEffect(() => {
        const header = document.querySelector("header");
        const size = (header?.clientHeight || 0) + 35; // Add 100 to header height
        setHeaderSize(size);
    }, []); // Runs only on component mount

    return (
        <div style={{ marginTop: `${headerSize}px` }}>
        </div>
    );
}

export default HeaderSizing;
