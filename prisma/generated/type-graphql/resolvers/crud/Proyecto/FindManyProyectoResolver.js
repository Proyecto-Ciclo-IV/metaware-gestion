"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyProyectoArgs_1 = require("./args/FindManyProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let FindManyProyectoResolver = class FindManyProyectoResolver {
    async proyectos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Proyecto_1.Proyecto], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProyectoArgs_1.FindManyProyectoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyProyectoResolver.prototype, "proyectos", null);
FindManyProyectoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], FindManyProyectoResolver);
exports.FindManyProyectoResolver = FindManyProyectoResolver;
