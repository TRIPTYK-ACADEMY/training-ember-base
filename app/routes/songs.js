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
  
  model(params){
    const songs = this.store.findAll('song', { include: "band" })
    return {
      query: params.name,
      songs
    }
  }
}
