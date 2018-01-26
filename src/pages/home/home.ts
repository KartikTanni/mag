import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public http: Http, public toastCtrl: ToastController) {

  }

  presentToast(k) {
    let toast = this.toastCtrl.create({
      message: k,
      duration: 1000
    });
    toast.present();
  }

  action(k)
  {
    if(k=="front")
    {
      this.request("d",k);
    }
    else if(k=="left")
    {
      this.request("c",k);
    }
    else if(k=="right")
    {
      this.request("b",k);
    }
    else if(k=="stop")
    {
      this.request("a",k);
    }
  }

  request(cm,text)
  {
    var myData = JSON.stringify({});
    var link="http://172.0.0.101/"+cm;
    this.http.get(link, myData)
    .subscribe(data => {
      this.presentToast(cm+" - "+text+" : "+" success");
      // console.log(data["_body"]); //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    }, error => {
    // console.log("Oooops!");
    this.presentToast(cm+" - "+text+" : "+" failed");
    });
  }



}
