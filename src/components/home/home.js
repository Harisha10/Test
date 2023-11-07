
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../../App";
import blogImg from '../../assets/images/article-img.jpg';

export const Home = () => {
    const { blogsData } = useContext(BlogContext);
    const [blogs, setBlogs] = useState([]);


    const searchBlog = ((e) => {
        const value = e.target.value.toLowerCase();
        const filteredBlogs = blogsData.filter(blog => ['title', 'type', 'publishedBy', 'date'].some(prop => blog[prop].toLowerCase().includes(value)));
        setBlogs(filteredBlogs);
    });

    useEffect(() => {
        // Initialize 'blogs' with 'blogsData' when the component mounts.
        setTimeout(() => {
            setBlogs(blogsData);
        }, 3000)
    }, [blogsData]);

    return (
        <div className="homePage">
            <>{blogs.length ? <><div className="seachField">
                <input placeholder="Search ..." onChange={searchBlog} className="mr-2"></input>
                <Link to='/blogs/create' className="create"> + </Link>
            </div>
                <div className="blogs">
                    {blogs.map(blog => (
                        <div key={blog.id} className="blog">
                            <div className="blogImg">
                                <img src={blogImg} alt={blog.title} />
                            </div>
                            <div className="blogContent">
                                <h3>{blog.title}</h3>
                                <p>Published By: {blog.publishedBy}</p>
                                <p>Type: {blog.type}</p>
                                <p>Date: {blog.date}</p>
                            </div>
                            <Link to={`/blogs/${blog.id}`}>More</Link>
                        </div>
                    ))}
                </div></> :
                <div>Loading</div>}</>
        </div>
    );
};
