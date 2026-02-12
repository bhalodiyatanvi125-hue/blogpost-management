import {
  FaHeading,
  FaUser,
  FaLink,
  FaCloudUploadAlt,
  FaTimes,
  FaRegPaperPlane,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="create-post-page">
      <Navbar />
      <div className="create-post-container">
        <header className="form-header">
          <h1>Create New Post</h1>
          <p>Share your thought and storis with the word!</p>
        </header>
        <div className="post-form-card">
          <form>
            <div className="form-group">
              <label>Post Title</label>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enater a catchy title...."
                />
              </div>
            </div>
            <div className="form-group">
              <label>Author NAme</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Descriptions</label>
              <textarea
                name="description"
                className="form-control"
                placeholder="What's on your mind? write your story here"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Cover Image</label>
              <div className="image-source-tabs">
                <button type="button" className="tab-btn active ">
                  Image URL
                </button>
                <button type="button" className="tab-btn">
                  Upload File
                </button>
              </div>
              <div className="input-wrapper">
                <FaLink className="input-icon" />
                <input
                  type="url"
                  name="imageUrl"
                  className="form-control"
                  placeholder="Paste image Url here (e.g. https://....)"
                />
              </div>
              <div className="image-upload-area">
                <FaCloudUploadAlt className="upload-icon" />
                <p>Click to upload image from your device</p>
              </div>
              <div className="image-preview-container">
                <img
                  src="http://images.unsplash.com/photo-1499750310107"
                  alt="Preview"
                  className="image-preview"
                />
                <button type="button" className="remove-image-btn">
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="form-actions-row">
              <button type="submit" className="submit-btn">
                <FaRegPaperPlane />
                Publish Post
              </button>
              <button type="button" className="cancle-btn">
                clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
