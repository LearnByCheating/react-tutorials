# Code from the React Tutorials

This directory holds a React app with the Vite dev server. It holds the code from the vast majority of the React tutorials. It is grouped by CheatSheet category with folders in the src directory for:

- practice-props
- practice-state
- practice-reducer
- practice-effect
- practice-refs
- practice-context
- practice-react-router
- practice-react-query

## View the code for a specific tutorial

To practice code from one of the above categories:
1. go to the src/main.js file. Uncomment the practiceCategory you want to practice. 

2. Then open the practiceCategory App.jsx file and uncomment the example you want to view.

For example to view the State category's Counter example code:
1. First select the practice-state category:
  - In the src/main.js file uncomment `import PracticeCategory from './practice-state/App.jsx';`
  - Make sure all the other practiceCategory imports are commented out otherwise you will get an error.

2. Then select the Counter example:
  - Go to the src/practice-state/App.jsx file and uncomment the import file for `import Practice from './Counter';`
  - Make sure all the other Practice imports are commented out or you will get an error. 

## Start the Server
To start the server, in the Terminal go to the practice-react-topics directory and run: `npm run dev`

Stop the server from the Terminal by entering Control+C

## API-simulator
Some tutorials use the api-simulator server app. In those cases open a Terminal window in the api-simulator directory and run the server with: `npm run dev`

That server will run at http://localhost:4000.

To see if it is working, in the browser go to: http://localhost:4000/api/testme

You should see a message in the browser that says: "This route is for testing"

To stop the server from the Terminal enter Control+C