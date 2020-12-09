import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IRecipe } from 'src/app/shared/interfaces';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  @Input() recipeName: string;
  @Input() ingredients: string;
  recipe: IRecipe;
  currentUserId: string;
  creator: string;
  
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    const id = activatedRoute.snapshot.params.id;
    recipeService.loadRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }


  ngOnInit(): void {
    this.recipe = this.recipe;
    this.creator = this.recipe.creator;
  }

  submitHandler(data: any): void {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(data.ingredients)
    this.recipeService.editRecipe(id, data)
      .subscribe({
        next: () => {
          this.router.navigate(['/recipe', 'details', id]);
        },
        error: (err) => {
          console.error(err.message)
        }
      });
  }
}