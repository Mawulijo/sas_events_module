import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubstationService } from "../services/substation.service";


@Component({
  selector: 'app-bay-details',
  templateUrl: './bay-details.component.html',
  styleUrls: ['./bay-details.component.scss'],
  providers: [ SubstationService ]
})
export class BayDetailsComponent implements OnInit {
  constructor(public substationService: SubstationService, public BayDetailsComponentRef: MatDialogRef<BayDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onOk(){
    this.BayDetailsComponentRef.close('ok');
  }

  dataLength = this.data.length>1;

}
