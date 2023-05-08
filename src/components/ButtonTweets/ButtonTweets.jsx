import { useState } from 'react';
import { Button } from './ButtonTweets.styled';
import {
    getUserStatusFromStorage,
    setUserStatusToStorage,
} from '../../utils/localeStorageApi';

export function ButtonTweets({ getBtnStatus, user, updateLoading }) {
    const [btnStatus, setBtnStatus] = useState(() => {
        return getUserStatusFromStorage(user);
    });

    function handleClick() {
        setBtnStatus(prevState => {
            setUserStatusToStorage(user, !prevState);
            getBtnStatus(user, !prevState);
            return !prevState;
        });
    }

    return (
        <Button
            btnStatus={btnStatus}
            onClick={handleClick}
            type="button"
            disabled={updateLoading}
        >
            {btnStatus ? 'Following' : 'Follow'}
        </Button>
    );
}
