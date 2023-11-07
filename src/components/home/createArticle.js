// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BlogContext } from "../../App";
// export const CreateArticle = () => {
//     const navigate = useNavigate();
//     const { blogsData, updateBlogsData } = useContext(BlogContext);
//     const [articleData, setArticleData] = useState({ title: "", description: "", type: "" });
//     const [activateBtns, setActivateBtns] = useState(false);

//     function editArticle(e) {
//         setActivateBtns(true);
//         switch (e.target.name) {
//             case "title": setArticleData({ ...articleData, title: e.target.value });
//                 break;
//             case "description": setArticleData({ ...articleData, description: e.target.value });
//                 break;
//             case "type": setArticleData({ ...articleData, type: e.target.value });
//                 break;
//             default: setArticleData(articleData);
//         }
//     }
//     function updateBlogData() {
//         let obj = {
//             id: 11,
//             title: articleData.title,
//             publishedBy: 'Harisha',
//             type: articleData.type,
//             description: articleData.description,
//             date: '2023-10-24',
//             // img: blog.img

//         }
//         blogsData.push(obj);
//         updateBlogsData(blogsData);
//         navigate('/');
//     }

//     return (<>
//         <Link to='/user-articles' className="arrow-button"></Link>
//         <div className="editArticle blogDetails">
//             <div className="actions">
//                 <h2>Create Article</h2>
//                 <div>
//                     <button className="save" disabled={!activateBtns} onClick={updateBlogData}>Save</button>
//                 </div>
//             </div>
//             <div className="article">
//                 <div className="inputField">
//                     <label htmlFor="title">Title</label>
//                     <input name="title" type="text" value={articleData.title} onChange={editArticle} />
//                 </div>
//                 <div className="inputField">
//                     <label htmlFor="description">Description</label>
//                     <textarea name="description" value={articleData.description} onChange={editArticle} />
//                 </div>
//                 <div className="inputField">
//                     <label htmlFor="type">Type</label>
//                     <input name="type" value={articleData.type} onChange={editArticle} />
//                 </div>
//             </div>
//         </div>
//     </>
//     );
// };


import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BlogContext } from "../../App";

export const CreateArticle = () => {
    const navigate = useNavigate();
    const { blogsData, updateBlogsData } = useContext(BlogContext);
    const [errorMsg, setErrorMsg] = useState(false);
    const [articleData, setArticleData] = useState({
        title: "",
        description: "",
        type: "",
    });

    const editArticle = (e) => {
        const { name, value } = e.target;
        setArticleData((prevData) => ({ ...prevData, [name]: value }));
    };

    const updateBlogData = () => {
        if (!articleData.title.trim() || !articleData.description.trim() || !articleData.type.trim()) {
            setErrorMsg(true);
            return;
        }

        const obj = {
            id: 11,
            title: articleData.title,
            publishedBy: 'Harisha',
            type: articleData.type,
            description: articleData.description,
            date: '2023-10-24',
        };

        const updatedBlogs = [...blogsData, obj];
        updateBlogsData(updatedBlogs);
        navigate('/');
    };

    return (
        <>
            <Link to='/' className="arrow-button"></Link>
            {errorMsg ? <div>Please fill all details</div> : ""}
            <div className="editArticle blogDetails">
                <div className="actions">
                    <h2>Create Article</h2>
                    <div>
                        <button
                            className="save"
                            disabled={!articleData.title || !articleData.description || !articleData.type}
                            onClick={updateBlogData}
                        >
                            Save
                        </button>
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
