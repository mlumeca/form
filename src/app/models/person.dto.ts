export class PersonDto {
    constructor(
      public name: string,
      public surnames: string,
      public nif: number,
      public email: string,
      public phone: string,
      public sex: string,
      public pageKnownBy: string, //buscando en Google, a través de un amigo, por mi profesor
      public password: number,
      public passwordAgain: number,
    ) {}
  }