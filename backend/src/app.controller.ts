import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

import { AppService, QuoteDialogDto } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('quotes')
  @ApiOkResponse({
    description: 'List of quotes',
    type: [String],
  })
  getQuoteList() {
    return this.appService.getQuoteList();
  }

  @Get('quote/:id')
  @ApiOkResponse({
    description: 'Get quote by its id',
    type: QuoteDialogDto,
  })
  @ApiNotFoundResponse()
  getQuoteDialog(@Param('id') id: string) {
    const dialog = this.appService.getQuoteDialog(id);

    if (!dialog) {
      throw new NotFoundException(`Quote with id ${id} not found`);
    }

    return dialog;
  }
}
