import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [new Recipe('A test recipe','This is a simple recipe','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg')
 ,new Recipe('A test recipe','This is a simple recipe','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
