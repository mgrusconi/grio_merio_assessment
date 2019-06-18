# Giro Merio Assessment

## Instructions for running the project with Docker

The project has a virtual environment made with Docker. 

### Requirements 

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) Docker >= 17.05.0
- [Docker Compose](https://docs.docker.com/compose/) Docker-Compose >= 1.8.0

### Development

1. Go into the project folder and execute the `docker-compose up --build` command. This command will install all necessary packages into the container and leave the server ready to be used
2. Open the browser at http://localhost:4200/
3. To enter the container run `docker exec -it (container name) bash` command

## EndPoints

### Node Backend

* Swagger: In the path http://localhost:3000/ has all the documentation of the APIs.

### PHP Backend

* Swagger: In the path http://localhost:8000/api/doc has all the documentation of the APIs.

### /app/github/{profile}/{type} - Method that allows to obtain resources from github.

**Request (by id)**
``` 
/app/github/symfony/repos
``` 

**Response (code 200)**
``` 
[
    {
        "avatar": "https://avatars3.githubusercontent.com/u/143937?v=4",
        "owner": "symfony",
        "full_name": "symfony/event-dispatcher",
        "forks": 38,
        "open_issues": 0,
        "stargazers": 6100
    },
    {
        "avatar": "https://avatars3.githubusercontent.com/u/143937?v=4",
        "owner": "symfony",
        "full_name": "symfony/finder",
        "forks": 34,
        "open_issues": 0,
        "stargazers": 6066
    }
]
``` 

**Request (by id)**
``` 
/app/github/symfony/events
``` 

**Response (code 200)**
``` 
{
    "message": "To Do Implementation"
}
``` 

**Request (by id)**
``` 
/app/github/symfony/bad
``` 

**Response (code 200)**
``` 
{
    "message": "Unknown method"
}
``` 

## Testing

### Front
``` 
Run inside the front folder outside the Docker Container.
``` 
* The command `np test` Run the test with Karma and Jasmin.

### Node Backend
``` 
Run commands inside Docker Container
``` 
* The command `npm test` Run the test with Mocha and Chai.
* The `npm run test:watch` Command run the test with Mocha and Chai and will watch the file changes and run the test automatically.

### PHP Backend
``` 
Run commands inside Docker Container
``` 
* The command `phpunit` Run the test with PHPUnit.

## Frameworks

### Front
- "angular": "~8.0.0"

### Node Backend
- "express": "^4.13.4"

### PHP Backend
- "symfony": "3.4.*"
