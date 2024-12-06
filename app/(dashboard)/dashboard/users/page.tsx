import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div>Users</div>

        <ul className='mt-10'>
          <Link href="/dashboard/users/1">
            <li>User 1</li>
          </Link>
          <Link href="/dashboard/users/2">
            <li>User 2</li>
          </Link>
          <Link href="/dashboard/users/3">
            <li>User 3</li>
          </Link>
        </ul>
    </>
  )
}

export default page