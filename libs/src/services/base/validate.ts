export class ValidateResult {
  constructor(public readonly errors?: ErrorItem[]) {}
}

export class ErrorItem {
  constructor(
    public readonly field: string,
    public readonly messages: string[]
  ) {}
}
