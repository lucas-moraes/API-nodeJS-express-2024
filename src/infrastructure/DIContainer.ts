import { BookRepository } from "../domain/interfaces/BookRepository";
import { GetAllBooks } from "../use-cases/GetAllBokks";
import { MongoBookRepository } from "./repositories/MongoBookRepository";

export class DIContainer {
  private static _bookRepository: BookRepository = new MongoBookRepository();

  static getBookRepository(): BookRepository {
    return this._bookRepository;
  }

  static getGetAllBooksUseCase(): GetAllBooks {
    return new GetAllBooks(this.getBookRepository());
  }
}
