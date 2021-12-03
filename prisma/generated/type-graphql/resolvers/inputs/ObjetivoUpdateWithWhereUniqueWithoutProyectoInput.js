"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoUpdateWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoUpdateWithoutProyectoInput_1 = require("../inputs/ObjetivoUpdateWithoutProyectoInput");
const ObjetivoWhereUniqueInput_1 = require("../inputs/ObjetivoWhereUniqueInput");
let ObjetivoUpdateWithWhereUniqueWithoutProyectoInput = class ObjetivoUpdateWithWhereUniqueWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], ObjetivoUpdateWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoUpdateWithoutProyectoInput_1.ObjetivoUpdateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoUpdateWithoutProyectoInput_1.ObjetivoUpdateWithoutProyectoInput)
], ObjetivoUpdateWithWhereUniqueWithoutProyectoInput.prototype, "data", void 0);
ObjetivoUpdateWithWhereUniqueWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoUpdateWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivoUpdateWithWhereUniqueWithoutProyectoInput);
exports.ObjetivoUpdateWithWhereUniqueWithoutProyectoInput = ObjetivoUpdateWithWhereUniqueWithoutProyectoInput;
