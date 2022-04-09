import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import AuthButton from '../components/auth/AuthButton'
import BookmarkList from '../components/BookmarkList'

const Home: NextPage = () => {
  return (
    <>
      <AuthButton/>
      <BookmarkList/>
    </>
  )
}

export default Home