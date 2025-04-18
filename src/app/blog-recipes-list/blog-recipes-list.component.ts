import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-recipes-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-recipes-list.component.html',
  styleUrls: ['./blog-recipes-list.component.css', '../../styles.css'],
})
export class BlogRecipesListComponent {
  blogRecipes = [
    {
      "id": "1",
      "title": "Pasta Primavera",
      "description": "Una deliciosa pasta con ingredientes frescos del Mediterráneo, perfecta para una cena ligera y sabrosa.",
      "categories": ["Vegetariana", "Pasta", "Italiana"],
      "image": "https://nutriendotuvida.com/img/8b89b70ce4540c4c223195d6e14ba0fc.png",
      "alt": "Pasta Primavera",
      "rate": "3",
      "chefName": "María",
      "chefImage": "https://picsum.photos/seed/food1/30/30"      
    },
    {
      "id": "2",
      "title": "Salmón al Horno",
      "description": "Un plato saludable y delicioso, perfecto para una cena ligera y sabrosa.",
      "categories": ["Pescado", "Saludable", "Sin Gluten"],
      "image": "https://www.annarecetasfaciles.com/files/salmon-horno-1024x576.jpg",
      "alt": "Salmón al Horno",
      "rate": "4",
      "chefName": "Juan",
      "chefImage": "https://picsum.photos/seed/food2/30/30"
    },
    {
      "id": "3",
      "title": "Curry de Garbanzos",
      "description": "Un plato vegano y delicioso, perfecto para una cena ligera y sabrosa.",
      "categories": ["Vegana", "India", "Especiada"],
      "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2024/09/curry-de-garbanzos.jpg",
      "alt": "Curry de Garbanzos",
      "rate": "5",
      "chefName": "Ana",
      "chefImage": "https://picsum.photos/seed/food3/30/30"
    },
    {
      "id": "4",
      "title": "Pollo al Limón",
      "description": "Un plato saludable y delicioso, perfecto para una cena ligera y sabrosa.",
      "categories": ["Pollo", "Bajo en Calorías", "Mediterránea"],
      "image": "https://polloseldorado.co/wp-content/uploads/2023/09/pollo-al-limon-portada.jpg",
      "alt": "Pollo al Limón",
      "rate": "4",
      "chefName": "Pedro",
      "chefImage": "https://picsum.photos/seed/food4/30/30"
    }
  ];
}
