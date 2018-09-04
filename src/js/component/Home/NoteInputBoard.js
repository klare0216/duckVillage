import React from 'react';

class NoteInputBoard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        };
    }

    render() {
        return(
            <div>
                <p>你做了什麼呢？</p>
                <input type='text' 
                    onChange={ event => this.setState({ inputText: event.target.value })} />
                <input onClick={ () => this.props.onClick(this.state.inputText) } 
                    type='button' value='enter'/>
            </div>
        );
    }
};

export default NoteInputBoard;
