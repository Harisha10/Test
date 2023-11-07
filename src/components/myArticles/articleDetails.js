import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../../App";
export const ArticleDetails = () => {
    const { id } = useParams();
    const { blogsData, updateBlogsData } = useContext(BlogContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const blog = blogsData.find(blog => blog.id === parseInt(id)) || {};
    const initialArticleData = useMemo(() => {
        return {
            title: blog.title || '',
            description: blog.description || '',
            type: blog.type || ''
        }
    }, [blog]);

    const [articleData, setArticleData] = useState(initialArticleData);
    const [activateBtns, setActivateBtns] = useState(false);



    useEffect(() => {
        if (Object.keys(blog).length === 0) {
            return <div>Blog not found</div>;
        }
        setArticleData(initialArticleData);
        setActivateBtns(false);
    }, [blog, initialArticleData]);
    
    const editArticle = useCallback(e => {
        const { name, value } = e.target;
        setArticleData(prevData => ({
            ...prevData,
            [name]: value
        }))
        setActivateBtns(true);
    }, []);

    const updateBlogData = useCallback(() => {
        const updatedBlogs = blogsData.map(blogItem => {
            if (blogItem.id === parseInt(id)) {
                return {
                    ...blogItem,
                    title: articleData.title,
                    type: articleData.type,
                    description: articleData.description,
                };
            }
            return blogItem;
        });

        updateBlogsData(updatedBlogs);
        setActivateBtns(false);
    }, [articleData, blogsData, id, updateBlogsData]);

    function reset() {
        setActivateBtns(false);
        setArticleData(initialArticleData);
    }
    return (<>
        <Link to='/user-articles' className="arrow-button"></Link>
        <div className="editArticle blogDetails">
            <div className="actions">
                <h2>Edit Article</h2>
                <div>
                    <button className="save" disabled={!activateBtns} onClick={updateBlogData}>Save</button>
                    <button className="discard" disabled={!activateBtns} onClick={reset}>Discard</button>
                </div>
            </div>
            <div className="article">
                <div className="inputField">
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" value={articleData.title} onChange={editArticle} />
                </div>
                <div className="inputField">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={articleData.description} onChange={editArticle} />
                </div>
                <div className="inputField">
                    <label htmlFor="type">Type</label>
                    <input name="type" value={articleData.type} onChange={editArticle} />
                </div>
            </div>
        </div>
    </>
    );
};