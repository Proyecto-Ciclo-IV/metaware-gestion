"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateManyWithWhereWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionScalarWhereInput_1 = require("../inputs/SessionScalarWhereInput");
const SessionUpdateManyMutationInput_1 = require("../inputs/SessionUpdateManyMutationInput");
let SessionUpdateManyWithWhereWithoutUsuarioInput = class SessionUpdateManyWithWhereWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionScalarWhereInput_1.SessionScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionScalarWhereInput_1.SessionScalarWhereInput)
], SessionUpdateManyWithWhereWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateManyMutationInput_1.SessionUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateManyMutationInput_1.SessionUpdateManyMutationInput)
], SessionUpdateManyWithWhereWithoutUsuarioInput.prototype, "data", void 0);
SessionUpdateManyWithWhereWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionUpdateManyWithWhereWithoutUsuarioInput", {
        isAbstract: true
    })
], SessionUpdateManyWithWhereWithoutUsuarioInput);
exports.SessionUpdateManyWithWhereWithoutUsuarioInput = SessionUpdateManyWithWhereWithoutUsuarioInput;
