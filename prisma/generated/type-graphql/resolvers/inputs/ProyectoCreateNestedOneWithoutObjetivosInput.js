"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateNestedOneWithoutObjetivosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateOrConnectWithoutObjetivosInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutObjetivosInput");
const ProyectoCreateWithoutObjetivosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateNestedOneWithoutObjetivosInput = class ProyectoCreateNestedOneWithoutObjetivosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput)
], ProyectoCreateNestedOneWithoutObjetivosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutObjetivosInput_1.ProyectoCreateOrConnectWithoutObjetivosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateOrConnectWithoutObjetivosInput_1.ProyectoCreateOrConnectWithoutObjetivosInput)
], ProyectoCreateNestedOneWithoutObjetivosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateNestedOneWithoutObjetivosInput.prototype, "connect", void 0);
ProyectoCreateNestedOneWithoutObjetivosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateNestedOneWithoutObjetivosInput", {
        isAbstract: true
    })
], ProyectoCreateNestedOneWithoutObjetivosInput);
exports.ProyectoCreateNestedOneWithoutObjetivosInput = ProyectoCreateNestedOneWithoutObjetivosInput;
