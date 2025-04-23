'use client'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      This is main page  =&gt; {" "}
      <button className='px-2 bg-red-300 rounded-lg text-white' type="button" onClick={() => router.push('/haven')}>Go to Heaven</button>
    </div>
  );
}
