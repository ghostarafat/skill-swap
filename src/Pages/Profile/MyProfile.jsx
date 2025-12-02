import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import toast from "react-hot-toast";

function MyProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    const updateData = {
      name: name,
      photo: photo,
    };
    updateUserProfile(updateData)
      .then(() => {
        toast.success("Profile updated successfully!");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
        setLoading(false);
      });
  };

  if (!user) {
    return (
      <p className="text-center text-gray-600 mt-10">
        Please login to view your profile.
      </p>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-yellow-50 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-700 mb-3">
        My Profile
      </h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={
            user.photoURL || "https://i.postimg.cc/7ZBcjDqp/default-avatar.png"
          }
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-3"
        />
        <h3 className="text-xl font-semibold text-gray-800">
          {user.displayName}
        </h3>
        <p className="text-gray-600 text-sm">{user.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Update your name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Update photo URL"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}

export default MyProfile;
