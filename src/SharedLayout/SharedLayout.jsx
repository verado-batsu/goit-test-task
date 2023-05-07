import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
import { Container } from '@mui/material';

export const SharedLayout = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
            </main>
        </>
    );
};
