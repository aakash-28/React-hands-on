import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
 
       function RenderDish({dish}){
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
    
  function RenderComments({dish}){
        console.log(dish)
        const comments = dish.comments
        return comments.map((comment)=> {
            if (comment!=null){
            return (
                <div key={comment.id}>
                 <li>
                   <p>{comment.comment}</p> 
                   <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                 </li>
                </div>
            );}
            else {
                return(<div></div>);
            }
        }); 
    }
    const DishDetail = (props) => {
         if(!props.dish) return(null)
        return( <> 
        
        <div className="container">
    <div className="container">
    <div className="row">
    <div className="col-md-5 m-1">
    <RenderDish dish={props.dish}/>
    </div>
    <div  className="col-md-5 m-1"> <h4>Comments</h4>
         <ul className = "list-unstyled">
       <RenderComments dish={props.dish} />
        </ul> 
    </div> </div> </div> </div> </>); }
 
export default DishDetail;