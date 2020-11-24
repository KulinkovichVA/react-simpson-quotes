import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            quote: '',
        };
        this.fetchSimpsonQuote = this.fetchSimpsonQuote.bind(this);
    }

    fetchSimpsonQuote() {
        const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
        axios
            .get(url)
            .then((response) => response.data)
            .then((data) => {
                this.setState({
                    name: data[0].character,
                    image: data[0].image,
                    quote: data[0].quote,
                });
            });
    }

    componentDidMount() {
        this.fetchSimpsonQuote();
    }

    render() {
        return (
            <div className="QuotesContainer">
                <button className="showBtn" onClick={this.fetchSimpsonQuote}>
                    Show quote
                </button>
                <h1>{this.state.name}</h1>
                <img src={this.state.image} />
                <p>{this.state.quote}</p>
            </div>
        );
    }
}
