export interface Location {
  name: string;
  income: number;             //amount made per turn
  level: number;              //level of district
  active?: boolean;           //true if facility is active, false if not
  productionProgress: number; //percentage until next production tick
  productionSpeed: number;    //progress per cycle
  productionTarget: number;   //progress value that produces income
}