import * as React from "react";

import {IComment} from "../../stores/CommentsStore";

export class Comment extends React.Component<IComment, {}> {
    render()
    {
        return (
            <div className="comment">
                  <h2 className="commentAuthor">
                       {this.props.author}
                  </h2>
                  {this.props.children}
            </div>
        );
    }
}
