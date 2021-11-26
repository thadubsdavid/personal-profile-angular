import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  public pageInfo = {
    backgroundImage: "./assets/pexels-jeremy-bishop.jpg",
    showHeader: true,
    showProfile: true,
    profileBackgroundColor: "white",
    showExperiences: true,
    experiencesBackgroundColor: "rgb(252, 243, 207)",
    showAbilities: true,
    abilitiesBackgroundColor: "white",
    showProjects: true,
    projectsBackgroundColor: "rgb(252, 243, 207)",
    showAwards: false,
    awardsBackgroundColor: "white",
    showContact: true,
    contactBackgroundColor: "rgb(66, 73, 73)",
    resumeTitle: "Vita",
    projectLink: "https://github.com/thadubsdavid/personal-profile-angular"
  };

  getPageInfo() {
    return this.pageInfo;
  }

}
