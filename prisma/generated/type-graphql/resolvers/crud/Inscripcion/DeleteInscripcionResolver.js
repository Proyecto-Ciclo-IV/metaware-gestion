"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteInscripcionArgs_1 = require("./args/DeleteInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let DeleteInscripcionResolver = class DeleteInscripcionResolver {
    async deleteInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteInscripcionArgs_1.DeleteInscripcionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteInscripcionResolver.prototype, "deleteInscripcion", null);
DeleteInscripcionResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], DeleteInscripcionResolver);
exports.DeleteInscripcionResolver = DeleteInscripcionResolver;
