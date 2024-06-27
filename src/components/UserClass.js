import React from "react";
class UserClass extends React.Component{
    constructor(props){
        
        super(props);
        this.state={
            count:0,
        }
        console.log(this.props.name +"child constructor called");
    }
    componentDidMount(){
        console.log(this.props.name +"child component did mount called");
    }
    render(){
        console.log(this.props.name+"child render method got called");
        const{name,location}=this.props;
        const count=this.state.count;
        return(
            <div className="user-class">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                
                }}>Count_increase</button>
                <button onClick={()=>{
                    if(count===0){
                        this.setState({
                            count:0,
                              })
                    }
                    else 
                    this.setState({
                      count:this.state.count-1,
                        })
                
                }}>Count_decrease</button>
                <h3>name:{name}</h3>
                <h3>loaction :{location}</h3>
                <h3>contact:7845611464</h3>
            </div>
        );
    }

};
export default UserClass;