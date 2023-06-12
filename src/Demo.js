import React from 'react'
class Demo extends React.Component
{
    state = { name : "ReactJS" ,pos :"1st", flag1 : true};
    ex = () =>
    {   
        if (this.state.flag1 === false)

        {
            this.setState({ name : "AngularJS" , pos : "2nd",flag1 :true });
        }
        else
        {
            this.setState({ name : "ReactJS" , pos : "1st", flag1 : false});
        }
    }
    
    render()
    {
        console.log(this.props)
        return (
            <div>
            <p>{this.state.name} is {this.state.pos} </p>
            <p>Name : {this.props.Name}</p>
            <p>Company : {this.props.com}</p>
            <button onClick={this.ex}>Click</button>
            </div>
        )
    }
}
export default Demo;