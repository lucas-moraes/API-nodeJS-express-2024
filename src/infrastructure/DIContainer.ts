import { BookRepository } from "../domain/interfaces/BookRepository";
import { GetAllBooks } from "../use-cases/GetAllBokks";
import { InMemoryBookRepository } from "./repositories/InMemoryBookRepository";

export class DIContainer {
  private static _bookRepository: BookRepository = new InMemoryBookRepository();

  static getBookRepository(): BookRepository {
    return this._bookRepository;
  }

  static getGetAllBooksUseCase(): GetAllBooks {
    return new GetAllBooks(this.getBookRepository());
  }
}
