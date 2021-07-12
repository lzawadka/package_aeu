export class User {
  constructor(
    lastName: string,
    firstName: string,
    email: string,
    password: string,
    role: string
  ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.role = role;
  }
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  role: string;
}



