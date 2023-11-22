import Image from 'next/image';

const Loading = () => {
  return (
    <section className="flex justify-center">
      <Image src="/loading.gif" alt="loading" width={200} height={200} />
    </section>
  );
};

export default Loading;
