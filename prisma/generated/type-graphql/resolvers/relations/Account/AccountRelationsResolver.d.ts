import { Account } from "../../../models/Account";
import { Usuario } from "../../../models/Usuario";
export declare class AccountRelationsResolver {
    usuario(account: Account, ctx: any): Promise<Usuario>;
}
