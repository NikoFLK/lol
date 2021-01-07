import { Component, OnInit } from '@angular/core';
import { summoners, roles, scores } from '../interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import * as data from '../../assets/json/summoners.json';

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
  
  public summs = (data as any).default;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('niko', this.summs);
  }

  onSubmit(){
    console.log('niko2', this.summs);
    if (this.summForm.value.pseudo in this.summs){
      console.log("this.summForm.value.pseudo");
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
