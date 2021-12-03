"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateNestedOneWithoutAvancesInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutAvancesInput");
const UsuarioCreateNestedOneWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutAvancesCreadosInput");
let AvanceCreateInput = class AvanceCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AvanceCreateInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput)
], AvanceCreateInput.prototype, "proyecto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutAvancesCreadosInput_1.UsuarioCreateNestedOneWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateNestedOneWithoutAvancesCreadosInput_1.UsuarioCreateNestedOneWithoutAvancesCreadosInput)
], AvanceCreateInput.prototype, "creadoPor", void 0);
AvanceCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateInput", {
        isAbstract: true
    })
], AvanceCreateInput);
exports.AvanceCreateInput = AvanceCreateInput;
