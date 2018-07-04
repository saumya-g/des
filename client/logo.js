import React from 'react';

class Logo extends React.Component{

    constructor(props){
        super(props);
        this.state={
            counter:0,
            logoIs: 'active',
        }
        this.handleScroll=this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll(event){
        //console.log('1');
        var pageY=window.scrollY;
        //console.log('1')
         if(pageY >= 200)
       // this.setState({counter: this.state.counter+1});
       {
           this.setState({logoIs:'inactive'})
           //console.log('2');
       }

        else {
            this.setState({logoIs:'active'})
        }
    }
    render(){
        return(

            <div>
              <div class="container">
                   <div class={`logo${this.state.logoIs}`}>
                        <h2>DESELK {this.state.counter}</h2>
                   </div>
               </div>
              <div class="container1">
                  <p>SCROLL DOWN</p>
              </div>
             </div>
        );
    }
}


export default Logo;