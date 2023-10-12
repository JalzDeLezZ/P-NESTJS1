import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ProductsModule } from 'src/products/products.module';
import { OrdersController } from './controllers/order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './entities/customer.entity';
import { User, UserSchema } from './entities/user.entity';
import { Order, OrderSchema } from './entities/order.entity';
import { OrdersService } from './services/order.service';
import { ProfileController } from './controllers/profile.controller';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  controllers: [
    CustomerController,
    UsersController,
    OrdersController,
    ProfileController,
  ],
  providers: [CustomersService, UsersService, OrdersService],
  exports: [UsersService],
})
export class UsersModule {}
