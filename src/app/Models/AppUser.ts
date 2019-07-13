export class AppUser {
  id: string;
  name: string;
  email: string;


  constructor(_id: string, _name: string, _email: string) {
    this.id = _id;
    this.name = _name;
    this.email = _email;
  }
}
