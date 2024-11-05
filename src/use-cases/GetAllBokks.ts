import { BookRepository } from "../domain/interfaces/BookRepository";

export class GetallBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute() {
    return this.bookRepository.findAll();
  }
}
