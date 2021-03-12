import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

function PostContent() {
  const imagePath = `/images/posts/${dummypost.slug}/${dummy.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={} image={imagePath} />
      <ReactMarkdown>{dummy.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
