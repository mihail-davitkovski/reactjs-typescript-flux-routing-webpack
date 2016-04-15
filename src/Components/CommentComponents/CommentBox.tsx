import * as React from "react";

import {CommentList} from "./CommentList";

import {CommentForm} from "./CommentForm";

import CommentsStore, {IComment, ICommentState} from "../../stores/CommentsStore";

import CommentActions  from "../../actions/CommentActions";


export class CommentBox extends React.Component<{}, ICommentState>
{
    constructor(props:{}, state:ICommentState)
    {
        super(props, state);
        this.state = CommentsStore.state;
        
    }

    componentDidMount()
    {
       CommentsStore.addChangeListener(this.onChange.bind(this));
       CommentActions.getAll();
    }
    
    private onChange()
    {
       this.setState(CommentsStore.state);
    }
    
    private handleCommentSubmit = (comment: IComment) =>{
        CommentActions.addComment(comment);
    }
    
    render()
    {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList comments={this.state.comments}/>
                <br/><br/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                <br/><br/><br/>
                <div>
                    <a href="/search"><b>Go to Search page</b></a>
                </div>
            </div>
        );
    }
}


