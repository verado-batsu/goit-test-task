import { Box, Link, Typography } from '@mui/material';
import { TweetsNavigateBtn } from '../components/TweetsNavigateBtn/TweetsNavigateBtn';

export function Home() {
    return (
        <Box
            sx={{
                paddingTop: 15 / 8,
            }}
        >
            <Typography
                sx={{
                    marginBottom: 10 / 8,
                }}
                variant="h5"
                component="p"
            >
                This project was made using React, Html, Css (styled components
                (
                <Link
                    href="https://emotion.sh/docs/introduction"
                    target="_blank"
                >
                    Emotion
                </Link>
                ) and{' '}
                <Link href="https://mui.com/" target="_blank">
                    Material UI
                </Link>{' '}
                ),{' '}
                <Link href="https://redux-toolkit.js.org/" target="_blank">
                    Redux Toolkit
                </Link>{' '}
                and{' '}
                <Link
                    href="https://redux-toolkit.js.org/rtk-query/overview"
                    target="_blank"
                >
                    RTK Query.
                </Link>
            </Typography>
            <Typography
                sx={{
                    marginBottom: 10 / 8,
                }}
                variant="h6"
                component="p"
            >
                Performs the function of displaying user cards with the number
                of their tweets and followers. It is possible to subscribe to
                one of the users and make a filter based on not yet subscribed
                and subscribed users. There is navigation to the Home page and
                Tweets.
            </Typography>
            <TweetsNavigateBtn>Test it {'>'}</TweetsNavigateBtn>
        </Box>
    );
}
