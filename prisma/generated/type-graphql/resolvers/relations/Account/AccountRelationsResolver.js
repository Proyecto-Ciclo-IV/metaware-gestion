"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let AccountRelationsResolver = class AccountRelationsResolver {
    async usuario(account, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findUnique({
            where: {
                id: account.id,
            },
        }).usuario({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Usuario_1.Usuario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Account_1.Account, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountRelationsResolver.prototype, "usuario", null);
AccountRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], AccountRelationsResolver);
exports.AccountRelationsResolver = AccountRelationsResolver;
