
import * as React from "react";

import {Comment} from "./Comment";

import {ICommentState} from "../../stores/CommentsStore";

export class CommentList extends React.Component<ICommentState,{}>
{
    render()
    {
        let commentNodes = this.props.comments.map(function(comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div className="commentList">
               {commentNodes}
            </div>
        );
    }
}
