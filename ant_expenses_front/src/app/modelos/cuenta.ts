export class Cueta {
  _id?: string;
  TipoCuentaId: string;
  Balance: number;
  Descripcion: string;

  constructor(TipoCuentaId: string, Balance: number, Descripcion: string) {
    this.TipoCuentaId = TipoCuentaId;
    this.Balance = Balance;
    this.Descripcion = Descripcion;
  }
}
