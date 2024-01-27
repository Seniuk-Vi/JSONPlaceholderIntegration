export function displayPost(post) {
    return `
        <div class="post" id="post-${post.id}">
            <h2>Post ${post.id}</h2>
            <h3>UserId ${post.userId}</h3>
            <h4>Title: ${post.title}</h4>
            <p>Body: ${post.body}</p>
            <button class="delete-post" data-id="${post.id}">Delete Post</button>
            <button class="update-post" data-id="${post.id}">Update Post</button>
        </div>
    `;
}

export function clearPosts() {
    const postsElement = document.getElementById('posts');
    postsElement.innerHTML = '';
}

export function removePost(id) {
    const postElement = document.getElementById(`post-${id}`);
    postElement.remove();
}

export function appendPost(postHTML) {
    const postsElement = document.getElementById('posts');
    postsElement.innerHTML += postHTML;
}