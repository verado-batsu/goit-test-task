import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '@mui/material';

export const SharedLayout = () => {
    return (
        <>
            <Navigation />
            <Container maxWidth="xl">
                <main>
                    <Outlet />
                </main>
            </Container>
        </>
    );
};
