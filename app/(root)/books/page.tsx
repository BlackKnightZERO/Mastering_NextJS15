import React from 'react'

const page = async () => {
    const res = await fetch("http://localhost:3000/api/books")
    const books = await res.json()
  return (
    <div>
        <h1>Books</h1>
        <code>{JSON.stringify(books, null, 2)}</code>
    </div>
  )
}

export default page