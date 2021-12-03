"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateManyProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AvanceCreateManyProyectoInput = class AvanceCreateManyProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AvanceCreateManyProyectoInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "userId", void 0);
AvanceCreateManyProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateManyProyectoInput", {
        isAbstract: true
    })
], AvanceCreateManyProyectoInput);
exports.AvanceCreateManyProyectoInput = AvanceCreateManyProyectoInput;
