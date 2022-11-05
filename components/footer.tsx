import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ThemeSwitch from './themeSwitch'
import Link from 'next/link'


import { useRouter } from 'next/router';
import NextLink from 'next/link';
import styles from '../styles/Home.module.css'




const Footer = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI

  return (              
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
    <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
    <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
      <div className="flex flex-col space-y-4">
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-600 transition"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-500 hover:text-gray-600 transition"
        >
          About
        </Link>
        <Link
          href="/newsletter"
          className="text-gray-500 hover:text-gray-600 transition"
        >
          Newsletter
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
  
      </div>
      <div className="flex flex-col space-y-4">
        <Link
          href="/uses"
          className="text-gray-500 hover:text-gray-600 transition"
        >
          Uses
        </Link>
        <Link
          href="/guestbook"
          className="text-gray-500 hover:text-gray-600 transition"
        >
          Guestbook
        </Link>
        <Link
          href="/snippets"
          className="text-gray-500 hover:text-gray-600 transition"
        >
          Snippets
        </Link>

      </div>
    </div>
  </footer>
  )
}

export default Footer