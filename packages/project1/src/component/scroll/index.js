import React from "react"

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stopReactBubbling: false,
            stopDomBubbling: false,
        }
    }

    componentDidMount() {
        const childDom = document.getElementById('child')
        const parentDom = document.getElementById('parent')
        const containerDom = document.getElementById('container')
        childDom.addEventListener('scroll', (e) => {
            if (this.state.stopDomBubbling) {
                e.stopPropagation();
            }
            console.log("child:dom scroll")
        },true)
        parentDom.addEventListener('scroll', (e) => {
            if (this.state.stopDomBubbling) {
                e.stopPropagation();
            }
            console.log("parent:dom scroll")
        },true)
        containerDom.addEventListener('scroll', (e) => {
            if (this.state.stopDomBubbling) {
                e.stopPropagation();
            }
            console.log("container:dom scroll")
        },true)
    }

    render() {
        return <div style={{paddingLeft:20}}>
            <br/>
            stopReactBubbling:{this.state.stopReactBubbling ? 'true' : 'false'}
            <div onClick={() =>{
                this.setState({
                    stopReactBubbling:!this.state.stopReactBubbling
                })
            }}>stopReactBubbling
            </div>
            <br/>
            <br/>
            stopDomBubbling:{this.state.stopDomBubbling ? 'true' : 'false'}
            <div onClick={() =>{
                this.setState({
                    stopDomBubbling:!this.state.stopDomBubbling
                })
            }}>stopReactBubbling
            </div>
            <br/>
            <br/>
            <div id={'container'} onScroll={(e) => {
                // if (this.state.stopReactBubbling) {
                //     e.stopPropagation();
                // }
                // console.log("container:react scroll")
            }}>
                <span>container</span>
                <div id={'parent'} onScroll={(e) => {
                    // if (this.state.stopReactBubbling) {
                    //     e.stopPropagation();
                    // }
                    // console.log("parent:react scroll")
                }}>
                    <span>parent</span>
                    <div id='child' onScroll={(e) => {
                        // if (this.state.stopReactBubbling) {
                        //     e.stopPropagation();
                        // }
                        // console.log("child:react scroll")
                    }}>
                        <span>child</span>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Index;
