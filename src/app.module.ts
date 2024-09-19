import { Module } from '@nestjs/common';
/* import { AppController } from './app.controller';
import { AppService } from './app.service';
 */
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [CategoriasModule, ProductosModule],
 // controllers: [AppController],
 // providers: [AppService],
})
export class AppModule {}
