import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
import { Suspense } from 'react';
import { Box, CircularProgress, Container } from '@mui/material';

export const SharedLayout = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Container maxWidth="xl">
                    <Suspense
                        fallback={
                            <Box
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        }
                    >
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </>
    );
};
