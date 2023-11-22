import { sql } from '@vercel/postgres';
import { headers } from 'next/headers';
import Image from 'next/image';

export default async function Home() {
  headers();

  const { rows: [anime] } = await sql`SELECT * FROM anime ORDER BY RANDOM() LIMIT 1`;
  const { title, image, url } = anime;

  return (
    <section className="flex flex-col gap-4 items-center rounded-lg">
        <div className="h-[400px] w-[300px] flex justify-center hover:border-4 border-violet-600 transition-all duration-100 rounded-lg">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className='rounded-md'
          />
        </div>
      <a className="text-sm font-semibold bg-violet-600 px-4 py-2 rounded-md text-slate-300 active:scale-95 transition-all" href={url} target='_blank'>{title}</a>
    </section>
  );
}
