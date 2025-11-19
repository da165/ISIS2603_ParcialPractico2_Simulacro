import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selected: Boolean = false;
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = recipeData;
    this.recipeService.getRecipes().subscribe((recipeData)=>{
      this.recipes = recipeData;
    });
  }
  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selected = true;
  }
  
}
