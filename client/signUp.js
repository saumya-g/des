import React from 'react';

import Header from './header';

class SignUp extends React.Component{

    render(){
        return(
          <div>
              <Header/>
              <input placeholder="name"/>
          </div>  
        )

    }
}



export default SignUp;