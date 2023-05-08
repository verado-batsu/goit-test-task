import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
    useGetUsersQuery,
    useUpdateUserMutation,
} from '../../services/usersApi';
import { UsersList } from './Tweets.styled';

import { addUsers, updateUsers } from '../../redux/filteredUsers/usersSlice';
import { selectFilter, selectFilteredUsers } from '../../redux/selectors';
import { getUserStatusFromStorage } from '../../utils/localeStorageApi';
import { TweetCard } from '../TweetCard/TweetCard';

export function Tweets() {
    const dispatch = useDispatch();

    const filteredUsers = useSelector(selectFilteredUsers);
    const [page, setPage] = useState(() => {
        const page = filteredUsers.length / 3;
        return page === 0 ? page + 1 : page;
    });

    const { data, error, isFetching } = useGetUsersQuery(page);
    const [updateUser, { error: updateError }] = useUpdateUserMutation();

    const filter = useSelector(selectFilter);

    useEffect(() => {
        if (data) {
            const users = data.map(user => {
                return {
                    ...user,
                    following: getUserStatusFromStorage(user),
                };
            });
            dispatch(addUsers(users));
        }
    }, [data, dispatch]);

    function getBtnStatus(user, btnStatus) {
        if (btnStatus) {
            const followers = user.followers + 1;
            updateUser({ ...user, followers });
            dispatch(
                updateUsers({ id: user.id, status: btnStatus, followers })
            );
        } else {
            const followers = user.followers - 1;
            updateUser({ ...user, followers });
            dispatch(
                updateUsers({ id: user.id, status: btnStatus, followers })
            );
        }
    }

    function handleClick() {
        setPage(prev => {
            return prev + 1;
        });
    }

    return (
        <>
            {error && Notify.failure(`Code: ${error.status} ${error.data}`)}
            {updateError && Notify.failure(updateError.error)}
            {isFetching && !data && (
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            {filteredUsers.length === 0 && !isFetching && !error && (
                <Typography
                    sx={{
                        textAlign: 'center',
                    }}
                    variant="h4"
                    component="p"
                >
                    No users with filter "{filter}"
                </Typography>
            )}
            <UsersList>
                {filteredUsers &&
                    filteredUsers.map(user => {
                        return (
                            <TweetCard
                                key={user.id}
                                user={user}
                                getBtnStatus={getBtnStatus}
                            />
                        );
                    })}
            </UsersList>
            {!error && filter === 'ALL' && (
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleClick}
                        disabled={page >= 4 || isFetching}
                    >
                        {isFetching ? 'Loading' : 'Load More'}
                    </Button>
                </Box>
            )}
        </>
    );
}
