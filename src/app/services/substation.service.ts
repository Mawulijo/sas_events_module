import { Injectable } from '@angular/core';

@Injectable()
export class SubstationService {

  constructor() { }

  substations = [

    {region: 'Accra', subName: 'STATION B', voltage: '11KV', bay:{name:'AW001', relays:[{name: 'AW001-08-PCL', modbusId: '02', type:'PCL'},{name: 'AW001-02-PCL', modbusId: '02', type:'PCL'},{name: 'AW001-02-PCL', modbusId: '02', type:'PCL'}]}},
    { region: 'Central', subName: 'STATION C', voltage: '11KV', bay:{name:'C001', relays:[{name: 'C001-08-PCL', modbusId: '08', type:'PCL'} ,{name: 'AS001-03-PCL', modbusId: '03', type:'Reek'}]}},
    { region: 'Central', subName: 'STATION C', voltage: '11KV', bay:{name:'C001', relays:[{name: 'C001-08-PCL', modbusId: '08', type:'PCL'}]}},
    { region: 'Ashanti', subName: 'STATION D', voltage: '33KV', bay:{name:'AS001', relays:[]}},
    // { region: 'Ashanti', subName: 'STATION D', voltage: '33KV', bay:{name:'AS001', relay:{name: 'AS001-04-PCL', modbusId: '04', type:'PCL'}}},

  ];

}
