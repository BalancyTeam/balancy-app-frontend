import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';



export const Layout = () => {
    return (
        <div>
            <header><h1>Balance your fucking life</h1></header>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    );
};