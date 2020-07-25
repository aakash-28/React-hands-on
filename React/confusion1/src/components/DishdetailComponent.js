import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, 
    Media} from 'reactstrap';
    class Dishdetail extends Component{
        constructor(props){
            super(props);
            this.state = { selectedDish : this.props.selectedDish
            }
        }
        renderDish(dish){
        if (dish!=null){
            return(
                
                <Card>
                    <CardImg width="100%" src={dish.image} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(<div></div>);
        }
            
    }
    
    renderComments(sdish){
        console.log(sdish)
        const comments = sdish.comments
        return comments.map((comment)=> {
            if (comment!=null){
            return (
                <div key={comment.id}>
                 <li>
                   <p>{comment.comment}</p> 
                   <p>--{comment.author} , {comment.date}</p>
                 </li>
                </div>
            );}
            else {
                return(<div></div>);
            }
        }); 
    }
    render() { if(!this.props.selectedDish) return(null)
        return( <> 
    <div className="container">
    <div className="row">
    <div className="col-md-5 m-1">
    {this.renderDish(this.props.selectedDish)}
    </div>
    <div  className="col-md-5 m-1"> <h4>Comments</h4>
         <ul className = "list-unstyled">
       {this.renderComments(this.props.selectedDish)} 
        </ul>
    </div> </div> </div> </>); }

}
export default Dishdetail;