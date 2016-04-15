import * as React from "react"; 

import {IComment, ICommentState} from "../../stores/CommentsStore";


export interface ICommentFormProps {
    onCommentSubmit(comment: IComment): void;
};

export class CommentForm extends React.Component<ICommentFormProps, IComment>
{
      constructor(props: ICommentFormProps, state: ICommentState)
      {
          super(props, state);
          this.state = {author:"", text: ""};
      }
      
      private handleAuthorChange = (e: any) => {
        this.setState({author: e.target.value, text: this.state.text});
      }
      
      private handleTextChange = (e: any) =>{
          this.setState({text: e.target.value, author: this.state.author});
      }
      
      private handleSubmit = (e: any) =>
      {
        e.preventDefault();
        let author: string = this.state.author.trim();
        let text: string = this.state.text.trim();

        this.props.onCommentSubmit({author: author, text: text});
        
        this.setState({author: '', text: ''});
      }
      
      render()
      {
          return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>&nbsp;&nbsp;
                <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>&nbsp;&nbsp;
                <input type="submit" value="Post" />
            </form>
          );
      }
}