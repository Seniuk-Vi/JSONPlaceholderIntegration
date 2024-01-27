export class JsonPlaceholderAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    /**
     * Fetches all posts from the JSONPlaceholder API.
     * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
     * @throws {Error} If the fetch operation fails.
     */
    async getPosts() {
        const response = await fetch(`${this.baseURL}/posts`);
        if (!response.ok) {
            throw new Error('An error occurred while fetching posts: ' + response.status);
        }
        return response.json();
    }
    /**
     * Fetches a single post by its ID from the JSONPlaceholder API.
     * @param {number} id - The ID of the post to fetch.
     * @returns {Promise<Post>} A promise that resolves to the fetched post.
     * @throws {Error} If the fetch operation fails.
     */
    async getPost(id) {
        const response = await fetch(`${this.baseURL}/posts/${id}`);
        if (!response.ok) {
            throw new Error('An error occurred while fetching post: ' + response.status);
        }
        return response.json();

    }
    /**
     * Creates a new post on the JSONPlaceholder API.
     * @param {CreateRequest} postRequest - The post request object containing the details of the post to create.
     * @returns {Promise<Post>} A promise that resolves to the created post.
     * @throws {Error} If the fetch operation fails.
     */
    async createPost(postRequest) {
        const response = await fetch(`${this.baseURL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postRequest)
        })
        if (!response.ok) {
            throw new Error('An error occurred while creating post: ' + response.status);
        }
        return response.json();

    }
    /**
     * Updates a post on the JSONPlaceholder API.
     * @param {PutRequest} putRequest - The put request object containing the details of the post to update.
     * @returns {Promise<Post>} A promise that resolves to the updated post.
     * @throws {Error} If the fetch operation fails.
     */
    async updatePost(putRequest) {
        const response = await fetch(`${this.baseURL}/posts/${putRequest.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(putRequest)
        });
        if (!response.ok) {
            throw new Error('An error occurred while updating post: ' + response.status);
        }
        return response.json();
    }
    /**
     * Patches a post on the JSONPlaceholder API.
     * @param {PatchRequest} patchRequest - The patch request object containing the details of the post to patch.
     * @returns {Promise<Post>} A promise that resolves to the patched post.
     * @throws {Error} If the fetch operation fails.
     */
    async patchPost(patchRequest) {
        const response = await fetch(`${this.baseURL}/posts/${patchRequest.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patchRequest.fieldsToUpdate)
        })
        if (!response.ok) {
            throw new Error('An error occurred while patching post: ' + response.status);
        }
        return response.json();

    }
    /**
     * Deletes a post on the JSONPlaceholder API.
     * @param {number} id - The ID of the post to delete.
     * @throws {Error} If the fetch operation fails.
     */
    async deletePost(id) {
        const response = await fetch(`${this.baseURL}/posts/${id}`,
            {method: 'DELETE'});
        if (!response.ok) {
            throw new Error('An error occurred while deleting posts: ' + response.status);
        }
    }
}