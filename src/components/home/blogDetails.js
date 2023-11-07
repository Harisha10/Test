import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../../App";
import { useContext } from "react";
export const BlogDetails = () => {
    const { id } = useParams();
    const { blogsData } = useContext(BlogContext);
    const blog = blogsData.find(blog => blog.id === parseInt(id)) || {};

    if (Object.keys(blog).length === 0) {
        return <div>Blog not found</div>;
    }

    return (<>
        <Link to='/' className="arrow-button"></Link>

        <div className="blogDetails">
            <h2>{blog.title}</h2>
            <p>Description: {blog.description}</p>
            <p>Published By: {blog.publishedBy}</p>
            <p>Type: {blog.type}</p>
            <p>Date: {blog.date}</p>
        </div>
    </>
    );
};