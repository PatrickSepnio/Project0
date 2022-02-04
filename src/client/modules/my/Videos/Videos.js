import { LightningElement } from 'lwc';

export default class Videos extends LightningElement {
    renderForYou= true;
    renderNews= true;
    renderSports= true;

    switchForYou() {
        this.renderForYou=false;
    }

    switchNews() {
        this.renderNews=false;
    }

    switchSports() {
        this.renderSports=false;
    }

}