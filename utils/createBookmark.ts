import db from "../db/db"

type createBookmarkType = (title: string, image: string, url: string, owner: string) => Promise<any>

const createBookmark: createBookmarkType = async (title,image, url, owner): Promise<any> => {
  
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