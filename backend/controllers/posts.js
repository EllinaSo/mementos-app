
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch ({ message }) {
        res.status(404).json({ message });
    }
}

export const createPost = async (req, res) => {
    const newPost = new PostMessage(req.body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch ({ message }) {
        res.status(409).json({ message });
    }
}