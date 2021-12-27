import React from 'react';
import MainContentArea from './MainContentArea';

function index({children}) {
    return (
        <MainContentArea>
            {children}
        </MainContentArea>
    );
}

export default index;