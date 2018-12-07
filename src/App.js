import React, { Component } from 'react';
import TextList from './components/TextList';
import SearchBox from './components/SearchBox';
import Pinned from './components/PinnedTexts';


class App extends Component {
    constructor(){
        super()
        this.state = {
            legalTexts: [],
            searchbar: '',
            pinnedTexts: [],
        }
        this.textClick = this.textClick.bind(this);
    }

    textClick = (e) =>{
        this.setState({
            pinnedTexts: this.state.pinnedTexts.concat([e.currentTarget.innerHTML + " "])
        })
        console.log("pinnedtext: " + this.state.pinnedTexts);
        console.log(e.currentTarget);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(items => this.setState({ legalTexts: items}))
    };

    onSearchChange = (event) => {
        this.setState({searchbar: event.target.value})
    };

    render() {
        const filteredTexts = this.state.legalTexts.filter(legalText =>{
            return legalText.title.toLowerCase().includes(this.state.searchbar.toLowerCase());
        })

        const pinnedTexts = this.state.pinnedTexts;

        return (
            <div className="container">
                <h1>Wet & Regelgeving</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <TextList
                    legalTexts={filteredTexts}
                    textClick={this.textClick}
                />
                <Pinned pinnedText={pinnedTexts} />
            </div>
        );
    }
}

export default App;