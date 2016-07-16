export class HotelSearch {
  constructor(
    public keyword:  string,
    public dateFrom: Date,
    public dateTo:   Date
  ) {}

  public static initByStoredSettings() {
    const _3days = 3 * 24 * 60 * 60 * 1000;
    return new HotelSearch(
      'victoria',
      new Date(),
      new Date(Date.now() + _3days)
    );
  }

  validate(): boolean {
    // TODO: more details
    return (!!this.keyword);
  }
}
