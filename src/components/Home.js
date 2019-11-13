import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'
import Products from './Products';
import GoToCartBtn from './GoToCartBtn';
import ItemAddNoteBar from './ItemAddNoteBar'


class Home extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        return (
            <div style={{display:this.props.isOrderPage ===false?'block':'none'}} className="row">
                <div className="row">
                   
                    <nav className="collapse navbar-collapse" id="bs-navbar">
                        <div className="col-md-4">  
                        <ul className="nav navbar-nav">
                            <li>
                                <h2>All Items</h2>
                            </li>

                        </ul>
                        </div>
                        <div className="col-md-4"> 
                        <ul className="nav navbar-nav">
                            <li>
                                <ItemAddNoteBar/>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-4"> 
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <GoToCartBtn/>
                            </li>
                        </ul>
                        </div>
                    </nav>

                </div>
                <div className="row">
                    <Products />

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    isOrderPage: state.isOrderPage,
})

const mapDispatchToProps = {
    getPosts: fetchItems
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
