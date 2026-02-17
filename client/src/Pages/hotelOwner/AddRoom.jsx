import React, { useState } from "react";
import Tittle from "../../Components/Tittle";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [input, setInput] = useState({
    roomName: "",
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wi-Fi": false,
      "Air Conditioning": false,
      TV: false,
      "Mini Bar": false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Data:", { images, input });
    // Add your API call here to submit room data
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tittle
        align="left"
        font="outfit"
        title="Add Room"
        subtitle="fill in the details carefully and accurately room details, pricing and amenities, to enhance the guest experience"
      />

      {/* upload area for images */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label
            htmlFor={`roomImage${key}`}
            key={key}
            className="cursor-pointer"
          >
            <div className="w-32 h-32 overflow-hidden rounded border border-gray-300">
              <img
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Name</p>
          <input
            type="text"
            placeholder="Enter room name"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={input.roomName}
            onChange={(e) => setInput({ ...input, roomName: e.target.value })}
          />
        </div>
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            value={input.roomType}
            onChange={(e) => setInput({ ...input, roomType: e.target.value })}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div>
          <p className="text-gray-800 mt-4">
            price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder=""
            className="border-gray-300 mt-1 rounded p-2 w-24"
            value={input.pricePerNight}
            onChange={(e) =>
              setInput({ ...input, pricePerNight: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <p className="text-gray-800 mt-4">Amenities</p>
      <div className="flex flex-col flex-wrap  mt-1 text-gray-400 max-w-sm">
        {Object.keys(input.amenities).map((amenity, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={input.amenities[amenity]}
              onChange={() =>
                setInput({
                  ...input,
                  amenities: {
                    ...input.amenities,
                    [amenity]: !input.amenities[amenity],
                  },
                })
              }
            />
            <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-8 mt-8 py-2 rounded cursor-pointer hover:bg-opacity-90"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
