export enum Capability {
  ADMIN_READ = 'admin:read',
  ADMIN_INVITE = 'admin:invite',
  ADMIN_UPDATE = 'admin:update',
  ADMIN_DELETE = 'admin:delete',

  CONTENT_MANAGER_READ = 'content-manager:read',
  CONTENT_MANAGER_INVITE = 'content-manager:invite',
  CONTENT_MANAGER_UPDATE = 'content-manager:update',
  CONTENT_MANAGER_DELETE = 'content-manager:delete',

  ORDER_MANAGER_READ = 'order-manager:read',
  ORDER_MANAGER_INVITE = 'order-manager:invite',
  ORDER_MANAGER_UPDATE = 'order-manager:update',
  ORDER_MANAGER_DELETE = 'order-manager:delete',

  PRODUCT_READ = 'product:read',
  PRODUCT_CREATE = 'product:create',
  PRODUCT_UPDATE = 'product:update',
  PRODUCT_DELETE = 'product:delete',

  CATEGORY_READ = 'category:read',
  CATEGORY_CREATE = 'category:create',
  CATEGORY_UPDATE = 'category:update',
  CATEGORY_DELETE = 'category:delete',

  ORDER_READ = 'order:read',
  ORDER_CONFIRM = 'order:confirm',
  ORDER_PROCESS = 'order:process',
  ORDER_MARK_READY = 'order:mark-ready',
  ORDER_COMPLETE = 'order:complete',
  ORDER_CANCEL = 'order:cancel',

  ORDER_CREATE = 'order:create',
  ORDER_READ_OWN = 'order:read-own',
  ORDER_CANCEL_OWN = 'order:cancel-own',

  CART_CREATE = 'cart:create',
  CART_READ_OWN = 'cart:read-own',
  CART_UPDATE_OWN = 'cart:update-own',
}
