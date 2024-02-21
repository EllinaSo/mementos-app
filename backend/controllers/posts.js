
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

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json("No post with that id");
    }

    const post = req.body;
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new : true })
    res.status(200).json(updatedPost);
}