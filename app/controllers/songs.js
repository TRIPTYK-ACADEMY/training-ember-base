import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SongsController extends Controller {
  @service favoritesSong;

  get favorites(){
    return this.favoritesSong.items
  }

  @action
  toggleFavorite(song){
    if(this.favoritesSong.items.includes(song)){
      this.favoritesSong.remove(song)
    } else {
      this.favoritesSong.add(song);
    }
  }

  @action
  deleteSong(song){
    song.destroyRecord();
  }
}
