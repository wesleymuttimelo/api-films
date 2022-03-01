interface ICreateFilmRepositoryDTO {
    title: string;
    director: string;
}

interface IFilmRepository {
    create({ title, director }: ICreateFilmRepositoryDTO): void;
}

export { ICreateFilmRepositoryDTO, IFilmRepository };
