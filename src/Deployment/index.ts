export class Deployment {

  auth: any

  player: any

  constructor(identifier: string) {


    this.player = "config[key].player"
    this.auth = "config[key].auth"
  }
}
