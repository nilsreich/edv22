import { Sidebar } from './../components/Sidebar';
import type { NextPage } from 'next'
import {  useState } from 'react'
import useSWR from 'swr'

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

const Home: NextPage = () => {

  const [active, setActive] = useState('Din5008')
  const { data, error } = useSWR('./content.json', fetcher)


  const changeView = (item: any) => {
    setActive(item.target.innerText)
  }


  return (
    <>
      {data ?

        <div className='flex'>
          <aside className='border-r w-40 shrink-0 h-screen '>
            <Sidebar parentcallback={changeView} data={data} active={active} />
          </aside>
          <main className='mx-auto max-w-4xl p-12'>
            <div className='text-6xl'>{data[active].title}</div>
            {data[active].situation}
            <div>
              <video controls src={`.\\${data[active].svg}`}></video>
            </div>
          </main>
        </div>
        : ''}
    </>
  )
}

export default Home


