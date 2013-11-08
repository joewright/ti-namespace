exports.locationServicesAuthorization = -1;

exports.AUTHORIZATION_AUTHORIZED = 1;
exports.ACCURACY_BEST = 0;
exports.ACCURACY_HIGH = 1;
exports.ACCURACY_NEAREST_TEN_METERS = 2;
exports.ACCURACY_HUNDRED_METERS = 3;
exports.ACCURACY_KILOMETER = 4;
exports.ACCURACY_LOW = 5;
exports.ACCURACY_THREE_KILOMETERS = 6;
exports.ACCURACY_BEST_FOR_NAVIGATION = 7;

exports.getCurrentPosition = function() {
	return {
		coords: {
			latitude: 0,
			longitude: 0
		}
	}
};

exports.setPurpose = function(str) {
	this.purpose = str;
	return this.purpose;
}