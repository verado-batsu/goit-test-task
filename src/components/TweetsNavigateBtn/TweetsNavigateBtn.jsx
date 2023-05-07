import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function TweetsNavigateBtn({ children }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/tweets');
    }
    return (
        <Button variant="contained" color="secondary" onClick={handleClick}>
            {children}
        </Button>
    );
}
