
import mongoose from "mongoose";
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

const NO_POST_MESSAGE = "No post with that id"

export const updatePost = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(NO_POST_MESSAGE);
    }

    const post = req.body;
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new : true });

    if (updatedPost) {
        res.status(200).json(updatedPost);
    } else {
        return res.status(404).send(NO_POST_MESSAGE);
    }
}


export const deletePost = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(NO_POST_MESSAGE);
    }

    await PostMessage.findByIdAndDelete(id);
    res.status(200).send('Post deleted successfully');
}