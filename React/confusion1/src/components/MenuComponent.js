import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish){
        this.setState({ selectedDish:dish});
        console.log('Menu component constructor invoked');
    }
    componentDidMount(){
        console.log('Menu component compmount invoked');
    }
    
    render(){
        const menu = this.props.dishes.map((dish)=> {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                   <Card onClick={()=> this.onDishSelect(dish)}>
                           <CardImg width="100%" src={dish.image} />
                       <CardImgOverlay>
                       <CardTitle>{dish.name}</CardTitle>
                       </CardImgOverlay>
                       </Card> 
                </div>
            );
        });
        console.log('Menu component render invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail selectedDish={this.state.selectedDish} /> 
            </div>
        );
    }
}
export default Menu;
