export default class Medicines {
  #id: string
  #order: number
  #product: string
  #description: string
  constructor(order: number, product: string, description: string, id = '') {
    this.#order = order
    this.#product = product
    this.#description = description
    this.#id = id
  }
  static vazio() {
    return new Medicines(0, '', '')
  }
  get id() {
    return this.#id
  }
  get order() {
    return this.#order
  }
  get product() {
    return this.#product
  }
  get description() {
    return this.#description
  }
}
