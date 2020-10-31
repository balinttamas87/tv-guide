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
### `yarn coverage`
which will run `yarn test  --coverage --verbose --watchAll=false`.
You can find a html file where you can better examine the coverage.
It is located in `/coverage/lcov-report/index.html` .

## UI and UX improvements

- On smaller screens the date can be selected by navigating backwards and forwards with buttons while on larger screen the dates are listed right next to each other. Buttons should be disabled when there is no previous or next date. Also, only the schedules of the last selected date would be set / displayed for the user.
This is so that no matter how fast they click they always receive the expected schedule.
- Displaying a "timeline" so users can see around what time an airing / program starts and ends.
- Indicate loading while fetching schedules to be displayed.
- Implemented infinite scrolling with windowing so it would be more convenient for users to navigate and possibly rendering the contents would be faster as well.

## Some things that could be improved or added
- Improve performance of rendering schedules and store them for offline usage with service workers.
- Ability to filter by service genre / program genre.
- Ability to save favourite channels and filter by favourites or lock them at the top of the list.
- SVG icons for the forward and backward buttons.
- Load schedules starting from the current time.
- Images could be in webp format.
- Would be nice to only query the services and schedules that we need to render within the window via GraphQL.
- Error handling (i.e: when there is no response from the server we could show a dialog to the user and let them know there has been an issue and what action they could take). For this we could compose a new modal from our <Modal /> component or use a snackbar instead.
- Increased test coverage and better tests.
- Better CSS (store values like colours, fonts, breakpoints as if we were using a design system)
- `<ServiceScheduleList />` component could be broken down into smaller pieces. (i.e: extract `<Row />`)

There are many things that could be improved. However, I would not want to make this readme too long. I did some research about tv guides. I have examanined around 10 of them. Most of them in the UK and some international ones in different countries. My favourite would be a combination of the following 3 when it comes to UI/UX.
https://www.tvguide.com/listings/ (easy on the eyes) , https://www.sky.com/tv-guide/, (reliable) https://www.freeview.co.uk/tv-guide (different layouts)


## Things that I have experimented with for the first time
- react-window for windowing
- dayjs to make working with dates and date like strings easier and cleaner
- redux-toolkit combined with TypeScript (I have tried redux-toolkit before without TypeScript)
- CSS Modules
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
