This is nextjs 14 project which uses partial prerendering with server components, it's just a little experiment to see how fast partial prerendering is.

It uses Two SQL Queries in the component, one for the count of anime shows and other to fetch a random show and display it.
The layout acts as a static loading shell, a loader is defined in `loading.tsx` which is used while `page` is fetching data from database.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
