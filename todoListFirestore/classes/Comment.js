class Comment {
    constructor(text, likes) {
        this.text = text;
        this.likes = likes;
    }

    addLike() {
        this.likes++;
    }
}

const comment = new Comment('asdasdasd', 0);
comment.addLike();