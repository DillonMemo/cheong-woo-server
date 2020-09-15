import { Resolvers } from '../../../types/resolvers';
import { SayHelloQueryArgs, SayHelloResponse } from '../../../types/graphql';

const resolvers: Resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}`,
      };
    },
  },
};

export default resolvers;
