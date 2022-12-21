import React, { Component } from "react";
import BlogPostItem from "../../Stateless/BlogPost/BlogPostItem";



class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => {
            this.setState( {
                post: json
            })
        })
    }

    render () {
        return (
            <>
            <h2 className="title">Blogpost</h2>
            {
                this.state.post.map(post => {
                    return <BlogPostItem title={post.title} desc={post.body}/>
                })
            }
            
            </>
        )
    }
}

export default BlogPost;