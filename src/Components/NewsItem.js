import React, { Component } from "react";


export class NewsItem extends Component {
  
  render() {
    let { title, description,imageurl,newsurl,author,date } = this.props;
    return (
      <div className="my-3 ">

        <div className="card" >
          <img src={!imageurl?"https://i.gadgets360cdn.com/large/james_webb_sun_shield_twitter_1640848830334.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{!description?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga vel ratione. Quod ut corrupti possimus. Expedita beatae temporibus numquam ratione optio inventore voluptates explicabo saepe alias!iciendis ut sapiente dolorem expedita commodi .":description}</p>
            <p className="card-text "><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-danger">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
