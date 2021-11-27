import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public userInfo = {
    name: "David Patrick Adam",
    jobTitle: "Student",
    aboutMe: "I pursue excellence in everything I do and am always searching to improve myself in a field which is constantly changing and moving. Making cities a better place to live, work and visit by acknowledging myself in the field of software development.",
    profilePicture: "./assets/PORTRAIT_BW.jpg",
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
