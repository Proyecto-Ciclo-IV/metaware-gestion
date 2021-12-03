"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateAvanceArgs_1 = require("./args/UpdateAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let UpdateAvanceResolver = class UpdateAvanceResolver {
    async updateAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateAvanceArgs_1.UpdateAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateAvanceResolver.prototype, "updateAvance", null);
UpdateAvanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], UpdateAvanceResolver);
exports.UpdateAvanceResolver = UpdateAvanceResolver;
