import React from 'react';
import TextBar from './TextBar';
import MyList from './MyList';

class App extends React.Component{
    state = {item: ''};

    onSubmitChange = (newitem) => {
        this.setState({item: newitem});
    };

    render(){
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <TextBar submitMe={this.onSubmitChange}/>
                
                <MyList newitem= {this.state.item} />
            </div>
        )
    }

}




export default App;