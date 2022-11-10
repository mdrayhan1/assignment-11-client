import React from "react";

const Review = () => {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people" alt="" />
        </div>
      </div><br />
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered input-accent w-full max-w-xs"
      />  <br />
      <textarea className="textarea textarea-accent" placeholder="Write your review"></textarea>
    </div>
  );
};

export default Review;
