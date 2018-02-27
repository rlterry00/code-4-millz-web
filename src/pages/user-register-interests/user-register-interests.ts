import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {UserRegisterAboutPage } from "../user-register-about/user-register-about";
import { UserRegisterFinalPage } from "../user-register-final/user-register-final";
import { RegisterService } from "../../services/register.service";

@IonicPage()
@Component({
  selector: 'page-user-register-interests',
  templateUrl: 'user-register-interests.html',
})
export class UserRegisterInterestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RegisterService, public viewCtrl: ViewController) {
  }



  aboutPage = UserRegisterAboutPage;
  allTagsArr = ["Liberal", "Conservative", "Moderate", "Activism", "Transit", "Feminism", "Civil Rights", "Town Hall", "Net Neutrality", "Taxes", "Voting Rights", "Inequality", "Income Gap", "Socialism", "Libertarism", "Affordable Housing", "Healthcare", "Obesity", "Mental Health", "Entitlements", "Police", "Privacy", "Internet Connectivity", "Nutrition", "Social Media", "Grassroots", "Small Business"];
  firstColArr = [];
  secondColArr = [];
  thirdColArr = [];
  searchArr = [];
  myInput = "";
  selectedInterestArr = this.registerService.getUserTags();
  isFinal = this.navParams.get("final");


  ionViewDidLoad() {
    // load the three column array for displaying popular tags
    for (var i = 0; i < 9; i = i + 3) {
      this.firstColArr.push(this.allTagsArr[i]);
      if(this.allTagsArr[i + 1]) {
        this.secondColArr.push(this.allTagsArr[i + 1]);
      }
      if(this.allTagsArr[i + 2]) {
        this.thirdColArr.push(this.allTagsArr[i + 2]);
      }
    }

  }
  ionViewWillEnter() {
    // remove back button from navbar
    this.viewCtrl.showBackButton(false);
  }
  isActive(tag) {
    //add or remove class depending on if the tag has been selected. set to tags displayed at the top of the page.
    for (var i = 0; i < this.selectedInterestArr.length; i++) {
      if (tag == this.selectedInterestArr[i]) {
        return true;
      }
    }
      return false;
  }

  checkIndex(index) {
    //this is being applied to the selected tag display to the extra top margin is not added to the first tag.
    if (index == 0) {
      return false;
    } else {
      return true;
    }
  }


  selectTag(tag) {
    //function for selecting tags to add or remove them to the selected interest array
    for (var i = 0; i < this.selectedInterestArr.length; i++) {
      if (tag == this.selectedInterestArr[i]) {
        var newSelectArray = this.selectedInterestArr.filter((index) => index != tag);
        this.selectedInterestArr = newSelectArray;
        return;
      }
    }
    this.selectedInterestArr.push(tag);
  }

  setSearchItems() {
    //for putting the tags in the array that the search bar is pulling from.
    this.searchArr = [];
    for (var i = 9; i < this.allTagsArr.length; i++) {
      this.searchArr.push(this.allTagsArr[i]);
    }
    //removes tags that have already been selected from the search array.
    for(var j = 0; j < this.selectedInterestArr.length; j++) {
      this.searchArr = this.searchArr.filter((index) => index != this.selectedInterestArr[j]);
    }
  }

  //function being ran during each event like a keystrok in the search input field.
  onInput(event) {
    console.log("Got Input");
    let val = event.target.value;
    console.log(event.target.value);
    //if statement is to prevent the array being rest when we are doing a cancel event.
    if (val != undefined) {
    this.setSearchItems();
    }
    //checks to remove tags that do not match the string entered in the search input.
    if (val && val.trim() !== '') {
      this.searchArr = this.searchArr.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  onCancel() {
    this.searchArr = [];
    console.log("GOT CANCEL");
  }
  onBlur() {
    setTimeout(() => {this.searchArr = []}, 0);
    this.myInput = "";
  }

  addSearchTag(tag) {
    for (var i = 0; i < this.selectedInterestArr.length; i++) {
      if (tag == this.selectedInterestArr[i]) {
        var newSelectArray = this.selectedInterestArr.filter((index) => index != tag);
        this.selectedInterestArr = newSelectArray;
        return;
      }
    }
    this.selectedInterestArr.push(tag);
    this.searchArr=[];
  }

  swipeRightEvent() {
    if (this.selectedInterestArr.length > 0) {
      this.registerService.addUserTags(this.selectedInterestArr);
      if(this.isFinal === true) {
      this.navCtrl.push(UserRegisterFinalPage, {}, {animate: true, animation: "ios-transition", direction: "forward"});
      } else {
      this.navCtrl.push(UserRegisterAboutPage, {}, {animate: true, animation: "ios-transition", direction: "forward"});
      }
    }
  }

  skipTags() {
    if(this.isFinal === true) {
      this.registerService.addUserTags([]);
    this.navCtrl.push(UserRegisterFinalPage, {}, {animate: true, animation: "ios-transition", direction: "forward"});
    } else {
    this.navCtrl.push(UserRegisterAboutPage, {}, {animate: true, animation: "ios-transition", direction: "forward"});
    }
  }

  goBack() {
    this.navCtrl.pop({animate: true, animation: "ios-transition"});
  }



}
