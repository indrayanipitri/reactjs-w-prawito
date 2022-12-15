import React, {Component} from "react";
import '../../App.css'
import Header from "../../Component/Statefull/CardProduct/Header";

class Home extends Component {
    render() {
        return (
        <div className="App">
            {/* <h2>Youtube Component</h2>
            <hr />
            <YoutubeComp time="12.13" title="gak tau nih" desc="124 ditonton, 12 hari lalu" />
            <YoutubeComp time="22.44" title="aku bingung" desc="453 ditonton, 13 hari lalu"/>
            <YoutubeComp time="30.51" title="ya gitu deh" desc="678 ditonton, 14 hari lalu"/>
            <YoutubeComp />
             */}
            <h2>Counter</h2>
            {/* <Product /> */}
            <Header />
        </div>
        )
        
    }
}

export default Home;