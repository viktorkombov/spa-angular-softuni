import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe, IUser } from '../shared/interfaces';
import { RecipeService } from '../recipe/recipe.service'
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: 'app-home-',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  images = [
    {'image': 'https://www.garlicandzest.com/wp-content/uploads/2019/10/thai-squash-soup-3.jpg', 'name': 'Супи и чорби', 'category': 'Супи и чорби'},
    {'image': 'https://pointcook.org/wp-content/uploads/2019/07/How-to-Barbeque-Myths-About-High-Heat.jpg', 'name': 'Скара', 'category': 'Скара'},
    {'image': 'https://m.az-jenata.bg/media/az-jenata/files/articles/448x336/5a0551de10d43100c78dfda546338b5c.jpg', 'name': 'Основни', 'category': 'Основни'},
    {'image': 'https://i.zajenata.bg/images/115/m_1142a18284689b81a654b69aa84a4470.jpg', 'name': 'Предястия', 'category': 'Предястия'},
    {'image': 'https://m.az-jenata.bg/media/az-jenata/files/articles/528x396/df3d67f2ceed28b8a8b55d2a7d5cbe3d.jpg', 'name': 'Десерти', 'category': 'Десерти'},
    {'image': 'https://goodfoodtour.bg/wp-content/uploads/sites/23/2016/11/39d300a296a48a95d6861ea872a321c40f36c37aeddf74b36dpimgpsh_fullsize_distr.jpg', 'name': 'Тестени изделия', 'category': 'Тестени изделия'},
    {'image': 'https://gotvach.bg/files/lib/600x350/caprese-salad-123.jpg', 'name': 'Салати', 'category': 'Салати'}
]

  topFiveRecipes: IRecipe[]
  @Input() isLoading: boolean;
  public currentUser;
  constructor(private recipeService: RecipeService, private http: HttpClient, public authService: AuthService) {
    this.isLoading = true;
    this.recipeService.loadRecipeList().subscribe((recipeList) => {
    })
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.topFiveRecipes = recipeList.sort((a, b) => {
        if (a.likedBy.length > b.likedBy.length) {
          return -1
        } else if (a.likedBy.length < b.likedBy.length) {
          return 1
        } else {
          return 0
        }
      })
      if (this.topFiveRecipes.length > 5) { this.topFiveRecipes.length = 5}
      this.isLoading = false;
    });
    this.currentUser = this.authService.currentUser;
  
   }

  get isLogged(): boolean {
    return this.authService.isLogged;
  }


  ngOnInit(): void {
    

  }

  ngAfterViewInit(): void {
   
  }
}
