import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import article_img from "../javascriptfull.png";
import user_img from "../photo-1633332755192-727a05c4013d.jpeg";
import "./article.css";
import $ from "jquery";
import {
  faEye,
  faCircleArrowUp,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function Article() {
  return (
    <div className="article_container">
      <div className="img_article_infos_conatiner">
        <div className="img_conatiner">
          <img src={article_img} alt="article_img" />
        </div>

        <div className="article_infos">
          <div className="article_poster">
            <img src={user_img} alt="user_img" />
            <div className="user_infos">
              <small>Mohamed Haj Ali</small>
              <small>Frontend Developer</small>
            </div>
          </div>
          <div className="article_title">
            <h1>the best frontend framework: reactjs</h1>
            <div className="date">
              <small>posted at: 30/04/2020</small>
              <small>Hashtag: #javascript</small>
            </div>
          </div>
          <div className="article_desc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At et
              laboriosam quia accusamus? Consectetur ex quis, fugiat modi
              perspiciatis vitae eum labore? Temporibus excepturi quo sint
              tempora quisquam inventore dolores.
            </p>
          </div>
          <Link className="read" to="/article">
            read the article
          </Link>
        </div>
      </div>

      <hr></hr>
      <div className="article_view_rates">
        <div className="article_views">
          <small className="views">
            <FontAwesomeIcon icon={faEye} />
            20
          </small>
        </div>

        <input type="button" value="What are pepole saying about this article ?" />

        <div className="article_rates">
          <div id="btn1" className="up">
            <FontAwesomeIcon icon={faCircleArrowUp} />
            12
          </div>
          <div id="btn2" className="down">
            <FontAwesomeIcon icon={faCircleArrowDown} />
            -3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
