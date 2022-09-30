import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-xl m-auto">
      <h1 className="font-bold">
        <Link href="/">
          <a>
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
            <Link href='/about'><a className="text-sm font-semibold">About</a></Link>
          </li>
          <li>
            <Link href='/search'><a className="text-sm font-semibold">Search</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}