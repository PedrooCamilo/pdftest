  import { Controller, Get, Res } from '@nestjs/common';
  import { Response } from 'express';
  import { join } from 'path';
  import { createReadStream } from 'fs';

  @Controller()
  export class AppController {
    @Get('download')
    downloadPDF(@Res() res: Response) {
      // src/app.controller.ts
      const filePath = join(__dirname, '..', 'public', 'pdfs', 'arquivo.pdf');
      const fileStream = createReadStream(filePath);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=arquivo.pdf',
      });

      fileStream.pipe(res);
    }
  }
