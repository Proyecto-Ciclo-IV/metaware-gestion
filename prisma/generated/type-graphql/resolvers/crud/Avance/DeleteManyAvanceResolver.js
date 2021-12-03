"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteManyAvanceArgs_1 = require("./args/DeleteManyAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyAvanceResolver = class DeleteManyAvanceResolver {
    async deleteManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyAvanceArgs_1.DeleteManyAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteManyAvanceResolver.prototype, "deleteManyAvance", null);
DeleteManyAvanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], DeleteManyAvanceResolver);
exports.DeleteManyAvanceResolver = DeleteManyAvanceResolver;
