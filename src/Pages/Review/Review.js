import React from "react";

const Review = () => {
  return (
    <div>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
        <textarea
          className="textarea textarea-accent"
          placeholder="Write your review"
        ></textarea>
      </div>
  );
};

export default Review;
