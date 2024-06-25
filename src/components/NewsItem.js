import React from 'react'

// export class NewsItem extends Component {
//     // constructor(){
    //     super();
    //     console.log("Constructor here")
    // }
  // render() {

  const NewsItem=(props)=>{
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (

        <div className="my-3">
        <div className="card">
         <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2024/01/29/1600x900/2-0-1244114454-iStock-839214100-0_1679615828655_1706510496641.jpg":imageUrl} className="card-img-top" alt="..."/> 
        <div className="container"> 
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
       
        <div className="card-footer">
      <small className="text-body-secondary">By {author?author:"Unknown"}, Date: {new Date(date).toGMTString()}</small>
    </div>
    <span className="badge rounded-pill text-bg-dark">{source.name}</span>
      </div>
      </div>
    )
  }


export default NewsItem
