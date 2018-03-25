import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { SubstationConfComponent } from '../substation-conf/substation-conf.component';
import { BayDetailsComponent } from "../bay-details/bay-details.component";
import { SubstationService } from '../services/substation.service';
import { substation } from '../data/substation.model';
import {forEach} from "@angular/router/src/utils/collection";



@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  providers: [ SubstationService ]
})

export class ConfigurationComponent implements OnInit {
  dialogResult = '';

  constructor(public dialog: MatDialog, public substationService: SubstationService) {
    console.log(this.substationService.substations[0])
  }

  ngOnInit() {
  }

  addSubstation() {
    let substnDialogRef = this.dialog.open(SubstationConfComponent, {
      width: '500px',
    })
    substnDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Closed: ${result}`);
      this.dialogResult = result;
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns = ['region', 'name', 'voltage', 'bay'];
  dataSource = new MatTableDataSource(this.substationService.substations);
  // dataSource = new MatTableDataSource<substation>(SUBSTATION_DATA);


  //Sys. Configuration logic
  selectedPort: string;
  selectedBit: string;
  selectedParity: string;
  selectedBrate: string;


  ports = [
    {port: '1', viewPort: '1'},
    {port: '2', viewPort: '2'},
    {port: '3', viewPort: '3'},
    {port: '4', viewPort: '4'},
    {port: '5', viewPort: '5'},
    {port: '6', viewPort: '6'},
    {port: '7', viewPort: '7'},
    {port: '8', viewPort: '8'},
    {port: '9', viewPort: '9'},
    {port: '10', viewPort: '10'},

  ];

  databits = [
    {databit: '7', viewDBits: '7'},
    {databit: '8', viewDBits: '8'}
  ];

  parities = [
    {parity: 'None', viewParity: 'None'},
    {parity: 'Even', viewParity: 'Even'},
    {parity: 'Odd', viewParity: 'Odd'}
  ];

  baudrates = [
    {baudrate: '100', viewBrate: '100'},
    {baudrate: '200', viewBrate: '200'},
    {baudrate: '300', viewBrate: '300'},
    {baudrate: '400', viewBrate: '400'},
    {baudrate: '500', viewBrate: '500'}
  ];


  dialogR = '';
  openBayDialog(i) {
    let bayDDialogRef = this.dialog.open(BayDetailsComponent, {
      width: '400px',
      data: this.substationService.substations[i].bay.relays //nested array passed to modal
    })


    bayDDialogRef.afterClosed().subscribe(result => {
      this.dialogR = result;
    });
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


export interface substation {
  name: string;
  region: string;
  voltage: string;
  bay: {
    name: string;
    relay: {
      name: string;
      modbusId: string;
      type: string;
    }
  };
}

export const SUBSTATION_DATA: substation[] = [
  // new substation('Accra East','STATION A','33KV','AE001')
  {region: 'Accra West', name: 'STATION B', voltage: '11KV', bay:{name:'AW001', relay:{name: 'AW001-02-PCL', modbusId: '02', type:'PCL'}}},
  { region: 'Central', name: 'STATION C', voltage: '11KV', bay:{name:'C001', relay:{name: 'C001-08-PCL', modbusId: '08', type:'PCL'}}},
  { region: 'Ashanti', name: 'STATION D', voltage: '33KV', bay:{name:'AS001', relay:{name: 'AS001-04-PCL', modbusId: '04', type:'PCL'}}},
  { region: 'Ashanti', name: 'STATION D', voltage: '33KV', bay:{name:'AS001', relay:{name: 'AS001-04-PCL', modbusId: '04', type:'PCL'}}},
  { region: 'Ashanti', name: 'STATION D', voltage: '33KV', bay:{name:'AS001', relay:{name: 'AS001-04-PCL', modbusId: '04', type:'PCL'}}},
  { region: 'Ashanti', name: 'STATION D', voltage: '33KV', bay:{name:'AS001', relay:{name: 'AS001-04-PCL', modbusId: '04', type:'PCL'}}},
  { region: 'Ashanti', name: 'STATION D', voltage: '33KV', bay:{name:'AS001', relay:{name: 'AS001-04-PCL', modbusId: '04', type:'PCL'}}},
  { region: 'Ashanti', name: 'STATION D', voltage: '33KV', bay:{name:'AS001', relay:{name: 'AS001-04-PCL', modbusId: '04', type:'PCL'}}},
  { region: 'Eastern', name: 'STATION E', voltage: '11KV', bay:{name:'E001', relay:{name: 'E001-03-PCL', modbusId: '03', type:'PCL'}}}
];


