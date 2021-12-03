"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ObjetivoWhereUniqueInput = class ObjetivoWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoWhereUniqueInput.prototype, "id", void 0);
ObjetivoWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoWhereUniqueInput", {
        isAbstract: true
    })
], ObjetivoWhereUniqueInput);
exports.ObjetivoWhereUniqueInput = ObjetivoWhereUniqueInput;
