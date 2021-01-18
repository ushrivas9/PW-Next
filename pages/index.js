import React, { Component } from "react";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello, you have reached the personal website of Upmanyu Shrivastava
        </h1>
        <div>
          <h4>
            Find me on
            <IconButton href="https://github.com/ushrivas9">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/ushrivas98/">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:upmanyushrivastava98@gmail.com">
              <MailIcon />
            </IconButton>
            <IconButton href="https://drive.google.com/file/d/1CPpVOIW6-q6QkMnCe_dGkO_VXK6YOWtK/view?usp=sharing">
              <InsertDriveFileIcon />
            </IconButton>
          </h4>
        </div>
      </div>
    );
  }
}

export default Home;
