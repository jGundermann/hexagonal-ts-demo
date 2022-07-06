export interface IRepository<T> {
    get(id: string): Promise<T>;
    find(item: Partial<T>): Promise<T[]>;
    create(item: Partial<T>): Promise<string>;
    update(item: T): Promise<boolean>;
}
