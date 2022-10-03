import React from "react";
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-danger">все</button>
            <button type="button" className="btn btn-outline-secondary">понравилось</button>
        </div>
    )
}
export default PostStatusFilter;