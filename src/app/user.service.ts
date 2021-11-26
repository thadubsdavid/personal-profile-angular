import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public userInfo = {
    name: "David Patrick Adam",
    jobTitle: "Student",
    aboutMe: "[Place your description here... For instance: I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.]",
    profilePicture: "http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337",
    location: "Stuttgart, Germany",
    email: "davidpatrickadam@gmail.com",
    devpostAccount: "",
    facebookAccount: "",
    githubAccount: "www.github.com/thadubsdavid",
    googleAccount: "",
    linkedinAccount: "www.linkedin.com/davidpatrickadam",
    twitterAccount: "",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
