import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SongsController extends Controller {
  @service favoritesSong;

  @action
  addFavorite(song){
    this.favoritesSong.add(song);
  }

  @action
  deleteSong(song){
    song.destroyRecord();
  }
}
