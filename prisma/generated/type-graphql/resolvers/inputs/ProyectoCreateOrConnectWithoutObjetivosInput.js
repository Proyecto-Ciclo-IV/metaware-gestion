"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateOrConnectWithoutObjetivosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateWithoutObjetivosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateOrConnectWithoutObjetivosInput = class ProyectoCreateOrConnectWithoutObjetivosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateOrConnectWithoutObjetivosInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput)
], ProyectoCreateOrConnectWithoutObjetivosInput.prototype, "create", void 0);
ProyectoCreateOrConnectWithoutObjetivosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutObjetivosInput", {
        isAbstract: true
    })
], ProyectoCreateOrConnectWithoutObjetivosInput);
exports.ProyectoCreateOrConnectWithoutObjetivosInput = ProyectoCreateOrConnectWithoutObjetivosInput;
