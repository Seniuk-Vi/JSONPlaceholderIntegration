import {JsonPlaceholderAPI} from '../service/JsonPlaceholderAPI.js';
import {appendPost, clearPosts, displayPost, removePost} from '../dom/postDom.js';
import {CreateRequest, PatchRequest, PutRequest} from "../model/postModels.js";

const apiService = new JsonPlaceholderAPI('https://jsonplaceholder.typicode.com');

/**
 * Fetches all posts and logs them to the console.
 */
export async function handleGetPosts() {
    try {
        clearPosts();
        const posts = await apiService.getPosts();
        for (const post of posts) {
            appendPost(displayPost(post));
        }
    } catch (error) {
        console.error('An error occurred while fetching posts: ', error);
    }
}

/**
 * Fetches post and logs them to the console.
 * @param {number} id - The ID of the post to fetch.
 */
export async function handleGetPost(id) {
    try {
        clearPosts();
        const post = await apiService.getPost(id);
        appendPost(displayPost(post));
    } catch (error) {
        console.error('An error occurred while fetching post: ', error);
    }
}

/**
 * Creates a new post with the given title and body and logs the created post to the console.
 * @param {number} userId - The ID of the user.
 * @param {string} title - The title of the post.
 * @param {string} body - The body of the post.
 */
export async function handleCreatePost(userId, title, body) {
    try {
        const postRequest = new CreateRequest(userId, title, body);
        const post = await apiService.createPost(postRequest);
        console.log(post);
        alert('Post created successfully.');
    } catch (error) {
        console.error('An error occurred while creating a post: ', error);
        alert('Failed to create post: ' + error);
    }
}

/**
 * Deletes the post with the given ID and logs a success message to the console.
 * @param {number} id - The ID of the post to delete.
 */
export async function handleDeletePost(id) {
    try {
        await apiService.deletePost(id);
        removePost(id);
        alert(`Post with id ${id} deleted successfully.`);
    } catch (error) {
        console.log(`Failed to delete post: ` + error);
        alert(`Failed to delete post with id ${id}.`);
    }
}

export function handleUpdatePostButton(id) {
    const postElement = document.getElementById(`post-${id}`);
    const userId = postElement.querySelector('h3').textContent.split(' ')[1];
    const title = postElement.querySelector('h4').textContent.split(': ')[1];
    const body = postElement.querySelector('p').textContent.split(': ')[1];

    document.getElementById('updateID').value = id;
    document.getElementById('updateUserID').value = userId;
    document.getElementById('updateTitle').value = title;
    document.getElementById('updateBody').value = body;
}

/**
 * Updates the post with the given ID with the given title and body and logs the updated post to the console.
 * @param {number} id - The ID of the post to update.
 * @param {number} userId - The new ID of the post.
 * @param {string} title - The new title of the post.
 * @param {string} body - The new body of the post.
 */
export async function handleUpdatePost(id, userId, title, body) {
    try {
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
export async function handlePatchPost(id, fieldsToUpdate) {
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