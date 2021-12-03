"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueInscripcionArgs_1 = require("./args/FindUniqueInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let FindUniqueInscripcionResolver = class FindUniqueInscripcionResolver {
    async inscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueInscripcionArgs_1.FindUniqueInscripcionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueInscripcionResolver.prototype, "inscripcion", null);
FindUniqueInscripcionResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], FindUniqueInscripcionResolver);
exports.FindUniqueInscripcionResolver = FindUniqueInscripcionResolver;
