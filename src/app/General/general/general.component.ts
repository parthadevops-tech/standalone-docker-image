import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicCompComponent } from './Dynamic/dynamic-comp/dynamic-comp.component';
import { SafeHtml, SafeUrl } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/httpServ/employee.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  safeValue!: SafeHtml;
  safeURL!: SafeUrl;
  dangerousUrl!: string;
  trustedUrl!: SafeHtml;
  dangerousVideoUrl!: string;
  videoUrl!: SafeHtml;
  apiLoaded = false;
  videoId = '3IXwN4XJywQ';

  // @ViewChild('dynamic', { read:ViewContainerRef }) viewRef1: any;

  constructor(
    private viewRef: ViewContainerRef,
    public secure: EmployeeService
  ) {
    //@ViewChild('dynamic', { read: ViewContainerRef })
  }

  ngOnInit(): void {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.secure.getsafeURL(this.dangerousUrl);

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/tgbNymZ7vqY';
    this.videoUrl = this.secure.getsafeResoueceURL(this.dangerousVideoUrl);
  }

  showDynamicComponent(): void {
    //this.viewRef.clear();
    this.viewRef.createComponent(DynamicCompComponent);
  }

  removeDynamicComponent(): void {
    this.viewRef.clear();
  }

  getXSSValue() {
    this.safeValue = this.secure.getSafeHtml('<h1>Sanitization Success</h1>');
  }

  // getXSSURIValue(){

  // }
}
