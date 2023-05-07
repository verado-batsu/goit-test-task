import { ButtonTweets } from '../ButtonTweets/ButtonTweets';
import { transformNumberComma } from '../../utils/transformNumberComma';
import GoitLogo from '../../assets/images/goit-logo.png';
import CardBg from '../../assets/images/card-bg.png';

export function TweetCard({ user, getBtnStatus }) {
    const { user: name, tweets, avatar, followers } = user;
    return (
        <li>
            <img className="goit-logo" src={GoitLogo} alt="GoIT logo" />
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
                    {`${transformNumberComma(tweets)} `}
                    tweets
                </p>
                <p>
                    {`${transformNumberComma(followers)} `}
                    followers
                </p>
                <ButtonTweets getBtnStatus={getBtnStatus} user={user} />
            </div>
        </li>
    );
}
