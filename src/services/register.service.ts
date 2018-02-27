

export class RegisterService {
  userName = "";
  userAbout = "";
  userTagsArr = [];
  userZip = "";

  addUserTags(tags) {
    this.userTagsArr = [];
    for (var i = 0; i < tags.length; i++) {
      this.userTagsArr.push(tags[i]);
    }
    console.log(this.userTagsArr);
  }

  addUserInfo(name, about) {
    this.userName = name;
    this.userAbout = about;
    console.log(this.userName);
    console.log(this.userAbout);
  }

  addUserZip(zip) {
    this.userZip = zip;
    console.log(this.userZip);
  }

  getUserInfo() {
    var userObj = {
      userName: this.userName,
      userAbout: this.userAbout,
      userTags: this.userTagsArr,
      userZip: this.userZip
    };
    return userObj;
  }

  getUserTags() {
    return this.userTagsArr;
  }
  getUserZip() {
    return this.userZip;
  }

  getUserAbout() {
    var aboutObj = {
      name: this.userName,
      about: this.userAbout
    }
    return aboutObj;
  }

  resetUserInfo() {
    this.userName = "";
    this.userAbout = "";
    this.userTagsArr = [];
    this.userZip = "";
  }
}
