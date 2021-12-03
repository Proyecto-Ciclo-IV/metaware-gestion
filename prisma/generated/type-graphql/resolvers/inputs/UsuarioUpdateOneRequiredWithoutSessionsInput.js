"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutSessionsInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutSessionsInput");
const UsuarioCreateWithoutSessionsInput_1 = require("../inputs/UsuarioCreateWithoutSessionsInput");
const UsuarioUpdateWithoutSessionsInput_1 = require("../inputs/UsuarioUpdateWithoutSessionsInput");
const UsuarioUpsertWithoutSessionsInput_1 = require("../inputs/UsuarioUpsertWithoutSessionsInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutSessionsInput = class UsuarioUpdateOneRequiredWithoutSessionsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput)
], UsuarioUpdateOneRequiredWithoutSessionsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutSessionsInput_1.UsuarioCreateOrConnectWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutSessionsInput_1.UsuarioCreateOrConnectWithoutSessionsInput)
], UsuarioUpdateOneRequiredWithoutSessionsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutSessionsInput_1.UsuarioUpsertWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpsertWithoutSessionsInput_1.UsuarioUpsertWithoutSessionsInput)
], UsuarioUpdateOneRequiredWithoutSessionsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutSessionsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutSessionsInput_1.UsuarioUpdateWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutSessionsInput_1.UsuarioUpdateWithoutSessionsInput)
], UsuarioUpdateOneRequiredWithoutSessionsInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutSessionsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutSessionsInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutSessionsInput);
exports.UsuarioUpdateOneRequiredWithoutSessionsInput = UsuarioUpdateOneRequiredWithoutSessionsInput;
