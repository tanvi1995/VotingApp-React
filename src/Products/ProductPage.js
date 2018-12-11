import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { timesSeries } from 'async';

class ProductPage extends React.Component {
  
    constructor(props){
        super(props)

        this.localDownVote = this.localDownVote.bind(this)
        this.localUpVote = this.localUpVote.bind(this)
    }


    localUpVote(){
    
        this.props.onUpVote(this.props.id)
    }

    localDownVote(){
        this.props.onDownVote(this.props.id)
    }
    render() { 
        return ( 
            <div className="item">
            <h5 class="card-header">
                        <span style={{fontSize:"50px"}}>{this.props.upvote}</span>
                        <i class="fas fa-thumbs-up fa-2x"></i>
                        &nbsp; &nbsp;
                        <span style={{fontSize:"50px"}}>{this.props.downvote}</span>
                        <i class="fas fa-thumbs-down fa-2x"></i>    

                    </h5>
            <div className="image">
            <img src={this.props.productUrl}/>

            </div>
            <div className="midle aligned content">
             <div className='header'>
             <a>
                 
                 
                 </a>
                 {this.props.votes}
             
             </div>
            <div className="description">
                <a href={this.props.url} >{this.props.title}</a>
                <p>{this.props.description}</p>
            </div>
            <div className="extra">
                <span>Submitted by:</span>
                <img className="voterimage" src={this.props.submitterUrl}></img>

            </div>
            <div className="vote">
                <button class="btn btn-primary" onClick={this.localUpVote} >Up vote </button> &nbsp;
                <button class="btn btn-primary" onClick={this.localDownVote}>Down vote</button>
            </div>
            </div>
            </div>
            
         );
    }
}
 
export default ProductPage;