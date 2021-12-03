"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoUpsertWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateWithoutProyectoInput");
const ObjetivoUpdateWithoutProyectoInput_1 = require("../inputs/ObjetivoUpdateWithoutProyectoInput");
const ObjetivoWhereUniqueInput_1 = require("../inputs/ObjetivoWhereUniqueInput");
let ObjetivoUpsertWithWhereUniqueWithoutProyectoInput = class ObjetivoUpsertWithWhereUniqueWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], ObjetivoUpsertWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoUpdateWithoutProyectoInput_1.ObjetivoUpdateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoUpdateWithoutProyectoInput_1.ObjetivoUpdateWithoutProyectoInput)
], ObjetivoUpsertWithWhereUniqueWithoutProyectoInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateWithoutProyectoInput_1.ObjetivoCreateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateWithoutProyectoInput_1.ObjetivoCreateWithoutProyectoInput)
], ObjetivoUpsertWithWhereUniqueWithoutProyectoInput.prototype, "create", void 0);
ObjetivoUpsertWithWhereUniqueWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoUpsertWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivoUpsertWithWhereUniqueWithoutProyectoInput);
exports.ObjetivoUpsertWithWhereUniqueWithoutProyectoInput = ObjetivoUpsertWithWhereUniqueWithoutProyectoInput;
