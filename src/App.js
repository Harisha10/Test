import 'devextreme/dist/css/dx.light.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/main.css';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { BlogDetails } from './components/home/blogDetails';
import { UserArticles } from './components/myArticles/userArticles';
import { ArticleDetails } from './components/myArticles/articleDetails';
import { CreateArticle } from './components/home/createArticle';
import ServicesGrid from './components/services';

// Dummy data for blogs
const blogs = [
  { id: 1, title: 'Blog 1', publishedBy: 'User 1', type: 'Technology', description: 'This is the first blog.', date: '2023-10-17', img: 'article-img1.jpg' },
  { id: 2, title: 'Blog 2', publishedBy: 'User 2', type: 'Food', description: 'This is the second blog.', date: '2023-10-18', img: 'article-img2.jpg' },
  { id: 3, title: 'Blog 3', publishedBy: 'User 3', type: 'Travel', description: 'This is the third blog.', date: '2023-10-19', img: 'article-img3.jpg' },
  { id: 4, title: 'Blog 4', publishedBy: 'User 4', type: 'Trip', description: 'This is the fourth blog.', date: '2023-10-20', img: 'article-img1.jpg' },
  { id: 5, title: 'Blog 5', publishedBy: 'User 5', type: 'Function', description: 'This is the fifth blog.', date: '2023-10-21', img: 'article-img2.jpg' },
  { id: 6, title: 'Blog 6', publishedBy: 'User 6', type: 'Music', description: 'This is the sixth blog.', date: '2023-10-22', img: 'article-img3.jpg' },
  { id: 7, title: 'Blog 7', publishedBy: 'User 7', type: 'Concerts', description: 'This is the seventh blog.', date: '2023-10-23', img: 'article-img1.jpg' },

];

export const BlogContext = createContext({
  blogsData: blogs,
  updateBlogsData: () => { }
});
const App = () => {
  const [blogsData, setBlogsData] = useState(blogs)
  // Modify blogs data from child update function
  const updateBlogsData = (newData) => {
    setBlogsData(newData);
  };

  return (
    <BlogContext.Provider value={{ blogsData, updateBlogsData }}>
      <Router>
        <Header />
        <div className='mainContent container' data-testid="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/create" element={<CreateArticle />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/user-articles" element={<UserArticles />} />
            <Route path="/user-articles/:id" element={<ArticleDetails />} />
            <Route path='/services' element={<ServicesGrid />} />
          </Routes>
        </div>
      </Router>
    </BlogContext.Provider >
  );
};
export default App;
