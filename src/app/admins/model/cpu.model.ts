import { Admin } from './admin.model';

export interface CPU extends Admin{
    baseClock: string;
    boostClock: string;
    core: string;
    thread: string;
}