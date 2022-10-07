# API Server

## Directory for React Native API

> This server is a simple JSON server that uses a `db.json` file to store data.

## Initialize Project

> `api-server` was copied from the [intro-to-graphql](https://github.com/armyguyinfl/intro-to-graphql) intro after completing all the labs.

> The `api-server` was created in lab 5 (step 7) in [Professional-GraphQL-Labs-v1.0.pdf](https://github.com/armyguyinfl/intro-to-graphql/blob/training/create-fitness-tracker-app/docs/Professional-GraphQL-Labs-v1.0.pdf)

---

> Initial Steps: Execute each command in order one-by-one

```bash
mkdir api-server
cd api-server
npm init
npm i json-server
```

> Edit Step: Modify the `api-server/package.json` script

```json
"start":"json-server --watch db.json --port 3001"
```

> Final Step: Result of Script Should Look

```json
...
...
"scripts": {
  "start": "json-server --watch db.json --port 3001"
},
...
...
```

> The intro to react native labs can be found within this repo at: [Professional-React-Native-Labs-v1.0.pdf](../docs/Professional-React-Native-Labs-v1.0.pdf)

## Start Project

> NOTE: You should not have to run npm install as it should have automatically been executed. If it was not, manually run:

```
npm install
```

> Check Step: Ensure you have a `db.json` file with data copied from our completed [intro-to-graphql](https://github.com/armyguyinfl/intro-to-graphql) labs.

```json
{
  "coders": [
    {
      "id": 1,
      "name": "Daniel 🇵🇱",
      "description": "Daniel Kowalec is a coder",
      "activities": [1]
    },
    {
      "id": 2,
      "name": "John 🇺🇸",
      "description": "John Doe is a coder",
      "activities": [1, 2]
    }
  ],
  "activities": [
    {
      "id": 1,
      "name": "Coding",
      "description": "Coding is fun"
    }
  ]
}
```

> Start Server Step: If you have all dependencies

```node
npm start
```

> Final: Result output should show:

```ts
Loading db.json
  Done

  Resources
  http://localhost:3001/coders
  http://localhost:3001/activities

  Home
  http://localhost:3001

  Type s + enter at any time to create a snapshot of the database
  Watching...

GET /coders 200 5.271 ms - -
```
