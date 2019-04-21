import React, { Component } from 'react';
//import {fakeData} from './components/fakeData';
import TodoList from './components/TodoList';
import TodoListContents from './components/TodoListContents';


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        todos: [
          {
            id: 0,
            subtitle: '토요일 할 일',
            contents: ['공부하기']
          }, {
            id: 1,
            subtitle: '일요일 할 일', 
            contents: ["휴식하기"]
          }
        ],
        subcontent : []
      }
  }
  
  writeSubtitle (todo) {
    const formText = document.querySelector('.formText');
    if (formText.value !== '') {
    const {todos} = this.state
    console.log({todos})
    this.setState ({
      todos: todos.concat(
      { id: todos.length, 
        subtitle: formText.value, 
        contents: []})
    })
    formText.value = '';
    }
  }
  
  subtitleContents (todo) {
    const formText_1 = document.querySelector('.formText_1');
    if(formText_1.value !== '') {
    const contextsText = document.querySelector('.contentsDiv');
    for(var i = 0; i < this.state.todos.length; i++) {
      if(contextsText.innerText === this.state.todos[i].subtitle) {
        let todosClone = this.state.todos.slice();
        let contents = todosClone[i].contents;
        contents.push(formText_1.value);
        todosClone[i].contents = contents;
        this.setState({
          todos : todosClone,
          subcontent : contents
        });
      }
    }
    formText_1.value = '';
    }
  }

  transMission (val) {
    //console.log(val);
    const contestsText = document.querySelector('.contentsDiv');
    contestsText.innerText = val;
    for(var i = 0; i < this.state.todos.length; i++) {
      console.log(this.state.todos[i].subtitle)
      if(val === this.state.todos[i].subtitle) {
        this.setState({
          todos : this.state.todos,
          subcontent : this.state.todos[i].contents
        })
      } else {
        this.setState({
          todos : this.state.todos
          
      })
      }
    }
    console.log(this.state.subcontent)
  }
  
  
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
        주제
        </div>
        <div className='subjectDiv'>
          <TodoList sub_jects = {this.state.todos} onwriteSubtitle = {this.writeSubtitle.bind(this)} onchageContents ={this.transMission.bind(this)}/>
        </div>
        <div>
          <div className='contentsDiv'>
          세부내용
          </div>
          <TodoListContents con_tents= {this.state.subcontent}  onsubtitleContents = {this.subtitleContents.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
