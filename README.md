# Job Hike NZ

Simple job listing web app to learn about NextJS 13

## How to run the app locally

### Create .env file

first create the file
`touch .env`

then generate a key with: 
`openssl rand -base64 32`

Add the key to the .env along with the SQLITE DB URL

```
AUTH_SECRET=generated_key
DATABASE_URL=file:dev.db
```

### Install dependencies and setup prisma
`npm i`

`npx prisma generate`

### App run
`npm run dev`

### Login

```
email: user@nextmail.com
password: 123456
```