import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

function PostItem(props) {
  //slug einai to dynamic path p vriskomaste to unique id
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              layout="responsive"
              src={imagePath}
              alt={title}
              width={300}
              height={200}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>
              {formattedDate}
              <p>{excerpt}</p>
            </time>
          </div>
        </a>
      </Link>
    </li>
  );
}
export default PostItem;
