"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutSessionsInput_1 = require("../inputs/UsuarioCreateWithoutSessionsInput");
const UsuarioUpdateWithoutSessionsInput_1 = require("../inputs/UsuarioUpdateWithoutSessionsInput");
let UsuarioUpsertWithoutSessionsInput = class UsuarioUpsertWithoutSessionsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutSessionsInput_1.UsuarioUpdateWithoutSessionsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutSessionsInput_1.UsuarioUpdateWithoutSessionsInput)
], UsuarioUpsertWithoutSessionsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput)
], UsuarioUpsertWithoutSessionsInput.prototype, "create", void 0);
UsuarioUpsertWithoutSessionsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpsertWithoutSessionsInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutSessionsInput);
exports.UsuarioUpsertWithoutSessionsInput = UsuarioUpsertWithoutSessionsInput;
