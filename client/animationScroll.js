import React from 'react';
import Scroll from './scroll';

class AnimationScroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            container1: 'containerOneActive',
            container2: 'containerTwoHidden',
            scrollButtonProp: 'active1',
        }
        this.handleScroll=this.handleScroll.bind(this);

    }
    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }
    handleScroll() {
        //   alert("123");
        if (this.state.container1 === 'containerOneActive') {
            this.setState({ container1: 'containerOneHidden', container2: 'containerTwoActive', wheelStatus: 'active1' });
            window.removeEventListener("wheel", this.handleScroll)
        }
        else {
            this.setState({ container1: 'containerOneActive', container2: 'containerTwoHidden', wheelStatus: 'active2' });
            window.removeEventListener("wheel", this.handleScroll)
        }
        window.setTimeout(() =>{
            console.log('122222');
            window.addEventListener('wheel', this.handleScroll);
            console.log('122222');
         }, 1000);
    }

    render() {
        return (
            <div >
                <Scroll wheelStatus={this.state.scrollButtonProp} handleScroll={this.handleScroll}
                />
                <div>
                    <img className="pattern" src="/images/pattern.png" />

                    <div className={this.state.container1} >
                        <img className="logo" src="/images/logo.png"></img>
                        <div className="subHeading">
                            Graphic Design
                    </div>
                        <div className="subText">
                            Branding | Print | Web & Mobile | Digital Art
                     </div>
                    </div>
                    <div className={this.state.container2} >
                    </div>
                </div>
            </div>

        );
    }

}

export default AnimationScroll;