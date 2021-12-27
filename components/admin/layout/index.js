import React from 'react';
import Layout from './Layout';



function index({children}) {

    
    return (
        <Layout>
            {children}
        </Layout>
    );
}

export default index;