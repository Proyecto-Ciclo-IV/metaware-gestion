"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateInscripcionArgs_1 = require("./args/AggregateInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const AggregateInscripcion_1 = require("../../outputs/AggregateInscripcion");
const helpers_1 = require("../../../helpers");
let AggregateInscripcionResolver = class AggregateInscripcionResolver {
    async aggregateInscripcion(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateInscripcion_1.AggregateInscripcion, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateInscripcionArgs_1.AggregateInscripcionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateInscripcionResolver.prototype, "aggregateInscripcion", null);
AggregateInscripcionResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], AggregateInscripcionResolver);
exports.AggregateInscripcionResolver = AggregateInscripcionResolver;
