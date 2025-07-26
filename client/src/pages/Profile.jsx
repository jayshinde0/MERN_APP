import assets from "../assets/assets";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Martin Johnson");
  const [bio, setBio] = useState("Hi Everyone, I am Using QuickChat");
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-no-repeat flex items-center
justify-center"
      >
        <div
          className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2
  border-gray-600 flex items-center justify-between max-sm:flex-col-reverse
  rounded-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 flex-1">
            <h3 className="text-lg">Profile details</h3>
            <label
              htmlFor="avatar"
              className="flex items-center gap-3
      cursor-pointer"
            >
              <input
                onChange={(e) => setSelectedImg(e.target.files[0])}
                type="file"
                id="avatar"
                accept=".png, .jpg, .jpeg"
                hidden
              />
              <img
                src={
                  selectedImg
                    ? URL.createObjectURL(selectedImg)
                    : assets.avatar_icon
                }
                alt=""
                className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
              />
              upload profile picture
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="p-2 border border-gray-500 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />

            {/* Bio Input */}
            <textarea
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write a short bio..."
              className="p-2 border border-gray-500 rounded-md bg-gray-900 text-white"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Save Changes
            </button>
          </form>
          <img
            className=" max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10 "
            src={assets.logo_icon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
