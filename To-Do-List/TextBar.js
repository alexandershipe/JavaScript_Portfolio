import React from 'react';

class TextBar extends React.Component{

    state = {term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Test FormSubmit")
        this.props.submitMe(this.state.term);
        this.setState({term: ''}); 
    };

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Add to List:</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                            
                        />
                        
                    </div>
                    <button className="ui primary button" >
                        Add Task
                    </button>
                </form>
            </div>
        );
    }
}
export default TextBar