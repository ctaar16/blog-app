import React, { useState, useEffect } from 'react'
import './Posts.css'
import Post from '../../components/Post/Post'
import Search from '../../components/Search/Search'
import { titleAZ, titleZA, userAZ, userZA } from "../../utils/sort"
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/shared/Layout/Layout'
import { getPosts } from '../../services/posts'

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([])
  const [queriedPosts, setQueriedPosts] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "title-ascending":
        setQueriedPosts(titleAZ(queriedPosts))
        break
      case "title-descending":
        setQueriedPosts(titleZA(queriedPosts))
        break
      case "user-ascending":
        setQueriedPosts(userAZ(queriedPosts))
        break
      case "user-descending":
        setQueriedPosts(userZA(queriedPosts))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const newQueriedPosts = allPosts.filter(post => post.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedPosts(newQueriedPosts, () => handleSort(sortType))
  }

  const handleSubmit = event => event.preventDefault()

  const postsJSX = queriedPosts.map((post, index) =>
    <Post _id={post._id} title={post.title} imgURL={post.imgURL} user={post.user} key={index} />
  )

  return (
    <Layout>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="posts">
        {postsJSX}
      </div>
    </Layout>
  )
}


export default Posts;