import {ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from './ad-item';
import {AdDirective} from './ad.directive';

export class AdBannerComponent implements OnInit, OnDestroy{
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  loadComponent(): void{
    this.currentAdIndex = (this.currentAdIndex + 1 ) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds(): void{
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
}
