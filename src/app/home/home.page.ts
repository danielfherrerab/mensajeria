import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { OrderData } from '../interfaces/models.interface';
import { OrderListService } from '../services/order-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  result: string = '';
  orders: OrderData[];

  constructor(private actionSheetCtrl: ActionSheetController, private OrderListService: OrderListService) {
    this.orders = [];
  }

  ngOnInit(): void {
    this.OrderListService.getOrders().subscribe(orders => {
      console.log(orders)
      this.orders = orders;
    })
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
