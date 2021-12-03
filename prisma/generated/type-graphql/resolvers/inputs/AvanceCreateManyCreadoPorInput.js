"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateManyCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AvanceCreateManyCreadoPorInput = class AvanceCreateManyCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyCreadoPorInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AvanceCreateManyCreadoPorInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyCreadoPorInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyCreadoPorInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyCreadoPorInput.prototype, "proyectoId", void 0);
AvanceCreateManyCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateManyCreadoPorInput", {
        isAbstract: true
    })
], AvanceCreateManyCreadoPorInput);
exports.AvanceCreateManyCreadoPorInput = AvanceCreateManyCreadoPorInput;
