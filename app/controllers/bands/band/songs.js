import Controller from '@ember/controller';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BandsBandSongsController extends Controller {
  // @service router;

  @tracked selectSong = {
    title: "",
    rating: 0
  };
  @tracked isAddingASong = false;

  @empty('selectSong.title') isAddButtonDisabled;

  @action
  addingSong(){
    this.isAddingASong = true;
  }
  @action
  setRating(rating, song){
    song.set('rating', rating);
    song.save();
  }

  @action
  updateRating(params){
    let {song, rating} = params;
    song.set('rating', rating);
    song.save();
  }

  @action
  async addSong(e){
    e.preventDefault();
    let record = await this.store.createRecord('song', {
      band: this.model,
      ...this.selectSong
    });
    await record.save();
    this.isAddingASong = false;
    this.selectSong = {
      name: ""
    };
    // this.router.transitionTo('bands.band.songs', record.id);
  }

  @action
  async cancelSong(){
    this.selectSong = {
      name: ""
    };
    this.isAddingASong = false;
  }
}
