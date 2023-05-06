import { Box, Button, CircularProgress } from '@mui/material';

import { useGetUsersQuery, useUpdateUserMutation } from '../../redux/usersApi';
import { UsersList } from './Tweets.styled';
import GoitLogo from '../../assets/images/goit-logo.png';
import CardBg from '../../assets/images/card-bg.png';
import { transformNumberComma } from './transformNumberComma';
import { ButtonTweets } from './ButtonTweets/ButtonTweets';
import { useEffect, useState } from 'react';
import { addUsers, updateUsers } from '../../redux/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectFilteredUsers } from '../../redux/selectors';
import Filter from '../Filter/Filter';

function filterUser(users, filter) {
    switch (filter) {
        case filter.follow:
            return users.filter(({ following }) => following === false);
        case filter.following:
            return users.filter(({ following }) => following === true);
        default:
            return users;
    }
}

export function Tweets() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { data, error, isFetching } = useGetUsersQuery(page);
    const [updateUser, result] = useUpdateUserMutation();

    let users = useSelector(selectFilteredUsers);
    const filter = useSelector(selectFilter);
    const filteredUsers = filterUser(users, filter);
    console.log(filteredUsers);
    console.log(filter);

    useEffect(() => {
        if (data) {
            const users = data.map(user => {
                const btnStatus =
                    localStorage.getItem(`btnStatus${user.id}`) === 'false'
                        ? false
                        : true;
                return {
                    ...user,
                    following: localStorage.getItem(`btnStatus${user.id}`)
                        ? btnStatus
                        : false,
                };
            });
            dispatch(addUsers(users));
        }
    }, [data, dispatch]);

    function getBtnStatus(btnStatus, user) {
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
            <Filter />
            <UsersList>
                {isFetching && !filteredUsers && <CircularProgress />}
                {filteredUsers &&
                    filteredUsers.map(user => {
                        const {
                            id,
                            user: name,
                            tweets,
                            avatar,
                            followers,
                        } = user;
                        return (
                            <li key={id}>
                                <img
                                    className="goit-logo"
                                    src={GoitLogo}
                                    alt="GoIT logo"
                                />
                                <div className="img-wrapper">
                                    <img src={CardBg} alt="card background" />
                                    <img
                                        width="62"
                                        height="62"
                                        className="user-avatar"
                                        src={avatar}
                                        alt={name}
                                    />
                                </div>
                                <div className="white-line"></div>
                                <div className="user-info">
                                    <p>
                                        {`${transformNumberComma(tweets)} `}{' '}
                                        tweets
                                    </p>
                                    <p>
                                        {`${transformNumberComma(followers)} `}
                                        followers
                                    </p>
                                    <ButtonTweets
                                        getBtnStatus={getBtnStatus}
                                        user={user}
                                    />
                                </div>
                            </li>
                        );
                    })}
            </UsersList>
            {/* <button onClick={handleClick} disabled={page === 1}>
                Prev
            </button>
            <button onClick={handleClick} disabled={page === 4}>
                Next
            </button> */}
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleClick}
                    disabled={page === 4}
                >
                    Load More
                </Button>
            </Box>
        </>
    );
}
