"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateWithoutAvancesCreadosInput");
const UsuarioUpdateWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioUpdateWithoutAvancesCreadosInput");
let UsuarioUpsertWithoutAvancesCreadosInput = class UsuarioUpsertWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvancesCreadosInput_1.UsuarioUpdateWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutAvancesCreadosInput_1.UsuarioUpdateWithoutAvancesCreadosInput)
], UsuarioUpsertWithoutAvancesCreadosInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput)
], UsuarioUpsertWithoutAvancesCreadosInput.prototype, "create", void 0);
UsuarioUpsertWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpsertWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutAvancesCreadosInput);
exports.UsuarioUpsertWithoutAvancesCreadosInput = UsuarioUpsertWithoutAvancesCreadosInput;
