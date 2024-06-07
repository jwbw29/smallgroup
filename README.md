# Small Group Website

A website for small groups to use to easily access each other's information and event dates.

## Tech Stack

- Next.js
- Vercel Postgres
- Prisma

#### Add-ons

- Auth0
- shadcn/UI Dropdown, Avatar, Accordion
- TailwindCSS
- Clsx
- React-Icons
- Dotenv

## Screenshots

![Login](https://github.com/jwbw29/smallgroup/blob/main/public/screenshots/login.png?raw=true)
![Home](https://github.com/jwbw29/smallgroup/blob/main/public/screenshots/homeScreen.png?raw=true)
![Schedule](https://github.com/jwbw29/smallgroup/blob/main/public/screenshots/schedule.png?raw=true)
![Roster Collapsed](https://github.com/jwbw29/smallgroup/blob/main/public/screenshots/rosterCollapsed.png?raw=true)
![Roster Expanded](https://github.com/jwbw29/smallgroup/blob/main/public/screenshots/rosterExpanded.png?raw=true)
![Profile](https://github.com/jwbw29/smallgroup/blob/main/public/screenshots/profile.png?raw=true)


## Roadmap

- Add/edit Event functionality
- Add/edit Family functionality
- Ability to upload profile photo

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Created by Vercel CLI

- `NX_DAEMON`
- `POSTGRES_DATABASE`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_URL_NO_SSL`
- `POSTGRES_USER`
- `TURBO_REMOTE_ONLY`
- `TURBO_RUN_SUMMARY`
- `VERCEL`
- `VERCEL_ENV`

### This was inserted by `prisma init`:

```
- Environment variables declared in this file are automatically made available to Prisma.
- See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

- Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
- See the documentation for all the connection string options: https://pris.ly/d/connection-strings
```

- `DATABASE_URL`

### Auth0 environment variables

- `AUTH0_SECRET`
- `AUTH0_BASE_URL`
- `AUTH0_ISSUER_BASE_URL`
- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`
- `AUTH0_AUDIENCE`
- `AUTH0_SCOPE`
- `AUTH0_TOKEN_URL`

## Lessons Learned

- I may have gotten too eager to learn NextJS
  - Being fairly fresh out of my coding bootcamp where we were introduced to React and Redux on the front-end and Node, Express, and Knex on the back-end, I jumped in to a world that I didn't realize flipped everything upside down. Having to translate stuff that was still fresh and not fully understood into a new way of doing things caused the learning process to be a bit slower than I had hoped.
  - However, I think it also sped up my learning ability, problem-solving, and language translation.

### Backend

- Before this project my only experience with databases was using SQLite, Knex, and Express.
- I wanted to build a fullstack project using NextJS but was unfamiliar with PostgreSQL and Vercel Postgres.
- I followed tutorials to build and seed my database. There was tons of trial and error. Eventually I decided to install Knex and realized it helped make then process a lot easier to understand; especially with the addition of migrations and rollbacks.

### Authentication/Authorization

- For this project I'm using Auth0 for authentication and authorization
- Implementing authentication was easy. But I struggled for a long time to figure out how to properly implement the role-based authorization.
- I went down tons of rabbit holes and eventually just need to step back and thing about the logic. I was originally trying to route to a "waiting room" page if a user had a "Pending" role. I eventually discovered it'd be easier (and eliminated a bug I was having where the home page would briefly show to a Pending user before routing them to their waiting room page) to do a conditional rendering (if user is "pending" show a `<MembershipPending />` component, otherwise display the page)
- For now this works great. I'd still like to figure out how I can put all of the session/token/role access in a separate component that can be imported in to each file instead of repeating the code on each `page.tsx`

## License

The code in this project is licensed under the terms of the MIT license. You can find the full license text in the [LICENSE.md](LICENSE.md) file.
