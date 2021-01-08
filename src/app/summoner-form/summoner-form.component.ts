import { Component, OnInit } from '@angular/core';
import { roles, scores } from '../interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import * as data1 from '../../assets/json/summoners.json';
import * as data2 from '../../assets/json/summoners2.json';

@Component({
  selector: 'app-summoner-form',
  templateUrl: './summoner-form.component.html',
  styleUrls: ['./summoner-form.component.css']
})

export class SummonerFormComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }

  public summForm = this.formBuilder.group({
    pseudo: ['', Validators.required],
    role: ['', Validators.required],
  });

  public summoner1 = (data1 as any).default;
  public summoner2 = (data2 as any).default;

  public statWithName: Array<any> = [];
  public summonerToDisplay: Array<any> = [];

  public inputCheck = false;

  roles: roles[] = [
    {role: 'Top', icon: '../assets/img/Top_icon.png'},
    {role: 'Jungle', icon: '../assets/img/Jungle_icon.png'},
    {role: 'Middle', icon: '../assets/img/Middle_icon.png'},
    {role: 'Bottom', icon: '../assets/img/Bottom_icon.png'},
    {role: 'Support', icon: '../assets/img/Support_icon.png'},
];

  scores: scores[] = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
];

  ngOnInit(): any {
    let i = 0;
    let tempo: any = {};
    this.statWithName = [];
    this.summoner1.participants.forEach((value: { timeline: { lane: any; }; stats: { kills: any; deaths: any; assists: any; visionScore: any; neutralMinionsKilled: any; }; }) => {
      tempo = [];
      tempo.summonerName = this.summoner1.participantIdentities[i].player.summonerName;
      tempo.lane = value.timeline.lane;
      tempo.kills = value.stats.kills;
      tempo.deaths = value.stats.deaths;
      tempo.assists = value.stats.assists;
      tempo.visionScore = value.stats.visionScore;
      tempo.neutralMinionsKilled = value.stats.neutralMinionsKilled;
      this.statWithName.push(tempo);
      i++;
    });
    let j = 0;
    this.summoner2.participants.forEach((value: { timeline: { lane: any; }; stats: { kills: any; deaths: any; assists: any; visionScore: any; neutralMinionsKilled: any; }; }) => {
      tempo = [];
      tempo.summonerName = this.summoner2.participantIdentities[j].player.summonerName;
      tempo.lane = value.timeline.lane;
      tempo.kills = value.stats.kills;
      tempo.deaths = value.stats.deaths;
      tempo.assists = value.stats.assists;
      tempo.visionScore = value.stats.visionScore;
      tempo.neutralMinionsKilled = value.stats.neutralMinionsKilled;
      this.statWithName.push(tempo);
      j++;
    });
  }

  onSubmit(): any {
    this.summonerToDisplay = [];
    let validUsername = false;
    this.statWithName.forEach((value) => {
      const tempo = this.checkInput(value.summonerName, this.summForm.value.pseudo);
      if (tempo) {
        validUsername = true;
        this.summonerToDisplay.push(value);
      }
    });
    if (this.summonerToDisplay.length > 0) {
      this.algoFindSummoner(this.summonerToDisplay[0]);
    } else {
      window.alert('please take one of the summoner name from the list in the console');
    }
}

  algoFindSummoner(userSummoner: any): any {
    const summonerWithScore: any[] = [];
    let scoreKDAuser: any;
    let scoreKDAsummoner: any;
    const availableLane = { "JUNGLE": 1, "MIDDLE": 1, "TOP": 1, 'BOTTOM': 2 };
    availableLane[this.summForm.value.role.toUpperCase()]--;
    this.statWithName.forEach((value) => {
      if (value.summonerName !== userSummoner.summonerName) {
        if (availableLane[value.lane] > 0) {
          value.algoScore = 0;
          scoreKDAsummoner = (value.assists + value.kills) / value.deaths;
          scoreKDAuser = (userSummoner.assists + userSummoner.kills) / userSummoner.deaths;
          if (scoreKDAsummoner > scoreKDAuser / 1.2 && scoreKDAsummoner < scoreKDAuser * 1.2) {
            value.algoScore = value.algoScore + 3;
          }
          if (value.neutralMinionsKilled > userSummoner.neutralMinionsKilled) {
            value.algoScore++;
          }
          if (value.visionScore > userSummoner.visionScore) {
            value.algoScore++;
          }
          summonerWithScore.push(value);
        }
      }
    });
    let highestScore = '';
    const alreadyDisplay: any[] = [];
    console.log(summonerWithScore);
    while (this.summonerToDisplay.length < 5) {
      highestScore = '';
      summonerWithScore.forEach((value) => {
        if (availableLane[value.lane] > 0) {
          if (!alreadyDisplay.includes(value.summonerName)) {
            if (highestScore === '' || value.algoScore > highestScore.algoScore) {
              highestScore = value;
            }
          }
        }
      });
      this.summonerToDisplay.push(highestScore);
      availableLane[highestScore.lane]--;
      alreadyDisplay.push(highestScore.summonerName);
    }
  }

  checkInput(summName: any, formSummoner: any){
    if (summName.toLowerCase().trim() === formSummoner.toLowerCase().trim()) {
      this.inputCheck = true;
      return true;
    }
    else {
      return false;
    }
  }

}
