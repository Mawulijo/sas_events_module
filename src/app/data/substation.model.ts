export class substation {
  public name: string;
  public region: string;
  public voltage: string;
  public bay: {
    name: string;
    relay: {
      name: string;
      modbusId: string;
      type: string;
    }
  };

  constructor(name: string, region: string,  voltage: string, bay: string) {
    this.name = name;
    this.region = region;
    this.voltage = voltage;
    this.bay.name = bay;
    this.bay.relay.name  = bay;
    this.bay.relay.modbusId  = bay;
    this.bay.relay.type  = bay;
  }
}

