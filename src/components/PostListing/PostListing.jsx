import React from "react";
import PostPreview from "../PostPreview/PostPreview";
import SiteProfile from "../SiteProfile/SiteProfile";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--2 mobile-fix">
          <SiteProfile/>
        </div>        
        <div className="md-grid md-cell--10 mobile-fix">
          <div className="md-grid md-grid--no-spacing md-cell--middle">
            {postList.map(post => (
              <div key={post.title} className="md-grid md-cell--6 mobile-fix">
                <PostPreview key={post.title} postInfo={post}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PostListing;
