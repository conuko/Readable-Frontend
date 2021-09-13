# Readable

Readable is a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

The app is built with React and Redux and styled with Tailwind.css.
The API is built with Axios.

## Summary

- [Getting Started](#getting-started)
  - [Yarn Star](#yarn-start)
  - [Yarn Build](#yarn-build)
  - [Yarn Eject](#yarn-eject)
- [Views of the App](#views-of-the-app)
- [Data](#views-of-the-app)
  - [Categories](#categories)
  - [Posts](#posts)
  - [Comments](#comments)
- [Create React App](#create-react-app)
- [License](#license)

## Getting Started

To get started right away:

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Views of the app

The Would You Rather app has a couple of different pages:

- Home at page "/".
- Post detailed at page "/post/:id".
- Edit Post at page "/post/edit/:id".
- Add new Post at page "/add".
- Categories:
    - React  at "/category/react"
    - Redux at "/category/redux"
    - Udacity at "/category/udacity"

## Data
There are three types of objects stored on the server:

- Categories
- Posts
- Comments

### Categories

The server supports a small, fixed number of categories that users can put posts into. Categories are simple objects containing a name and a URL path (usually the same string). The server does not have methods for creating/modifying/deleting these categories. If you wish to add to the categories for your app, simply add your desired object to the Array in categories.js in the provided server.

### Posts

Posts are the building blocks of your application. Posts include:

| Attribute | Type    | Description                                                                                      |
| --------- | ------  | ------------------------------------------------------------------------------------------------ |
| id        | String  | Unique identifier                                                                                |
| timestamp | Integer | Time created - default data tracks this in Unix time. You can use Date.now() to get this number  |
| title     | String  | Post title                                                                                       |
| author    | String  | Post author                                                                                      |
| category  | String  | Should be one of the categories provided by the server                                           |
| voteScore | Integer | Net votes the post has received (default: 1)                                                     |
| deleted   | Boolean | Flag if post has been 'deleted' (inaccessible by the front end), (default: false)                |

### Comments

Comments are attached to parent posts. They include:

| Attribute       | Type    | Description                                                                                      |
| --------------- | ------  | ------------------------------------------------------------------------------------------------ |
| id              | String  | Unique identifier                                                                                |
| parentId        | String  | id of the parent post                                                                            |
| timestamp       | Integer | Time created - default data tracks this in Unix time. You can use Date.now() to get this number  |
| body            | String  | Comment body                                                                                     |
| author          | String  | Comment author                                                                                   |
| voteScore       | Integer | Net votes the post has received (default: 1)                                                     |
| deleted         | Boolean | Flag if post has been 'deleted' (inaccessible by the front end), (default: false)                |
| parentDeleted   | Boolean | Flag for when the the parent post was deleted, but the comment itself was not.                   |

This application is anonymous, with _no_ authentication or authorization. There are no user objects, and comments and posts accept any username/name for creation and editing.

The server is very light weight. It performs zero data validation to enforce the above data types. Make sure you are using the correct types when sending requests to the server.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License

MIT License - see the [LICENSE.md](LICENSE.md) file for
details
