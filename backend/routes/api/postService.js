const { directive } = require("vue/types/umd")

import axios from 'axios';

const url = "mongodb://cs307-group04:N5t49f63QbURydG2@http://fall2020-comp307.cs.mcgill.ca:8004/cs307-group04-DB";

class postService
{
        //get Posts
        static getPosts()
        {
                return new Promise(async (reslove, reject) => {
                try{
                        const res = await axios.get(url);
                        const data = res.data;
                        reslove(
                        data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)}))
                );
                } catch(err) {
                        reject(err);
                }
        })
        }

        //create post
        static insertPost(text)
        {
                return axios.post(url, {text});
        }


        //delete post
        static deletePost(text)
        {
                return axios.delete(`${url}/${text}`);
        }

}

export default postService;