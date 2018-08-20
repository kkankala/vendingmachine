import { VendingMachine, VendingMachineSize } from "./vendingMachine";

var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
console.log("true");
