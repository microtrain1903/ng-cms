import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  article = new Article();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit(): void{}

  onSubmit(): void{
    console.log(this.article);
    this.articlesService.createArticle(this.article).subscribe(
      (response:any)=>{
        this.response(response);
      }
    )
  }
  response(response:any): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;

      console.log(this.errors);
      console.log(this.errorMessage);
    }

    if(response.success===true){
      this.router.navigate(['/article/view/', response.article.slug]);
    }
  }
}
