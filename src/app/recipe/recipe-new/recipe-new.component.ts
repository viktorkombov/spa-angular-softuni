import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  creator: string;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.creator = this.authService.currentUser.username;
  }

  submitHandler(data: any): void {
    data.creator = this.creator;
    data.createdAt = new Date().toLocaleDateString()
    data.ingredients = data.ingredients.trim().split(',')
    console.log(data.ingredients)
    console.log(data)
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