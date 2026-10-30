import { describe, expect, it } from 'vitest';
import { extractUrls } from './extract-urls.js';

describe('extractUrls', () => {
  it('duz URL bulur', () => {
    expect(extractUrls('Canli surum: https://example.com/app burada.')).toEqual([
      'https://example.com/app',
    ]);
  });

  it('[metin](url) icinden URL alir', () => {
    expect(extractUrls('[Kisisel sayfa](https://example.com/me)')).toEqual([
      'https://example.com/me',
    ]);
  });

  it('ayni satirdaki birden cok linki bulur', () => {
    expect(extractUrls('[a](https://a.com) · https://b.com · [c](http://c.com/x)')).toEqual([
      'https://a.com',
      'https://b.com',
      'http://c.com/x',
    ]);
  });

  it('linksiz metinde bos liste doner', () => {
    expect(extractUrls('Burada hic link yok, sadece yazi var.')).toEqual([]);
  });

  it('sondaki noktalamayi URL saymaz', () => {
    expect(extractUrls('Bak: https://example.com/a. Ya da (https://example.com/b), tamam.')).toEqual([
      'https://example.com/a',
      'https://example.com/b',
    ]);
  });

  it('mailto ve goreli linkleri almaz', () => {
    expect(extractUrls('[mail](mailto:a@b.com) ve ![gorsel](docs/a.png)')).toEqual([]);
  });
});
