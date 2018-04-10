import {Component, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatDialog} from '@angular/material';
import { EventsService } from '../services/events.service';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: [ './events.component.scss' ],
  providers: [ EventsService ]
})


export class EventsComponent implements OnInit {
  // events: {
  //   no: number;
  //   timestamp: string;
  //   substation: string;
  //   bay: string;
  //   description: {
  //     name: string;
  //     details: {
  //       event_key: string;
  //       event_desc: string;
  //       modbus_address: string;
  //       value: number;
  //       ack: number;
  //     }
  //   }
  // }[] = [];

  selectedRegion: string;
  selectedSubstn: string;
  selectedVolt: string;
  selectedBay: string;

  regions = [
    {region: 'accra', viewRegion: 'Accra'},
    {region: 'tema', viewRegion: 'Tema'},
    {region: 'volta', viewRegion: 'Volta'},
    {region: 'ashanti', viewRegion: 'Ashanti'},
    {region: 'western', viewRegion: 'Western'},
    {region: 'eastern', viewRegion: 'Eastern'},
    {region: 'central', viewRegion: 'Central'}
  ];
  substations = [
    {substn: 'Station-A', viewSubstn: 'Station A'},
    {substn: 'Station-B', viewSubstn: 'Station B'},
    {substn: 'Station-C', viewSubstn: 'Station C'},
    {substn: 'Station-D', viewSubstn: 'Station D'},
    {substn: 'Station-E', viewSubstn: 'Station E'},
    {substn: 'Station-F', viewSubstn: 'Station F'},
    {substn: 'Station-G', viewSubstn: 'Station G'},
    {substn: 'Station-H', viewSubstn: 'Station H'}
  ];
  voltages = [
    {volt: '11-KV', viewVolt: '11 KV'},
    {volt: '33-KV', viewVolt: '33 KV'}
  ];
  bays = [
    {bay: 'bay-1', viewBay: 'Bay One'},
    {bay: 'bay-2', viewBay: 'Bay Two'}
  ];

  displayedColumns = ['no', 'timestamp', 'substation', 'bay', 'description'];
  dataSource = new MatTableDataSource(this.eventsService.events);
  dialogR = '';


  constructor(private eventsService: EventsService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openEventsDDialog(i) {
    let eventDDialogRef = this.dialog.open(EventDetailComponent, {
      width: '500px',
      data: this.eventsService.events[i] //object passed to modal
    });

    eventDDialogRef.afterClosed().subscribe(result => {
      this.dialogR = result;
    });
  }

  filter = {
    region: this.regions,
    substation: this.substations,
    voltage: this.voltages,
    bay: this.bays,
  }

  filterEvents() {
    this.eventsService.filterEvents(this.filter).then((res) => {
      // this.dataSource = new FilteredEvents(res);
    })
  }
  // resetFilter() {
  //     this.dataSource = new MatTableDataSource<any>(this.eventsService.events);
  //   }

}
  export class FilteredEvents extends DataSource<any> {
        constructor (private inputObs){
          super();
        }
        connect(): Observable<any>{
            return  this.inputObs;
        }
        disconnect(){}
  }



  // openEventsDDialog(evKey, evDesc, evMDA, evVal, evAck) {
  //   let eventDDialogRef = this.dialog.open(EventDetailComponent, {
  //     width: '500px',
  //     data: { evKey, evDesc, evMDA, evVal, evAck }
  //       // data: this.eventsService.events.reduce((previousValue, currentValue ) => {
  //       //       previousValue[currentValue.no] = currentValue;
  //       //       console.log(previousValue);
  //       //       return previousValue;
  //       //      }, {})
  //     });
  //     console.log(this.eventsService.events[i].description.details)
  //   eventDDialogRef.afterClosed().subscribe(result => {
  //     this.dialogR = result;
  //   });
  // }




// events model
// export interface Event {
//   no: number;
//   substation: string;
//   bay: string;
//   timestamp: string;
//   description:{
//     name: string;
//     details: string
//   };
// }

// seed events
// events = [
//   {no: 1, timestamp: '28-01-2018 12:15:08', substation: 'Station A', bay: 'Bay 1', description:{name:'Power Trip', details: ''}},
//   {no: 2, timestamp: '28-01-2018 12:15:08', substation: 'Station B', bay: 'Bay 5', description:{name:'Power Trip', details: ''}},
//   {no: 3, timestamp: '28-01-2018 12:15:08', substation: 'Station C', bay: 'Bay 3', description:{name:'Power Trip', details: ''}},
//   {no: 4, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 4', description:{name:'Power Trip', details: ''}},
//   {no: 5, timestamp: '28-01-2018 12:15:08', substation: 'Station E', bay: 'Bay 2', description:{name:'Power Trip', details: ''}},
//   {no: 6, timestamp: '28-01-2018 12:15:08', substation: 'Station F', bay: 'Bay 1', description:{name:'Power Trip', details: ''}},
//   {no: 7, timestamp: '28-01-2018 12:15:08', substation: 'Station G', bay: 'Bay 4', description:{name:'Power Trip', details: ''}},
//   {no: 8, timestamp: '28-01-2018 12:15:08', substation: 'Station H', bay: 'Bay 1', description:{name:'Power Trip', details: ''}},
//   {no: 9, timestamp: '28-01-2018 12:15:08', substation: 'Station I', bay: 'Bay 2', description:{name:'Power Trip', details: ''}},
//   {no: 10, timestamp: '28-01-2018 12:15:08', substation: 'Station J', bay: 'Bay 6', description:{name:'Power Trip', details: ''}},
//   {no: 11, timestamp: '28-01-2018 12:15:08', substation: 'Station K', bay: 'Bay 9', description:{name:'Power Trip', details: ''}},
//   {no: 12, timestamp: '28-01-2018 12:15:08', substation: 'Station L', bay: 'Bay 2', description:{name:'Power Trip', details: ''}},
//   {no: 13, timestamp: '28-01-2018 12:15:08', substation: 'Station M', bay: 'Bay 4', description:{name:'Power Trip', details: ''}},
//   {no: 14, timestamp: '28-01-2018 12:15:08', substation: 'Station N', bay: 'Bay 1', description:{name:'Power Trip', details: ''}},
//   {no: 15, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 1', description:{name:'Power Trip', details: ''}},
//   {no: 16, timestamp: '28-01-2018 12:15:08', substation: 'Station A', bay: 'Bay 5', description:{name:'Power Trip', details: ''}},
//   {no: 17, timestamp: '28-01-2018 12:15:08', substation: 'Station B', bay: 'Bay 6', description:{name:'Power Trip', details: ''}},
//   {no: 18, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 2', description:{name:'Power Trip', details: ''}},
//   {no: 19, timestamp: '28-01-2018 12:15:08', substation: 'Station I', bay: 'Bay 1', description:{name:'Power Trip', details: ''}},
//   {no: 20, timestamp: '28-01-2018 12:15:08', substation: 'Station C', bay: 'Bay 7', description:{name:'Power Trip', details: ''}},
// ];

