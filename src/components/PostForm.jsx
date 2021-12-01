import React, {useState} from 'react';
import Input from "./UI/input/Input";
import CreateButton from "./UI/buttons/CreateButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', description: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost);
        setPost({title: '', description: ''})
    };

    return (
        <div>
            <form>
                <Input
                    onChange={e => setPost({...post, title: e.target.value})}
                    value={post.title}
                    type="text" placeholder='post name'/>
                <Input
                    onChange={e => setPost({...post, description: e.target.value})}
                    value={post.description}
                    type="text"
                    placeholder='post description'/>
                <CreateButton
                    onClick={addNewPost}>Create</CreateButton>
            </form>
        </div>
    );
};

export default PostForm;
