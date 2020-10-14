import React from 'react';
import MyItem from './MyItem';


class MyList extends React.Component{
    
    deleteItem = (id) => {
        console.log("The id is:")
        console.log( id)

        this.setState({
            mylist: this.state.mylist.filter(e => e.props.id !== id)
        });
    };

    state = {
        mylist: [<MyItem content = "Take out the trash" key = {1} delete={this.deleteItem} id={1}/>,
            <MyItem content = "Walk the dog" key = {2} delete={this.deleteItem} id={2}/>,
            <MyItem content = "Learn React" key = {3} delete={this.deleteItem} id={3}/>],
        last: '',
        itemid: 4
    };


    componentDidUpdate  = () => {
        if ((this.props.newitem !== ('')) && (this.props.newitem !== this.state.last)){
            this.setState({
            mylist: [...this.state.mylist,
                 <MyItem 
                    content = {this.props.newitem} 
                    key = {this.state.itemid} 
                    delete={this.deleteItem}
                    id={this.state.itemid}/>],
            last: this.props.newitem,
            itemid: this.state.itemid + 1
            });
        }
    };


    render(){
        return (
            
            <div className="ui middle aligned divided list">
                {this.state.mylist}
            </div>
        );
    }
}


export default MyList