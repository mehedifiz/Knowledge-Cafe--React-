import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";
const Blog = ({ blog, handleBoomaek, handleMarkAsRead }) => {
  // console.log(blog);

  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    post_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20  space-y-4">
      <img className="w-full my-8" src={cover} alt={title} />
      <div className="flex justify-between">
        <div className="flex gap-6 ">
          <img src={author_img} className="w-14 rounded-full mb-8" alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{post_date}</p>
          </div>
        </div>

        <div className="">
          <span>{reading_time} min read</span>

          {/* bookmark */}
          <button
            onClick={() => handleBoomaek(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h2 className="text-4xl my-1">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="gap-10" href="">
              # {hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBoomaek: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
