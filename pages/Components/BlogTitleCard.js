import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
// import cards from "../../data/blogcards";

const BlogTitleCard = (props) => {
  let domain = "Future Scope",
    publishDate = "a few days ago",
    title = "Revolutionizing Industries: Unleashing the Transformative Power of 3D Printing",
    summary =
      "Ignite Innovation: Unleash the transformative power of 3D printing, the driving force revolutionizing industries worldwide. From manufacturing and healthcare to architecture and fashion, this cutting-edge technology is reshaping the very foundations of creat...",
    authorName = "Sanghrish",
    authorPic = "./BlogPage/profilepic.png",
    postImage = "./BlogPage/1.jpg",
    authorDomain = "Software Dev";
  // let { domain, publishDate, title, summary, authorName, authorPic, authorDomain } = cards[id];

  if (summary.length > 360) summary = summary.substring(0, 356) + "...";
  if (title.length > 60) title = title.substring(0, 57) + "...";

  // New blog details
  const newBlog = {
    "domain": "JOBS",
    "publishDate": "a few days ago",
    "title": "Redefining Boundaries: Exploring Lucrative Career Opportunities in Robotics",
    "summary": "In today's rapidly advancing world, robotics has emerged as a field that redefines boundaries, revolutionizing industries and opening up a plethora of exciting career opportunities. From automation and artificial intelligence to cutting-edge technolo....",
    "authorName": "Sanghrish",
    "authorPic": "./BlogPage/profilepic.png",
    "postImage": "./BlogPage/2.jpg",
  };

  // Additional new blog details
  const anotherBlog = {
    "domain": "ENTERPRISE",
    "publishDate": "a few days ago",
    "title": "Robotics Revolution: Shaping the Future Through Automated Innovation",
    "summary": "The field of robotics has witnessed exponential growth and advancement over the past few decades, revolutionizing various industries and aspects of our li...",
    "authorName": "Sanghrish",
    "authorPic": "./BlogPage/profilepic.png",
    "postImage": "./BlogPage/3.jpg",
  };

  return (
    <>
      <div className={styles.blog_title_element_container}>
        <div className={styles.blog_title_image_container}>
          <img src={postImage} alt="BlogTitle" className={styles.blog_title_image} />
        </div>
        <div className={styles.blog_title_text_container}>
          <div className={styles.post_info}>
            <div className={props.transfer ? styles.post_domain_light : styles.post_domain}>{domain}</div>
            <div className={props.transfer ? styles.info_divider_light : styles.info_divider}></div>
            <div className={props.transfer ? styles.post_date_light : styles.post_date}>{publishDate}</div>
          </div>
          <Link href="/blog/all-about-gsoc" className={styles.post_title_link}>
            <h1 className={props.transfer ? styles.post_title_light : styles.post_title}>{title}</h1>
          </Link>
          <div className={props.transfer ? styles.post_summary_light : styles.post_summary}>{summary}</div>
          <div className={styles.post_creator}>
            <img src={authorPic} alt="Post Creator Name" className={styles.post_creator_image} />
            <div className={styles.post_creator_details}>
              <div className={styles.post_creator_name}>
                <a href="blog/" style={props.transfer ? { color: "black" } : { color: "white" }}>{authorName}</a>
              </div>
              <div className={styles.post_creator_specialization}>{authorDomain}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.blog_title_element_container}>
        <div className={styles.blog_title_image_container}>
          <img src={newBlog.postImage} alt="BlogTitle" className={styles.blog_title_image} />
        </div>
        <div className={styles.blog_title_text_container}>
          <div className={styles.post_info}>
            <div className={props.transfer ? styles.post_domain_light : styles.post_domain}>{newBlog.domain}</div>
            <div className={props.transfer ? styles.info_divider_light : styles.info_divider}></div>
            <div className={props.transfer ? styles.post_date_light : styles.post_date}>{newBlog.publishDate}</div>
          </div>
          <Link href="/blog/Redefining-Boundaries" className={styles.post_title_link}>
            <h1 className={props.transfer ? styles.post_title_light : styles.post_title}>{newBlog.title}</h1>
          </Link>
          <div className={props.transfer ? styles.post_summary_light : styles.post_summary}>{newBlog.summary}</div>
          <div className={styles.post_creator}>
            <img src={newBlog.authorPic} alt="Post Creator Name" className={styles.post_creator_image} />
            <div className={styles.post_creator_details}>
              <div className={styles.post_creator_name}>
                <a href="blog/" style={props.transfer ? { color: "black" } : { color: "white" }}>{newBlog.authorName}</a>
              </div>
              <div className={styles.post_creator_specialization}>{newBlog.authorDomain}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blog_title_element_container}>
        <div className={styles.blog_title_image_container}>
          <img src={anotherBlog.postImage} alt="BlogTitle" className={styles.blog_title_image} />
        </div>
        <div className={styles.blog_title_text_container}>
          <div className={styles.post_info}>
            <div className={props.transfer ? styles.post_domain_light : styles.post_domain}>{anotherBlog.domain}</div>
            <div className={props.transfer ? styles.info_divider_light : styles.info_divider}></div>
            <div className={props.transfer ? styles.post_date_light : styles.post_date}>{anotherBlog.publishDate}</div>
          </div>
          <Link href="/blog/Robotics-Revolution" className={styles.post_title_link}>
            <h1 className={props.transfer ? styles.post_title_light : styles.post_title}>{anotherBlog.title}</h1>
          </Link>
          <div className={props.transfer ? styles.post_summary_light : styles.post_summary}>{anotherBlog.summary}</div>
          <div className={styles.post_creator}>
            <img src={anotherBlog.authorPic} alt="Post Creator Name" className={styles.post_creator_image} />
            <div className={styles.post_creator_details}>
              <div className={styles.post_creator_name}>
                <a href="blog/" style={props.transfer ? { color: "black" } : { color: "white" }}>{anotherBlog.authorName}</a>
              </div>
              <div className={styles.post_creator_specialization}>{anotherBlog.authorDomain}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTitleCard;
