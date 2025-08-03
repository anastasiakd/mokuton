import type {CatalogItem} from '#shared/types/CatalogItem';

export default defineEventHandler(async () : Promise<CatalogItem[]> => ([
    {
        id: '1',
        name: 'Детская кроватка-вигвам', //TODO добавить на разных языках
        price: 25000, //TODO добавить в разных валютах
        icon: 'http://localhost:3000/_nuxt/assets/images/external/001.jpg',
    },
    {
        id: '2',
        name: 'Письменный стол MokuTable.1',
        price: 15000,
        icon: 'http://localhost:3000/_nuxt/assets/images/external/002.jpg',
    },
    {
        id: '3',
        name: 'Тумба с 2 ящиками',
        price: 6900,
        icon: 'http://localhost:3000/_nuxt/assets/images/external/003.jpg',
    },
    {
        id: '4',
        name: 'Шкафик для ванной комнаты',
        price: 15000,
        icon: 'http://localhost:3000/_nuxt/assets/images/external/004.jpg',
    },
    {
        id: '5',
        name: 'Шкафик для ванной комнаты',
        price: 15000,
        icon: 'http://localhost:3000/_nuxt/assets/images/external/005.jpg',
    },
]));