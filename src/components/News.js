import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);
// export class News extends Component {
//     static defaultProps={
//         country:'in',
//         pageSize:8,
//         category:"general"
//    }

//    static propTypes={
//         country : PropTypes.string,
//         pageSize:PropTypes.number,
//         category : PropTypes.string,

//    }
    // constructor(props){
        
      
    //     super(props);
        
        
    //     console.log("Part of news component")
    //     this.state={
    //         articles:[],
    //         loading:true,
    //         page:1,
    //         totalResults:0
    //     }
    //    Come back later // document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    // }
    const capitalizeFirstLetter= (str)=> {
        if (str !== undefined) {
            return str.charAt(0).toUpperCase() + str.slice(1);
          } else {
            return ""; // Or handle undefined input differently
          }
      }
   
      
      
    //  updateNews = async ()=>{
    //     props.setProgress(10)
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //         this.setState(
    //             {
    //            loading:true
    //             }
    //         )
    //         let data=await fetch(url)
    //         props.setProgress(30)
    //         let parseData=await data.json()
    //         props.setProgress(50)
    //         setArticles(parseData.articles)
    //         setTotalResults(parseData.totalResults)
    //         setLoading(false)
            
    //         this.props.setProgress(100)
    //     }

        const updateNews = async ()=>{
            props.setProgress(10)
            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
                setLoading(true)
                let data=await fetch(url)
                props.setProgress(30)
                let parseData=await data.json()
                props.setProgress(50)
                setArticles(parseData.articles)
                setTotalResults(parseData.totalResults)
                setLoading(false)
                
                props.setProgress(100)
            }

        useEffect(() => {
          return () => {
            updateNews();
          };
        }, [props.category]);
    // async componentDidMount(){
       
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e511e19dc4d4851a92b6a5c46f9028b&page=1&pageSize=${this.props.pageSize}`
        // this.setState(
        //     {
        //     loading:true
        //     }
        // )
        // let data=await fetch(url)
        // let parseData=await data.json()
        
        // this.setState({articles: parseData.articles, 
        //     loading:false,
        // totalResults: parseData.totalResults})
    //     this.updateNews();
    // }

    const handleNextButton = async()=>
    {
        // if(this.state.page+1>Math.ceil(this.state.totalResults/20)){
        // This checks if the number of articles so that they can be displayed and next button can be disabled
        // }
      
       
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e511e19dc4d4851a92b6a5c46f9028b&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
        // this.setState(
        //     {
        //     loading:true
        //     }
        // )
        // let data=await fetch(url)
        // let parseData=await data.json()
        
        // this.setState({
        //     page:this.state.page+1,
        //     articles: parseData.articles,
        //     loading:false
        // })

        // this.setState(
        //     {
        //         page:this.state.page+1
        //     }
        // )
        // this.updateNews();

        setPage(page+1)
        updateNews()
    
        
    }

    const handlePreviousButton= async () =>{
       
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e511e19dc4d4851a92b6a5c46f9028b&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
        // this.setState(
        //     {
        //     loading:true
        //     }
        // )
        // let data=await fetch(url)
        // let parseData=await data.json()
        // this.setState({
        //     articles: parseData.articles,
        //     page:this.state.page-1,
        //     loading:false
        // })
        // this.setState(
        //     {
        //         page:this.state.page-1
        //     }
        // )
        // this.updateNews();

        setPage(page-1)
        updateNews()
    }
    // fetchMoreData = async ()  => {
    //     this.setState({
    //         page:this.state.page+1
    //     })
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //     let data=await fetch(url)
    //     let parseData=await data.json()
        
    //     this.setState({articles: this.state.articles.concat(parseData.articles), 
    //         loading:false,
    //     totalResults: parseData.totalResults})
    //   };


    const fetchMoreData = async ()  => {
        setPage(page+1)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data=await fetch(url)
        let parseData=await data.json()
        setArticles(parseData.articles)
        setLoading(false)
        setTotalResults(parseData.totalResults)
       
      };
    
//   render() {
    return (
       <div className="container">
        <h2 className='my-5 text-center'>NewsMonkey Top {capitalizeFirstLetter(props.category)} Headlines </h2>
         {loading && <Spinner/>}
        <div className="row my-3">
       {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
           
        ></InfiniteScroll>
         {articles.map((element)=>{
            return <div className="col my-3" key={element.url}><NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source}/></div>
           
        })}
            
        </div>
        {/* <div className="container d-flex justify-content-between"><button disabled={this.state.page<=1} type="button" onClick={this.handlePreviousButton} className="btn btn-dark">&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextButton} className="btn btn-dark">Next &rarr;</button></div>
         
       
      */}
       </div>
      
    )
  }


export default News

News.defaultProps={
    country:'in',
    pageSize:8,
    category:"general"
}

News.propTypes={
    country : PropTypes.string,
    pageSize:PropTypes.number,
    category : PropTypes.string,

}


// return (
//     <div className="container">
//      <h2 className='my-5 text-center'>NewsMonkey Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
//       {this.state.loading && <Spinner/>}
//      <div className="row my-3">
//     {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
//     <InfiniteScroll
//        dataLength={this.state.articles.length}
//        next={this.fetchMoreData}
//        hasMore={this.state.articles.length!==this.state.totalResults}
        
//      ></InfiniteScroll>
//       {this.state.articles.map((element)=>{
//          return <div className="col my-3" key={element.url}><NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source}/></div>
        
//      })}