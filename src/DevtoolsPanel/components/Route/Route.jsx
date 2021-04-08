import React from 'react';
import { useEventrixState } from "eventrix/react";

const Route = ({ children, name }) => {
    const [currentRoute] = useEventrixState('currentRoute');
    if (name !== currentRoute) {
        return null;
    }
    return (
        <>
            {children}
        </>
    )
};

export default Route;
