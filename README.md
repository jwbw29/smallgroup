# Small Group Project

A website for small groups to use to easily access each other's information and event dates.

## Challenges

### General

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

## Theme

### Colors

#F72585
#B5179E
#7209B7
#560BAD
#480CA8
#3A0CA3
#3F37C9
#4361EE
#4895EF
#4CC9F0
