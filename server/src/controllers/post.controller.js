import Post from '../models/post.model.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findByPk(id);
        res.json(post);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

export const createPost = async (req, res) => {
    const { title, body, isDraft, userId } = req.body;

    try {
        const post = await Post.create({
            title,
            body,
            isDraft,
            userId
        });

        res.json(post);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findByPk(id);
        post.set(req.body);
        await post.save();
        res.json(post);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        await Post.destroy({
            where: {
                id
            }
        });

        res.sendStatus(204);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};
