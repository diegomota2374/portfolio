export default class Cid {
  #id: string
  #cid: string
  #description: string
  #specialty: string

  constructor(cid: string, description: string, especialty: string, id = '') {
    this.#cid = cid
    this.#description = description
    this.#specialty = especialty
    this.#id = id
  }
  static vazio() {
    return new Cid('', '', '')
  }

  get id() {
    return this.#id
  }
  get cid() {
    return this.#cid
  }
  get description() {
    return this.#description
  }
  get specialty() {
    return this.#specialty
  }
}
