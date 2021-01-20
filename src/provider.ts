import { RESTDataSource } from 'apollo-datasource-rest';

export class ChuckNorrisDataSource extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = `https://api.chucknorris.io/jokes/`;
    }

    async getCategories(){
        const resp = await this.get(`categories`);
        return resp;
    }

    async getRandomJoke(category : string){
        const resp = await this.get(`random?category=${category}`);
        return resp;
    }
}

