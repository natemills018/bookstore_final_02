import { SelectQuery, ModifyQuery } from "../../queryUtils";
import { Category } from "../../types";


export function getAll() {
    return SelectQuery<Category>('SELECT * FROM categories')
}