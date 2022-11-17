import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2022-11/88lmvfeo_paytm-reuters_625x300_08_November_22.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
