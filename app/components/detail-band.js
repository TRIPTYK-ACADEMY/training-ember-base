import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DetailBandComponent extends Component {
  @tracked isEditing = false;

  @action
  isEditingBandDetail(){
    this.isEditing = true;
  }

  @action
  editBandDetail(){
    this.args.band.save();
    this.isEditing = false;
  }
}
