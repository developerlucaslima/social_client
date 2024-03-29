import { Container } from "./stytles"

import { NavBar } from "../../components/navbar/NavBar"
import { LeftBar } from "../../components/leftbar/LeftBar";
import { Posts } from "../../components/posts/Posts"
import { RightBar } from "../../components/righbar/RighBar"

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Profile(){
  return(
    <Container>
      <NavBar />
      <div className="layout">
        <LeftBar />

        <div className="profile">
          <div className="images">
            <img
              src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="cover"
              />
            <img
              src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              className="profilePic"
              />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>Jane Doe</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>USA</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>lama.dev</span>
                  </div>
                </div>
                <button>follow</button>
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
          <Posts/>
        </div>
        </div>
      <RightBar />
      </div>
    </Container>
  )
}