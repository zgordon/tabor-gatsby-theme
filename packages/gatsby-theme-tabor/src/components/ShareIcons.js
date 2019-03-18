import React from 'react';
import { Twitter, FacebookShare, Linkedin } from './Icons';
//FIXME: linkedin share doesn't work

const ShareIcons = ({ post }) => (
  <div className="flex items-center justify-start">
    <a
      className="share-icon share-icon--twitter button--attention header-font medium smooth relative "
      href={`http://twitter.com/share?text=${post.title} —&amp;url=${
        post.link
      }`}
      target="_blank"
    >
      Tweet <Twitter />
    </a>

    <a
      className="share-icon share-icon--facebook button--attention--fb header-font medium smooth relative "
      href={`https://www.facebook.com/sharer/sharer.php?u=${
        post.link
      }&amp;title=${post.title}&amp;picture=%20${post.featuredImage.sourceUrl}`}
      target="_blank"
    >
      Facebook <FacebookShare />
    </a>

    <a
      className="share-icon share-icon--linkedin button--attention--linkedin header-font medium smooth relative "
      href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${
        post.link
      }&amp;title=${
        post.title
      }&amp;summary=Excerpt:%20Donec%20id%20elit%20non%20mi%20porta%20gravida%20at%20eget%20metus.%20Nullam%20quis%20risus%20eget%20urna%20mollis%20ornare%20vel%20eu%20leo.%20Etiam%20porta%20sem%20malesuada%20magna%20mollis%20euismod.%20Curabitur%20blandit%20tempus%20porttitor.&amp;source=%20Tabor`}
      target="_blank"
    >
      LinkedIn <Linkedin />
    </a>
  </div>
);

export default ShareIcons;
