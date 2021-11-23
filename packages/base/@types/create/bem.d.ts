/**
 * bem命名规则
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export declare type Mod = string | {
    [key: string]: any;
};
export declare type Mods = Mod | Mod[];
/**
 *
 * @description 创建BEM命名空
 * @export
 * @param {string} name
 * @return {*} string
 */
export declare function createBEM(name: string): (el?: Mods | undefined, mods?: Mods | undefined) => Mods;
export declare type BEM = ReturnType<typeof createBEM>;
//# sourceMappingURL=bem.d.ts.map