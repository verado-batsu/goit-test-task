import { CircularProgress } from '@mui/material';

import { useGetUsersQuery, useUpdateUserMutation } from '../../redux/usersApi';
import { UsersList } from './Tweets.styled';
import GoitLogo from '../../assets/images/goit-logo.png';
import CardBg from '../../assets/images/card-bg.png';
import { transformNumberComma } from './transformNumberComma';
import { ButtonTweets } from './ButtonTweets/ButtonTweets';
import { useEffect, useState } from 'react';
import { addUsers } from '../../redux/usersSlice';
import { useDispatch } from 'react-redux';

export function Tweets() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { data, error, isFetching } = useGetUsersQuery(page);
    const [updateUser, result] = useUpdateUserMutation();

    useEffect(() => {
        if (data) {
            dispatch(addUsers(data));
        }
    }, [data, dispatch]);

    function getBtnStatus(btnStatus, user) {
        console.log(btnStatus);
        if (btnStatus) {
            updateUser({ ...user, followers: user.followers + 1 });
        } else {
            updateUser({ ...user, followers: user.followers - 1 });
        }
    }

    // function handleClick(e) {
    //     if (e.target.textContent === 'Next') {
    //         setPage(prev => {
    //             return prev + 1;
    //         });
    //     } else if (e.target.textContent === 'Prev') {
    //         setPage(prev => {
    //             return prev - 1;
    //         });
    //     }
    // }
    function handleClick() {
        setPage(prev => {
            return prev + 1;
        });
    }

    return (
        <>
            <UsersList>
                {isFetching && !data && <CircularProgress />}
                {data &&
                    data.map(user => {
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
            <button onClick={handleClick} disabled={page === 1 || page === 4}>
                Load More
            </button>
        </>
    );
}
