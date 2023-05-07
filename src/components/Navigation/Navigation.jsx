import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Link } from './Navigation.styled';

export function Navigation() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.08rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Test Task
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            gap: 2,
                        }}
                    >
                        <Link to="/">Home</Link>

                        <Link to="/tweets">Tweets</Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
