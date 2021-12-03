"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAccountsInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAccountsInput");
const UsuarioCreateWithoutAccountsInput_1 = require("../inputs/UsuarioCreateWithoutAccountsInput");
const UsuarioUpdateWithoutAccountsInput_1 = require("../inputs/UsuarioUpdateWithoutAccountsInput");
const UsuarioUpsertWithoutAccountsInput_1 = require("../inputs/UsuarioUpsertWithoutAccountsInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutAccountsInput = class UsuarioUpdateOneRequiredWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput)
], UsuarioUpdateOneRequiredWithoutAccountsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAccountsInput_1.UsuarioCreateOrConnectWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutAccountsInput_1.UsuarioCreateOrConnectWithoutAccountsInput)
], UsuarioUpdateOneRequiredWithoutAccountsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutAccountsInput_1.UsuarioUpsertWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpsertWithoutAccountsInput_1.UsuarioUpsertWithoutAccountsInput)
], UsuarioUpdateOneRequiredWithoutAccountsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutAccountsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAccountsInput_1.UsuarioUpdateWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutAccountsInput_1.UsuarioUpdateWithoutAccountsInput)
], UsuarioUpdateOneRequiredWithoutAccountsInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutAccountsInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutAccountsInput);
exports.UsuarioUpdateOneRequiredWithoutAccountsInput = UsuarioUpdateOneRequiredWithoutAccountsInput;
