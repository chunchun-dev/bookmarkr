import db from "../db/db"
import {Bookmark} from '../shared/types/Bookmark'

type createBookmarkType = (title: string, image: string, url: string, owner: string) => Promise<any>

interface createBookmarkReturnType {
  success: boolean,
  bookmark: Bookmark | null
}

const createBookmark: createBookmarkType = async (title,image, url, owner): Promise<createBookmarkReturnType> => {
  
  try {
    const bookmark = await db.bookmark.create({
      data: {
        title: title,
        image: image,
        owner: owner,
        url: url
      }
    })
    return { success: true, bookmark: bookmark }
  } catch(err) {
    console.log(err)
    return { success: false, bookmark: null }
  }
}

export default createBookmark