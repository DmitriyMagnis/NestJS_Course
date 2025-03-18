import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}
  getData() {
    console.log('DiskService doing something');
    this.powerService.supplyPower(20);
    return 'data';
  }
}
