import React from "react";

const Biography = () => {
  return (
    <div className="hero ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-red-400 text-center">
            Biography{" "}
          </h2>
          <br />
          <p className="text-lg font-bold text-accent">Hello there</p>
          <p className="py-6 text-lime-900 text-xl font-semibold">
            I am a graduate student in department of poltical science at the
            national university. <br />
            I am also an open-source enthusiast and have created projects that
            were listed in GITHUB trending. <br />
            My intersts lie in solving problems related to large-scale
            distributed software system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
