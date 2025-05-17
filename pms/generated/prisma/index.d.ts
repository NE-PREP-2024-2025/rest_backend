
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Slot
 * 
 */
export type Slot = $Result.DefaultSelection<Prisma.$SlotPayload>
/**
 * Model SlotOrder
 * 
 */
export type SlotOrder = $Result.DefaultSelection<Prisma.$SlotOrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SlotStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE',
  RESERVED: 'RESERVED'
};

export type SlotStatus = (typeof SlotStatus)[keyof typeof SlotStatus]


export const VehicleType: {
  CAR: 'CAR',
  BIKE: 'BIKE',
  TRUCK: 'TRUCK',
  BUS: 'BUS'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const SlotSize: {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE'
};

export type SlotSize = (typeof SlotSize)[keyof typeof SlotSize]


export const SlotOrderStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type SlotOrderStatus = (typeof SlotOrderStatus)[keyof typeof SlotOrderStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SlotStatus = $Enums.SlotStatus

export const SlotStatus: typeof $Enums.SlotStatus

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type SlotSize = $Enums.SlotSize

export const SlotSize: typeof $Enums.SlotSize

export type SlotOrderStatus = $Enums.SlotOrderStatus

export const SlotOrderStatus: typeof $Enums.SlotOrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slot`: Exposes CRUD operations for the **Slot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slots
    * const slots = await prisma.slot.findMany()
    * ```
    */
  get slot(): Prisma.SlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slotOrder`: Exposes CRUD operations for the **SlotOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlotOrders
    * const slotOrders = await prisma.slotOrder.findMany()
    * ```
    */
  get slotOrder(): Prisma.SlotOrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Slot: 'Slot',
    SlotOrder: 'SlotOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "slot" | "slotOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Slot: {
        payload: Prisma.$SlotPayload<ExtArgs>
        fields: Prisma.SlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          findFirst: {
            args: Prisma.SlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          findMany: {
            args: Prisma.SlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>[]
          }
          create: {
            args: Prisma.SlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          createMany: {
            args: Prisma.SlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>[]
          }
          delete: {
            args: Prisma.SlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          update: {
            args: Prisma.SlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          deleteMany: {
            args: Prisma.SlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>[]
          }
          upsert: {
            args: Prisma.SlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          aggregate: {
            args: Prisma.SlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlot>
          }
          groupBy: {
            args: Prisma.SlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotCountArgs<ExtArgs>
            result: $Utils.Optional<SlotCountAggregateOutputType> | number
          }
        }
      }
      SlotOrder: {
        payload: Prisma.$SlotOrderPayload<ExtArgs>
        fields: Prisma.SlotOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>
          }
          findFirst: {
            args: Prisma.SlotOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>
          }
          findMany: {
            args: Prisma.SlotOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>[]
          }
          create: {
            args: Prisma.SlotOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>
          }
          createMany: {
            args: Prisma.SlotOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>[]
          }
          delete: {
            args: Prisma.SlotOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>
          }
          update: {
            args: Prisma.SlotOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>
          }
          deleteMany: {
            args: Prisma.SlotOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlotOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>[]
          }
          upsert: {
            args: Prisma.SlotOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOrderPayload>
          }
          aggregate: {
            args: Prisma.SlotOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlotOrder>
          }
          groupBy: {
            args: Prisma.SlotOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SlotOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    slot?: SlotOmit
    slotOrder?: SlotOrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    slotOrders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    slotOrders?: boolean | UserCountOutputTypeCountSlotOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSlotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotOrderWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    slotOrder: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slotOrder?: boolean | VehicleCountOutputTypeCountSlotOrderArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountSlotOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotOrderWhereInput
  }


  /**
   * Count Type SlotCountOutputType
   */

  export type SlotCountOutputType = {
    slotOrders: number
  }

  export type SlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slotOrders?: boolean | SlotCountOutputTypeCountSlotOrdersArgs
  }

  // Custom InputTypes
  /**
   * SlotCountOutputType without action
   */
  export type SlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotCountOutputType
     */
    select?: SlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SlotCountOutputType without action
   */
  export type SlotCountOutputTypeCountSlotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotOrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    emailVerified: number
    emailVerificationToken: number
    emailVerificationTokenExpires: number
    resetPasswordToken: number
    resetPasswordTokenExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    emailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    slotOrders?: boolean | User$slotOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "createdAt" | "updatedAt" | "role" | "emailVerified" | "emailVerificationToken" | "emailVerificationTokenExpires" | "resetPasswordToken" | "resetPasswordTokenExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    slotOrders?: boolean | User$slotOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      slotOrders: Prisma.$SlotOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      emailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationTokenExpires: Date | null
      resetPasswordToken: string | null
      resetPasswordTokenExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slotOrders<T extends User$slotOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$slotOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordTokenExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.slotOrders
   */
  export type User$slotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    where?: SlotOrderWhereInput
    orderBy?: SlotOrderOrderByWithRelationInput | SlotOrderOrderByWithRelationInput[]
    cursor?: SlotOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotOrderScalarFieldEnum | SlotOrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    vehicleYear: number | null
  }

  export type VehicleSumAggregateOutputType = {
    vehicleYear: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    vehiclePlateNumber: string | null
    vehicleType: $Enums.VehicleType | null
    vehicleColor: string | null
    vehicleBrand: string | null
    vehicleModel: string | null
    vehicleYear: number | null
    vehicleOwnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    vehiclePlateNumber: string | null
    vehicleType: $Enums.VehicleType | null
    vehicleColor: string | null
    vehicleBrand: string | null
    vehicleModel: string | null
    vehicleYear: number | null
    vehicleOwnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vehiclePlateNumber: number
    vehicleType: number
    vehicleColor: number
    vehicleBrand: number
    vehicleModel: number
    vehicleYear: number
    vehicleOwnerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    vehicleYear?: true
  }

  export type VehicleSumAggregateInputType = {
    vehicleYear?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    vehiclePlateNumber?: true
    vehicleType?: true
    vehicleColor?: true
    vehicleBrand?: true
    vehicleModel?: true
    vehicleYear?: true
    vehicleOwnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vehiclePlateNumber?: true
    vehicleType?: true
    vehicleColor?: true
    vehicleBrand?: true
    vehicleModel?: true
    vehicleYear?: true
    vehicleOwnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vehiclePlateNumber?: true
    vehicleType?: true
    vehicleColor?: true
    vehicleBrand?: true
    vehicleModel?: true
    vehicleYear?: true
    vehicleOwnerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    vehiclePlateNumber: string
    vehicleType: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
    slotOrder?: boolean | Vehicle$slotOrderArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehiclePlateNumber" | "vehicleType" | "vehicleColor" | "vehicleBrand" | "vehicleModel" | "vehicleYear" | "vehicleOwnerId" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
    slotOrder?: boolean | Vehicle$slotOrderArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      vehicleOwner: Prisma.$UserPayload<ExtArgs>
      slotOrder: Prisma.$SlotOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehiclePlateNumber: string
      vehicleType: $Enums.VehicleType
      vehicleColor: string
      vehicleBrand: string
      vehicleModel: string
      vehicleYear: number
      vehicleOwnerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicleOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slotOrder<T extends Vehicle$slotOrderArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$slotOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly vehiclePlateNumber: FieldRef<"Vehicle", 'String'>
    readonly vehicleType: FieldRef<"Vehicle", 'VehicleType'>
    readonly vehicleColor: FieldRef<"Vehicle", 'String'>
    readonly vehicleBrand: FieldRef<"Vehicle", 'String'>
    readonly vehicleModel: FieldRef<"Vehicle", 'String'>
    readonly vehicleYear: FieldRef<"Vehicle", 'Int'>
    readonly vehicleOwnerId: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.slotOrder
   */
  export type Vehicle$slotOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    where?: SlotOrderWhereInput
    orderBy?: SlotOrderOrderByWithRelationInput | SlotOrderOrderByWithRelationInput[]
    cursor?: SlotOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotOrderScalarFieldEnum | SlotOrderScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Slot
   */

  export type AggregateSlot = {
    _count: SlotCountAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  export type SlotMinAggregateOutputType = {
    id: string | null
    slotNumber: string | null
    slotSize: $Enums.SlotSize | null
    slotStatus: $Enums.SlotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlotMaxAggregateOutputType = {
    id: string | null
    slotNumber: string | null
    slotSize: $Enums.SlotSize | null
    slotStatus: $Enums.SlotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlotCountAggregateOutputType = {
    id: number
    slotNumber: number
    slotSize: number
    slotStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlotMinAggregateInputType = {
    id?: true
    slotNumber?: true
    slotSize?: true
    slotStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlotMaxAggregateInputType = {
    id?: true
    slotNumber?: true
    slotSize?: true
    slotStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlotCountAggregateInputType = {
    id?: true
    slotNumber?: true
    slotSize?: true
    slotStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slot to aggregate.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slots
    **/
    _count?: true | SlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotMaxAggregateInputType
  }

  export type GetSlotAggregateType<T extends SlotAggregateArgs> = {
        [P in keyof T & keyof AggregateSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlot[P]>
      : GetScalarType<T[P], AggregateSlot[P]>
  }




  export type SlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotWhereInput
    orderBy?: SlotOrderByWithAggregationInput | SlotOrderByWithAggregationInput[]
    by: SlotScalarFieldEnum[] | SlotScalarFieldEnum
    having?: SlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotCountAggregateInputType | true
    _min?: SlotMinAggregateInputType
    _max?: SlotMaxAggregateInputType
  }

  export type SlotGroupByOutputType = {
    id: string
    slotNumber: string
    slotSize: $Enums.SlotSize
    slotStatus: $Enums.SlotStatus
    createdAt: Date
    updatedAt: Date
    _count: SlotCountAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  type GetSlotGroupByPayload<T extends SlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotGroupByOutputType[P]>
            : GetScalarType<T[P], SlotGroupByOutputType[P]>
        }
      >
    >


  export type SlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    slotSize?: boolean
    slotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slotOrders?: boolean | Slot$slotOrdersArgs<ExtArgs>
    _count?: boolean | SlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slot"]>

  export type SlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    slotSize?: boolean
    slotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slot"]>

  export type SlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    slotSize?: boolean
    slotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slot"]>

  export type SlotSelectScalar = {
    id?: boolean
    slotNumber?: boolean
    slotSize?: boolean
    slotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slotNumber" | "slotSize" | "slotStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["slot"]>
  export type SlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slotOrders?: boolean | Slot$slotOrdersArgs<ExtArgs>
    _count?: boolean | SlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slot"
    objects: {
      slotOrders: Prisma.$SlotOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slotNumber: string
      slotSize: $Enums.SlotSize
      slotStatus: $Enums.SlotStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slot"]>
    composites: {}
  }

  type SlotGetPayload<S extends boolean | null | undefined | SlotDefaultArgs> = $Result.GetResult<Prisma.$SlotPayload, S>

  type SlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlotCountAggregateInputType | true
    }

  export interface SlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slot'], meta: { name: 'Slot' } }
    /**
     * Find zero or one Slot that matches the filter.
     * @param {SlotFindUniqueArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotFindUniqueArgs>(args: SelectSubset<T, SlotFindUniqueArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Slot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlotFindUniqueOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotFindFirstArgs>(args?: SelectSubset<T, SlotFindFirstArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slots
     * const slots = await prisma.slot.findMany()
     * 
     * // Get first 10 Slots
     * const slots = await prisma.slot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotWithIdOnly = await prisma.slot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlotFindManyArgs>(args?: SelectSubset<T, SlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Slot.
     * @param {SlotCreateArgs} args - Arguments to create a Slot.
     * @example
     * // Create one Slot
     * const Slot = await prisma.slot.create({
     *   data: {
     *     // ... data to create a Slot
     *   }
     * })
     * 
     */
    create<T extends SlotCreateArgs>(args: SelectSubset<T, SlotCreateArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Slots.
     * @param {SlotCreateManyArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slot = await prisma.slot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotCreateManyArgs>(args?: SelectSubset<T, SlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slots and returns the data saved in the database.
     * @param {SlotCreateManyAndReturnArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slot = await prisma.slot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slots and only return the `id`
     * const slotWithIdOnly = await prisma.slot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Slot.
     * @param {SlotDeleteArgs} args - Arguments to delete one Slot.
     * @example
     * // Delete one Slot
     * const Slot = await prisma.slot.delete({
     *   where: {
     *     // ... filter to delete one Slot
     *   }
     * })
     * 
     */
    delete<T extends SlotDeleteArgs>(args: SelectSubset<T, SlotDeleteArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Slot.
     * @param {SlotUpdateArgs} args - Arguments to update one Slot.
     * @example
     * // Update one Slot
     * const slot = await prisma.slot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotUpdateArgs>(args: SelectSubset<T, SlotUpdateArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Slots.
     * @param {SlotDeleteManyArgs} args - Arguments to filter Slots to delete.
     * @example
     * // Delete a few Slots
     * const { count } = await prisma.slot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotDeleteManyArgs>(args?: SelectSubset<T, SlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slots
     * const slot = await prisma.slot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotUpdateManyArgs>(args: SelectSubset<T, SlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots and returns the data updated in the database.
     * @param {SlotUpdateManyAndReturnArgs} args - Arguments to update many Slots.
     * @example
     * // Update many Slots
     * const slot = await prisma.slot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Slots and only return the `id`
     * const slotWithIdOnly = await prisma.slot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlotUpdateManyAndReturnArgs>(args: SelectSubset<T, SlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Slot.
     * @param {SlotUpsertArgs} args - Arguments to update or create a Slot.
     * @example
     * // Update or create a Slot
     * const slot = await prisma.slot.upsert({
     *   create: {
     *     // ... data to create a Slot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slot we want to update
     *   }
     * })
     */
    upsert<T extends SlotUpsertArgs>(args: SelectSubset<T, SlotUpsertArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotCountArgs} args - Arguments to filter Slots to count.
     * @example
     * // Count the number of Slots
     * const count = await prisma.slot.count({
     *   where: {
     *     // ... the filter for the Slots we want to count
     *   }
     * })
    **/
    count<T extends SlotCountArgs>(
      args?: Subset<T, SlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlotAggregateArgs>(args: Subset<T, SlotAggregateArgs>): Prisma.PrismaPromise<GetSlotAggregateType<T>>

    /**
     * Group by Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotGroupByArgs['orderBy'] }
        : { orderBy?: SlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slot model
   */
  readonly fields: SlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slotOrders<T extends Slot$slotOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Slot$slotOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Slot model
   */
  interface SlotFieldRefs {
    readonly id: FieldRef<"Slot", 'String'>
    readonly slotNumber: FieldRef<"Slot", 'String'>
    readonly slotSize: FieldRef<"Slot", 'SlotSize'>
    readonly slotStatus: FieldRef<"Slot", 'SlotStatus'>
    readonly createdAt: FieldRef<"Slot", 'DateTime'>
    readonly updatedAt: FieldRef<"Slot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Slot findUnique
   */
  export type SlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot findUniqueOrThrow
   */
  export type SlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot findFirst
   */
  export type SlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * Slot findFirstOrThrow
   */
  export type SlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * Slot findMany
   */
  export type SlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * Slot create
   */
  export type SlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The data needed to create a Slot.
     */
    data: XOR<SlotCreateInput, SlotUncheckedCreateInput>
  }

  /**
   * Slot createMany
   */
  export type SlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slots.
     */
    data: SlotCreateManyInput | SlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slot createManyAndReturn
   */
  export type SlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * The data used to create many Slots.
     */
    data: SlotCreateManyInput | SlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slot update
   */
  export type SlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The data needed to update a Slot.
     */
    data: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>
    /**
     * Choose, which Slot to update.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot updateMany
   */
  export type SlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyInput>
    /**
     * Filter which Slots to update
     */
    where?: SlotWhereInput
    /**
     * Limit how many Slots to update.
     */
    limit?: number
  }

  /**
   * Slot updateManyAndReturn
   */
  export type SlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyInput>
    /**
     * Filter which Slots to update
     */
    where?: SlotWhereInput
    /**
     * Limit how many Slots to update.
     */
    limit?: number
  }

  /**
   * Slot upsert
   */
  export type SlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The filter to search for the Slot to update in case it exists.
     */
    where: SlotWhereUniqueInput
    /**
     * In case the Slot found by the `where` argument doesn't exist, create a new Slot with this data.
     */
    create: XOR<SlotCreateInput, SlotUncheckedCreateInput>
    /**
     * In case the Slot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>
  }

  /**
   * Slot delete
   */
  export type SlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter which Slot to delete.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot deleteMany
   */
  export type SlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slots to delete
     */
    where?: SlotWhereInput
    /**
     * Limit how many Slots to delete.
     */
    limit?: number
  }

  /**
   * Slot.slotOrders
   */
  export type Slot$slotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    where?: SlotOrderWhereInput
    orderBy?: SlotOrderOrderByWithRelationInput | SlotOrderOrderByWithRelationInput[]
    cursor?: SlotOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotOrderScalarFieldEnum | SlotOrderScalarFieldEnum[]
  }

  /**
   * Slot without action
   */
  export type SlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slot
     */
    omit?: SlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
  }


  /**
   * Model SlotOrder
   */

  export type AggregateSlotOrder = {
    _count: SlotOrderCountAggregateOutputType | null
    _avg: SlotOrderAvgAggregateOutputType | null
    _sum: SlotOrderSumAggregateOutputType | null
    _min: SlotOrderMinAggregateOutputType | null
    _max: SlotOrderMaxAggregateOutputType | null
  }

  export type SlotOrderAvgAggregateOutputType = {
    pricePerHour: number | null
    hours: number | null
  }

  export type SlotOrderSumAggregateOutputType = {
    pricePerHour: number | null
    hours: number | null
  }

  export type SlotOrderMinAggregateOutputType = {
    id: string | null
    slotId: string | null
    vehicleId: string | null
    createdAt: Date | null
    slotCustomerId: string | null
    slotVehicleId: string | null
    pricePerHour: number | null
    hours: number | null
    updatedAt: Date | null
    slotOrderStatus: $Enums.SlotOrderStatus | null
  }

  export type SlotOrderMaxAggregateOutputType = {
    id: string | null
    slotId: string | null
    vehicleId: string | null
    createdAt: Date | null
    slotCustomerId: string | null
    slotVehicleId: string | null
    pricePerHour: number | null
    hours: number | null
    updatedAt: Date | null
    slotOrderStatus: $Enums.SlotOrderStatus | null
  }

  export type SlotOrderCountAggregateOutputType = {
    id: number
    slotId: number
    vehicleId: number
    createdAt: number
    slotCustomerId: number
    slotVehicleId: number
    pricePerHour: number
    hours: number
    updatedAt: number
    slotOrderStatus: number
    _all: number
  }


  export type SlotOrderAvgAggregateInputType = {
    pricePerHour?: true
    hours?: true
  }

  export type SlotOrderSumAggregateInputType = {
    pricePerHour?: true
    hours?: true
  }

  export type SlotOrderMinAggregateInputType = {
    id?: true
    slotId?: true
    vehicleId?: true
    createdAt?: true
    slotCustomerId?: true
    slotVehicleId?: true
    pricePerHour?: true
    hours?: true
    updatedAt?: true
    slotOrderStatus?: true
  }

  export type SlotOrderMaxAggregateInputType = {
    id?: true
    slotId?: true
    vehicleId?: true
    createdAt?: true
    slotCustomerId?: true
    slotVehicleId?: true
    pricePerHour?: true
    hours?: true
    updatedAt?: true
    slotOrderStatus?: true
  }

  export type SlotOrderCountAggregateInputType = {
    id?: true
    slotId?: true
    vehicleId?: true
    createdAt?: true
    slotCustomerId?: true
    slotVehicleId?: true
    pricePerHour?: true
    hours?: true
    updatedAt?: true
    slotOrderStatus?: true
    _all?: true
  }

  export type SlotOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotOrder to aggregate.
     */
    where?: SlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOrders to fetch.
     */
    orderBy?: SlotOrderOrderByWithRelationInput | SlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlotOrders
    **/
    _count?: true | SlotOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotOrderMaxAggregateInputType
  }

  export type GetSlotOrderAggregateType<T extends SlotOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSlotOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlotOrder[P]>
      : GetScalarType<T[P], AggregateSlotOrder[P]>
  }




  export type SlotOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotOrderWhereInput
    orderBy?: SlotOrderOrderByWithAggregationInput | SlotOrderOrderByWithAggregationInput[]
    by: SlotOrderScalarFieldEnum[] | SlotOrderScalarFieldEnum
    having?: SlotOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotOrderCountAggregateInputType | true
    _avg?: SlotOrderAvgAggregateInputType
    _sum?: SlotOrderSumAggregateInputType
    _min?: SlotOrderMinAggregateInputType
    _max?: SlotOrderMaxAggregateInputType
  }

  export type SlotOrderGroupByOutputType = {
    id: string
    slotId: string
    vehicleId: string
    createdAt: Date
    slotCustomerId: string | null
    slotVehicleId: string | null
    pricePerHour: number
    hours: number
    updatedAt: Date
    slotOrderStatus: $Enums.SlotOrderStatus
    _count: SlotOrderCountAggregateOutputType | null
    _avg: SlotOrderAvgAggregateOutputType | null
    _sum: SlotOrderSumAggregateOutputType | null
    _min: SlotOrderMinAggregateOutputType | null
    _max: SlotOrderMaxAggregateOutputType | null
  }

  type GetSlotOrderGroupByPayload<T extends SlotOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SlotOrderGroupByOutputType[P]>
        }
      >
    >


  export type SlotOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    slotCustomerId?: boolean
    slotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    updatedAt?: boolean
    slotOrderStatus?: boolean
    slot?: boolean | SlotDefaultArgs<ExtArgs>
    slotCustomer?: boolean | SlotOrder$slotCustomerArgs<ExtArgs>
    slotVehicle?: boolean | SlotOrder$slotVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["slotOrder"]>

  export type SlotOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    slotCustomerId?: boolean
    slotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    updatedAt?: boolean
    slotOrderStatus?: boolean
    slot?: boolean | SlotDefaultArgs<ExtArgs>
    slotCustomer?: boolean | SlotOrder$slotCustomerArgs<ExtArgs>
    slotVehicle?: boolean | SlotOrder$slotVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["slotOrder"]>

  export type SlotOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotId?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    slotCustomerId?: boolean
    slotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    updatedAt?: boolean
    slotOrderStatus?: boolean
    slot?: boolean | SlotDefaultArgs<ExtArgs>
    slotCustomer?: boolean | SlotOrder$slotCustomerArgs<ExtArgs>
    slotVehicle?: boolean | SlotOrder$slotVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["slotOrder"]>

  export type SlotOrderSelectScalar = {
    id?: boolean
    slotId?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    slotCustomerId?: boolean
    slotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    updatedAt?: boolean
    slotOrderStatus?: boolean
  }

  export type SlotOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slotId" | "vehicleId" | "createdAt" | "slotCustomerId" | "slotVehicleId" | "pricePerHour" | "hours" | "updatedAt" | "slotOrderStatus", ExtArgs["result"]["slotOrder"]>
  export type SlotOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | SlotDefaultArgs<ExtArgs>
    slotCustomer?: boolean | SlotOrder$slotCustomerArgs<ExtArgs>
    slotVehicle?: boolean | SlotOrder$slotVehicleArgs<ExtArgs>
  }
  export type SlotOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | SlotDefaultArgs<ExtArgs>
    slotCustomer?: boolean | SlotOrder$slotCustomerArgs<ExtArgs>
    slotVehicle?: boolean | SlotOrder$slotVehicleArgs<ExtArgs>
  }
  export type SlotOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | SlotDefaultArgs<ExtArgs>
    slotCustomer?: boolean | SlotOrder$slotCustomerArgs<ExtArgs>
    slotVehicle?: boolean | SlotOrder$slotVehicleArgs<ExtArgs>
  }

  export type $SlotOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlotOrder"
    objects: {
      slot: Prisma.$SlotPayload<ExtArgs>
      slotCustomer: Prisma.$UserPayload<ExtArgs> | null
      slotVehicle: Prisma.$VehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slotId: string
      vehicleId: string
      createdAt: Date
      slotCustomerId: string | null
      slotVehicleId: string | null
      pricePerHour: number
      hours: number
      updatedAt: Date
      slotOrderStatus: $Enums.SlotOrderStatus
    }, ExtArgs["result"]["slotOrder"]>
    composites: {}
  }

  type SlotOrderGetPayload<S extends boolean | null | undefined | SlotOrderDefaultArgs> = $Result.GetResult<Prisma.$SlotOrderPayload, S>

  type SlotOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlotOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlotOrderCountAggregateInputType | true
    }

  export interface SlotOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlotOrder'], meta: { name: 'SlotOrder' } }
    /**
     * Find zero or one SlotOrder that matches the filter.
     * @param {SlotOrderFindUniqueArgs} args - Arguments to find a SlotOrder
     * @example
     * // Get one SlotOrder
     * const slotOrder = await prisma.slotOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotOrderFindUniqueArgs>(args: SelectSubset<T, SlotOrderFindUniqueArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlotOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlotOrderFindUniqueOrThrowArgs} args - Arguments to find a SlotOrder
     * @example
     * // Get one SlotOrder
     * const slotOrder = await prisma.slotOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOrderFindFirstArgs} args - Arguments to find a SlotOrder
     * @example
     * // Get one SlotOrder
     * const slotOrder = await prisma.slotOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotOrderFindFirstArgs>(args?: SelectSubset<T, SlotOrderFindFirstArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOrderFindFirstOrThrowArgs} args - Arguments to find a SlotOrder
     * @example
     * // Get one SlotOrder
     * const slotOrder = await prisma.slotOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlotOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlotOrders
     * const slotOrders = await prisma.slotOrder.findMany()
     * 
     * // Get first 10 SlotOrders
     * const slotOrders = await prisma.slotOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotOrderWithIdOnly = await prisma.slotOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlotOrderFindManyArgs>(args?: SelectSubset<T, SlotOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlotOrder.
     * @param {SlotOrderCreateArgs} args - Arguments to create a SlotOrder.
     * @example
     * // Create one SlotOrder
     * const SlotOrder = await prisma.slotOrder.create({
     *   data: {
     *     // ... data to create a SlotOrder
     *   }
     * })
     * 
     */
    create<T extends SlotOrderCreateArgs>(args: SelectSubset<T, SlotOrderCreateArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlotOrders.
     * @param {SlotOrderCreateManyArgs} args - Arguments to create many SlotOrders.
     * @example
     * // Create many SlotOrders
     * const slotOrder = await prisma.slotOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotOrderCreateManyArgs>(args?: SelectSubset<T, SlotOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlotOrders and returns the data saved in the database.
     * @param {SlotOrderCreateManyAndReturnArgs} args - Arguments to create many SlotOrders.
     * @example
     * // Create many SlotOrders
     * const slotOrder = await prisma.slotOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlotOrders and only return the `id`
     * const slotOrderWithIdOnly = await prisma.slotOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlotOrder.
     * @param {SlotOrderDeleteArgs} args - Arguments to delete one SlotOrder.
     * @example
     * // Delete one SlotOrder
     * const SlotOrder = await prisma.slotOrder.delete({
     *   where: {
     *     // ... filter to delete one SlotOrder
     *   }
     * })
     * 
     */
    delete<T extends SlotOrderDeleteArgs>(args: SelectSubset<T, SlotOrderDeleteArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlotOrder.
     * @param {SlotOrderUpdateArgs} args - Arguments to update one SlotOrder.
     * @example
     * // Update one SlotOrder
     * const slotOrder = await prisma.slotOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotOrderUpdateArgs>(args: SelectSubset<T, SlotOrderUpdateArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlotOrders.
     * @param {SlotOrderDeleteManyArgs} args - Arguments to filter SlotOrders to delete.
     * @example
     * // Delete a few SlotOrders
     * const { count } = await prisma.slotOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotOrderDeleteManyArgs>(args?: SelectSubset<T, SlotOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlotOrders
     * const slotOrder = await prisma.slotOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotOrderUpdateManyArgs>(args: SelectSubset<T, SlotOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotOrders and returns the data updated in the database.
     * @param {SlotOrderUpdateManyAndReturnArgs} args - Arguments to update many SlotOrders.
     * @example
     * // Update many SlotOrders
     * const slotOrder = await prisma.slotOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlotOrders and only return the `id`
     * const slotOrderWithIdOnly = await prisma.slotOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlotOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, SlotOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlotOrder.
     * @param {SlotOrderUpsertArgs} args - Arguments to update or create a SlotOrder.
     * @example
     * // Update or create a SlotOrder
     * const slotOrder = await prisma.slotOrder.upsert({
     *   create: {
     *     // ... data to create a SlotOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlotOrder we want to update
     *   }
     * })
     */
    upsert<T extends SlotOrderUpsertArgs>(args: SelectSubset<T, SlotOrderUpsertArgs<ExtArgs>>): Prisma__SlotOrderClient<$Result.GetResult<Prisma.$SlotOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlotOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOrderCountArgs} args - Arguments to filter SlotOrders to count.
     * @example
     * // Count the number of SlotOrders
     * const count = await prisma.slotOrder.count({
     *   where: {
     *     // ... the filter for the SlotOrders we want to count
     *   }
     * })
    **/
    count<T extends SlotOrderCountArgs>(
      args?: Subset<T, SlotOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlotOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlotOrderAggregateArgs>(args: Subset<T, SlotOrderAggregateArgs>): Prisma.PrismaPromise<GetSlotOrderAggregateType<T>>

    /**
     * Group by SlotOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlotOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotOrderGroupByArgs['orderBy'] }
        : { orderBy?: SlotOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlotOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlotOrder model
   */
  readonly fields: SlotOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlotOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slot<T extends SlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SlotDefaultArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slotCustomer<T extends SlotOrder$slotCustomerArgs<ExtArgs> = {}>(args?: Subset<T, SlotOrder$slotCustomerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    slotVehicle<T extends SlotOrder$slotVehicleArgs<ExtArgs> = {}>(args?: Subset<T, SlotOrder$slotVehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SlotOrder model
   */
  interface SlotOrderFieldRefs {
    readonly id: FieldRef<"SlotOrder", 'String'>
    readonly slotId: FieldRef<"SlotOrder", 'String'>
    readonly vehicleId: FieldRef<"SlotOrder", 'String'>
    readonly createdAt: FieldRef<"SlotOrder", 'DateTime'>
    readonly slotCustomerId: FieldRef<"SlotOrder", 'String'>
    readonly slotVehicleId: FieldRef<"SlotOrder", 'String'>
    readonly pricePerHour: FieldRef<"SlotOrder", 'Int'>
    readonly hours: FieldRef<"SlotOrder", 'Int'>
    readonly updatedAt: FieldRef<"SlotOrder", 'DateTime'>
    readonly slotOrderStatus: FieldRef<"SlotOrder", 'SlotOrderStatus'>
  }
    

  // Custom InputTypes
  /**
   * SlotOrder findUnique
   */
  export type SlotOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which SlotOrder to fetch.
     */
    where: SlotOrderWhereUniqueInput
  }

  /**
   * SlotOrder findUniqueOrThrow
   */
  export type SlotOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which SlotOrder to fetch.
     */
    where: SlotOrderWhereUniqueInput
  }

  /**
   * SlotOrder findFirst
   */
  export type SlotOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which SlotOrder to fetch.
     */
    where?: SlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOrders to fetch.
     */
    orderBy?: SlotOrderOrderByWithRelationInput | SlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotOrders.
     */
    cursor?: SlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotOrders.
     */
    distinct?: SlotOrderScalarFieldEnum | SlotOrderScalarFieldEnum[]
  }

  /**
   * SlotOrder findFirstOrThrow
   */
  export type SlotOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which SlotOrder to fetch.
     */
    where?: SlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOrders to fetch.
     */
    orderBy?: SlotOrderOrderByWithRelationInput | SlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotOrders.
     */
    cursor?: SlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotOrders.
     */
    distinct?: SlotOrderScalarFieldEnum | SlotOrderScalarFieldEnum[]
  }

  /**
   * SlotOrder findMany
   */
  export type SlotOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which SlotOrders to fetch.
     */
    where?: SlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOrders to fetch.
     */
    orderBy?: SlotOrderOrderByWithRelationInput | SlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlotOrders.
     */
    cursor?: SlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOrders.
     */
    skip?: number
    distinct?: SlotOrderScalarFieldEnum | SlotOrderScalarFieldEnum[]
  }

  /**
   * SlotOrder create
   */
  export type SlotOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a SlotOrder.
     */
    data: XOR<SlotOrderCreateInput, SlotOrderUncheckedCreateInput>
  }

  /**
   * SlotOrder createMany
   */
  export type SlotOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlotOrders.
     */
    data: SlotOrderCreateManyInput | SlotOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlotOrder createManyAndReturn
   */
  export type SlotOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * The data used to create many SlotOrders.
     */
    data: SlotOrderCreateManyInput | SlotOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotOrder update
   */
  export type SlotOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a SlotOrder.
     */
    data: XOR<SlotOrderUpdateInput, SlotOrderUncheckedUpdateInput>
    /**
     * Choose, which SlotOrder to update.
     */
    where: SlotOrderWhereUniqueInput
  }

  /**
   * SlotOrder updateMany
   */
  export type SlotOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlotOrders.
     */
    data: XOR<SlotOrderUpdateManyMutationInput, SlotOrderUncheckedUpdateManyInput>
    /**
     * Filter which SlotOrders to update
     */
    where?: SlotOrderWhereInput
    /**
     * Limit how many SlotOrders to update.
     */
    limit?: number
  }

  /**
   * SlotOrder updateManyAndReturn
   */
  export type SlotOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * The data used to update SlotOrders.
     */
    data: XOR<SlotOrderUpdateManyMutationInput, SlotOrderUncheckedUpdateManyInput>
    /**
     * Filter which SlotOrders to update
     */
    where?: SlotOrderWhereInput
    /**
     * Limit how many SlotOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotOrder upsert
   */
  export type SlotOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the SlotOrder to update in case it exists.
     */
    where: SlotOrderWhereUniqueInput
    /**
     * In case the SlotOrder found by the `where` argument doesn't exist, create a new SlotOrder with this data.
     */
    create: XOR<SlotOrderCreateInput, SlotOrderUncheckedCreateInput>
    /**
     * In case the SlotOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotOrderUpdateInput, SlotOrderUncheckedUpdateInput>
  }

  /**
   * SlotOrder delete
   */
  export type SlotOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
    /**
     * Filter which SlotOrder to delete.
     */
    where: SlotOrderWhereUniqueInput
  }

  /**
   * SlotOrder deleteMany
   */
  export type SlotOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotOrders to delete
     */
    where?: SlotOrderWhereInput
    /**
     * Limit how many SlotOrders to delete.
     */
    limit?: number
  }

  /**
   * SlotOrder.slotCustomer
   */
  export type SlotOrder$slotCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SlotOrder.slotVehicle
   */
  export type SlotOrder$slotVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * SlotOrder without action
   */
  export type SlotOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOrder
     */
    select?: SlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOrder
     */
    omit?: SlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    emailVerified: 'emailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpires: 'emailVerificationTokenExpires',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordTokenExpires: 'resetPasswordTokenExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vehiclePlateNumber: 'vehiclePlateNumber',
    vehicleType: 'vehicleType',
    vehicleColor: 'vehicleColor',
    vehicleBrand: 'vehicleBrand',
    vehicleModel: 'vehicleModel',
    vehicleYear: 'vehicleYear',
    vehicleOwnerId: 'vehicleOwnerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const SlotScalarFieldEnum: {
    id: 'id',
    slotNumber: 'slotNumber',
    slotSize: 'slotSize',
    slotStatus: 'slotStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlotScalarFieldEnum = (typeof SlotScalarFieldEnum)[keyof typeof SlotScalarFieldEnum]


  export const SlotOrderScalarFieldEnum: {
    id: 'id',
    slotId: 'slotId',
    vehicleId: 'vehicleId',
    createdAt: 'createdAt',
    slotCustomerId: 'slotCustomerId',
    slotVehicleId: 'slotVehicleId',
    pricePerHour: 'pricePerHour',
    hours: 'hours',
    updatedAt: 'updatedAt',
    slotOrderStatus: 'slotOrderStatus'
  };

  export type SlotOrderScalarFieldEnum = (typeof SlotOrderScalarFieldEnum)[keyof typeof SlotOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SlotSize'
   */
  export type EnumSlotSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotSize'>
    


  /**
   * Reference to a field of type 'SlotSize[]'
   */
  export type ListEnumSlotSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotSize[]'>
    


  /**
   * Reference to a field of type 'SlotStatus'
   */
  export type EnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus'>
    


  /**
   * Reference to a field of type 'SlotStatus[]'
   */
  export type ListEnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus[]'>
    


  /**
   * Reference to a field of type 'SlotOrderStatus'
   */
  export type EnumSlotOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotOrderStatus'>
    


  /**
   * Reference to a field of type 'SlotOrderStatus[]'
   */
  export type ListEnumSlotOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotOrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    vehicles?: VehicleListRelationFilter
    slotOrders?: SlotOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    slotOrders?: SlotOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    vehicles?: VehicleListRelationFilter
    slotOrders?: SlotOrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vehiclePlateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringFilter<"Vehicle"> | string
    vehicleBrand?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    vehicleYear?: IntFilter<"Vehicle"> | number
    vehicleOwnerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    vehicleOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    slotOrder?: SlotOrderListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleOwner?: UserOrderByWithRelationInput
    slotOrder?: SlotOrderOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehiclePlateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringFilter<"Vehicle"> | string
    vehicleBrand?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    vehicleYear?: IntFilter<"Vehicle"> | number
    vehicleOwnerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    vehicleOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    slotOrder?: SlotOrderListRelationFilter
  }, "id" | "vehiclePlateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    vehiclePlateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleBrand?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleModel?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleYear?: IntWithAggregatesFilter<"Vehicle"> | number
    vehicleOwnerId?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type SlotWhereInput = {
    AND?: SlotWhereInput | SlotWhereInput[]
    OR?: SlotWhereInput[]
    NOT?: SlotWhereInput | SlotWhereInput[]
    id?: StringFilter<"Slot"> | string
    slotNumber?: StringFilter<"Slot"> | string
    slotSize?: EnumSlotSizeFilter<"Slot"> | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFilter<"Slot"> | $Enums.SlotStatus
    createdAt?: DateTimeFilter<"Slot"> | Date | string
    updatedAt?: DateTimeFilter<"Slot"> | Date | string
    slotOrders?: SlotOrderListRelationFilter
  }

  export type SlotOrderByWithRelationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    slotSize?: SortOrder
    slotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slotOrders?: SlotOrderOrderByRelationAggregateInput
  }

  export type SlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SlotWhereInput | SlotWhereInput[]
    OR?: SlotWhereInput[]
    NOT?: SlotWhereInput | SlotWhereInput[]
    slotNumber?: StringFilter<"Slot"> | string
    slotSize?: EnumSlotSizeFilter<"Slot"> | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFilter<"Slot"> | $Enums.SlotStatus
    createdAt?: DateTimeFilter<"Slot"> | Date | string
    updatedAt?: DateTimeFilter<"Slot"> | Date | string
    slotOrders?: SlotOrderListRelationFilter
  }, "id">

  export type SlotOrderByWithAggregationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    slotSize?: SortOrder
    slotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlotCountOrderByAggregateInput
    _max?: SlotMaxOrderByAggregateInput
    _min?: SlotMinOrderByAggregateInput
  }

  export type SlotScalarWhereWithAggregatesInput = {
    AND?: SlotScalarWhereWithAggregatesInput | SlotScalarWhereWithAggregatesInput[]
    OR?: SlotScalarWhereWithAggregatesInput[]
    NOT?: SlotScalarWhereWithAggregatesInput | SlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Slot"> | string
    slotNumber?: StringWithAggregatesFilter<"Slot"> | string
    slotSize?: EnumSlotSizeWithAggregatesFilter<"Slot"> | $Enums.SlotSize
    slotStatus?: EnumSlotStatusWithAggregatesFilter<"Slot"> | $Enums.SlotStatus
    createdAt?: DateTimeWithAggregatesFilter<"Slot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Slot"> | Date | string
  }

  export type SlotOrderWhereInput = {
    AND?: SlotOrderWhereInput | SlotOrderWhereInput[]
    OR?: SlotOrderWhereInput[]
    NOT?: SlotOrderWhereInput | SlotOrderWhereInput[]
    id?: StringFilter<"SlotOrder"> | string
    slotId?: StringFilter<"SlotOrder"> | string
    vehicleId?: StringFilter<"SlotOrder"> | string
    createdAt?: DateTimeFilter<"SlotOrder"> | Date | string
    slotCustomerId?: StringNullableFilter<"SlotOrder"> | string | null
    slotVehicleId?: StringNullableFilter<"SlotOrder"> | string | null
    pricePerHour?: IntFilter<"SlotOrder"> | number
    hours?: IntFilter<"SlotOrder"> | number
    updatedAt?: DateTimeFilter<"SlotOrder"> | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFilter<"SlotOrder"> | $Enums.SlotOrderStatus
    slot?: XOR<SlotScalarRelationFilter, SlotWhereInput>
    slotCustomer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    slotVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }

  export type SlotOrderOrderByWithRelationInput = {
    id?: SortOrder
    slotId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    slotCustomerId?: SortOrderInput | SortOrder
    slotVehicleId?: SortOrderInput | SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    updatedAt?: SortOrder
    slotOrderStatus?: SortOrder
    slot?: SlotOrderByWithRelationInput
    slotCustomer?: UserOrderByWithRelationInput
    slotVehicle?: VehicleOrderByWithRelationInput
  }

  export type SlotOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SlotOrderWhereInput | SlotOrderWhereInput[]
    OR?: SlotOrderWhereInput[]
    NOT?: SlotOrderWhereInput | SlotOrderWhereInput[]
    slotId?: StringFilter<"SlotOrder"> | string
    vehicleId?: StringFilter<"SlotOrder"> | string
    createdAt?: DateTimeFilter<"SlotOrder"> | Date | string
    slotCustomerId?: StringNullableFilter<"SlotOrder"> | string | null
    slotVehicleId?: StringNullableFilter<"SlotOrder"> | string | null
    pricePerHour?: IntFilter<"SlotOrder"> | number
    hours?: IntFilter<"SlotOrder"> | number
    updatedAt?: DateTimeFilter<"SlotOrder"> | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFilter<"SlotOrder"> | $Enums.SlotOrderStatus
    slot?: XOR<SlotScalarRelationFilter, SlotWhereInput>
    slotCustomer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    slotVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }, "id">

  export type SlotOrderOrderByWithAggregationInput = {
    id?: SortOrder
    slotId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    slotCustomerId?: SortOrderInput | SortOrder
    slotVehicleId?: SortOrderInput | SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    updatedAt?: SortOrder
    slotOrderStatus?: SortOrder
    _count?: SlotOrderCountOrderByAggregateInput
    _avg?: SlotOrderAvgOrderByAggregateInput
    _max?: SlotOrderMaxOrderByAggregateInput
    _min?: SlotOrderMinOrderByAggregateInput
    _sum?: SlotOrderSumOrderByAggregateInput
  }

  export type SlotOrderScalarWhereWithAggregatesInput = {
    AND?: SlotOrderScalarWhereWithAggregatesInput | SlotOrderScalarWhereWithAggregatesInput[]
    OR?: SlotOrderScalarWhereWithAggregatesInput[]
    NOT?: SlotOrderScalarWhereWithAggregatesInput | SlotOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlotOrder"> | string
    slotId?: StringWithAggregatesFilter<"SlotOrder"> | string
    vehicleId?: StringWithAggregatesFilter<"SlotOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SlotOrder"> | Date | string
    slotCustomerId?: StringNullableWithAggregatesFilter<"SlotOrder"> | string | null
    slotVehicleId?: StringNullableWithAggregatesFilter<"SlotOrder"> | string | null
    pricePerHour?: IntWithAggregatesFilter<"SlotOrder"> | number
    hours?: IntWithAggregatesFilter<"SlotOrder"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SlotOrder"> | Date | string
    slotOrderStatus?: EnumSlotOrderStatusWithAggregatesFilter<"SlotOrder"> | $Enums.SlotOrderStatus
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleCreateNestedManyWithoutVehicleOwnerInput
    slotOrders?: SlotOrderCreateNestedManyWithoutSlotCustomerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutVehicleOwnerInput
    slotOrders?: SlotOrderUncheckedCreateNestedManyWithoutSlotCustomerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUpdateManyWithoutVehicleOwnerNestedInput
    slotOrders?: SlotOrderUpdateManyWithoutSlotCustomerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleOwnerNestedInput
    slotOrders?: SlotOrderUncheckedUpdateManyWithoutSlotCustomerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleOwner: UserCreateNestedOneWithoutVehiclesInput
    slotOrder?: SlotOrderCreateNestedManyWithoutSlotVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slotOrder?: SlotOrderUncheckedCreateNestedManyWithoutSlotVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleOwner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    slotOrder?: SlotOrderUpdateManyWithoutSlotVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    vehicleOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrder?: SlotOrderUncheckedUpdateManyWithoutSlotVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    vehicleOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotCreateInput = {
    id?: string
    slotNumber: string
    slotSize?: $Enums.SlotSize
    slotStatus?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    slotOrders?: SlotOrderCreateNestedManyWithoutSlotInput
  }

  export type SlotUncheckedCreateInput = {
    id?: string
    slotNumber: string
    slotSize?: $Enums.SlotSize
    slotStatus?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    slotOrders?: SlotOrderUncheckedCreateNestedManyWithoutSlotInput
  }

  export type SlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    slotSize?: EnumSlotSizeFieldUpdateOperationsInput | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrders?: SlotOrderUpdateManyWithoutSlotNestedInput
  }

  export type SlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    slotSize?: EnumSlotSizeFieldUpdateOperationsInput | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrders?: SlotOrderUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type SlotCreateManyInput = {
    id?: string
    slotNumber: string
    slotSize?: $Enums.SlotSize
    slotStatus?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    slotSize?: EnumSlotSizeFieldUpdateOperationsInput | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    slotSize?: EnumSlotSizeFieldUpdateOperationsInput | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOrderCreateInput = {
    id?: string
    vehicleId: string
    createdAt?: Date | string
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
    slot: SlotCreateNestedOneWithoutSlotOrdersInput
    slotCustomer?: UserCreateNestedOneWithoutSlotOrdersInput
    slotVehicle?: VehicleCreateNestedOneWithoutSlotOrderInput
  }

  export type SlotOrderUncheckedCreateInput = {
    id?: string
    slotId: string
    vehicleId: string
    createdAt?: Date | string
    slotCustomerId?: string | null
    slotVehicleId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type SlotOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
    slot?: SlotUpdateOneRequiredWithoutSlotOrdersNestedInput
    slotCustomer?: UserUpdateOneWithoutSlotOrdersNestedInput
    slotVehicle?: VehicleUpdateOneWithoutSlotOrderNestedInput
  }

  export type SlotOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    slotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type SlotOrderCreateManyInput = {
    id?: string
    slotId: string
    vehicleId: string
    createdAt?: Date | string
    slotCustomerId?: string | null
    slotVehicleId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type SlotOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type SlotOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    slotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type SlotOrderListRelationFilter = {
    every?: SlotOrderWhereInput
    some?: SlotOrderWhereInput
    none?: SlotOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlotOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    vehicleYear?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    vehicleYear?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSlotSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotSize | EnumSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotSizeFilter<$PrismaModel> | $Enums.SlotSize
  }

  export type EnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type SlotCountOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    slotSize?: SortOrder
    slotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotMaxOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    slotSize?: SortOrder
    slotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotMinOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    slotSize?: SortOrder
    slotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSlotSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotSize | EnumSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotSizeWithAggregatesFilter<$PrismaModel> | $Enums.SlotSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotSizeFilter<$PrismaModel>
    _max?: NestedEnumSlotSizeFilter<$PrismaModel>
  }

  export type EnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type EnumSlotOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotOrderStatus | EnumSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotOrderStatusFilter<$PrismaModel> | $Enums.SlotOrderStatus
  }

  export type SlotScalarRelationFilter = {
    is?: SlotWhereInput
    isNot?: SlotWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type SlotOrderCountOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    slotCustomerId?: SortOrder
    slotVehicleId?: SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    updatedAt?: SortOrder
    slotOrderStatus?: SortOrder
  }

  export type SlotOrderAvgOrderByAggregateInput = {
    pricePerHour?: SortOrder
    hours?: SortOrder
  }

  export type SlotOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    slotCustomerId?: SortOrder
    slotVehicleId?: SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    updatedAt?: SortOrder
    slotOrderStatus?: SortOrder
  }

  export type SlotOrderMinOrderByAggregateInput = {
    id?: SortOrder
    slotId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    slotCustomerId?: SortOrder
    slotVehicleId?: SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    updatedAt?: SortOrder
    slotOrderStatus?: SortOrder
  }

  export type SlotOrderSumOrderByAggregateInput = {
    pricePerHour?: SortOrder
    hours?: SortOrder
  }

  export type EnumSlotOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotOrderStatus | EnumSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotOrderStatusFilter<$PrismaModel>
  }

  export type VehicleCreateNestedManyWithoutVehicleOwnerInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type SlotOrderCreateNestedManyWithoutSlotCustomerInput = {
    create?: XOR<SlotOrderCreateWithoutSlotCustomerInput, SlotOrderUncheckedCreateWithoutSlotCustomerInput> | SlotOrderCreateWithoutSlotCustomerInput[] | SlotOrderUncheckedCreateWithoutSlotCustomerInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotCustomerInput | SlotOrderCreateOrConnectWithoutSlotCustomerInput[]
    createMany?: SlotOrderCreateManySlotCustomerInputEnvelope
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutVehicleOwnerInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type SlotOrderUncheckedCreateNestedManyWithoutSlotCustomerInput = {
    create?: XOR<SlotOrderCreateWithoutSlotCustomerInput, SlotOrderUncheckedCreateWithoutSlotCustomerInput> | SlotOrderCreateWithoutSlotCustomerInput[] | SlotOrderUncheckedCreateWithoutSlotCustomerInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotCustomerInput | SlotOrderCreateOrConnectWithoutSlotCustomerInput[]
    createMany?: SlotOrderCreateManySlotCustomerInputEnvelope
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VehicleUpdateManyWithoutVehicleOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleOwnerInput | VehicleUpdateManyWithWhereWithoutVehicleOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type SlotOrderUpdateManyWithoutSlotCustomerNestedInput = {
    create?: XOR<SlotOrderCreateWithoutSlotCustomerInput, SlotOrderUncheckedCreateWithoutSlotCustomerInput> | SlotOrderCreateWithoutSlotCustomerInput[] | SlotOrderUncheckedCreateWithoutSlotCustomerInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotCustomerInput | SlotOrderCreateOrConnectWithoutSlotCustomerInput[]
    upsert?: SlotOrderUpsertWithWhereUniqueWithoutSlotCustomerInput | SlotOrderUpsertWithWhereUniqueWithoutSlotCustomerInput[]
    createMany?: SlotOrderCreateManySlotCustomerInputEnvelope
    set?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    disconnect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    delete?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    update?: SlotOrderUpdateWithWhereUniqueWithoutSlotCustomerInput | SlotOrderUpdateWithWhereUniqueWithoutSlotCustomerInput[]
    updateMany?: SlotOrderUpdateManyWithWhereWithoutSlotCustomerInput | SlotOrderUpdateManyWithWhereWithoutSlotCustomerInput[]
    deleteMany?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleOwnerInput | VehicleUpdateManyWithWhereWithoutVehicleOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type SlotOrderUncheckedUpdateManyWithoutSlotCustomerNestedInput = {
    create?: XOR<SlotOrderCreateWithoutSlotCustomerInput, SlotOrderUncheckedCreateWithoutSlotCustomerInput> | SlotOrderCreateWithoutSlotCustomerInput[] | SlotOrderUncheckedCreateWithoutSlotCustomerInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotCustomerInput | SlotOrderCreateOrConnectWithoutSlotCustomerInput[]
    upsert?: SlotOrderUpsertWithWhereUniqueWithoutSlotCustomerInput | SlotOrderUpsertWithWhereUniqueWithoutSlotCustomerInput[]
    createMany?: SlotOrderCreateManySlotCustomerInputEnvelope
    set?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    disconnect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    delete?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    update?: SlotOrderUpdateWithWhereUniqueWithoutSlotCustomerInput | SlotOrderUpdateWithWhereUniqueWithoutSlotCustomerInput[]
    updateMany?: SlotOrderUpdateManyWithWhereWithoutSlotCustomerInput | SlotOrderUpdateManyWithWhereWithoutSlotCustomerInput[]
    deleteMany?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type SlotOrderCreateNestedManyWithoutSlotVehicleInput = {
    create?: XOR<SlotOrderCreateWithoutSlotVehicleInput, SlotOrderUncheckedCreateWithoutSlotVehicleInput> | SlotOrderCreateWithoutSlotVehicleInput[] | SlotOrderUncheckedCreateWithoutSlotVehicleInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotVehicleInput | SlotOrderCreateOrConnectWithoutSlotVehicleInput[]
    createMany?: SlotOrderCreateManySlotVehicleInputEnvelope
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
  }

  export type SlotOrderUncheckedCreateNestedManyWithoutSlotVehicleInput = {
    create?: XOR<SlotOrderCreateWithoutSlotVehicleInput, SlotOrderUncheckedCreateWithoutSlotVehicleInput> | SlotOrderCreateWithoutSlotVehicleInput[] | SlotOrderUncheckedCreateWithoutSlotVehicleInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotVehicleInput | SlotOrderCreateOrConnectWithoutSlotVehicleInput[]
    createMany?: SlotOrderCreateManySlotVehicleInputEnvelope
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type SlotOrderUpdateManyWithoutSlotVehicleNestedInput = {
    create?: XOR<SlotOrderCreateWithoutSlotVehicleInput, SlotOrderUncheckedCreateWithoutSlotVehicleInput> | SlotOrderCreateWithoutSlotVehicleInput[] | SlotOrderUncheckedCreateWithoutSlotVehicleInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotVehicleInput | SlotOrderCreateOrConnectWithoutSlotVehicleInput[]
    upsert?: SlotOrderUpsertWithWhereUniqueWithoutSlotVehicleInput | SlotOrderUpsertWithWhereUniqueWithoutSlotVehicleInput[]
    createMany?: SlotOrderCreateManySlotVehicleInputEnvelope
    set?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    disconnect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    delete?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    update?: SlotOrderUpdateWithWhereUniqueWithoutSlotVehicleInput | SlotOrderUpdateWithWhereUniqueWithoutSlotVehicleInput[]
    updateMany?: SlotOrderUpdateManyWithWhereWithoutSlotVehicleInput | SlotOrderUpdateManyWithWhereWithoutSlotVehicleInput[]
    deleteMany?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
  }

  export type SlotOrderUncheckedUpdateManyWithoutSlotVehicleNestedInput = {
    create?: XOR<SlotOrderCreateWithoutSlotVehicleInput, SlotOrderUncheckedCreateWithoutSlotVehicleInput> | SlotOrderCreateWithoutSlotVehicleInput[] | SlotOrderUncheckedCreateWithoutSlotVehicleInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotVehicleInput | SlotOrderCreateOrConnectWithoutSlotVehicleInput[]
    upsert?: SlotOrderUpsertWithWhereUniqueWithoutSlotVehicleInput | SlotOrderUpsertWithWhereUniqueWithoutSlotVehicleInput[]
    createMany?: SlotOrderCreateManySlotVehicleInputEnvelope
    set?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    disconnect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    delete?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    update?: SlotOrderUpdateWithWhereUniqueWithoutSlotVehicleInput | SlotOrderUpdateWithWhereUniqueWithoutSlotVehicleInput[]
    updateMany?: SlotOrderUpdateManyWithWhereWithoutSlotVehicleInput | SlotOrderUpdateManyWithWhereWithoutSlotVehicleInput[]
    deleteMany?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
  }

  export type SlotOrderCreateNestedManyWithoutSlotInput = {
    create?: XOR<SlotOrderCreateWithoutSlotInput, SlotOrderUncheckedCreateWithoutSlotInput> | SlotOrderCreateWithoutSlotInput[] | SlotOrderUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotInput | SlotOrderCreateOrConnectWithoutSlotInput[]
    createMany?: SlotOrderCreateManySlotInputEnvelope
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
  }

  export type SlotOrderUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<SlotOrderCreateWithoutSlotInput, SlotOrderUncheckedCreateWithoutSlotInput> | SlotOrderCreateWithoutSlotInput[] | SlotOrderUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotInput | SlotOrderCreateOrConnectWithoutSlotInput[]
    createMany?: SlotOrderCreateManySlotInputEnvelope
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
  }

  export type EnumSlotSizeFieldUpdateOperationsInput = {
    set?: $Enums.SlotSize
  }

  export type EnumSlotStatusFieldUpdateOperationsInput = {
    set?: $Enums.SlotStatus
  }

  export type SlotOrderUpdateManyWithoutSlotNestedInput = {
    create?: XOR<SlotOrderCreateWithoutSlotInput, SlotOrderUncheckedCreateWithoutSlotInput> | SlotOrderCreateWithoutSlotInput[] | SlotOrderUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotInput | SlotOrderCreateOrConnectWithoutSlotInput[]
    upsert?: SlotOrderUpsertWithWhereUniqueWithoutSlotInput | SlotOrderUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: SlotOrderCreateManySlotInputEnvelope
    set?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    disconnect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    delete?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    update?: SlotOrderUpdateWithWhereUniqueWithoutSlotInput | SlotOrderUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: SlotOrderUpdateManyWithWhereWithoutSlotInput | SlotOrderUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
  }

  export type SlotOrderUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<SlotOrderCreateWithoutSlotInput, SlotOrderUncheckedCreateWithoutSlotInput> | SlotOrderCreateWithoutSlotInput[] | SlotOrderUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: SlotOrderCreateOrConnectWithoutSlotInput | SlotOrderCreateOrConnectWithoutSlotInput[]
    upsert?: SlotOrderUpsertWithWhereUniqueWithoutSlotInput | SlotOrderUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: SlotOrderCreateManySlotInputEnvelope
    set?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    disconnect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    delete?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    connect?: SlotOrderWhereUniqueInput | SlotOrderWhereUniqueInput[]
    update?: SlotOrderUpdateWithWhereUniqueWithoutSlotInput | SlotOrderUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: SlotOrderUpdateManyWithWhereWithoutSlotInput | SlotOrderUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
  }

  export type SlotCreateNestedOneWithoutSlotOrdersInput = {
    create?: XOR<SlotCreateWithoutSlotOrdersInput, SlotUncheckedCreateWithoutSlotOrdersInput>
    connectOrCreate?: SlotCreateOrConnectWithoutSlotOrdersInput
    connect?: SlotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSlotOrdersInput = {
    create?: XOR<UserCreateWithoutSlotOrdersInput, UserUncheckedCreateWithoutSlotOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSlotOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutSlotOrderInput = {
    create?: XOR<VehicleCreateWithoutSlotOrderInput, VehicleUncheckedCreateWithoutSlotOrderInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSlotOrderInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumSlotOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.SlotOrderStatus
  }

  export type SlotUpdateOneRequiredWithoutSlotOrdersNestedInput = {
    create?: XOR<SlotCreateWithoutSlotOrdersInput, SlotUncheckedCreateWithoutSlotOrdersInput>
    connectOrCreate?: SlotCreateOrConnectWithoutSlotOrdersInput
    upsert?: SlotUpsertWithoutSlotOrdersInput
    connect?: SlotWhereUniqueInput
    update?: XOR<XOR<SlotUpdateToOneWithWhereWithoutSlotOrdersInput, SlotUpdateWithoutSlotOrdersInput>, SlotUncheckedUpdateWithoutSlotOrdersInput>
  }

  export type UserUpdateOneWithoutSlotOrdersNestedInput = {
    create?: XOR<UserCreateWithoutSlotOrdersInput, UserUncheckedCreateWithoutSlotOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSlotOrdersInput
    upsert?: UserUpsertWithoutSlotOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSlotOrdersInput, UserUpdateWithoutSlotOrdersInput>, UserUncheckedUpdateWithoutSlotOrdersInput>
  }

  export type VehicleUpdateOneWithoutSlotOrderNestedInput = {
    create?: XOR<VehicleCreateWithoutSlotOrderInput, VehicleUncheckedCreateWithoutSlotOrderInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSlotOrderInput
    upsert?: VehicleUpsertWithoutSlotOrderInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutSlotOrderInput, VehicleUpdateWithoutSlotOrderInput>, VehicleUncheckedUpdateWithoutSlotOrderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSlotSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotSize | EnumSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotSizeFilter<$PrismaModel> | $Enums.SlotSize
  }

  export type NestedEnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type NestedEnumSlotSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotSize | EnumSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotSize[] | ListEnumSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotSizeWithAggregatesFilter<$PrismaModel> | $Enums.SlotSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotSizeFilter<$PrismaModel>
    _max?: NestedEnumSlotSizeFilter<$PrismaModel>
  }

  export type NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type NestedEnumSlotOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotOrderStatus | EnumSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotOrderStatusFilter<$PrismaModel> | $Enums.SlotOrderStatus
  }

  export type NestedEnumSlotOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotOrderStatus | EnumSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotOrderStatus[] | ListEnumSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotOrderStatusFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutVehicleOwnerInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slotOrder?: SlotOrderCreateNestedManyWithoutSlotVehicleInput
  }

  export type VehicleUncheckedCreateWithoutVehicleOwnerInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slotOrder?: SlotOrderUncheckedCreateNestedManyWithoutSlotVehicleInput
  }

  export type VehicleCreateOrConnectWithoutVehicleOwnerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput>
  }

  export type VehicleCreateManyVehicleOwnerInputEnvelope = {
    data: VehicleCreateManyVehicleOwnerInput | VehicleCreateManyVehicleOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SlotOrderCreateWithoutSlotCustomerInput = {
    id?: string
    vehicleId: string
    createdAt?: Date | string
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
    slot: SlotCreateNestedOneWithoutSlotOrdersInput
    slotVehicle?: VehicleCreateNestedOneWithoutSlotOrderInput
  }

  export type SlotOrderUncheckedCreateWithoutSlotCustomerInput = {
    id?: string
    slotId: string
    vehicleId: string
    createdAt?: Date | string
    slotVehicleId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type SlotOrderCreateOrConnectWithoutSlotCustomerInput = {
    where: SlotOrderWhereUniqueInput
    create: XOR<SlotOrderCreateWithoutSlotCustomerInput, SlotOrderUncheckedCreateWithoutSlotCustomerInput>
  }

  export type SlotOrderCreateManySlotCustomerInputEnvelope = {
    data: SlotOrderCreateManySlotCustomerInput | SlotOrderCreateManySlotCustomerInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutVehicleOwnerInput, VehicleUncheckedUpdateWithoutVehicleOwnerInput>
    create: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutVehicleOwnerInput, VehicleUncheckedUpdateWithoutVehicleOwnerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutVehicleOwnerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutVehicleOwnerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vehiclePlateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringFilter<"Vehicle"> | string
    vehicleBrand?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    vehicleYear?: IntFilter<"Vehicle"> | number
    vehicleOwnerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type SlotOrderUpsertWithWhereUniqueWithoutSlotCustomerInput = {
    where: SlotOrderWhereUniqueInput
    update: XOR<SlotOrderUpdateWithoutSlotCustomerInput, SlotOrderUncheckedUpdateWithoutSlotCustomerInput>
    create: XOR<SlotOrderCreateWithoutSlotCustomerInput, SlotOrderUncheckedCreateWithoutSlotCustomerInput>
  }

  export type SlotOrderUpdateWithWhereUniqueWithoutSlotCustomerInput = {
    where: SlotOrderWhereUniqueInput
    data: XOR<SlotOrderUpdateWithoutSlotCustomerInput, SlotOrderUncheckedUpdateWithoutSlotCustomerInput>
  }

  export type SlotOrderUpdateManyWithWhereWithoutSlotCustomerInput = {
    where: SlotOrderScalarWhereInput
    data: XOR<SlotOrderUpdateManyMutationInput, SlotOrderUncheckedUpdateManyWithoutSlotCustomerInput>
  }

  export type SlotOrderScalarWhereInput = {
    AND?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
    OR?: SlotOrderScalarWhereInput[]
    NOT?: SlotOrderScalarWhereInput | SlotOrderScalarWhereInput[]
    id?: StringFilter<"SlotOrder"> | string
    slotId?: StringFilter<"SlotOrder"> | string
    vehicleId?: StringFilter<"SlotOrder"> | string
    createdAt?: DateTimeFilter<"SlotOrder"> | Date | string
    slotCustomerId?: StringNullableFilter<"SlotOrder"> | string | null
    slotVehicleId?: StringNullableFilter<"SlotOrder"> | string | null
    pricePerHour?: IntFilter<"SlotOrder"> | number
    hours?: IntFilter<"SlotOrder"> | number
    updatedAt?: DateTimeFilter<"SlotOrder"> | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFilter<"SlotOrder"> | $Enums.SlotOrderStatus
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    slotOrders?: SlotOrderCreateNestedManyWithoutSlotCustomerInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    slotOrders?: SlotOrderUncheckedCreateNestedManyWithoutSlotCustomerInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type SlotOrderCreateWithoutSlotVehicleInput = {
    id?: string
    vehicleId: string
    createdAt?: Date | string
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
    slot: SlotCreateNestedOneWithoutSlotOrdersInput
    slotCustomer?: UserCreateNestedOneWithoutSlotOrdersInput
  }

  export type SlotOrderUncheckedCreateWithoutSlotVehicleInput = {
    id?: string
    slotId: string
    vehicleId: string
    createdAt?: Date | string
    slotCustomerId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type SlotOrderCreateOrConnectWithoutSlotVehicleInput = {
    where: SlotOrderWhereUniqueInput
    create: XOR<SlotOrderCreateWithoutSlotVehicleInput, SlotOrderUncheckedCreateWithoutSlotVehicleInput>
  }

  export type SlotOrderCreateManySlotVehicleInputEnvelope = {
    data: SlotOrderCreateManySlotVehicleInput | SlotOrderCreateManySlotVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slotOrders?: SlotOrderUpdateManyWithoutSlotCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slotOrders?: SlotOrderUncheckedUpdateManyWithoutSlotCustomerNestedInput
  }

  export type SlotOrderUpsertWithWhereUniqueWithoutSlotVehicleInput = {
    where: SlotOrderWhereUniqueInput
    update: XOR<SlotOrderUpdateWithoutSlotVehicleInput, SlotOrderUncheckedUpdateWithoutSlotVehicleInput>
    create: XOR<SlotOrderCreateWithoutSlotVehicleInput, SlotOrderUncheckedCreateWithoutSlotVehicleInput>
  }

  export type SlotOrderUpdateWithWhereUniqueWithoutSlotVehicleInput = {
    where: SlotOrderWhereUniqueInput
    data: XOR<SlotOrderUpdateWithoutSlotVehicleInput, SlotOrderUncheckedUpdateWithoutSlotVehicleInput>
  }

  export type SlotOrderUpdateManyWithWhereWithoutSlotVehicleInput = {
    where: SlotOrderScalarWhereInput
    data: XOR<SlotOrderUpdateManyMutationInput, SlotOrderUncheckedUpdateManyWithoutSlotVehicleInput>
  }

  export type SlotOrderCreateWithoutSlotInput = {
    id?: string
    vehicleId: string
    createdAt?: Date | string
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
    slotCustomer?: UserCreateNestedOneWithoutSlotOrdersInput
    slotVehicle?: VehicleCreateNestedOneWithoutSlotOrderInput
  }

  export type SlotOrderUncheckedCreateWithoutSlotInput = {
    id?: string
    vehicleId: string
    createdAt?: Date | string
    slotCustomerId?: string | null
    slotVehicleId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type SlotOrderCreateOrConnectWithoutSlotInput = {
    where: SlotOrderWhereUniqueInput
    create: XOR<SlotOrderCreateWithoutSlotInput, SlotOrderUncheckedCreateWithoutSlotInput>
  }

  export type SlotOrderCreateManySlotInputEnvelope = {
    data: SlotOrderCreateManySlotInput | SlotOrderCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type SlotOrderUpsertWithWhereUniqueWithoutSlotInput = {
    where: SlotOrderWhereUniqueInput
    update: XOR<SlotOrderUpdateWithoutSlotInput, SlotOrderUncheckedUpdateWithoutSlotInput>
    create: XOR<SlotOrderCreateWithoutSlotInput, SlotOrderUncheckedCreateWithoutSlotInput>
  }

  export type SlotOrderUpdateWithWhereUniqueWithoutSlotInput = {
    where: SlotOrderWhereUniqueInput
    data: XOR<SlotOrderUpdateWithoutSlotInput, SlotOrderUncheckedUpdateWithoutSlotInput>
  }

  export type SlotOrderUpdateManyWithWhereWithoutSlotInput = {
    where: SlotOrderScalarWhereInput
    data: XOR<SlotOrderUpdateManyMutationInput, SlotOrderUncheckedUpdateManyWithoutSlotInput>
  }

  export type SlotCreateWithoutSlotOrdersInput = {
    id?: string
    slotNumber: string
    slotSize?: $Enums.SlotSize
    slotStatus?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotUncheckedCreateWithoutSlotOrdersInput = {
    id?: string
    slotNumber: string
    slotSize?: $Enums.SlotSize
    slotStatus?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotCreateOrConnectWithoutSlotOrdersInput = {
    where: SlotWhereUniqueInput
    create: XOR<SlotCreateWithoutSlotOrdersInput, SlotUncheckedCreateWithoutSlotOrdersInput>
  }

  export type UserCreateWithoutSlotOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleCreateNestedManyWithoutVehicleOwnerInput
  }

  export type UserUncheckedCreateWithoutSlotOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutVehicleOwnerInput
  }

  export type UserCreateOrConnectWithoutSlotOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSlotOrdersInput, UserUncheckedCreateWithoutSlotOrdersInput>
  }

  export type VehicleCreateWithoutSlotOrderInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleOwner: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutSlotOrderInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutSlotOrderInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutSlotOrderInput, VehicleUncheckedCreateWithoutSlotOrderInput>
  }

  export type SlotUpsertWithoutSlotOrdersInput = {
    update: XOR<SlotUpdateWithoutSlotOrdersInput, SlotUncheckedUpdateWithoutSlotOrdersInput>
    create: XOR<SlotCreateWithoutSlotOrdersInput, SlotUncheckedCreateWithoutSlotOrdersInput>
    where?: SlotWhereInput
  }

  export type SlotUpdateToOneWithWhereWithoutSlotOrdersInput = {
    where?: SlotWhereInput
    data: XOR<SlotUpdateWithoutSlotOrdersInput, SlotUncheckedUpdateWithoutSlotOrdersInput>
  }

  export type SlotUpdateWithoutSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    slotSize?: EnumSlotSizeFieldUpdateOperationsInput | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotUncheckedUpdateWithoutSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    slotSize?: EnumSlotSizeFieldUpdateOperationsInput | $Enums.SlotSize
    slotStatus?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSlotOrdersInput = {
    update: XOR<UserUpdateWithoutSlotOrdersInput, UserUncheckedUpdateWithoutSlotOrdersInput>
    create: XOR<UserCreateWithoutSlotOrdersInput, UserUncheckedCreateWithoutSlotOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSlotOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSlotOrdersInput, UserUncheckedUpdateWithoutSlotOrdersInput>
  }

  export type UserUpdateWithoutSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUpdateManyWithoutVehicleOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleOwnerNestedInput
  }

  export type VehicleUpsertWithoutSlotOrderInput = {
    update: XOR<VehicleUpdateWithoutSlotOrderInput, VehicleUncheckedUpdateWithoutSlotOrderInput>
    create: XOR<VehicleCreateWithoutSlotOrderInput, VehicleUncheckedCreateWithoutSlotOrderInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutSlotOrderInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutSlotOrderInput, VehicleUncheckedUpdateWithoutSlotOrderInput>
  }

  export type VehicleUpdateWithoutSlotOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleOwner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutSlotOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    vehicleOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateManyVehicleOwnerInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotOrderCreateManySlotCustomerInput = {
    id?: string
    slotId: string
    vehicleId: string
    createdAt?: Date | string
    slotVehicleId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type VehicleUpdateWithoutVehicleOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrder?: SlotOrderUpdateManyWithoutSlotVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutVehicleOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrder?: SlotOrderUncheckedUpdateManyWithoutSlotVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOrderUpdateWithoutSlotCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
    slot?: SlotUpdateOneRequiredWithoutSlotOrdersNestedInput
    slotVehicle?: VehicleUpdateOneWithoutSlotOrderNestedInput
  }

  export type SlotOrderUncheckedUpdateWithoutSlotCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type SlotOrderUncheckedUpdateManyWithoutSlotCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type SlotOrderCreateManySlotVehicleInput = {
    id?: string
    slotId: string
    vehicleId: string
    createdAt?: Date | string
    slotCustomerId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type SlotOrderUpdateWithoutSlotVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
    slot?: SlotUpdateOneRequiredWithoutSlotOrdersNestedInput
    slotCustomer?: UserUpdateOneWithoutSlotOrdersNestedInput
  }

  export type SlotOrderUncheckedUpdateWithoutSlotVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type SlotOrderUncheckedUpdateManyWithoutSlotVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type SlotOrderCreateManySlotInput = {
    id?: string
    vehicleId: string
    createdAt?: Date | string
    slotCustomerId?: string | null
    slotVehicleId?: string | null
    pricePerHour: number
    hours: number
    updatedAt?: Date | string
    slotOrderStatus?: $Enums.SlotOrderStatus
  }

  export type SlotOrderUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
    slotCustomer?: UserUpdateOneWithoutSlotOrdersNestedInput
    slotVehicle?: VehicleUpdateOneWithoutSlotOrderNestedInput
  }

  export type SlotOrderUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    slotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }

  export type SlotOrderUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    slotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOrderStatus?: EnumSlotOrderStatusFieldUpdateOperationsInput | $Enums.SlotOrderStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}