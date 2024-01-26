export class Post {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

export class PostRequest {
    constructor(userId, title, body) {
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}

export class PutRequest {
    constructor(id, userId, title, body) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}

export class PatchRequest {
    constructor(id, fieldsToUpdate) {
        this.id = id;
        this.fieldsToUpdate = fieldsToUpdate;
    }
}