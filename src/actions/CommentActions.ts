import {CommentAction} from "../enums/CommentAction";

import AppDispatcher from "../dispatcher/AppDispatcher";

import {IComment} from "../stores/CommentsStore";

export default class CommentActions
{
    //API call should be implemented here
    static getAll()
    {
         //API call should be implemented here
         let comments = [{author: "Pete Hunt", text: "This is one comment"},
                { author: "Jordan Walke", text: "This is *another* comment"}];
         
         
         AppDispatcher.dispatch({
            actionType: CommentAction.GET_ALL,
            comments: comments
        });
    }
    
    static addComment(comment: IComment)
    {
         AppDispatcher.dispatch({
            actionType: CommentAction.ADD_COMMENT,
            comment: comment
        });
    }
}

