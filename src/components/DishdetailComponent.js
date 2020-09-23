import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dishesdetail){
        if (dishesdetail != null){
            let list = dishesdetail.comments.map((comments)=>
                <li key={comments.id} >
                <div>
                    <p>{comments.comment}</p>
                    <p>--{comments.author}, 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>

                </div>
                </li>   
            )

            return(
               list                   
            )
        } 
        else{
            return(
                <div></div>
            );
        }
    } 

    render() {
        return (
            <div className="row">
                
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishesdetail)}
                </div>

                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.renderComments(this.props.dishesdetail)}
                    </ul>
                </div>
            </div>
        
        );
    }

}

export default Dishdetail;