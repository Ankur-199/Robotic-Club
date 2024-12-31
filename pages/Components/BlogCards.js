import React from "react";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import cards from "../../data/blogcards.json";

const BlogCard = ({
  domain,
  publishDate,
  title,
  summary,
  authorName,
  authorPic,
  authorDomain,
  postImage,
  theme,
  id
}) => {
  const classNamePrefix = "blogcard_item_",
    className = classNamePrefix + id;

  if (summary.length > 360) summary = summary.substring(0, 356) + "...";
  if (title.length > 60) title = title.substring(0, 57) + "...";

  return (
    <div>
      
      
    </div>
  );
};

const BlogCards = (props) => {
  return (
    <div className={styles.blogcards_container}>
      {cards
        .filter((card, i) => {
          if (i == 0) return false;
          return true;
        })
        .map((card, i) => (
          <BlogCard
            key={i}
            id={i}
            domain={card.domain}
            publishDate={card.publishDate}
            title={card.title}
            summary={card.summary}
            authorName={card.authorName}
            authorPic={card.authorPic}
            authorDomain={card.authorDomain}
            postImage={card.postImage}
            theme = {props.transfer}
          />
        ))}
    </div>
  );
};

export default BlogCards;
