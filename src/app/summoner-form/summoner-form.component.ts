import { Component, OnInit } from '@angular/core';
import { summoners, roles, scores } from '../interfaces';
import { FormBuilder, Validators } from '@angular/forms';


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
  
  public summs: any

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('sums1', this.summs);
  }

  onSubmit(){
    this.summs = this.summForm.value;
    console.log('sums2', this.summs);
  }

  summoners: summoners[] = [
    { pseudo: "abc", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "def", role: "jungle", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "ghi", role: "midlane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "jkl", role: "botlane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "mno", role: "toplane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "pqr", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "stu", role: "jungle", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "vwx", role: "midlane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "yz", role: "botlane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "zy", role: "toplane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "xwv", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "uts", role: "jungle", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "rqp", role: "midlane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "onm", role: "botlane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "lkj", role: "toplane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 }, 
    { pseudo: "ihg", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "fed", role: "jungle", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "cba", role: "midlane", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 }, 
]; 

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
