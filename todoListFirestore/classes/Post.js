export class Post {
    constructor(title, description, comments, likes) {
        this.title = title;
        this.description = description;
        this.comments = comments;
        this.likes = likes;
    }

    comentar(comment) {
        this.comments.push(comment)
    }

    addLike() {
        this.likes++;
    }
}
