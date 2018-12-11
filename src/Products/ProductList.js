import React from 'react';
import ProductPage from './ProductPage';
import axios  from 'axios';


class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
        this.upVoteClicked =this.upVoteClicked.bind(this)
        this.downVoteClicked = this.downVoteClicked.bind(this)
    }
    getRemoteData(){
        axios.get('http://localhost:3000/productsList')
        .then((p)=>{
            console.log(p.data)
            
            this.setState({users: p.data})
            
        })
    }
    
    componentWillMount(){
        this.getRemoteData()
    }
    upVoteClicked(id){
        console.log("upvote Clicked" +id);
        const updatedProducts = this.state.users.map((p)=>{
            if(p.id === id){
                return Object.assign({},p ,{upvote:p.upvote+1})
            }
            else{
                return p
            }
        })
        this.setState({users: updatedProducts})
    }
    downVoteClicked(id){
        console.log("downvote Clicked" +id);
        const updatedProducts = this.state.users.map((p)=>{
            if(p.id === id){
                return Object.assign({},p ,{downvote:p.downvote-1})
            }
            else{
                return p
            }
        })
        this.setState({users: updatedProducts})
    }
    render() { 
        const sort = this.state.users.sort((a,b)=>{
            return a.upvote - b.upvote
        })
        const displaySortedProducts = sort.map((p)=>{
            return(
                <ProductPage 
                id={p.id}
                title={p.title}
                description={p.description}
                upvote={p.upvote}
                downvote={p.downvote}
                submitterUrl={p.submitterUrl}
                productUrl={p.productUrl}
                onUpVote={this.upVoteClicked}
                onDownVote={this.downVoteClicked}
                ></ProductPage>
            )
        })
        return (  
            <div className="ui unstackable items">
                {displaySortedProducts}
            </div>
        );
    }
}
 
export default ProductList;