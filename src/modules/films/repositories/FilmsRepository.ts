import {
    ICreateFilmRepositoryDTO,
    IFilmRepository,
} from "../Interfaces/IFilmRepository";

class FilmsRepository implements IFilmRepository {
    create({ title, director }: ICreateFilmRepositoryDTO): void {
        throw new Error("Method not implemented.");
    }
}

export { FilmsRepository };
