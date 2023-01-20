import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module'
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI),
  ProductsModule,
  CartModule,
  UserModule,
  AuthModule,
  ],
})
export class AppModule {}
