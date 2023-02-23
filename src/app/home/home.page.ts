import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  result: string;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Desea ver el encargo?',
      buttons: [
        {
          text: 'continuar',
          role: 'display',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'ocultar',
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 4);
  }
}
