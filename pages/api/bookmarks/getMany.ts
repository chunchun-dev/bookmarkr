import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../db/db'
import getBookmarks, {getBookmarksReturnType} from '../../../utils/getBookmarks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<getBookmarksReturnType>
) {
  const {owner} = req.body

  const {success, bookmark} = await getBookmarks(owner)

  res.json({success, bookmark})
}