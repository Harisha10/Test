import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../../App";
import blogImg from '../../assets/images/article-img.jpg';
export const UserArticles = () => {
    const { blogsData, updateBlogsData } = useContext(BlogContext);
    function deleteBlog(id) {
        let updatedBlogs = blogsData.filter(obj => obj.id !== id);
        updateBlogsData(updatedBlogs);
    }
    return (
        <div className="articlesPage">
            <h2>My Articles</h2>
            <div className="blogs">
                {blogsData.map(blog => (
                    <div key={blog.id} className="blog">
                        <div className="blogImg">
                            <img src={blogImg} alt={blog.title} />
                        </div>
                        <div className="blogContent">
                            <h3>{blog.title}</h3>
                            <p>Type: {blog.type}</p>
                            <p>Date: {blog.date}</p>
                        </div>
                        <div className="editDelete">
                            <Link
                                to={`/user-articles/${blog.id}`}
                            >Edit</Link>
                            <button class="btn delete" onClick={() => deleteBlog(blog.id)}>Delete</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};