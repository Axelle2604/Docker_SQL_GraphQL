const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');

const { getUsers, getUserById } = require('./users');
const { getPartyById, getParties, createParty } = require('./parties');
const { getScores } = require('./scores');
const { createUsersParty, getUsersParties } = require('./usersparties');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
  }),
});

const PartyType = new GraphQLObjectType({
  name: 'Party',
  fields: () => ({
    id: { type: GraphQLID },
    isfinish: { type: GraphQLBoolean },
  }),
});

const UserPartyType = new GraphQLObjectType({
  name: 'UserParty',
  fields: () => ({
    id: { type: GraphQLID },
    userid: { type: GraphQLInt },
    partyid: { type: GraphQLInt },
  }),
});

const ScoreType = new GraphQLObjectType({
  name: 'Score',
  fields: () => ({
    id: { type: GraphQLID },
    score: { type: GraphQLInt },
    userid: { type: GraphQLInt },
    partyid: { type: GraphQLInt },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: () => getUsers(),
    },
    parties: {
      type: new GraphQLList(PartyType),
      resolve: () => getParties(),
    },
    scores: {
      type: new GraphQLList(ScoreType),
      resolve: () => getScores(),
    },
    users_parties: {
      type: new GraphQLList(UserPartyType),
      resolve: async () => {
        return await getUsersParties();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createParty: {
      type: PartyType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async () => await createParty(),
    },
    createUserParty: {
      type: new GraphQLList(UserPartyType),
      args: {
        usersId: { type: new GraphQLList(GraphQLInt) },
        partyId: { type: GraphQLInt },
      },
      resolve: async (parent, { usersId, partyId }) => {
        return await createUsersParty(usersId, partyId);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation,
});
