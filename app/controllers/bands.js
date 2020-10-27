import Controller from '@ember/controller';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BandsController extends Controller {
  @service router;

  @tracked selectBand = {
    name: ""
  };
  @tracked isAddingABand = false;

  @empty('selectBand.name') isAddButtonDisabled;

  @action
  addingBand(){
    this.isAddingABand = true;
  }

  @action
  async addBand(e){
    e.preventDefault();
    let record = await this.store.createRecord('band', this.selectBand);
    await record.save();
    this.isAddingABand = false;
    this.selectBand = {
      name: ""
    };
    this.router.transitionTo('bands.band.songs', record.id);
  }

  @action
  async cancelBand(){
    this.selectBand = {
      name: ""
    };
    this.isAddingABand = false;
  }
}
