import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServicesItem = ({ service }) => {
  const { name, img, price, des } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <figure>
          <PhotoView src={img} style={{ objectFit: "cover" }}>
            <img src={img} style={{ objectFit: "cover" }} alt="services " />
          </PhotoView>
        </figure>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl text-orange-600 font-semibold">Price: {price}</p>
        <p className="text-2xl text-orange-300 font-semibold">
          Description: {des}
        </p>
      </div>
    </div>
  );
};

export default AllServicesItem;
