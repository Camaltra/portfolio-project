# Hippo'nterview

Version 1.4.0

## Introduction

#### Deployed site

[Deployed site](https://htw.mickael-boillaud.tech) (Got some issues, and server might not be up for long)

#### Blog Article

[Blog Article]() (Not up for now)

#### Team LinkedIn

[Mickael Boillaud LinkedIn](https://www.linkedin.com/in/mickael-boillaud/)

#### Demo video

[Demo video]() (Not up for now)

## Description

The main goal of Hippo'nterview is to give to all Holberton School's students a tool to be ready for cooding interview.
The tool is separate in two part:

- The full partern course
- The random question

The full patern course have been based on the [blog post](https://www.techinterviewhandbook.org/best-practice-questions/) of a ex FaceBook recruiter.

There are some other platforms which offers the same service, but with Hippo'nterview, all the solutions are free for holberton school students, and work on the same way as the school.

## Installation & Dev Usage

Clone the repo.

```
git clone git@github.com:Camaltra/portfolio-project.git
```

Create directory in server-checker/src/ called checker_buff

Create a .env file at the root of the server and server-checker folders, with:

- server-checker (API key for the [judge0 API](https://judge0.com)):
  - X_RAPIDAPI_KEY
  - X_RAPIDAPI_HOST
  - NODE_APP_IP (Only for deployment purpose | It will be the cors header)
- server
  - Google Cloud Auth
    - CLIENT_ID
    - CLIENT_SECRET
  - Mongo Database
    - MONGO_URL
  - Coockie session key
    - COOKIE_KEY_1
    - COOKIE_KEY_2
  - SendGrid API control ([SendGrid](https://sendgrid.com))
    - SENDGRID_API_KEY
    - SENDGRID_EMAIL
    - SENDGRID_SIGNUP_TEMPLATE
  - CORS policy (Only for deployment purpose)
    - SERVER_CHECKER_IP
    - REACT_APP_IP
- client
  - REACT_APP_API_URL (Only for deployment purpose, to fetch data to the right API IP)

Then, for now, there is not global installation and server starting. So go to each root, server, server-checker, client and run `npm install`. To finish, just start each server in a terminal with `npm run watch-dev` for the two server side, and `npm run start-dev` for the client side.

A futur script will be added a the end of the project to join all these operations into a single one.

## Architecture

![plot](public/architecture.png "Title")

All the architecture is based on a MVC model, and use differents externes tools, as Atlas Mongo DB, Judge0 API and google auth.

## Bugs

Not bugs know from the API V1. If you discover any bug, feel free to reach me, so I'll find a way to fix it.

Bug on the front-end part, Modal of checking tasks not really good align on the center-center of the page

## Deployment

There is files to deploy theses 3 servers.

For both server and server-checker, clone the repo into your running server, add the .env. Cd into the /deployement/server or deployement/server-checker and run `docker-compose up --build -d`. Obviously, you have to have docker, docker compose and git on the server.

For the front-end part, no script or docker container are actually created, but really easy to do by install nginx, and build the client into the /war/www/html.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Related projects

## License

[MIT](https://choosealicense.com/licenses/mit/)
