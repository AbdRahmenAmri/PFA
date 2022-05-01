import React, { useState } from "react";
import "./homePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faAdd,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import fth_add from "./javascriptfull.png";
import sth_add from "./maxresdefault (1).jpg";
import tth_add from "./maxresdefault.jpg";
import { Link } from "react-router-dom";
import User from "./user/User";
import Add from "./add/Add";
import Article from "./article/Article";
import user_pic from "./photo-1633332755192-727a05c4013d.jpeg";

import Header from "./header/Header";
function HomePage() {
  return (
    <div className="homePage_container">
      <div className="main">
        <Header/>
        <div className="main_conatiner">
          <div className="aside">
            <div className="actions">
              <div>
                <FontAwesomeIcon icon={faFilter} />
                Filter
              </div>
              <div>
                <FontAwesomeIcon icon={faAdd} />
                Add a new
              </div>
            </div>
            <div className="followers">
              <small>Your followings :</small>
              <div className="followers_container">
                <User username="Haj Ali Mohamed" />
                <User username="Abdrahmen amri" />
                <User username="khalil jabri" />
                <User username="chaker elj" />
              </div>
            </div>

            <div className="recm">
              <small>Recommended people for you :</small>
              <div className="recm_container">
                <User username="bill gates" />
                <User username="steve jobs" />
                <User username="el zero" />
                <User username="salem cv" />
              </div>
            </div>
          </div>
          <div className="articles_section">
            <div className="add_article">
              <Link to="/profile">
                <img src={user_pic} alt="user_picture" />
              </Link>
              <input type="text" placeholder="Write an article" disabled />
              <Link to="/addArticle">
                <FontAwesomeIcon icon={faPenToSquare} />
              </Link>
            </div>

            <div className="aritcles">
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
          <div className="leftSide">
            <small className="recm">Recommended for you</small>
            <div className="adds">
              <Add
                add_name="FreeCodeCamp Javascript course"
                add_pic={fth_add}
              />
              <Add add_name="React Course" add_pic={sth_add} />
              <Add add_name="CSS Course" add_pic={tth_add} />
            </div>
            <Link className="more" to="/courses">
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
