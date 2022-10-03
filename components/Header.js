import Link from "next/link";

export function Header() {

  const [results, setResuls] = useState([])

  const handleChange = () => {
    fetch(`/api/search?q=${q}`)
      .then(res => res.json())
      .then(results => {
        setResuls(results)
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
            <input type='search' onChange={handleChange} />
          </li>
        </ul>
      </nav>
    </header>
  )
}