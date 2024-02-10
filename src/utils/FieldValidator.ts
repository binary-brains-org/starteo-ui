class FieldValidator {
  public static isEmail(value: string): boolean {
    if (value === null || value === undefined || value.trim().length === 0)
      return false;
    return !!value.match(/(.*)@(.*)\.[a-z]+/g);
  }
}

export default FieldValidator;
