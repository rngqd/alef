import { IPerson } from 'src/models';

export interface IUser extends IPerson {
  children: IPerson[];
}
