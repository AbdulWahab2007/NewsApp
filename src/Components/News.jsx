import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

  useEffect(() => {
    UpdateNews()
  }, [])

  const UpdateNews=async ()=> {
    props.setProgress(10)
    setLoading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=4c2c24149cb1477fb38ff2026c98c23b&page=${page}&pageSize=6`
    let data = await fetch(url)
    props.setProgress(30)
    let ParsedData = await data.json()
    props.setProgress(70)
    setArticles(ParsedData.articles)
    setTotalResults(ParsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
    console.log(ParsedData);
  }


  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 })
    setPage(page+1)
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=4c2c24149cb1477fb38ff2026c98c23b&page=${page + 1}&pageSize=6`)
    let ParsedData = await data.json()
    setArticles(articles.concat(ParsedData.articles))
    setTotalResults(ParsedData.totalResults)
    // this.setState({
    //   articles: this.state.articles.concat(ParsedData.articles),
    //   totalResults: ParsedData.totalResults
    // })
  }

  let { country, category } = props
  return (
    <>

      <h1 className="text-center mb-4">Top Headlines - {props.category}</h1>
      <InfiniteScroll
        dataLength={articles.length}

        next={fetchMoreData}
        hasMore={articles !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return <div className="col-md-4" key={index}>
                <NewsItem title={element.title} description={element.description} ImageURL={element.urlToImage} NewsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>

            })}
          </div>

        </div>
      </InfiniteScroll>
    </>
  )
}

export default News
