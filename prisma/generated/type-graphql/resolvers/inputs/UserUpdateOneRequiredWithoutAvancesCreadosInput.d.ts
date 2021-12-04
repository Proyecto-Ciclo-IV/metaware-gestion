import { UserCreateOrConnectWithoutAvancesCreadosInput } from "../inputs/UserCreateOrConnectWithoutAvancesCreadosInput";
import { UserCreateWithoutAvancesCreadosInput } from "../inputs/UserCreateWithoutAvancesCreadosInput";
import { UserUpdateWithoutAvancesCreadosInput } from "../inputs/UserUpdateWithoutAvancesCreadosInput";
import { UserUpsertWithoutAvancesCreadosInput } from "../inputs/UserUpsertWithoutAvancesCreadosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAvancesCreadosInput {
    create?: UserCreateWithoutAvancesCreadosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAvancesCreadosInput | undefined;
    upsert?: UserUpsertWithoutAvancesCreadosInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAvancesCreadosInput | undefined;
}
