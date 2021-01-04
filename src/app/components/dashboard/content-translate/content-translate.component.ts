import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-translate',
  templateUrl: './content-translate.component.html',
  styleUrls: ['./content-translate.component.scss'],
})
export class ContentTranslateComponent implements OnInit {
  //#region Properties

  @ViewChild('content', {static: true})
  inputContent: any;

  //#endregion

  //#region Life Cycle
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.inputContent.instance.focus();
    }, 500);
  }
  //#endregion
}
