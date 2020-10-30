import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class FavoritesController extends Controller {
  @service favoritesSong;

  @action
  removeFavorite(song){
    this.favoritesSong.remove(song)
  }
}
