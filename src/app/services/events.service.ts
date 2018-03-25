import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";



@Injectable()
export class EventsService {

  constructor(private http : HttpClient) { }


  events = [
    {no: 1, timestamp: '28-01-2018 12:15:08', substation: 'Station A', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'10025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 2, timestamp: '28-01-2018 12:15:08', substation: 'Station B', bay: 'Bay 5', description:{name:'Power Trip', details:{ event_key:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 3, timestamp: '28-01-2018 12:15:08', substation: 'Station C', bay: 'Bay 3', description:{name:'Power Trip', details:{ event_key:'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 4, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 4', description:{name:'Power Trip', details:{ event_key:'4zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 5, timestamp: '28-01-2018 12:15:08', substation: 'Station E', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 6, timestamp: '28-01-2018 12:15:08', substation: 'Station F', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'50025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 7, timestamp: '28-01-2018 12:15:08', substation: 'Station G', bay: 'Bay 4', description:{name:'Power Trip', details:{ event_key:'60025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 8, timestamp: '28-01-2018 12:15:08', substation: 'Station H', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'70025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 9, timestamp: '28-01-2018 12:15:08', substation: 'Station I', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'80025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 10, timestamp: '28-01-2018 12:15:08', substation: 'Station J', bay: 'Bay 6', description:{name:'Power Trip', details:{ event_key:'90025c562025b8f7ade3cb852089e1f23', event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 11, timestamp: '28-01-2018 12:15:08', substation: 'Station K', bay: 'Bay 9', description:{name:'Power Trip', details:{ event_key:'100025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 12, timestamp: '28-01-2018 12:15:08', substation: 'Station L', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'110025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 13, timestamp: '28-01-2018 12:15:08', substation: 'Station M', bay: 'Bay 4', description:{name:'Power Trip', details:{ event_key:'120025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 14, timestamp: '28-01-2018 12:15:08', substation: 'Station N', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'130025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 15, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'140025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 16, timestamp: '28-01-2018 12:15:08', substation: 'Station A', bay: 'Bay 5', description:{name:'Power Trip', details:{ event_key:'150025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 17, timestamp: '28-01-2018 12:15:08', substation: 'Station B', bay: 'Bay 6', description:{name:'Power Trip', details:{ event_key:'160025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 18, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'170025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 19, timestamp: '28-01-2018 12:15:08', substation: 'Station I', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'180025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
    {no: 20, timestamp: '28-01-2018 12:15:08', substation: 'Station C', bay: 'Bay 7', description:{name:'Power Trip', details:{ event_key:'190025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  ];

  filterEvents(customFilters){
      return new  Promise((resolve, reject) => {
        if (customFilters.region == '')
          reject();
        // if (customFilters.substation == '')
        //   reject();
        // if (customFilters.voltage == '')
        //   reject();
        // if (customFilters.bay == '')
        //   reject();
        //  resolve(( ref => ref
        //  .where(customFilters.region, customFilters.substation, customFilters.voltage, customFilters.bay)).valueChanges());
      })
  }
}

// export class Event {
//   public no: number;
//   public timestamp: string;
//   public substation: string;
//   public bay: string;
//   public description:{
//     name: string;
//     details: {
//       event_key: string;
//       event_desc: string;
//       modbus_address: string;
//       value: number;
//       ack: number;
//     }
//   }
// }
