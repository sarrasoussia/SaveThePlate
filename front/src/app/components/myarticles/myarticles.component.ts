import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditArticlePage } from 'src/app/pages/edit-article/edit-article.page';

@Component({
  selector: 'app-myarticles',
  templateUrl: './myarticles.component.html',
  styleUrls: ['./myarticles.component.scss'],
})

export class MyarticlesComponent {
  @Input() article: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: EditArticlePage,
      componentProps: {
        article: this.article 
      }
    });
    modal.onDidDismiss().then((data) => {
      const modifiedArticle = data['data']; 
      console.log('Modified Article:', modifiedArticle);
      Object.assign(this.article, modifiedArticle);
    });
    return await modal.present();
  }





}
