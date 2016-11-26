module.exports = function(source) {
	this.cacheable && this.cacheable();
	var jsonObject = typeof source === "string" ? JSON.parse(source) : source;
	var returningJsonObject = {};
	for(var key in jsonObject) {
		if ( !key.match(/^[0-9]+$/) ) {
			returningJsonObject[key] = jsonObject[key];
		}
	}
	return "module.exports = " + JSON.stringify(returningJsonObject) + ";";
}
