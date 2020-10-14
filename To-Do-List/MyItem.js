import React from 'react';

class MyItem extends React.Component{

    deleteItem = () => {
        this.props.delete(this.props.id);
    };



    render(){
        return (
            
            
            <div className="item">
                <div className="right floated content">
                    <div className="ui button" onClick={this.deleteItem}>Delete</div>
                </div>
                
                <div className="content">
                    {this.props.content}
                </div>
            </div>
            
        );
    }
}

export default MyItem