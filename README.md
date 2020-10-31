[To start the project](#to-start-the-project)

[To run the tests](#to-run-the-tests)

[UI and UX improvements](#ui-and-ux-improvements)

[Some things that could be improved or added](#some-things-that-could-be-improved-or-added)

[Things that I have experimented with for the first time](#things-that-i-have-experimented-with-for-the-first-time)

## To start the project

Clone this repo, `cd` into it and
run 
### `yarn`
from the terminal to install dependencies listed in package.json.

Once all packages are installed you can run 
### `yarn start`

The app will run on the following url: [http://localhost:3000](http://localhost:3000).

## To run the tests
Run
### `yarn test -- --coverage --verbose`
(you might need to hit the letter "a" to run all tests when prompted)

## UI and UX improvements

- On smaller screens the date can be selected by navigating backwards and forwards with buttons while on larger screen the dates are listed right next to each other. Buttons should be disabled when there is no previous or next date. Also, only the schedules of the last selected date would be set / displayed for the user.
This is so that no matter how fast they click they alwasys receive the expected schedule.
- Displaying a "timeline" so users can see around what time an airing / program starts and ends.
- Indicate loading while fetching schedules to be displayed
- Tried to implement infinite scrolling with windowing so it would be more convenient for users to navigate and possibly rendering the contents would be faster as well.

## Some things that could be improved or added
- Improve performance of rendering schedules and store them for offline usage with service workers
- Ability to filter by service genre / program genre
- Ability to save favourite channels and filter by favourites or lock them at the top of the list
- Load schedules starting from the current time
- images could be in webp format
- would be nice to only query the services and schedules that we need to render within the window via graphQL


## Things that I have experimented with for the first time
- react-window for windowing
- dayjs to make working with dates and date like strings easier and cleaner
- redux-toolkit combined with TypeScript (I have tried redux-toolkit before without TypeScript)
- react-loading-skeleton to indicate loading of schedules


## Project has been bootstrapped with CRA using Redux Toolkit and TypeScript template
```npx create-react-app my-app --template redux-typescript)```

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
