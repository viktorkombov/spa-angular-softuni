import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IRecipe } from 'src/app/shared/interfaces';
import { linkValidator } from 'src/app/shared/validators';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: IRecipe;
  currentUserId: string;
  creator: string;
  form: FormGroup;
  
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    const id = activatedRoute.snapshot.params.id;
    recipeService.loadRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
    });
    this.form = this.fb.group({
      recipeName: ['', Validators.required],
      necesseryTime: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', [Validators.required, linkValidator]],
      recipeContent: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.recipe = this.recipe;
    this.creator = this.recipe.creator;
  }

  submitHandler(): void {
    const data = this.form.value;
    const id = this.activatedRoute.snapshot.params.id;
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


/* 

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
} */