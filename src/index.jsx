import React, {useState} from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';


const App=()=> {
const [likes, setLikes]=useState(0);
const [unlike, setUnlike]=useState(0);

  return (
<>
<div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src="./assets/user01.png"/>
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button onClick={()=>setLikes(likes+1)}  id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">{likes}</span>
          <button onClick={()=>setUnlike(unlike+1)} id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">{unlike}</span>
        </div>
      </div>
    </div>
    </>
    )};

    render(<App/>, document.querySelector('#app'));