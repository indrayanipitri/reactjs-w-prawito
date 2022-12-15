import React from "react";
import Img1 from '../../../../images/mataharii.jpg'
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={Img1} alt="img1" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>

        </div>
    )
}

YoutubeComp.defaultProps = {
    time : '00.00',
    title : "Ini Judul",
    desc : "xx ditonton, xx hari lalu"
}

export default YoutubeComp;