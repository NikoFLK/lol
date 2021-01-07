import { Component } from '@angular/core';
import { summoners, roles, scores } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  summoners: summoners[] = [
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 },
    { pseudo: "niko", role: "support", creepScore: 1, visionScore: 2, objScore: 3, killScore: 4 }, 
]; 

  roles: roles[] = [
    {role: "toplane", icon:"src/assets/img/Top_icon.png"},
    {role: "jungle", icon:"src\assets\img\Top_icon.png"},
    {role: "midlane", icon:"src\assets\img\Top_icon.png"},
    {role: "botlane", icon:"src\assets\img\Top_icon.png"},
    {role: "support", icon:"src\assets\img\Top_icon.png"},
]
    scores: scores[] = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    ]


}
