import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { linkValidator } from 'src/app/shared/validators';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  form: FormGroup;
  creator: string;
  constructor(
    private recipeService: RecipeService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      recipeName: ['', Validators.required],
      necesseryTime: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', [Validators.required, linkValidator]],
      recipeContent: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.creator = this.authService.currentUser.username;
  }

  submitHandler(): void {
    const data = this.form.value;
    data.creator = this.creator;
    data.createdAt = new Date().toLocaleDateString()
    data.ingredients = data.ingredients.trim().split(',')
    
    this.recipeService.saveRecipe(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err.message)
        }
      });
  }

  

}