import { gql, IResolvers } from "apollo-server";

export const typeDefs = gql`
  type Joke {
    categories : [String]
    id : String!
    value: String
  }

  type Query {
    categories : [String]!
    randomJoke(category: String): Joke
  }
`;


export const resolvers : IResolvers = {
    Query: {
            categories: async (_, __, {dataSources}) => 
              await dataSources.chuckNorriesAPI.getCategories()
            ,
            randomJoke : async (_, { category }, {dataSources}) => 
              await dataSources.chuckNorriesAPI.getRandomJoke(category)              
        },
}