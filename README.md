[To start the project](#to-start-the-project)

[The following has been built or done for this technical test](#the-following-has-been-built-or-done-for-this-technical-test)

[Things that I have experimented with for the first time](#things-that-i-have-experimented-with-for-the-first-time)

[Some things that could be improved or added](#some-things-that-could-be-improved-or-added)

## To start the project

Clone this repo, `cd` into it and
run 
### `yarn`
from the terminal to install dependencies listed in package.json.

Once all packages are installed you can run 
### `yarn start`

The app will run on the following url: [http://localhost:3000](http://localhost:3000).

To run the tests run
### `yarn test -- --coverage --verbose
(you might need to hit the letter "a" to run all tests when prompted)

## The following has been built or done for this technical test
In the following video you can watch the app in action and all its features

{link for video coming sooon}

- Display all channels in a list format
- A given channel's airings (programs) are displayed in a row and users can navigate through them by scrolling.
- Navigating through seven days of scheduled airings by selecting a date on larger screens and clicking either next or previous buttons on smaller screens.
- Details of a given airing (program) can be viewed in a modal by clicking on the airing. The modal can only be closed by clicking the Close button.
- Some tests for the Modal component (Jest + react-testing-library)
- To make rendering faster I have chosen a library called react-window. It is working. 
	However, currently I am not using it in a performant way. Possibly when merging the existing schedules array with the newly fetched schedules there is a 					performance bottleneck.

## Things that I have experimented with for the first time
- react-window for windowing
- dayjs to make working with dates and date like strings easier and cleaner
- redux-toolkit combined with TypeScript (I have tried redux-toolkit before without TypeScript)


## Some things that could be improved or added
- Find a better way of updating the schedules list to make sure rendering does not come to halt
- Ability to filter by service genre



## Project has been bootstrapped with CRA using Redux Toolkit and TypeScript template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
