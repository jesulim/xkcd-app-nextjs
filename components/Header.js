import Link from "next/link";
import { useState, useRef } from "react";

export function Header() {
  const [results, setResuls] = useState([])
  const searchRef = useRef()
  
  const getValue = () => searchRef.current?.value
  
  const handleChange = () => {
    const q = getValue()

    if(!q) return

    fetch(`/api/search?q=${q}`)
      .then(res => res.json())
      .then(searchResults => {
        setResuls(searchResults)
      })
  }

  return (
    <header className="flex justify-between items-center p-4 max-w-xl m-auto">
      <h1 className="font-bold">
        <Link href="/">
          <a className="transition hover:opacity-80">
            next<span className="font-light">xkcd</span>
          </a>
        </Link>
      </h1>
      <nav>
        <ul className="flex flex-row gap-2">
          <li>
            <Link href='/'><a className="text-sm font-semibold">Home</a></Link>
          </li>

          <li>
            <input className="rounded-3xl border border-gray-400 px-4 py-1 text-xs" ref={searchRef} type='search' onChange={handleChange} />
            <div className="relative z-10">
              {
                Boolean(results.length) && <div className="absolute left-0 right-0">
                  <ul className="z-50 w-full overflow-auto bg-white border rounded-lg shadow-xl border-gray-50">
                    <li className="m-0" key='all-results'>
                      <Link href={`/search?q=${getValue()}`}>
                        <a className="italic block text-gray-400 px-2 py-1 overflow-hidden text-sm font-semibold hover:bg-slate-200 text-ellipsis whitespace-nowrap">Ver {results.length} resultados</a>
                      </Link>
                    </li>

                    {results.map(result => {
                      return (
                        <li key={result.id}>
                          <Link href={`/comic/${result.id}`}>
                            <a className=" block px-2 py-1 overflow-hidden text-sm font-semibold hover:bg-slate-200 text-ellipsis whitespace-nowrap">{result.title}</a>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              }
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}