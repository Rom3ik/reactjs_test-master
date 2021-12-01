import React, {useState, useEffect, useMemo} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import FilterAndSort from "./components/FilterAndSort";
import {usePosts} from "./hooks/usePosts";
import ApiService from "./API/ApiService";
import Loader from "./components/UI/Loader/Loader";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    };

    async function fetchPosts() {
        setIsLoading(true)
        setTimeout(async () => {
            const posts = await ApiService.getPosts();
            setPosts(posts);
            setIsLoading(false)
        }, 3000)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <FilterAndSort
                filter={filter}
                setFilter={setFilter}
            />
            <hr style={{margin: '15px 0'}}/>
            {
                isLoading
                    ? <Loader/>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            }
        </div>
    );
}

export default App;
