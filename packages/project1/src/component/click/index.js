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
        childDom.addEventListener('click', (e) => {
            if (this.state.stopDomBubbling) {
                e.stopPropagation();
            }
            console.log("child:dom click")
        })
        childDom.addEventListener('click', (e) => {
            if (this.state.stopDomBubbling) {
                e.stopPropagation();
            }
            console.log("child:dom click2")
        })
        parentDom.addEventListener('click', (e) => {
            if (this.state.stopDomBubbling) {
                e.stopPropagation();
            }
            console.log("parent:dom click")
        })
        containerDom.addEventListener('click', (e) => {
            if (this.state.stopDomBubbling) {
                e.stopPropagation();
            }
            console.log("container:dom click")
        })
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
            <div id={'container'} onClick={(e) => {
                if (this.state.stopReactBubbling) {
                    e.stopPropagation();
                }
                console.log("container:react click")
            }}>
                <span>container</span>
                <div id={'parent'} onClick={(e) => {
                    if (this.state.stopReactBubbling) {
                        e.stopPropagation();
                    }
                    console.log("parent:react click")
                }}>
                    <span>parent</span>
                    <div id='child' onClick={(e) => {
                        if (this.state.stopReactBubbling) {
                            e.stopPropagation();
                        }
                        console.log("child:react click")
                    }}>
                        <span>child</span>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Index;
