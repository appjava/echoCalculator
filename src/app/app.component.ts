import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EchoCalculator';
  credits = 'Powered by EchoGroup - Derechos Reservados 2023'

  flow:number = 0;
  head:number = 0;
  roH:number = 10000;
  timeH:number = 0;
  powerH:number = 0;
  energyH:number = 0;

  velocity:number = 0;
  diameter:number = 0;
  roE:number = 1;
  timeE:number = 0;
  powerE:number = 0;
  energyE:number = 0;

  panelS:number = 0;
  nPanelS:number = 0;
  timeS:number = 0;
  powerS:number = 0;
  energyS:number = 0;

  totalPower:number = 0;
  totalEnergy:number = 0;

  potenerHidro():void{
    this.powerH = this.flow * this.head * this.roH;
    this.energyH = this.powerH * this.timeH;
    this.totalPot();
    this.totalEne();
  }

  potenerEol():void{
    this.powerE = (((this.velocity*this.velocity*this.velocity)*(this.roE)*(3*(this.diameter/2)*(this.diameter/2)))/2);
    this.energyE = this.powerE * this.timeE;
    this.totalPot();
    this.totalEne();
  }

  potenerSol():void{
    this.powerS = this.panelS * this.nPanelS;
    this.energyS = this.powerS * this.timeS;
    this.totalPot();
    this.totalEne();
  }

  totalPot():void{
    this.totalPower = this.powerH + this.powerE + this.powerS;
  }
  totalEne():void{
    this.totalEnergy = this.energyH + this.energyE + this.energyS;
  }

}
