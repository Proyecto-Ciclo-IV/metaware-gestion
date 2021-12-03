"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateNestedOneWithoutAvancesInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutAvancesInput");
let AvanceCreateWithoutCreadoPorInput = class AvanceCreateWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateWithoutCreadoPorInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AvanceCreateWithoutCreadoPorInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateWithoutCreadoPorInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateWithoutCreadoPorInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput)
], AvanceCreateWithoutCreadoPorInput.prototype, "proyecto", void 0);
AvanceCreateWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceCreateWithoutCreadoPorInput);
exports.AvanceCreateWithoutCreadoPorInput = AvanceCreateWithoutCreadoPorInput;
