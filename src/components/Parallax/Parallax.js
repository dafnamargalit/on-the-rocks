import React from 'react';

export default class Parallax extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            speed: this.props.speed || 1,

            width: '100%',
            height: this.props.height || '100%',

            top: this.props.top || '0%',
            left: this.props.left,
            right: this.props.right,

            position: 'absolute',
            zIndex: this.props.zindex || '0',

            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: this.props.color || null,
            backgroundImage: `url(${this.props.image})`
        };
    }
    

    handleScroll(){
        const speed = this.props.speed;
        const top = this.top;

        const pageTop = window.scrollY;
        const newTop = (top - (pageTop*speed));

        this.refs.parallaxElement.style.top = `${newTop}px`;

    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    throttle(fn, wait){

        let time = Date.now();

        return function(){
            if ((time + wait - Date.now()) < 0){
                fn();
                time = Date.now();
            }
        }
    }

    render(){
        return(
            <div ref = "parallaxElement"
            style = {{...this.state}}
            >
                {this.props.children}
            </div>
        )
    }
}

