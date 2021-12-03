"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateInscripcionArgs_1 = require("./args/CreateInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let CreateInscripcionResolver = class CreateInscripcionResolver {
    async createInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.create({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateInscripcionArgs_1.CreateInscripcionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateInscripcionResolver.prototype, "createInscripcion", null);
CreateInscripcionResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], CreateInscripcionResolver);
exports.CreateInscripcionResolver = CreateInscripcionResolver;
