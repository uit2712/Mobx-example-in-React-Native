import { observable, action, computed } from "mobx";

export default class SecondScreenStore {
	// attributes
	@observable bgColor = 'blue';

	// reset
	@action reset() {
		this.bgColor = 'blue';
	}

	// action/method
	@action setBgColor(bgColor) {
		this.bgColor = bgColor;
	}
}