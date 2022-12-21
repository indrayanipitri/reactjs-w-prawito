import React, { Component } from "react";
import BlogPostItem from "../../Stateless/BlogPost/BlogPostItem";
import axios from "axios";


class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        //with fetch:
        // fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => {
        //     this.setState( {
        //         post: json
        //     })
        // })

        //with axios:
        axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
            this.setState ( {
                post: result.data
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