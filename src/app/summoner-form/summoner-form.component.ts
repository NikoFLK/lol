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

  public summForm = this.formBuilder.group({
    pseudo: ['', Validators.required],
    role: ['', Validators.required],
  });

  public summoner1 = (data1 as any).default;
  public summoner2 = (data2 as any).default;

  public statWithName: Array<any> = [];
  public summonerToDisplay: Array<any> = [];

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): any {
    let i = 0;
    let tempo: Array<any> = [];
    this.statWithName = [];
    this.summoner1.participants.forEach((value: { timeline: { lane: any; }; stats: { kills: any; deaths: any; assists: any; visionScore: any; neutralMinionsKilled: any; }; }) => {
      tempo = [];
      tempo['summonerName'] = this.summoner1.participantIdentities[i].player.summonerName;
      tempo['lane'] = value.timeline.lane;
      tempo['kills'] = value.stats.kills;
      tempo['deaths'] = value.stats.deaths;
      tempo['assists'] = value.stats.assists;
      tempo['visionScore'] = value.stats.visionScore;
      tempo['neutralMinionsKilled'] = value.stats.neutralMinionsKilled;
      this.statWithName.push(tempo);
      i++;
    });
    let j = 0;
    this.summoner2.participants.forEach((value: { timeline: { lane: any; }; stats: { kills: any; deaths: any; assists: any; visionScore: any; neutralMinionsKilled: any; }; }) => {
      tempo = [];
      tempo['summonerName'] = this.summoner2.participantIdentities[j].player.summonerName;
      tempo['lane'] = value.timeline.lane;
      tempo['kills'] = value.stats.kills;
      tempo['deaths'] = value.stats.deaths;
      tempo['assists'] = value.stats.assists;
      tempo['visionScore'] = value.stats.visionScore;
      tempo['neutralMinionsKilled'] = value.stats.neutralMinionsKilled;
      this.statWithName.push(tempo);
      j++;
    });

    console.log(this.statWithName);
  }

  onSubmit() {
    this.summonerToDisplay = [];
    let validUsername = false;
    this.statWithName.forEach((value) => {
      let tempo = this.checkInput(value['summonerName'], this.summForm.value.pseudo);
      if (tempo) {
        validUsername = true;
        this.summonerToDisplay.push(value);
      }
    });
    if (this.summonerToDisplay.length > 0) {
      this.algoFindSummoner(this.summonerToDisplay[0]);
      console.log(this.summonerToDisplay);
    } else {
      window.alert('please take one of the summoner name from the list in the console');
    }
}

  algoFindSummoner(userSummoner: any) {
    let tempoArray: Array<any> = [];
    this.statWithName.forEach((value) => {
      if (value['summonerName'] !== userSummoner['summonerName']) {
        if (value['lane'] !== userSummoner['lane']) {
          value.algoScore = 0;
          if (value['assists'] > userSummoner['assists']) {
            value.algoScore++;

          }
          if (value['deaths'] < userSummoner['deaths']) {
            value.algoScore++;

          }
          if (value['kills'] > userSummoner['kills']) {
            value.algoScore++;

          }
          if (value['neutralMinionsKilled'] > userSummoner['neutralMinionsKilled']) {
            value.algoScore++;

          }
          if (value['visionScore'] > userSummoner['visionScore']) {
            value.algoScore++;
            if (this.summonerToDisplay.length < 5) {
              this.summonerToDisplay.push(value);
            }
          }
        }
      }
    });
  }

  checkInput(summName: any, formSummoner: any){
    return summName.toLowerCase().trim() === formSummoner.toLowerCase().trim();
  }

  roles: roles[] = [
    {role: "Toplane", icon:"../assets/img/Top_icon.png"},
    {role: "Jungle", icon:"../assets/img/Jungle_icon.png"},
    {role: "Midlane", icon:"../assets/img/Middle_icon.png"},
    {role: "Botlane", icon:"../assets/img/Bottom_icon.png"},
    {role: "Support", icon:"../assets/img/Support_icon.png"},
];

  scores: scores[] = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
];

}
