import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const SharedLayout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};
