export class User {
  constructor(
    lastName: string,
    firstName: string,
    email: string,
    password: string,
    role: string,
    id_sensor: string,
  ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.role = role;
    this.id_sensor = id_sensor;
  }
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  role: string;
  id_sensor: string;
}



