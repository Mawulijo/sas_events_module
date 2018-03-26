import { Injectable } from '@angular/core';

@Injectable()
export class SubstationService {

  constructor() { }

  substations = [

    {region: 'Accra', subName: 'STATION B', voltage: '11KV', bay:{bayName:'AW001', relays:[{relayName: 'AW001-08-PCL', modbusId: '02', relayType:'PCL'},{name: 'AW001-02-PCL', modbusId: '02', relayType:'PCL'},{relayName: 'AW001-02-PCL', modbusId: '02', relayType:'PCL'}]}},
    { region: 'Central', subName: 'STATION C', voltage: '11KV', bay:{bayName:'C001', relays:[{relayName: 'C001-08-PCL', modbusId: '08', relayType:'PCL'} ,{name: 'AS001-03-PCL', modbusId: '03', relayType:'Reek'}]}},
    { region: 'Central', subName: 'STATION C', voltage: '11KV', bay:{bayName:'C001', relays:[{relayName: 'C001-08-PCL', modbusId: '08', relayType:'PCL'}]}},
    { region: 'Ashanti', subName: 'STATION D', voltage: '33KV', bay:{bayName:'AS001', relays:[]}}

  ];

}
