"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoUpdateManyWithWhereWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoScalarWhereInput_1 = require("../inputs/ObjetivoScalarWhereInput");
const ObjetivoUpdateManyMutationInput_1 = require("../inputs/ObjetivoUpdateManyMutationInput");
let ObjetivoUpdateManyWithWhereWithoutProyectoInput = class ObjetivoUpdateManyWithWhereWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoScalarWhereInput_1.ObjetivoScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoScalarWhereInput_1.ObjetivoScalarWhereInput)
], ObjetivoUpdateManyWithWhereWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoUpdateManyMutationInput_1.ObjetivoUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoUpdateManyMutationInput_1.ObjetivoUpdateManyMutationInput)
], ObjetivoUpdateManyWithWhereWithoutProyectoInput.prototype, "data", void 0);
ObjetivoUpdateManyWithWhereWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoUpdateManyWithWhereWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivoUpdateManyWithWhereWithoutProyectoInput);
exports.ObjetivoUpdateManyWithWhereWithoutProyectoInput = ObjetivoUpdateManyWithWhereWithoutProyectoInput;
