import React, { Component } from 'react'

const NewsItem = (props) => {
  let { title, description, ImageURL, NewsURL, author, date, source } = props
  return (
    <div>
      <div className="card mt-3"   >
        <img src={!ImageURL ? "https://agriexpo.africa/wp-content/uploads/2023/05/no-image@2x-2048x1315.png" : ImageURL} className="card-img-top" alt="No Image Available" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <hr />
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
          <a href={NewsURL} target="_blank" className="btn btn-sm btn-dark">More on {source}</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
