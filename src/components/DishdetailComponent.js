import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            let list = dishesdetail.map((comments)=>
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
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.comments)}
                </div>
            </div>
            </div>
        
        );
    }

}

export default Dishdetail;