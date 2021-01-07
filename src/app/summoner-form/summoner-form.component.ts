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

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let i: number = 0;
    let tempo: Array<any> = [];
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
      //this.checkInput(this.summForm.value.pseudo);
    });
    let j: number = 0;
    this.summoner2.participants.forEach((value: { timeline: { lane: any; }; stats: { kills: any; deaths: any; assists: any; visionScore: any; neutralMinionsKilled: any; }; }) => {
      tempo = [];
      tempo['summonerName'] = this.summoner1.participantIdentities[j].player.summonerName;
      tempo['lane'] = value.timeline.lane;
      tempo['kills'] = value.stats.kills;
      tempo['deaths'] = value.stats.deaths;
      tempo['assists'] = value.stats.assists;
      tempo['visionScore'] = value.stats.visionScore;
      tempo['neutralMinionsKilled'] = value.stats.neutralMinionsKilled;
      this.statWithName.push(tempo);
      j++;
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
