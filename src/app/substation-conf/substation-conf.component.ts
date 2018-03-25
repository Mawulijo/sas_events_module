import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { RelaysComponent } from "../relays/relays.component";
// import { EventsService } from "../services/events.service";
import { SubstationService } from '../services/substation.service';


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

  constructor(public substationService: SubstationService, public thisDialogRef: MatDialogRef<SubstationConfComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    this.substnConfigForm = new FormGroup({
      'region': new FormControl('Accra', Validators.required),
      'subName': new FormControl('Station A', Validators.required),
      'voltage': new FormControl(null, Validators.required),
      // 'bay': new FormControl(null, Validators.required),
      'bay': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'relays': new FormArray([])
        // 'relay': new FormArray([{
        //   'name': new FormControl(null, Validators.required),
        //   'type': new FormControl(null, Validators.required),
        //   'modbusId': new FormControl(null, Validators.required),
        // }])
      })
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

  getControls(substnConfigForm) {
  return (substnConfigForm.get('bay.relays') as FormArray).controls;
}

  addRelay() {
    const control = new FormControl(null,  Validators.required);
    (<FormArray>this.substnConfigForm.get('bay.relays')).push(control);

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
  onClose(){
   this.substnConfigForm.get('bay.relays')

  }
}
