import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface'

@Injectable()
export class ProductService {}
