import React from "react";
import { AiFillGithub } from "react-icons/ai";
import slack from "../images/slack.png";
import icon from "../images/icon.png";
import icon1 from "../images/icon1.png";

const Linktree = () => {
  return (
    <>
      <div className="master-div">
        <div className="container">
          <div className="profile">
            <img src="" alt="loading" id="profile_img" />
          </div>
          <div className="arrows">
            <img src={icon1} alt="" className="arrow" />
          </div>
          <div className="twitter-container">
            <h2 id="twitter">Daniel Roothub</h2>
          </div>
          {/* <div>
            <h2 id="slack"></h2>
            </div> */}
        </div>
        <br />
        <br />
        <br />

        {/* FOR THE LINKS */}
        <div className="links-container">
          <div className="twitter-link">
            <a href="#" id="twitter_link">
              Twitter Link
            </a>
          </div>
          <br />
          <br />
          <div className="zuri-team">
            <a href="https://training.zuri.team/" id="btn_zuri">
              Zuri Team
            </a>
          </div>
          <br />
          <br />
          <div className="zuri-books">
            <a href="https://books.zuri.team" id="books">
              Zuri Books
            </a>
          </div>
          <br />
          <br />
          <div className="python-books">
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=<>"
              id="book_python"
            >
              Python Books
            </a>
          </div>
          <br />
          <br />
          <div className="pitch">
            <a href="https://background.zuri.team" id="pitch">
              Background Check For Coders
            </a>
          </div>
          <br />
          <br />
          <div className="book-design">
            <a href="https://books.zuri.team/design-rules" id="book_design">
              Design Books
            </a>
          </div>
        </div>
        <div className="icons-div">
          <a href="#" className="slack-icon">
            <img src={slack} alt="" className="slack-image" />
          </a>
          <a href="#">
            <AiFillGithub className="git" />
          </a>
        </div>
        <footer className="footer">
          <div className="allow">
            <h2 style={{ fontSize: 30 }} id="zurin">
              Zuri<span>.</span>Internship
            </h2>
          </div>
          <div className="same">
            <p className="ligth">HNG Internship 9 Frontend Task</p>
          </div>
          <div className="same">
            <img src={icon} alt="loading" className="img" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Linktree;
