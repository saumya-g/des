import React from 'react';


import Test2 from './test2';

export default class Test extends React.Component{
    handleClick(){
        alert('123');
    }
    constructor(){
        super();
        this.array=[
            {name: 'hello'},
           {name: 'hello1'},
           {name: 'hello2'}
        ]
    }
    render(){
        return(
            <Test2 name="OLA" clickfunc={this.handleClick.bind(this)} arrayfromParent={this.array}/>
        )
    }
}