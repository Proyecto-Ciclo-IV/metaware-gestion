"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateObjetivoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateObjetivoArgs_1 = require("./args/CreateObjetivoArgs");
const Objetivo_1 = require("../../../models/Objetivo");
const helpers_1 = require("../../../helpers");
let CreateObjetivoResolver = class CreateObjetivoResolver {
    async createObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Objetivo_1.Objetivo, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateObjetivoArgs_1.CreateObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateObjetivoResolver.prototype, "createObjetivo", null);
CreateObjetivoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Objetivo_1.Objetivo)
], CreateObjetivoResolver);
exports.CreateObjetivoResolver = CreateObjetivoResolver;
