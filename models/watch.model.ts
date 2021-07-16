export class Watch {
  constructor(
    id_sensor: string,
    value: string,
    type: string
  ) {
    this.id_sensor = id_sensor;
    this.value = value;
    this.type = type;
  }
  id_sensor: string;
  value: string;
  type: string;
}



