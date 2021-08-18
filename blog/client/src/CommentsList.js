import React from 'react';

function CommentsList({ comments }) {

  const renderComments = comments.map(comment => {
    let content;
    switch(comment.status) {
      case 'rejected':
        content = "Comment is rejected.";
        break;
      case 'pending':
        content = "Comment is under moderation.";
        break;
      default:
        content = comment.content;
    }

    return <li key={comment.id}>{content}</li>
  });
  return(
    <ul>{renderComments}</ul>
  );
};
export default CommentsList;
