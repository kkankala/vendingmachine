import { VendingMachine, VendingMachineSize } from "./vendingMachine";

var machine: VendingMachine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
$(function(): void {
    console.log("jquery working!!");
});
