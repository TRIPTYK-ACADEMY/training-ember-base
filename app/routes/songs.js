import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default class SongsRoute extends Route {
  model(){
    return this.store.findAll('song', { include: "band" })
  }
}
