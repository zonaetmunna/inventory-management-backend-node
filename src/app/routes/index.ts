import express from 'express';
import { BrandRoutes } from '../modules/brand/brand.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { CustomerRoutes } from '../modules/customer/customer.route';
import { ProductRoutes } from '../modules/product/product.route';
import { PurchaseRoutes } from '../modules/purchase/purchase.route';
import { SupplierRoutes } from '../modules/supplier/supplier.route';
import { UnitRoutes } from '../modules/unit/unit.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/brands',
    route: BrandRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/purchases',
    route: PurchaseRoutes,
  },
  {
    path: '/suppliers',
    route: SupplierRoutes,
  },
  {
    path: '/units',
    route: UnitRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
