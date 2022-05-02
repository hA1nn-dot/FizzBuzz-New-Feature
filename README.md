# FizzBuzz-New-Feature
Exercise 4 week 4 from LaunchX BackEnd mission
## New feature description
Create an endpoint to get a number and apply validation of fizzBuzz.

## Endpoints
| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/1` | `{score: 1, trick: 1}` |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/3` | `{score: 3, trick: "Fizzz"}` |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/5` | `{score: 5, trick: "Buzz"}` |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/15` | `{score: 15, trick: "Fizzbuzz"}` |

## Actual Design
``` mermaid
graph TD;
    Reader-->ExplorerService;
    ExplorerService-->ExplorerController;
    FizzBuzzService-->ExplorerController;
    ExplorerController-->Server;

```

## New feature
``` mermaid
graph TD;
    FizzBuzzService-->ExplorerController;
    ExplorerController-->Server;

```

## Results
| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/3` | ![image](https://user-images.githubusercontent.com/48420854/166312288-aeef972d-d2a4-4f98-a60c-07c28844289e.png) |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/5` | ![image](https://user-images.githubusercontent.com/48420854/166312452-2288741a-0e97-40f4-921a-82b8d14537e1.png) |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/15` | ![image](https://user-images.githubusercontent.com/48420854/166312512-6aa9870b-ec15-4c9a-8fd8-fa0ca8d33d0b.png) |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/1` | ![image](https://user-images.githubusercontent.com/48420854/166312552-e9de1564-d38d-40c9-bae9-07d563918e15.png) |


## Dependences 
- Express
- Eslint
- Jest
