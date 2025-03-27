import Image from "next/image"
import { DisplayMsgBtn } from './DisplayMsgBtn'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="p-4 flex w-full h-full items-center gap-[10rem] justify-center flex-col font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row gap-[2rem] items-center justify-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Optionally, you can download wasm.svg to public folder or delete here */}
        <div className='text-[4rem]'>/</div>
        <Image
          src="/wasm.svg"
          alt="WASM logo"
          width={90}
          height={90}
          priority
        />
      </div>
      <main className='text-white text-2xl font-[500]'>
        <Script src="/hello.js" />
        <DisplayMsgBtn />
      </main>
    </div>
  )
}
