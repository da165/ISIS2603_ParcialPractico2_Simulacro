import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../Recipe';
import { RecipeService } from '../../recipe.service';



@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;
  private isRouteMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isRouteMode = true;
      this.cargarRecipe(+id);
    }
  } 
  cargarRecipe(id: number) {
    this.recipeService.getRecipeDetails(id).subscribe((data) => {
      this.recipe = data;},(error)=>{ console.error("Error al cargar: ", error);});    
  }
}
