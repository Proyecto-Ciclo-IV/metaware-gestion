"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCreateOrConnectWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateWithoutProyectoInput");
const ObjetivoWhereUniqueInput_1 = require("../inputs/ObjetivoWhereUniqueInput");
let ObjetivoCreateOrConnectWithoutProyectoInput = class ObjetivoCreateOrConnectWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], ObjetivoCreateOrConnectWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateWithoutProyectoInput_1.ObjetivoCreateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateWithoutProyectoInput_1.ObjetivoCreateWithoutProyectoInput)
], ObjetivoCreateOrConnectWithoutProyectoInput.prototype, "create", void 0);
ObjetivoCreateOrConnectWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoCreateOrConnectWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivoCreateOrConnectWithoutProyectoInput);
exports.ObjetivoCreateOrConnectWithoutProyectoInput = ObjetivoCreateOrConnectWithoutProyectoInput;
