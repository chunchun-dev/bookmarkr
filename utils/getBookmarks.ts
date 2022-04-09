import db from "../db/db"
import {Bookmark} from '../shared/types/Bookmark'

type getBookmarksType = (owner: any) => Promise<getBookmarksReturnType>

export interface getBookmarksReturnType {
  success: boolean,
  bookmark: Bookmark | null
}

const getBookmarks: getBookmarksType = async (owner): Promise<getBookmarksReturnType> => {
  
  try {
    const bookmark = await db.bookmark.findMany({
        where: {
            owner: owner
        }
    })
    return { success: true, bookmark: bookmark }
  } catch(err) {
    console.log(err)
    return { success: false, bookmark: null }
  }
}

export default getBookmarks