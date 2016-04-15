import AppDispatcher from "../dispatcher/AppDispatcher";

import  {BaseStore} from "./BaseStore";

import {CommentAction} from "../enums/CommentAction";

export interface IComment
{
    author: string;
    text: string;
}

export interface ICommentState
{
    comments: Array<IComment>
}

class CommentsStore extends BaseStore
{
    constructor()
    {
        super();
        this.registerActionHandlers();
        this.setDefaultState();
    }
    
    private _author: string;
    private _text: string;
    private _comments: Array<IComment>;
   
    get state(): ICommentState
    {
        return {
            comments: this._comments
        }
    }
    
    private _initializeComments(comments: Array<IComment>)
    {
        this._comments = comments;
    }
    
    private _addComment(comment: IComment)
    {
        this._comments.push(comment);
    }
    
    private setDefaultState()
    {
        this._comments = new Array<IComment>();
    }
    
    private registerActionHandlers() {
        AppDispatcher.register((action: any) => {
            switch(action.actionType)
            {
                case CommentAction.GET_ALL:
                    this._initializeComments(action.comments);
                    this.emitChange();
                    break;
                case CommentAction.ADD_COMMENT:
                    this._addComment(action.comment);
                    this.emitChange();
                    break;
            }
        });
	}
}

export default new CommentsStore();