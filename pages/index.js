import React, { Component } from "react";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello, you have reached the personal website of Upmanyu Shrivastava
        </h1>
        <div>
          <h5>
            Find me on
            <IconButton href="https://github.com/ushrivas9">
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/ushrivas98/">
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton href="mailto:upmanyushrivastava98@gmail.com">
              <MailIcon fontSize="small" />
            </IconButton>
          </h5>
        </div>
      </div>
    );
  }
}

export default Home;
