export class HotelSearch {
  constructor(
    public place:    string,
    public checkin:  Date,
    public checkout: Date
  ) {}

  public static initByStoredSettings() {
    const _3days = 3 * 24 * 60 * 60 * 1000;
    return new HotelSearch(
      'Praha',
      new Date(),
      new Date(Date.now() + _3days)
    );
  }

  getCheckinString() {
    return this.dateToISOString(this.checkin);
  }

  getCheckoutString() {
    return this.dateToISOString(this.checkout);
  }

  /**
   * to adjust date to stirng which is
   * required by <input type="datetime-local">
   */
  private dateToISOString(date: Date|string): string {
    const _d: Date = (typeof date == 'string') ? new Date(date) : date;
    return _d.toISOString().slice(0, 16);
  }

  validate(): Object[] {
    let errors: Object[] = [];
    const checkin: Date = (typeof this.checkin  == 'string') ? new Date(this.checkin)  : this.checkin;
    const checkout:Date = (typeof this.checkout == 'string') ? new Date(this.checkout) : this.checkout;
    if (checkout.getTime() < checkin.getTime() + 100) {
      errors.push({ label: 'date', message: 'invalid datetime range'});
    }
    if (!this.place) {
      errors.push({ label: 'place', message: 'missing'});
    }
    return errors;
  }

  toParams(): Object {
    return {
      q:    this.place,
      check_in:  this.getCheckinString(),
      check_out: this.getCheckoutString()
    };
  }
}
