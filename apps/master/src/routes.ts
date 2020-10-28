export interface IoniaMenuRoute {
    path: string;
    name: string;
    children?: IoniaMenuRoute[];
}

const routesMap: Record<string, IoniaMenuRoute[]> = {
    'cms': [
        { path: '/', name: '内容列表' },
        {
            path: '/category',
            name: '内容分类',
        }
    ],
    'shop': [
        { path: '/', name: '商品列表' },
        {
            path: '/category',
            name: '商品分类',
        }
    ]
};

export default routesMap;
