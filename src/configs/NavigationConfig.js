import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH ,AUTH_PREFIX_PATH} from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'main',
    title: 'Основные',
    breadcrumb: false,
    path: `${APP_PREFIX_PATH}/main`,
    submenu: [
      {
        key: 'main-dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-catalog-productList',
            path: `${APP_PREFIX_PATH}/main/catalog/product-list`,
            title: 'Товары',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'Категории',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-catalog-collection',
            path: `${APP_PREFIX_PATH}/main/catalog/collection`,
            title: 'Коллекции',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-catalog-combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'Комбо',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'Клиенты',
        icon: UserOutlined ,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-clients-list',
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            title: 'Список клиентов',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-clients-groups',
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            title: 'Группы клиентов',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ]
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'Баннеры',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-promo-codes',
        path: `${APP_PREFIX_PATH}/main/promo-codes`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-offline-dots',
        path: `${APP_PREFIX_PATH}/main/offline-dots`,
        title: 'Оффлайн точки',
        icon: ShopOutlined ,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-offline-dots-address',
            path: `${APP_PREFIX_PATH}/main/offline-dots/address`,
            title: 'Адреса',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-offline-dots-geofences',
            path: `${APP_PREFIX_PATH}/main/clients/geofences`,
            title: 'Геозоны',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ]
      },
      {
        key: 'main-employees',
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: 'Сотрудники',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-mailin-lists',
        path: `${APP_PREFIX_PATH}/main/mailin-lists`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ]
  },
  {
    key: 'systemic',
    path: `${APP_PREFIX_PATH}/systemic`,
    title: 'Системные',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'systemic-userDetails',
        path: `${APP_PREFIX_PATH}/systemic/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'systemic-mobile-app',
        path: `${APP_PREFIX_PATH}/systemic/mobile-app`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'systemic-logs',
        path: `${APP_PREFIX_PATH}/systemic/logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  },
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
