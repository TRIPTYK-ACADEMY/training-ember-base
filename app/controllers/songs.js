import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SongsController extends Controller {
  queryParams = ['name']

  @tracked name = 'asc';

  @service favoritesSong;

  get direction(){
    return this.model.query == "asc" ? "desc" : "asc";
  }
  get filteredSong(){
    let songs = this.model.songs;
    if(this.name === "asc"){
      return songs.sortBy("title")
    } else {
      return songs.sortBy('title').reverse();
    }
  }

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
