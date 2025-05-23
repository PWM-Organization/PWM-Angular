import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecipeGeneratorComponent } from './pages/recipe-generator/recipe-generator.component';
import { WeeklyPlannerComponent } from './pages/weekly-planner/weekly-planner.component';
import { MyRecipesComponent } from './pages/my-recipes/my-recipes.component';

// Importamos los guardias
import { publicPagesGuard } from './guards/public-pages.guard';
import { authGuard } from './guards/auth.guard'; // Importamos el nuevo guardia

export const routes: Routes = [
    { path: '', component: IndexComponent },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [publicPagesGuard], // Aplicamos el guardia
    },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [publicPagesGuard], // Aplicamos el guardia
    },
    { path: 'blog', component: BlogComponent },
    { path: 'recipe', component: RecipeComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard], // Solo accesible si logueado
    },
    {
        path: 'recipe-generator',
        component: RecipeGeneratorComponent,
        canActivate: [authGuard], // Solo accesible si logueado
    },
    {
        path: 'weekly-planner',
        component: WeeklyPlannerComponent,
        canActivate: [authGuard], // Solo accesible si logueado
    },
    {
        path: 'my-recipes',
        component: MyRecipesComponent,
        canActivate: [authGuard], // Solo accesible si logueado
    },
];
