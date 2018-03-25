// export class EventDetails {
//   constructor(public event_key: string,
//               public event_desc: string, public modbus_address: string, public value: number, public ack: number){}
// }

export interface Event{
 no: number;
 timestamp: string;
 substation: string;
 bay: string;
 // event_key: string;
 // event_desc: string;
 // modbus_address: string;
 // value: number;
 // ack: number;
 description:{
    name: string;
    details: {
      event_key: string;
      event_desc: string;
      modbus_address: string;
      value: number;
      ack: number;
    }
 }
}

// seed events
export const EVENT_DATA: Event[] = [
  {no: 1, timestamp: '28-01-2018 12:15:08', substation: 'Station A', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 2, timestamp: '28-01-2018 12:15:08', substation: 'Station B', bay: 'Bay 5', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 3, timestamp: '28-01-2018 12:15:08', substation: 'Station C', bay: 'Bay 3', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 4, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 4', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 5, timestamp: '28-01-2018 12:15:08', substation: 'Station E', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 6, timestamp: '28-01-2018 12:15:08', substation: 'Station F', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 7, timestamp: '28-01-2018 12:15:08', substation: 'Station G', bay: 'Bay 4', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 8, timestamp: '28-01-2018 12:15:08', substation: 'Station H', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 9, timestamp: '28-01-2018 12:15:08', substation: 'Station I', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 10, timestamp: '28-01-2018 12:15:08', substation: 'Station J', bay: 'Bay 6', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23', event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 11, timestamp: '28-01-2018 12:15:08', substation: 'Station K', bay: 'Bay 9', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 12, timestamp: '28-01-2018 12:15:08', substation: 'Station L', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 13, timestamp: '28-01-2018 12:15:08', substation: 'Station M', bay: 'Bay 4', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 14, timestamp: '28-01-2018 12:15:08', substation: 'Station N', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 15, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 16, timestamp: '28-01-2018 12:15:08', substation: 'Station A', bay: 'Bay 5', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 17, timestamp: '28-01-2018 12:15:08', substation: 'Station B', bay: 'Bay 6', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 18, timestamp: '28-01-2018 12:15:08', substation: 'Station D', bay: 'Bay 2', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 19, timestamp: '28-01-2018 12:15:08', substation: 'Station I', bay: 'Bay 1', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
  {no: 20, timestamp: '28-01-2018 12:15:08', substation: 'Station C', bay: 'Bay 7', description:{name:'Power Trip', details:{ event_key:'0025c562025b8f7ade3cb852089e1f23',  event_desc:'103', modbus_address:'16', value: 19, ack: 0}}},
];
