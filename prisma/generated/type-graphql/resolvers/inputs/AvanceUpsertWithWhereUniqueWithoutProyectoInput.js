"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpsertWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateWithoutProyectoInput_1 = require("../inputs/AvanceCreateWithoutProyectoInput");
const AvanceUpdateWithoutProyectoInput_1 = require("../inputs/AvanceUpdateWithoutProyectoInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpsertWithWhereUniqueWithoutProyectoInput = class AvanceUpsertWithWhereUniqueWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceUpsertWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateWithoutProyectoInput_1.AvanceUpdateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateWithoutProyectoInput_1.AvanceUpdateWithoutProyectoInput)
], AvanceUpsertWithWhereUniqueWithoutProyectoInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateWithoutProyectoInput_1.AvanceCreateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateWithoutProyectoInput_1.AvanceCreateWithoutProyectoInput)
], AvanceUpsertWithWhereUniqueWithoutProyectoInput.prototype, "create", void 0);
AvanceUpsertWithWhereUniqueWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpsertWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceUpsertWithWhereUniqueWithoutProyectoInput);
exports.AvanceUpsertWithWhereUniqueWithoutProyectoInput = AvanceUpsertWithWhereUniqueWithoutProyectoInput;
