import {JsonPlaceholderAPI} from './service/JsonPlaceholderAPI.js';
import {PatchRequest, PostRequest, PutRequest} from './model/postModels.js';

const apiService = new JsonPlaceholderAPI('https://jsonplaceholder.typicode.com');

/**
 * Fetches post and logs them to the console.
 * @param {number} id - The ID of the post to fetch.
 */
async function getPost(id) {
    try {
        const post = await apiService.getPost(id);
        console.log(post);
    } catch (error) {
        console.error('An error occurred while fetching post: ', error);
    }
}

/**
 * Fetches all posts and logs them to the console.
 */
async function getPosts() {
    try {
        const posts = await apiService.getPosts();
        console.log(posts);
    } catch (error) {
        console.error('An error occurred while fetching posts: ', error);
    }
}

/**
 * Creates a new post with the given title and body and logs the created post to the console.
 * @param {number} userId - The ID of the user.
 * @param {string} title - The title of the post.
 * @param {string} body - The body of the post.
 */
async function createPost(userId, title, body) {
    try {
        const postRequest = new PostRequest(userId, title, body);
        const post = await apiService.createPost(postRequest);
        console.log(post);
        alert('Post created successfully.');
    } catch (error) {
        console.error('An error occurred while creating a post: ', error);
        alert('Failed to create post: ' + error);
    }
}

/**
 * Updates the post with the given ID with the given title and body and logs the updated post to the console.
 * @param {number} id - The ID of the post to update.
 * @param {number} userId - The new ID of the post.
 * @param {string} title - The new title of the post.
 * @param {string} body - The new body of the post.
 */
async function updatePost(id, userId, title, body) {
    try {
        const userId = 1; // Replace with actual user ID
        const putRequest = new PutRequest(id, userId, title, body);
        const post = await apiService.updatePost(putRequest);
        console.log(post);
        alert('Post updated successfully.');
    } catch (error) {
        console.error('An error occurred while updating a post: ', error);
        alert('Failed to update post');
    }
}

/**
 * Patches the post with the given ID with the given fields and logs the patched post to the console.
 * @param {number} id - The ID of the post to patch.
 * @param {Object} fieldsToUpdate - The fields to update.
 */
async function patchPost(id, fieldsToUpdate) {
    try {
        const patchRequest = new PatchRequest(id, fieldsToUpdate);
        const post = await apiService.patchPost(patchRequest);
        console.log(post);
        alert('Post updated successfully.');
    } catch (error) {
        console.error('An error occurred while patching a post: ', error);
        alert('Failed to patch post');
    }
}

/**
 * Deletes the post with the given ID and logs a success message to the console.
 * @param {number} id - The ID of the post to delete.
 */
async function deletePost(id) {
    try {
        await apiService.deletePost(id);
        console.log(`Post with id ${id} deleted successfully.`);
        alert(`Post with id ${id} deleted successfully.`);
    } catch (error) {
        console.log(`Failed to delete post: ` + error);
        alert(`Failed to delete post with id ${id}.`);
    }
}

document.getElementById('getPost').addEventListener('submit', event => {
    event.preventDefault();
    const id = Number(document.getElementById('getID').value);
    getPost(id);
});
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('createPostForm').addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('createTitle').value;
    const body = document.getElementById('createBody').value;
    createPost(title, body);
});

document.getElementById('updatePostForm').addEventListener('submit', event => {
    event.preventDefault();
    const id = Number(document.getElementById('updateID').value);
    const userId = Number(document.getElementById('updateUserID').value);
    const title = document.getElementById('updateTitle').value;
    const body = document.getElementById('updateBody').value;
    updatePost(id, userId, title, body);
});

document.getElementById('patchPostForm').addEventListener('submit', event => {
    event.preventDefault();
    const id = Number(document.getElementById('patchID').value);
    const fieldsToUpdate = {
        title: document.getElementById('patchTitle').value,
        userId: document.getElementById('patchUserID').value,
        body: document.getElementById('patchBody').value
    };
    patchPost(id, fieldsToUpdate);
});

document.getElementById('deletePostForm').addEventListener('submit', event => {
    event.preventDefault();
    const id = Number(document.getElementById('deleteID').value);
    deletePost(id);
});