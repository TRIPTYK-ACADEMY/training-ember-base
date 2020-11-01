import Route from '@ember/routing/route';
import { reject } from 'rsvp';

export default class BandsBandSongsRoute extends Route {
  model(){
    return reject(this.modelFor('bands.band'));
  }
}
