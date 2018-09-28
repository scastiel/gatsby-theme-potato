const CommentsCount = ({ count }) => {
  if (count === 0) {
    return 'No comment'
  } else if (count === 1) {
    return 'One comment'
  } else {
    return `${count} comments`
  }
}

export default CommentsCount
