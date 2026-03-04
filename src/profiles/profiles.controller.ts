import { Controller, Get, Query } from '@nestjs/common';

@Controller('profiles') //decorator
export class ProfilesController {
  // GET
  @Get()
  findAll(@Query('age') age: number) {
    return [{ age }];
  }
}
