import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { RelaysComponent } from "../relays/relays.component";
// import { EventsService } from "../services/events.service";
import { SubstationService } from '../services/substation.service';
import {element} from "protractor";


@Component({
  selector: 'substation-conf',
  templateUrl: './substation-conf.component.html',
  styleUrls: ['./substation-conf.component.scss'],
  providers: [ SubstationService ]
})
export class SubstationConfComponent implements OnInit {
  substnConfigForm: FormGroup;
  selectedVolt = false;
  voltageSelected = '';
  regions = ['Accra', 'Tema', 'Volta', 'Ashanti', 'Western', 'Eastern', 'Central'];
  substations = ['Station A', 'Station B', 'Station C', 'Station D'];
  voltages = ['11 KV', '33 KV'];
  modbusIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
    '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'];
  relaytypes = ['PCL', 'Reed Relay', 'Thermal Relay'];
  showRelayForm = true;

  constructor(public substationService: SubstationService, public thisDialogRef: MatDialogRef<SubstationConfComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    this.substnConfigForm = new FormGroup({
      'region': new FormControl('Accra', Validators.required),
      'subName': new FormControl('Station A', Validators.required),
      'voltage': new FormControl(null, Validators.required),
      'bay': new FormGroup({
        'bayName': new FormControl(null, Validators.required),
        'relays' : new FormArray([])
      }),

    });

  }

  onVoltSelect() {
    this.selectedVolt = true;
    // this.voltageSelected = (<HTMLInputElement>event.target).value;
  }

  onCloseSubmit() {
    this.thisDialogRef.close(
      this.substationService.substations.push(this.substnConfigForm.value)
    );
    console.log(this.substnConfigForm.value)

  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }


  // relayDialogResult = [];

//  getControls(substnConfigForm) {
//   return (substnConfigForm.get('bay.relays') as FormArray).controls;
// }

  createRelay() {
    return new FormGroup({
      relayName: new FormControl(),
      modbusId: new FormControl(),
      relayType: new FormControl()
    })
  }

  addRelay() {
    this.showRelayForm = false;
    (<FormArray>this.substnConfigForm.get('bay.relays')).push(this.createRelay())
    // const control = new FormControl(this.createRelay(),  Validators.required);
    // (<FormArray>this.substnConfigForm.get('bay.relays')).push(control);

    //
    // let relayDialogRef = this.dialog.open(RelaysComponent, {
    //   width: '300px',
    //   data: []
    // });
    //
    //
    // relayDialogRef.afterClosed()
    //   .subscribe(result => {
    //     console.log(`Dialog Closed: ${result}`);
    //     this.relayDialogResult.push(result);
    // })
  }

  deleteRelay(i){

    this.showRelayForm = true;
    // (<HTMLInputElement>this.substnConfigForm).nodeValue = ''; //TODO Delete html form


    // let array = this.substnConfigForm.get('bay.relays');
    // let element = (<FormArray>this.substnConfigForm.get('bay.relays'))[i];
    // console.log((<FormArray>array).length);
    // console.log(element[i]);
    //
    // for (let i ; i < (<FormArray>array).length; i++){
    //   // console.log((<FormArray>this.substnConfigForm.get('bay.relays'))[i].text)
    //   if(element[i] !== -1){
    //     element.splice(element,1);
    //   }
    // }
  }
}
