import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
import { Role } from 'src/auth/models/roles.model';
import { OrdersService } from '../services/order.service';
import { ApiTags } from '@nestjs/swagger';
import { TokenPayload } from 'src/auth/models/token.model';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private orderService: OrdersService) {}

  @Roles(Role.CUSTOMER)
  @Get('my-orders')
  getOrders(@CurrentUser() user: TokenPayload) {
    return this.orderService.findOrdersByUser(user.identity);
  }
}
