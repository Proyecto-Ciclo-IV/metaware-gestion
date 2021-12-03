"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AvanceWhereUniqueInput = class AvanceWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceWhereUniqueInput.prototype, "id", void 0);
AvanceWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceWhereUniqueInput", {
        isAbstract: true
    })
], AvanceWhereUniqueInput);
exports.AvanceWhereUniqueInput = AvanceWhereUniqueInput;
