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

  public statWithName: any;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.statWithName = {};
    let i: number = 0;
    this.summoner1.participants.forEach((value: { timeline: { lane: any; }; stats: { kills: any; deaths: any; assists: any; visionScore: any; neutralMinionsKilled: any; }; }) => {
      let tempo = {};
      this.statWithName.summonerName = this.summoner1.participantIdentities[i].player.summonerName;
      this.statWithName.lane = value.timeline.lane;
      this.statWithName.kills = value.stats.kills;
      this.statWithName.deaths = value.stats.deaths;
      this.statWithName.assists = value.stats.assists;
      this.statWithName.visionScore = value.stats.visionScore;
      this.statWithName.neutralMinionsKilled = value.stats.neutralMinionsKilled;
      i++;
      this.statWithName = Object.assign(this.statWithName, tempo);
      this.checkInput(this.summForm.value.pseudo);
    });
    let j: number = 0;
    this.summoner2.participants.forEach((value: { timeline: { lane: any; }; stats: { kills: any; deaths: any; assists: any; visionScore: any; neutralMinionsKilled: any; }; }) => {
      let tempo = {};
      this.statWithName.summonerName = this.summoner1.participantIdentities[j].player.summonerName;
      this.statWithName.lane = value.timeline.lane;
      this.statWithName.kills = value.stats.kills;
      this.statWithName.deaths = value.stats.deaths;
      this.statWithName.assists = value.stats.assists;
      this.statWithName.visionScore = value.stats.visionScore;
      this.statWithName.neutralMinionsKilled = value.stats.neutralMinionsKilled;
      i++;
    });
    console.log("Stats With Name", this.statWithName);
}

  checkInput(summName: any){
    if(summName === this.statWithName.summonerName) {
      console.log("Summoner Name Checked", this.summForm.value.pseudo);
    }
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
