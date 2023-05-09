# GoIT Test Task

This project was made according to this
<a href="https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=7-89&t=1kwI2zuxzKOcnC0s-0">layout</a>
and using React, Html, Css (styled components
(<a href="https://emotion.sh/docs/introduction">Emotion</a>) and
<a href="https://mui.com/">Material UI </a> ),
<a href="https://redux-toolkit.js.org/">Redux Toolkit</a> and
<a href="https://redux-toolkit.js.org/rtk-query/overview">RTK Query.</a>

Performs the function of displaying user cards with the number of their tweets
and followers. It is possible to subscribe to one of the users and make a filter
based on not yet subscribed and subscribed users. There is navigation to the
Home page and Tweets.

!!! The "Load more" button only appears when you select the "all" filter option.

## How I deploy this project

I did everything according to this
<a href="https://github.com/gitname/react-gh-pages">instruction</a>

1. Install the gh-pages npm package: <br>

```shell
$ npm install gh-pages
   --save-dev
```

2. In file package.json add fields: <br>

    ```shell
    "homepage":"https://verado-batsu.github.io/goit-test-task"
    ```

3. In file package.json add scripts: <br>

```shell
 "predeploy": "npm run build"
   <br> "deploy": "gh-pages -d build"
```

4. Push the React app to the GitHub repository <br>

```shell
$ npm run
   deploy
```
