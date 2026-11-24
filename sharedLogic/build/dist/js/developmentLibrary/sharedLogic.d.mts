type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare interface KtSet<out E> /* extends Collection<E> */ {
    asJsReadonlySetView(): ReadonlySet<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtSet": unique symbol;
    };
}
export declare namespace KtSet {
    function fromJsSet<E>(set: ReadonlySet<E>): KtSet<E>;
}
export declare interface KtList<out E> /* extends Collection<E> */ {
    asJsReadonlyArrayView(): ReadonlyArray<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtList": unique symbol;
    };
}
export declare namespace KtList {
    function fromJsArray<E>(array: ReadonlyArray<E>): KtList<E>;
}
export declare interface KtMap<K, out V> {
    asJsReadonlyMapView(): ReadonlyMap<K, V>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMap": unique symbol;
    };
}
export declare namespace KtMap {
    function fromJsMap<K, V>(map: ReadonlyMap<K, V>): KtMap<K, V>;
}
export declare interface KtMutableSet<E> extends KtSet<E>/*, MutableCollection<E> */ {
    asJsSetView(): Set<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableSet": unique symbol;
    } & KtSet<any>["__doNotUseOrImplementIt"];
}
export declare namespace KtMutableSet {
    function fromJsSet<E>(set: ReadonlySet<E>): KtMutableSet<E>;
}
export declare interface KtMutableList<E> extends KtList<E>/*, MutableCollection<E> */ {
    asJsArrayView(): Array<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableList": unique symbol;
    } & KtList<any>["__doNotUseOrImplementIt"];
}
export declare namespace KtMutableList {
    function fromJsArray<E>(array: ReadonlyArray<E>): KtMutableList<E>;
}
export declare interface KtMutableMap<K, V> extends KtMap<K, V> {
    asJsMapView(): Map<K, V>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableMap": unique symbol;
    } & KtMap<any, any>["__doNotUseOrImplementIt"];
}
export declare namespace KtMutableMap {
    function fromJsMap<K, V>(map: ReadonlyMap<K, V>): KtMutableMap<K, V>;
}
export declare class Triple<out A, out B, out C> /* implements Serializable */ {
    constructor(first: A, second: B, third: C);
    get first(): A;
    get second(): B;
    get third(): C;
    toString(): string;
    copy(first?: A, second?: B, third?: C): Triple<A, B, C>;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace Triple {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new <A, B, C>() => Triple<A, B, C>;
    }
}
export declare class Pair<out A, out B> /* implements Serializable */ {
    constructor(first: A, second: B);
    get first(): A;
    get second(): B;
    toString(): string;
    copy(first?: A, second?: B): Pair<A, B>;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace Pair {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new <A, B>() => Pair<A, B>;
    }
}
/** @deprecated  */
export declare const initHook: {
    get(): any;
};
/** @deprecated  */
export declare const initHook: {
    get(): any;
};
export declare class Greeting {
    constructor();
    greet(): string;
}
export declare namespace Greeting {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => Greeting;
    }
}
export declare class MovieRating {
    constructor(source: string, value: string);
    get source(): string;
    get value(): string;
    copy(source?: string, value?: string): MovieRating;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace MovieRating {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MovieRating;
    }
}
export declare class MovieDetail {
    constructor(imdbId: string, title: string, year: string, rated: string, released: string, runtime: string, genre: string, director: string, writer: string, actors: string, plot: string, language: string, country: string, awards: string, poster: string, ratings: KtList<MovieRating>, metascore: string, imdbRating: string, imdbVotes: string, type: string, boxOffice: string);
    get imdbId(): string;
    get title(): string;
    get year(): string;
    get rated(): string;
    get released(): string;
    get runtime(): string;
    get genre(): string;
    get director(): string;
    get writer(): string;
    get actors(): string;
    get plot(): string;
    get language(): string;
    get country(): string;
    get awards(): string;
    get poster(): string;
    get ratings(): KtList<MovieRating>;
    get metascore(): string;
    get imdbRating(): string;
    get imdbVotes(): string;
    get type(): string;
    get boxOffice(): string;
    copy(imdbId?: string, title?: string, year?: string, rated?: string, released?: string, runtime?: string, genre?: string, director?: string, writer?: string, actors?: string, plot?: string, language?: string, country?: string, awards?: string, poster?: string, ratings?: KtList<MovieRating>, metascore?: string, imdbRating?: string, imdbVotes?: string, type?: string, boxOffice?: string): MovieDetail;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace MovieDetail {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MovieDetail;
    }
}
export declare class MovieItem {
    constructor(imdbId: string, title: string, year: string, type: string, poster: string);
    get imdbId(): string;
    get title(): string;
    get year(): string;
    get type(): string;
    get poster(): string;
    copy(imdbId?: string, title?: string, year?: string, type?: string, poster?: string): MovieItem;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace MovieItem {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MovieItem;
    }
}
export declare interface GetDetailMoviesUseCase {
    invoke(imdbId: string, apiKey: string): Promise<MovieDetail>;
    readonly __doNotUseOrImplementIt: {
        readonly "me.test.project.moviekmp.feature.movie.application.usecase.GetDetailMoviesUseCase": unique symbol;
    };
}
export declare interface GetListMoviesSearchUseCase {
    invoke(query: string, type: Nullable<string>, page: number, apiKey: string): Promise<KtList<MovieItem>>;
    readonly __doNotUseOrImplementIt: {
        readonly "me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesSearchUseCase": unique symbol;
    };
}
export declare interface GetListMoviesUseCase {
    invoke(apiKey: string): Promise<KtList<MovieItem>>;
    readonly __doNotUseOrImplementIt: {
        readonly "me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesUseCase": unique symbol;
    };
}
export declare abstract class KmpFactory {
    static readonly getInstance: () => typeof KmpFactory.$metadata$.type;
    private constructor();
}
export declare namespace KmpFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            getKoin(): any/* Koin */;
            getListMoviesUseCase(): GetListMoviesUseCase;
            getListMoviesSearchUseCase(): GetListMoviesSearchUseCase;
            getDetailMoviesUseCase(): GetDetailMoviesUseCase;
            private constructor();
        }
    }
}