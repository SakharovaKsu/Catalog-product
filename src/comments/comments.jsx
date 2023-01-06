import React from "react";
import Button from "/src/button/button";
import { Ul } from "/src/elements";
import { CoomentsLi, CommentsDiv, Name, Text } from "./styled";

function Comments({ comments, onShowMore, allCommentsLength }) {
  return (
    <CommentsDiv>
      <Ul>
        {comments.map((comment) => (
          <CoomentsLi key={comment.id}>
            <Name>{comment.author}</Name>
            <Text>{comment.text}</Text>
          </CoomentsLi>
        ))}
      </Ul>
      {allCommentsLength > comments.length && (
        <Button onClick={onShowMore}>Показать ещё</Button>
      )}
    </CommentsDiv>
  );
}

export default Comments;
