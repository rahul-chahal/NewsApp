import React, { Component } from 'react';
import Spinner from './Spinner';
export default class NewsCard extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Steve Dent",
            "title": "Apple Store workers in Maryland have voted to authorize a strike",
            "description": "Apple's first unionized Store in Towson, Maryland has now authorized the first strike against the retail giant. That follows what the union called \"over a year of negotiations with Apple management that yielded unsatisfactory outcomes,\" according to a press r…",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b054b9a9-8c58-457e-a0cf-9ac2838e9e2f",
            "urlToImage": "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "publishedAt": "2024-05-13T09:14:29Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        }
    ]

    async componentDidMount() {
        this.setState(a => ({
            loading: true
        }));
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6a8c54565120457189c18d57a5a0cf1b&pageSize=12&page=1';
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ article_list: parsedData.articles, loading: false });


    }

    constructor() {

        super()

        this.state = {
            article_list: this.articles,
            PageNo: 1,
            loading: true
        }


    }


    handlePreviousButton = async () => {
        this.setState(a => ({
            loading: true,
            article_list:null
        }));

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6a8c54565120457189c18d57a5a0cf1b&pageSize=12&page=${this.state.PageNo - 1}`;
        let data = await fetch(url)

        let parsedData = await data.json()
        // console.log(this.state.PageNo)
        this.setState(a => ({
            article_list: parsedData.articles,
            PageNo: a.PageNo - 1,
            loading: false
        }));

    }

    handleNextButton = async () => {
        this.setState(a => ({
            loading: true,
            article_list:null
        }));

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6a8c54565120457189c18d57a5a0cf1b&pageSize=12&page=${this.state.PageNo + 1}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        // console.log(this.state.PageNo)
        this.setState(a => ({
            article_list: parsedData.articles,
            PageNo: a.PageNo + 1,
            loading: false
        }));

    }

    render(props) {


        return (


            <div className="row" >
                <div>
                    {this.state.loading && <Spinner />}
                </div>
                {this.state.article_list ? (this.state.article_list.map((element) => {
                    return (

                        <div className='col-md-2 mb-2' key={element.url} >

                            <div className='card'>
                                <img src={element.urlToImage ? element.urlToImage : "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.title ? element.title.slice(0, 50) : ""}</h5>
                                    <p className="card-text">{element.description ? element.description.slice(0, 70) : ""}</p>
                                    <a href={element.url ? element.url : ""} target="" className="btn btn-primary">Read more</a>
                                </div>
                            </div>

                        </div>
                    );
                })):null}
                <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.PageNo <= 1} className="btn btn-primary d-flex" onClick={this.handlePreviousButton}>Previous</button>
                    <button type="button" className="btn btn-primary d-flex" onClick={this.handleNextButton}>Next</button>
                </div>

            </div>
        )
    }
}
