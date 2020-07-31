import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';
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
            <Breadcrumb>
                <BreadcrumbItem>
                <Link to='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
        <div className="col-12">
            <h3>Menu</h3>
            <hr/>
        </div>
    </div>
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