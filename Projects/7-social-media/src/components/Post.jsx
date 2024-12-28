import { MdDelete } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary delete-post"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill text-bg-primary hashtag"
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          <FcLikePlaceholder />
          {post.reactions.likes}
        </div>
      </div>
    </div>
  );
};
export default Post;
