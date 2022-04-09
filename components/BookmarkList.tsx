import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import { Bookmark } from '../shared/types/Bookmark'
import Image from 'next/image'

function BookmarkList() {

    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {

        const fetchBookmarks = async () => {
            try {
                const res = await fetch('/api/bookmarks/getMany')
                const fetchedBookmarks = await res.json()
                setBookmarks(fetchedBookmarks.bookmark)
            } catch (err) {
                console.log(err)
                setBookmarks([])
            }
        }

        fetchBookmarks()
    }, [])

    return (
        <div>
            {/*bookmarks.bookmark.map((bookmark, idx) => (
                <div>{bookmark.title}</div>
            ))*/}
            {JSON.stringify(bookmarks)}
            {bookmarks.map((bookmark) => (
                <a href={bookmark.url}>
                    <h1>{bookmark.title}</h1>
                    <img src={bookmark.image}/>
                </a>
            ))}
        </div>
    )
}

export default BookmarkList