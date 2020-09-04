import { Hello } from "../models/hello";

export interface HelloDto{
  status: number;
  success: boolean;
  hellos?: Hello[];
  message?: string;
}