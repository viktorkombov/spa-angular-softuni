import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IRecipe, IUser } from 'src/app/shared/interfaces';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  isLoading: boolean = false;
  recipe: IRecipe;
  currentUserId: string;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) {
    const id = activatedRoute.snapshot.params.id;
    recipeService.loadRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }



  get isLogged(): boolean {
    return !!this.authService.currentUser;
  }

  get isCreator(): boolean {
    return this.authService.currentUser?.username === this.recipe.creator;
  }

  get isLiked(): boolean {
    console.log(!!this.recipe.likedBy.find(x => x.toString() === this.authService.currentUser?._id.toString()))
    return !!this.recipe.likedBy.find(x => x.toString() === this.authService.currentUser?._id.toString())
  }

  likeRecipe(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.isLoading = true;
    this.recipeService.likeRecipe(id).subscribe((data) => {
      this.recipe = data;
      this.isLoading = false;
    }
    );
  }

  editRecipe(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.router.navigate([`/recipe/edit/${id}`]);
  }

  deleteRecipe(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.recipeService.deleteRecipe(id).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
  }

}
