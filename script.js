function Cylinder(cyl_heigh, cyl_diameter){
	this.cyl_heigh = cyl_heigh;
	this.cyl_diameter = cyl_diameter; 	
}
Cylinder.prototype.Valume = function() {
	var radius = this.cyl_diameter /2
	return this.cyl_heigh * cyl_diameter * Math.PI * radius * radius;
};
	var cyl = new cylinder(8,4);
	console.log ('volume=', cyl.Valume().toFixed(4));