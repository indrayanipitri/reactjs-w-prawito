import React from "react";
import './BlogPostItem.css'

export default function BlogPostItem(props) {
    return (
        <>
        <div className="card">
            <div className="img-thumb">
                <img src="https://placeimg.com/300/150/tech" alt="img-blog" />
            </div>
            <div className="content">
                <h4 className="title-blog">{props.title}</h4>
                <p className="desc-blog">{props.desc}</p>
            </div>
        </div>
                
        </>
    )
}