# Dragons API

This is an API about dragons, designed for a game in progress.

[![CircleCI](https://circleci.com/gh/Framinus/dragons-api/tree/master.svg?style=svg)](https://circleci.com/gh/Framinus/dragons-api/tree/master)

## Endpoints

This API is deployed at [https://dragons-game-api.herokuapp.com](https://dragons-game-api.herokuapp.com). Please use these paths to retrieve data from the api.

- Retrieve all stock dragons from the database for a given level. Stock dragons currently are level 1, 2, or 3.


```
GET - /dragons/level/:level
```

- Retrieve a dragon by id:

```
GET - /dragons/:id
```

- Get a random dragon from the stock list:

```
GET - /dragons/random/:level
```

## Author

[James McCormack](https://github.com/Framinus)

## License

This project is licensed under the MIT License.
