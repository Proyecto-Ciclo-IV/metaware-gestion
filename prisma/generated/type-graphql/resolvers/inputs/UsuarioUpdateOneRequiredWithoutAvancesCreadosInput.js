"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAvancesCreadosInput");
const UsuarioCreateWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateWithoutAvancesCreadosInput");
const UsuarioUpdateWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioUpdateWithoutAvancesCreadosInput");
const UsuarioUpsertWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioUpsertWithoutAvancesCreadosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutAvancesCreadosInput = class UsuarioUpdateOneRequiredWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput)
], UsuarioUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvancesCreadosInput_1.UsuarioCreateOrConnectWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutAvancesCreadosInput_1.UsuarioCreateOrConnectWithoutAvancesCreadosInput)
], UsuarioUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutAvancesCreadosInput_1.UsuarioUpsertWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpsertWithoutAvancesCreadosInput_1.UsuarioUpsertWithoutAvancesCreadosInput)
], UsuarioUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvancesCreadosInput_1.UsuarioUpdateWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutAvancesCreadosInput_1.UsuarioUpdateWithoutAvancesCreadosInput)
], UsuarioUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutAvancesCreadosInput);
exports.UsuarioUpdateOneRequiredWithoutAvancesCreadosInput = UsuarioUpdateOneRequiredWithoutAvancesCreadosInput;
