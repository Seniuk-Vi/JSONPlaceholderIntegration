import {
    handleCreatePost,
    handleDeletePost,
    handleGetPost,
    handleGetPosts,
    handlePatchPost,
    handleUpdatePost,
    handleUpdatePostButton
} from './eventHandler/postEventHandler.js';

document.getElementById('getPost').addEventListener('submit', event => {
    event.preventDefault();
    const id = Number(document.getElementById('getID').value);
    handleGetPost(id);
});

document.getElementById('posts').addEventListener('click', event => {
    if (event.target.classList.contains('delete-post')) {
        const id = Number(event.target.dataset.id);
        handleDeletePost(id);
    } else if (event.target.classList.contains('update-post')) {
        const id = Number(event.target.dataset.id);
        handleUpdatePostButton(id);
    }
});

document.getElementById('getPosts').addEventListener('click', handleGetPosts);

document.getElementById('createPostForm').addEventListener('submit', event => {
    event.preventDefault();
    const userId = Number(document.getElementById('createUserID').value);
    const title = document.getElementById('createTitle').value;
    const body = document.getElementById('createBody').value;
    handleCreatePost(userId, title, body);
});

document.getElementById('updatePostForm').addEventListener('submit', event => {
    event.preventDefault();
    const id = Number(document.getElementById('updateID').value);
    const userId = Number(document.getElementById('updateUserID').value);
    const title = document.getElementById('updateTitle').value;
    const body = document.getElementById('updateBody').value;
    handleUpdatePost(id, userId, title, body);
});

document.getElementById('patchPostForm').addEventListener('submit', event => {
    event.preventDefault();
    const id = Number(document.getElementById('patchID').value);
    const fieldsToUpdate = {
        title: document.getElementById('patchTitle').value,
        userId: Number(document.getElementById('patchUserID').value),
        body: document.getElementById('patchBody').value
    };
    handlePatchPost(id, fieldsToUpdate);
});
