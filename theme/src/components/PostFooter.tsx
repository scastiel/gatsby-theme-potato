import { FC } from 'react'
import { PostQuery_markdownRemark } from '../types/PostQuery'

export interface Props {
  siteUrl: string
  post: PostQuery_markdownRemark
}

const PostFooter: FC<Props> = () => null

export default PostFooter
