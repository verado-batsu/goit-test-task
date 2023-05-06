import { Container } from '@mui/material';
import { useGetUsersQuery } from '../../redux/usersApi';
import { UsersList } from './Tweets.styled';
import GoitLogo from '../../assets/images/goit-logo.png';
import CardBg from '../../assets/images/card-bg.png';

export function Tweets() {
    const { data, error, isFetching } = useGetUsersQuery();
    // console.log(error);
    // console.log(isFetching);
    return (
        <Container maxWidth="xl">
            <UsersList>
                {data &&
                    data.map(({ id, user, tweets, avatar, followers }) => {
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
                                        alt={user}
                                    />
                                </div>
                                <div className="white-line"></div>
                                <div className="user-info">
                                    <p>{user}</p>
                                    <p>Tweets: {tweets}</p>
                                    <p>Followers: {followers}</p>
                                    <button type="button">Follow</button>
                                </div>
                            </li>
                        );
                    })}
            </UsersList>
        </Container>
    );
}
