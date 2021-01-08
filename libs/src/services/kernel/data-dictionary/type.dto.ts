export interface DataDictionaryTypeDTO {
    name: string; // 字典名称
    remake: string; // 备注
    type: string; // 字典类型
    id?: number; // id(新建不传,修改必传)
}