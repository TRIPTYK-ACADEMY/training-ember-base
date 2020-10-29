import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StarRatingComponent extends Component {

  @tracked maxRating = 10;

  get stars(){
    const stars = [];

    for (let i=1; i <= this.maxRating; i++) {
      stars.push({ rating: i, isFull: this.args.rating >= i });
    }

    return stars;
  }


  @action
  setRating(selectRating){
    // this.args.item.set('rating', selectRating);
    // this.args.item.save();
    if(this.args.onClick){
      this.args.onClick({
        rating: selectRating,
        song: this.args.item
      })
    }
  }


}
