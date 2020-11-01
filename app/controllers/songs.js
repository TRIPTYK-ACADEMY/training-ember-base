import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SongsController extends Controller {
  queryParams = ['name', 'rating']

  @service favoritesSong;

  get directionName(){
    return this.model.queryName == "asc" ? "desc" : "asc";
  }
  get directionRating(){
    return this.model.queryRating == "asc" ? "desc" : "asc";
  }
  get filteredSong(){
    let songs = this.model.songs;
    if(this.name){
      if(this.name === "asc"){
        return songs.sortBy("title")
      } else{
        return songs.sortBy('title').reverse();
      }
    }
    if(this.rating){
      if(this.rating === "asc"){
        return songs.sortBy("rating")
      } else{
        return songs.sortBy('rating').reverse();
      }
    }

    return songs;
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
