# State Of Mind
A web app to check in with how you are feeling

A React front end served by a simple Express server.

### Technologies used

- React
- Typescript
- Express
- Mocha & Chai (for testing the back end)
- Styled components (for the absolutely excellent styling)


#### Quickstart

```
# Clone the repository
git clone https://github.com/cjmontgom/state-of-mind

# Go inside the server directory
cd state-of-mind/server

# Install dependencies
npm install (or yarn install)

# Run tests
npm test

# Start the development server
npm run dev

# Go to the client directory
cd ../client

# Start in dev mode
npm run dev

# Bundle for production
npm build
```


#### To-do 
 - add SQL store
 - add dateTime, amount of check ins, and average mood to insights
 - add testing for the front end state?
 - model out the user and have more properties like email and name
 - have a sign up and sign in
 - have a landing page which explains what the app is
 - make it production ready by pointing the server to bundled front end when not in dev mode

