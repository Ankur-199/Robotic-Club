import React from "react";
import styles from "../../styles/Card.module.css";
import ProfileCard from "./ProfileCard";

const Domain = ({
  domain = {
    title: "",
    discord: "",
    tags: [],
    members: [],
  },
  theme,
}) => {
  return (
    <div className={styles.container} style={{ paddingLeft: "2rem" }}>
      <section className={theme ? styles.card_list_light : styles.card_list}>
        {/* Remove or comment out the DomainCard */}
        {/* <DomainCard
          title={domain.title}
          tags={domain.tags}
          discord={domain.discord}
          style={domain.bgColorStyle}
          theme={theme}
        /> */}
        {domain.members.map(
          ({ name, position, alt, profilePic, socials, description, rate }, i) => {
            return (
              <ProfileCard
                name={name}
                position={position}
                alt={alt}
                profilePic={profilePic}
                socials={socials}
                description={description}
                rate={rate}
                marginFlag={i === 0}
                key={i}
                theme={theme}
              />
            );
          }
        )}
      </section>
    </div>
  );
};

export default Domain;
