"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpsertWithoutObjetivosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateWithoutObjetivosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosInput");
const ProyectoUpdateWithoutObjetivosInput_1 = require("../inputs/ProyectoUpdateWithoutObjetivosInput");
let ProyectoUpsertWithoutObjetivosInput = class ProyectoUpsertWithoutObjetivosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutObjetivosInput_1.ProyectoUpdateWithoutObjetivosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateWithoutObjetivosInput_1.ProyectoUpdateWithoutObjetivosInput)
], ProyectoUpsertWithoutObjetivosInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput)
], ProyectoUpsertWithoutObjetivosInput.prototype, "create", void 0);
ProyectoUpsertWithoutObjetivosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoUpsertWithoutObjetivosInput", {
        isAbstract: true
    })
], ProyectoUpsertWithoutObjetivosInput);
exports.ProyectoUpsertWithoutObjetivosInput = ProyectoUpsertWithoutObjetivosInput;
