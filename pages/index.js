import { Layout } from 'components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'node:fs/promises'
import { useI18N } from 'context/i18n'

export default function Home({ latestComics }) {
  const {t} = useI18N()

  return (
    <>
      <Head>
        <title>xkcd - Comics for developers</title>
        <meta name="description" content="Comics for Developers" />
      </Head>

      <Layout>
        <h2 className='text-3xl font-bold text-center mb-10'>{t('LATEST_COMICS')}</h2>
        <section className='grid grid-cols-1 gap-2 max-w-md m-auto sm:grid-cols-2 md:grid-cols-3'>
          {
            latestComics.map(comic => {
              return (
                <Link href={`/comic/${comic.id}`} key={comic.id}>
                  <a className='mb-4 pb-4 mx-auto'>
                    <h3 className='font-bold text-center text-sm pb-2'>{comic.title}</h3>
                    <Image width={comic.width} height={comic.height} layout='intrinsic' objectFit='contain' src={comic.img} alt={comic.alt} />
                  </a>
                </Link>
              )
            })
          }
        </section>
      </Layout>

    </>
  )
}

export async function getStaticProps(context) {
  const files = await fs.readdir('./comics')
  const latestComicsFiles = files.slice(-8, files.length)

  const promisesReadFiles = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, 'utf8')
    return JSON.parse(content)
  })

  const latestComics = await Promise.all(promisesReadFiles)

  return {
    props: {
      latestComics
    }
  }
}