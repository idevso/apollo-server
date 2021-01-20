import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./resolvers";
import { ChuckNorrisDataSource } from "./provider";

export interface Context {
  dataSources: {
    chuckNorriesAPI: ChuckNorrisDataSource
  };
}

const dataSources = (): Context['dataSources'] => {
  return {
    chuckNorriesAPI: new ChuckNorrisDataSource()
  };
};


const apolloServer : ApolloServer = new ApolloServer({
  typeDefs, 
  resolvers,
  dataSources
});

apolloServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});