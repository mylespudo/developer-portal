import { Seo } from '@/components/Seo'
import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Seo title='Page not found' relativeUrl='/404' />
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="font-display text-sm font-medium text-black dark:text-white">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-black dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-8 text-sm font-medium text-black dark:text-white"
        >
          Go back home
        </Link>
      </div>
    </>
  )
}
