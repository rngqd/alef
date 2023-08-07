import { IInputValue } from 'src/models';

export interface IInputProps {
  label: string;
  value: IInputValue;
  idx?: number;
  onlyNumbers: boolean;
}
