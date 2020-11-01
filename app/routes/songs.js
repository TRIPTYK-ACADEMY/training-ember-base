import Route from '@ember/routing/route';

export default class SongsRoute extends Route {
  queryParams = {
    name: {
      refreshModel: true
    },
    rating: {
      refreshModel: true
    }
  }
  
  async model(params){
    const songs = await this.store.findAll('song', { include: "band" })
    return {
      queryName: params.name,
      queryRating: params.rating,
      songs: songs
    }
  }
}
