import { useState } from 'react';
import { Button } from './ButtonTweets.styled';

export function ButtonTweets({ getBtnStatus, user }) {
    const [btnStatus, setBtnStatus] = useState(() => {
        const btnStatus =
            localStorage.getItem(`btnStatus${user.id}`) === 'false'
                ? false
                : true;
        return localStorage.getItem(`btnStatus${user.id}`) ? btnStatus : false;
    });

    function handleClick() {
        setBtnStatus(prevState => {
            localStorage.setItem(`btnStatus${user.id}`, !prevState);
            getBtnStatus(!prevState, user);
            return !prevState;
        });
    }
    return (
        <Button btnStatus={btnStatus} onClick={handleClick} type="button">
            {btnStatus ? 'Following' : 'Follow'}
        </Button>
    );
}
