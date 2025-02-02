import React from "react";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-200  rounded-xl p-4">
                <div className="w-full justify-center mb-4"></div>
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt="{title}"
                    className="rounded-xl"
                />
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
        </Link>
    );
}

export default PostCard;
