import React from "react"
import './App.css';
import Click from "./component/click"
import Scroll from "./component/scroll"
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }

  render () {
    return false?<Scroll/>:<Click/>
  }
}

export default App;
