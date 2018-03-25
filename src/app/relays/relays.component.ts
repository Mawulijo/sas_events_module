import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { SubstationConfComponent } from "../substation-conf/substation-conf.component";

@Component({
  selector: 'app-relays',
  templateUrl: './relays.component.html',
  styleUrls: ['./relays.component.scss']
})
export class RelaysComponent implements OnInit {
  relayForm : FormGroup;
  modbusIds = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16',
    '17', '18','19','20','21','22','23','24','25','26','27','28','29','30','31','32' ];

  relaytype = new FormControl();
  relaytypes = ['PCL', 'Reed Relay', 'Thermal Relay' ];

  constructor(public thisDialogRef: MatDialogRef<RelaysComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public subComponent: SubstationConfComponent) { }

  ngOnInit() {
    // this.relayForm = new FormGroup({
    //   'relays': new FormArray([])
    // });
  }

    // ngOnInit() {
    // this.relayForm = new FormGroup({
    //   'relayName' : new FormControl(null),
    //   'relayType' : new FormControl(null),
    //   'modbusAddress' : new FormControl(null)
    // });
  //}
  onCloseSubmit(){
    const control =  new FormControl(null, Validators.required);
    this.thisDialogRef.close(
      (<FormArray>this.subComponent.substnConfigForm.get('bay.relays')).push(control)
  );
    console.log(this.relayForm.value)
  }

  onCloseCancel(){
    this.thisDialogRef.close(this.relayForm.reset());
  }

}
