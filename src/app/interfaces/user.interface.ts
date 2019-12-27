import { dateOfBirth } from './dateOfBirth.interface';

export interface User{
  id: number;
  fName: string;
  lName: string;
  age: number;
  dob: dateOfBirth;
  email: string;
  password: string;
  profImage: string;
};
