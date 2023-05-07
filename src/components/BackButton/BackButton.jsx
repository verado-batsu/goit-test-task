import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/');
    }
    return (
        <Button variant="contained" color="secondary" onClick={handleClick}>
            {'<'} Back to Home page
        </Button>
    );
}
