import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { quotes, IQuoteDialog, IQuoteItem } from '@quote-lib/main';

class QuoteItem implements IQuoteItem {
  @ApiProperty({ required: false })
  character?: string;

  @ApiProperty()
  text: string;
}

export class QuoteDialogDto implements IQuoteDialog {
  @ApiProperty()
  show: string;

  @ApiProperty({
    type: [QuoteItem],
  })
  items: Array<QuoteItem>;
}

@Injectable()
export class AppService {
  getQuoteList(): Array<string> {
    return Object.keys(quotes);
  }

  getQuoteDialog(id: string): IQuoteDialog | null {
    return quotes[id] || null;
  }
}
