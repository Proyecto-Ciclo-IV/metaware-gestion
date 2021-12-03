"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertInscripcionArgs_1 = require("./args/UpsertInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let UpsertInscripcionResolver = class UpsertInscripcionResolver {
    async upsertInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertInscripcionArgs_1.UpsertInscripcionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertInscripcionResolver.prototype, "upsertInscripcion", null);
UpsertInscripcionResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], UpsertInscripcionResolver);
exports.UpsertInscripcionResolver = UpsertInscripcionResolver;
