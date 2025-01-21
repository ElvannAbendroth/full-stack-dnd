'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  interface Spell {
    index: string
    name: string
    level: number
    url: string
  }

  interface SpellsResponse {
    count: number
    results: Spell[]
  }

  const [spells, setSpells] = useState<SpellsResponse | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow' as RequestRedirect,
    }

    fetch('https://www.dnd5eapi.co/api/spells', requestOptions)
      .then(response => response.json())
      .then(result => setSpells(result))
      .catch(error => setError(error))
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-2xl">D&D Spell List</h1>
        <p>Hey there! Welcome to this DnD App! Here&apos;s a list of all the spells available in D&D 5th Edition</p>
        {error && <p>Error fetching spells: {error.message}</p>}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {spells?.results.map(spell => (
            <li
              key={spell.index}
              className="flex flex-col items-center justify-center bg-input aspect-square rounded-md text-center"
            >
              <p className="font-bold text-lg">{spell.name}</p>
              <p>Level: {spell.level}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="https://nextjs.org/icons/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="https://nextjs.org/icons/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="https://nextjs.org/icons/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
