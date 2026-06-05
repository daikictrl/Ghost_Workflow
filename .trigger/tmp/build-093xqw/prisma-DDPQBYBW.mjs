import {
  __commonJS,
  __name,
  __require,
  __toESM,
  init_esm
} from "./chunk-5A2LE32G.mjs";

// node_modules/@prisma/client-runtime-utils/dist/index.js
var require_dist = __commonJS({
  "node_modules/@prisma/client-runtime-utils/dist/index.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name2 in all)
        __defProp2(target, name2, { get: all[name2], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod2) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod2), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      AnyNull: /* @__PURE__ */ __name(() => AnyNull3, "AnyNull"),
      AnyNullClass: /* @__PURE__ */ __name(() => AnyNullClass, "AnyNullClass"),
      DbNull: /* @__PURE__ */ __name(() => DbNull3, "DbNull"),
      DbNullClass: /* @__PURE__ */ __name(() => DbNullClass, "DbNullClass"),
      Decimal: /* @__PURE__ */ __name(() => Decimal3, "Decimal"),
      JsonNull: /* @__PURE__ */ __name(() => JsonNull3, "JsonNull"),
      JsonNullClass: /* @__PURE__ */ __name(() => JsonNullClass, "JsonNullClass"),
      NullTypes: /* @__PURE__ */ __name(() => NullTypes4, "NullTypes"),
      ObjectEnumValue: /* @__PURE__ */ __name(() => ObjectEnumValue2, "ObjectEnumValue"),
      PrismaClientInitializationError: /* @__PURE__ */ __name(() => PrismaClientInitializationError3, "PrismaClientInitializationError"),
      PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => PrismaClientKnownRequestError3, "PrismaClientKnownRequestError"),
      PrismaClientRustError: /* @__PURE__ */ __name(() => PrismaClientRustError, "PrismaClientRustError"),
      PrismaClientRustPanicError: /* @__PURE__ */ __name(() => PrismaClientRustPanicError3, "PrismaClientRustPanicError"),
      PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => PrismaClientUnknownRequestError3, "PrismaClientUnknownRequestError"),
      PrismaClientValidationError: /* @__PURE__ */ __name(() => PrismaClientValidationError3, "PrismaClientValidationError"),
      Sql: /* @__PURE__ */ __name(() => Sql3, "Sql"),
      empty: /* @__PURE__ */ __name(() => empty3, "empty"),
      hasBatchIndex: /* @__PURE__ */ __name(() => hasBatchIndex, "hasBatchIndex"),
      isAnyNull: /* @__PURE__ */ __name(() => isAnyNull2, "isAnyNull"),
      isDbNull: /* @__PURE__ */ __name(() => isDbNull2, "isDbNull"),
      isJsonNull: /* @__PURE__ */ __name(() => isJsonNull2, "isJsonNull"),
      isObjectEnumValue: /* @__PURE__ */ __name(() => isObjectEnumValue2, "isObjectEnumValue"),
      join: /* @__PURE__ */ __name(() => join3, "join"),
      raw: /* @__PURE__ */ __name(() => raw3, "raw"),
      sql: /* @__PURE__ */ __name(() => sql, "sql")
    });
    module.exports = __toCommonJS(index_exports);
    function hasBatchIndex(value) {
      return typeof value["batchRequestIdx"] === "number";
    }
    __name(hasBatchIndex, "hasBatchIndex");
    function setClassName(classObject, name2) {
      Object.defineProperty(classObject, "name", {
        value: name2,
        configurable: true
      });
    }
    __name(setClassName, "setClassName");
    var PrismaClientInitializationError3 = class _PrismaClientInitializationError extends Error {
      static {
        __name(this, "_PrismaClientInitializationError");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(message, clientVersion, errorCode) {
        super(message);
        this.name = "PrismaClientInitializationError";
        this.clientVersion = clientVersion;
        this.errorCode = errorCode;
        Error.captureStackTrace(_PrismaClientInitializationError);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    setClassName(PrismaClientInitializationError3, "PrismaClientInitializationError");
    var PrismaClientKnownRequestError3 = class extends Error {
      static {
        __name(this, "PrismaClientKnownRequestError");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientKnownRequestError";
        this.code = code;
        this.clientVersion = clientVersion;
        this.meta = meta;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          enumerable: false,
          writable: true
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    setClassName(PrismaClientKnownRequestError3, "PrismaClientKnownRequestError");
    function getBacktrace(log3) {
      if (log3.fields?.message) {
        let str = log3.fields?.message;
        if (log3.fields?.file) {
          str += ` in ${log3.fields.file}`;
          if (log3.fields?.line) {
            str += `:${log3.fields.line}`;
          }
          if (log3.fields?.column) {
            str += `:${log3.fields.column}`;
          }
        }
        if (log3.fields?.reason) {
          str += `
${log3.fields?.reason}`;
        }
        return str;
      }
      return "Unknown error";
    }
    __name(getBacktrace, "getBacktrace");
    function isPanic(err) {
      return err.fields?.message === "PANIC";
    }
    __name(isPanic, "isPanic");
    var PrismaClientRustError = class extends Error {
      static {
        __name(this, "PrismaClientRustError");
      }
      clientVersion;
      _isPanic;
      constructor({ clientVersion, error }) {
        const backtrace = getBacktrace(error);
        super(backtrace ?? "Unknown error");
        this._isPanic = isPanic(error);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustError";
      }
      isPanic() {
        return this._isPanic;
      }
    };
    setClassName(PrismaClientRustError, "PrismaClientRustError");
    var PrismaClientRustPanicError3 = class extends Error {
      static {
        __name(this, "PrismaClientRustPanicError");
      }
      clientVersion;
      constructor(message, clientVersion) {
        super(message);
        this.name = "PrismaClientRustPanicError";
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    setClassName(PrismaClientRustPanicError3, "PrismaClientRustPanicError");
    var PrismaClientUnknownRequestError3 = class extends Error {
      static {
        __name(this, "PrismaClientUnknownRequestError");
      }
      clientVersion;
      batchRequestIdx;
      constructor(message, { clientVersion, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientUnknownRequestError";
        this.clientVersion = clientVersion;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          writable: true,
          enumerable: false
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    setClassName(PrismaClientUnknownRequestError3, "PrismaClientUnknownRequestError");
    var PrismaClientValidationError3 = class extends Error {
      static {
        __name(this, "PrismaClientValidationError");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(message, { clientVersion }) {
        super(message);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    setClassName(PrismaClientValidationError3, "PrismaClientValidationError");
    var secret = Symbol();
    var PRISMA_OBJECT_ENUM_VALUE = Symbol.for("prisma.objectEnumValue");
    var ObjectEnumValue2 = class {
      static {
        __name(this, "ObjectEnumValue");
      }
      [PRISMA_OBJECT_ENUM_VALUE] = true;
      #representation;
      constructor(arg) {
        if (arg === secret) {
          this.#representation = `Prisma.${this._getName()}`;
        } else {
          this.#representation = `new Prisma.${this._getNamespace()}.${this._getName()}()`;
        }
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return this.#representation;
      }
    };
    function setClassName2(classObject, name2) {
      Object.defineProperty(classObject, "name", {
        value: name2,
        configurable: true
      });
    }
    __name(setClassName2, "setClassName2");
    var NullTypesEnumValue = class extends ObjectEnumValue2 {
      static {
        __name(this, "NullTypesEnumValue");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var DbNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "DbNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_DbNull;
    };
    setClassName2(DbNullClass, "DbNull");
    var JsonNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "JsonNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_JsonNull;
    };
    setClassName2(JsonNullClass, "JsonNull");
    var AnyNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "AnyNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_AnyNull;
    };
    setClassName2(AnyNullClass, "AnyNull");
    var NullTypes4 = {
      DbNull: DbNullClass,
      JsonNull: JsonNullClass,
      AnyNull: AnyNullClass
    };
    var DbNull3 = new DbNullClass(secret);
    var JsonNull3 = new JsonNullClass(secret);
    var AnyNull3 = new AnyNullClass(secret);
    function isObjectEnumValue2(value) {
      return typeof value === "object" && value !== null && value[PRISMA_OBJECT_ENUM_VALUE] === true;
    }
    __name(isObjectEnumValue2, "isObjectEnumValue");
    function isDbNull2(value) {
      return value === DbNull3;
    }
    __name(isDbNull2, "isDbNull");
    function isJsonNull2(value) {
      return value === JsonNull3;
    }
    __name(isJsonNull2, "isJsonNull");
    function isAnyNull2(value) {
      return value === AnyNull3;
    }
    __name(isAnyNull2, "isAnyNull");
    var EXP_LIMIT = 9e15;
    var MAX_DIGITS = 1e9;
    var NUMERALS = "0123456789abcdef";
    var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var DEFAULTS = {
      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.
      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,
      // 1 to MAX_DIGITS
      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,
      // 0 to 8
      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,
      // 0 to 9
      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,
      // 0 to -EXP_LIMIT
      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos: 21,
      // 0 to EXP_LIMIT
      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,
      // -1 to -EXP_LIMIT
      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,
      // 1 to EXP_LIMIT
      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false
      // true/false
    };
    var inexact;
    var quadrant;
    var external = true;
    var decimalError = "[DecimalError] ";
    var invalidArgument = decimalError + "Invalid argument: ";
    var precisionLimitExceeded = decimalError + "Precision limit exceeded";
    var cryptoUnavailable = decimalError + "crypto unavailable";
    var tag = "[object Decimal]";
    var mathfloor = Math.floor;
    var mathpow = Math.pow;
    var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var BASE = 1e7;
    var LOG_BASE = 7;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var LN10_PRECISION = LN10.length - 1;
    var PI_PRECISION = PI.length - 1;
    var P2 = { toStringTag: tag };
    P2.absoluteValue = P2.abs = function() {
      var x2 = new this.constructor(this);
      if (x2.s < 0) x2.s = 1;
      return finalise(x2);
    };
    P2.ceil = function() {
      return finalise(new this.constructor(this), this.e + 1, 2);
    };
    P2.clampedTo = P2.clamp = function(min2, max2) {
      var k2, x2 = this, Ctor = x2.constructor;
      min2 = new Ctor(min2);
      max2 = new Ctor(max2);
      if (!min2.s || !max2.s) return new Ctor(NaN);
      if (min2.gt(max2)) throw Error(invalidArgument + max2);
      k2 = x2.cmp(min2);
      return k2 < 0 ? min2 : x2.cmp(max2) > 0 ? max2 : new Ctor(x2);
    };
    P2.comparedTo = P2.cmp = function(y) {
      var i, j, xdL, ydL, x2 = this, xd = x2.d, yd = (y = new x2.constructor(y)).d, xs = x2.s, ys = y.s;
      if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
      }
      if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
      if (xs !== ys) return xs;
      if (x2.e !== y.e) return x2.e > y.e ^ xs < 0 ? 1 : -1;
      xdL = xd.length;
      ydL = yd.length;
      for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
        if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
      }
      return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    };
    P2.cosine = P2.cos = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.d) return new Ctor(NaN);
      if (!x2.d[0]) return new Ctor(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x2 = cosine(Ctor, toLessThanHalfPi(Ctor, x2));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 3 ? x2.neg() : x2, pr, rm, true);
    };
    P2.cubeRoot = P2.cbrt = function() {
      var e, m, n, r, rep, s, sd, t, t3, t3plusx, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      external = false;
      s = x2.s * mathpow(x2.s * x2, 1 / 3);
      if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x2.d);
        e = x2.e;
        if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
        s = mathpow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
        r.s = x2.s;
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x2);
        r = divide(t3plusx.plus(x2).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).times(t).eq(x2)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).times(r).eq(x2);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P2.decimalPlaces = P2.dp = function() {
      var w2, d = this.d, n = NaN;
      if (d) {
        w2 = d.length - 1;
        n = (w2 - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w2 = d[w2];
        if (w2) for (; w2 % 10 == 0; w2 /= 10) n--;
        if (n < 0) n = 0;
      }
      return n;
    };
    P2.dividedBy = P2.div = function(y) {
      return divide(this, new this.constructor(y));
    };
    P2.dividedToIntegerBy = P2.divToInt = function(y) {
      var x2 = this, Ctor = x2.constructor;
      return finalise(divide(x2, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    };
    P2.equals = P2.eq = function(y) {
      return this.cmp(y) === 0;
    };
    P2.floor = function() {
      return finalise(new this.constructor(this), this.e + 1, 3);
    };
    P2.greaterThan = P2.gt = function(y) {
      return this.cmp(y) > 0;
    };
    P2.greaterThanOrEqualTo = P2.gte = function(y) {
      var k2 = this.cmp(y);
      return k2 == 1 || k2 === 0;
    };
    P2.hyperbolicCosine = P2.cosh = function() {
      var k2, n, pr, rm, len, x2 = this, Ctor = x2.constructor, one = new Ctor(1);
      if (!x2.isFinite()) return new Ctor(x2.s ? 1 / 0 : NaN);
      if (x2.isZero()) return one;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + 4;
      Ctor.rounding = 1;
      len = x2.d.length;
      if (len < 32) {
        k2 = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k2)).toString();
      } else {
        k2 = 16;
        n = "2.3283064365386962890625e-10";
      }
      x2 = taylorSeries(Ctor, 1, x2.times(n), new Ctor(1), true);
      var cosh2_x, i = k2, d8 = new Ctor(8);
      for (; i--; ) {
        cosh2_x = x2.times(x2);
        x2 = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
      }
      return finalise(x2, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P2.hyperbolicSine = P2.sinh = function() {
      var k2, pr, rm, len, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + 4;
      Ctor.rounding = 1;
      len = x2.d.length;
      if (len < 3) {
        x2 = taylorSeries(Ctor, 2, x2, x2, true);
      } else {
        k2 = 1.4 * Math.sqrt(len);
        k2 = k2 > 16 ? 16 : k2 | 0;
        x2 = x2.times(1 / tinyPow(5, k2));
        x2 = taylorSeries(Ctor, 2, x2, x2, true);
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for (; k2--; ) {
          sinh2_x = x2.times(x2);
          x2 = x2.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
      }
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(x2, pr, rm, true);
    };
    P2.hyperbolicTangent = P2.tanh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(x2.s);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 7;
      Ctor.rounding = 1;
      return divide(x2.sinh(), x2.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
    };
    P2.inverseCosine = P2.acos = function() {
      var x2 = this, Ctor = x2.constructor, k2 = x2.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
      if (k2 !== -1) {
        return k2 === 0 ? x2.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
      }
      if (x2.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x2 = new Ctor(1).minus(x2).div(x2.plus(1)).sqrt().atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(2);
    };
    P2.inverseHyperbolicCosine = P2.acosh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (x2.lte(1)) return new Ctor(x2.eq(1) ? 0 : NaN);
      if (!x2.isFinite()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(Math.abs(x2.e), x2.sd()) + 4;
      Ctor.rounding = 1;
      external = false;
      x2 = x2.times(x2).minus(1).sqrt().plus(x2);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.ln();
    };
    P2.inverseHyperbolicSine = P2.asinh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 2 * Math.max(Math.abs(x2.e), x2.sd()) + 6;
      Ctor.rounding = 1;
      external = false;
      x2 = x2.times(x2).plus(1).sqrt().plus(x2);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.ln();
    };
    P2.inverseHyperbolicTangent = P2.atanh = function() {
      var pr, rm, wpr, xsd, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.e >= 0) return new Ctor(x2.abs().eq(1) ? x2.s / 0 : x2.isZero() ? x2 : NaN);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      xsd = x2.sd();
      if (Math.max(xsd, pr) < 2 * -x2.e - 1) return finalise(new Ctor(x2), pr, rm, true);
      Ctor.precision = wpr = xsd - x2.e;
      x2 = divide(x2.plus(1), new Ctor(1).minus(x2), wpr + pr, 1);
      Ctor.precision = pr + 4;
      Ctor.rounding = 1;
      x2 = x2.ln();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(0.5);
    };
    P2.inverseSine = P2.asin = function() {
      var halfPi, k2, pr, rm, x2 = this, Ctor = x2.constructor;
      if (x2.isZero()) return new Ctor(x2);
      k2 = x2.abs().cmp(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (k2 !== -1) {
        if (k2 === 0) {
          halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
          halfPi.s = x2.s;
          return halfPi;
        }
        return new Ctor(NaN);
      }
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x2 = x2.div(new Ctor(1).minus(x2.times(x2)).sqrt().plus(1)).atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(2);
    };
    P2.inverseTangent = P2.atan = function() {
      var i, j, k2, n, px, t, r, wpr, x2, x3 = this, Ctor = x3.constructor, pr = Ctor.precision, rm = Ctor.rounding;
      if (!x3.isFinite()) {
        if (!x3.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
          r = getPi(Ctor, pr + 4, rm).times(0.5);
          r.s = x3.s;
          return r;
        }
      } else if (x3.isZero()) {
        return new Ctor(x3);
      } else if (x3.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x3.s;
        return r;
      }
      Ctor.precision = wpr = pr + 10;
      Ctor.rounding = 1;
      k2 = Math.min(28, wpr / LOG_BASE + 2 | 0);
      for (i = k2; i; --i) x3 = x3.div(x3.times(x3).plus(1).sqrt().plus(1));
      external = false;
      j = Math.ceil(wpr / LOG_BASE);
      n = 1;
      x2 = x3.times(x3);
      r = new Ctor(x3);
      px = x3;
      for (; i !== -1; ) {
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--; ) ;
      }
      if (k2) r = r.times(2 << k2 - 1);
      external = true;
      return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P2.isFinite = function() {
      return !!this.d;
    };
    P2.isInteger = P2.isInt = function() {
      return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
    };
    P2.isNaN = function() {
      return !this.s;
    };
    P2.isNegative = P2.isNeg = function() {
      return this.s < 0;
    };
    P2.isPositive = P2.isPos = function() {
      return this.s > 0;
    };
    P2.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    P2.lessThan = P2.lt = function(y) {
      return this.cmp(y) < 0;
    };
    P2.lessThanOrEqualTo = P2.lte = function(y) {
      return this.cmp(y) < 1;
    };
    P2.logarithm = P2.log = function(base) {
      var isBase10, d, denominator, k2, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
      if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
      } else {
        base = new Ctor(base);
        d = base.d;
        if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
      }
      d = arg.d;
      if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
      }
      if (isBase10) {
        if (d.length > 1) {
          inf = true;
        } else {
          for (k2 = d[0]; k2 % 10 === 0; ) k2 /= 10;
          inf = k2 !== 1;
        }
      }
      external = false;
      sd = pr + guard;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (checkRoundingDigits(r.d, k2 = pr, rm)) {
        do {
          sd += 10;
          num = naturalLogarithm(arg, sd);
          denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
          r = divide(num, denominator, sd, 1);
          if (!inf) {
            if (+digitsToString(r.d).slice(k2 + 1, k2 + 15) + 1 == 1e14) {
              r = finalise(r, pr + 1, 0);
            }
            break;
          }
        } while (checkRoundingDigits(r.d, k2 += 10, rm));
      }
      external = true;
      return finalise(r, pr, rm);
    };
    P2.minus = P2.sub = function(y) {
      var d, e, i, j, k2, len, pr, rm, xd, xe, xLTy, yd, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.d) {
        if (!x2.s || !y.s) y = new Ctor(NaN);
        else if (x2.d) y.s = -y.s;
        else y = new Ctor(y.d || x2.s !== y.s ? x2 : NaN);
        return y;
      }
      if (x2.s != y.s) {
        y.s = -y.s;
        return x2.plus(y);
      }
      xd = x2.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (yd[0]) y.s = -y.s;
        else if (xd[0]) y = new Ctor(x2);
        else return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
      }
      e = mathfloor(y.e / LOG_BASE);
      xe = mathfloor(x2.e / LOG_BASE);
      xd = xd.slice();
      k2 = xe - e;
      if (k2) {
        xLTy = k2 < 0;
        if (xLTy) {
          d = xd;
          k2 = -k2;
          len = yd.length;
        } else {
          d = yd;
          e = xe;
          len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k2 > i) {
          k2 = i;
          d.length = 1;
        }
        d.reverse();
        for (i = k2; i--; ) d.push(0);
        d.reverse();
      } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy) len = i;
        for (i = 0; i < len; i++) {
          if (xd[i] != yd[i]) {
            xLTy = xd[i] < yd[i];
            break;
          }
        }
        k2 = 0;
      }
      if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
      }
      len = xd.length;
      for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
      for (i = yd.length; i > k2; ) {
        if (xd[--i] < yd[i]) {
          for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
          --xd[j];
          xd[i] += BASE;
        }
        xd[i] -= yd[i];
      }
      for (; xd[--len] === 0; ) xd.pop();
      for (; xd[0] === 0; xd.shift()) --e;
      if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P2.modulo = P2.mod = function(y) {
      var q, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
      if (!y.d || x2.d && !x2.d[0]) {
        return finalise(new Ctor(x2), Ctor.precision, Ctor.rounding);
      }
      external = false;
      if (Ctor.modulo == 9) {
        q = divide(x2, y.abs(), 0, 3, 1);
        q.s *= y.s;
      } else {
        q = divide(x2, y, 0, Ctor.modulo, 1);
      }
      q = q.times(y);
      external = true;
      return x2.minus(q);
    };
    P2.naturalExponential = P2.exp = function() {
      return naturalExponential(this);
    };
    P2.naturalLogarithm = P2.ln = function() {
      return naturalLogarithm(this);
    };
    P2.negated = P2.neg = function() {
      var x2 = new this.constructor(this);
      x2.s = -x2.s;
      return finalise(x2);
    };
    P2.plus = P2.add = function(y) {
      var carry, d, e, i, k2, len, pr, rm, xd, yd, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.d) {
        if (!x2.s || !y.s) y = new Ctor(NaN);
        else if (!x2.d) y = new Ctor(y.d || x2.s === y.s ? x2 : NaN);
        return y;
      }
      if (x2.s != y.s) {
        y.s = -y.s;
        return x2.minus(y);
      }
      xd = x2.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (!yd[0]) y = new Ctor(x2);
        return external ? finalise(y, pr, rm) : y;
      }
      k2 = mathfloor(x2.e / LOG_BASE);
      e = mathfloor(y.e / LOG_BASE);
      xd = xd.slice();
      i = k2 - e;
      if (i) {
        if (i < 0) {
          d = xd;
          i = -i;
          len = yd.length;
        } else {
          d = yd;
          e = k2;
          len = xd.length;
        }
        k2 = Math.ceil(pr / LOG_BASE);
        len = k2 > len ? k2 + 1 : len + 1;
        if (i > len) {
          i = len;
          d.length = 1;
        }
        d.reverse();
        for (; i--; ) d.push(0);
        d.reverse();
      }
      len = xd.length;
      i = yd.length;
      if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
      }
      for (carry = 0; i; ) {
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
      }
      if (carry) {
        xd.unshift(carry);
        ++e;
      }
      for (len = xd.length; xd[--len] == 0; ) xd.pop();
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P2.precision = P2.sd = function(z) {
      var k2, x2 = this;
      if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
      if (x2.d) {
        k2 = getPrecision(x2.d);
        if (z && x2.e + 1 > k2) k2 = x2.e + 1;
      } else {
        k2 = NaN;
      }
      return k2;
    };
    P2.round = function() {
      var x2 = this, Ctor = x2.constructor;
      return finalise(new Ctor(x2), x2.e + 1, Ctor.rounding);
    };
    P2.sine = P2.sin = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x2 = sine(Ctor, toLessThanHalfPi(Ctor, x2));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant > 2 ? x2.neg() : x2, pr, rm, true);
    };
    P2.squareRoot = P2.sqrt = function() {
      var m, n, sd, r, rep, t, x2 = this, d = x2.d, e = x2.e, s = x2.s, Ctor = x2.constructor;
      if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x2 : 1 / 0);
      }
      external = false;
      s = Math.sqrt(+x2);
      if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0) n += "0";
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        r = t.plus(divide(x2, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).eq(x2)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).eq(x2);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P2.tangent = P2.tan = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 10;
      Ctor.rounding = 1;
      x2 = x2.sin();
      x2.s = 1;
      x2 = divide(x2, new Ctor(1).minus(x2.times(x2)).sqrt(), pr + 10, 0);
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 4 ? x2.neg() : x2, pr, rm, true);
    };
    P2.times = P2.mul = function(y) {
      var carry, e, i, k2, r, rL, t, xdL, ydL, x2 = this, Ctor = x2.constructor, xd = x2.d, yd = (y = new Ctor(y)).d;
      y.s *= x2.s;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
      }
      e = mathfloor(x2.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
      xdL = xd.length;
      ydL = yd.length;
      if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
      }
      r = [];
      rL = xdL + ydL;
      for (i = rL; i--; ) r.push(0);
      for (i = ydL; --i >= 0; ) {
        carry = 0;
        for (k2 = xdL + i; k2 > i; ) {
          t = r[k2] + yd[i] * xd[k2 - i - 1] + carry;
          r[k2--] = t % BASE | 0;
          carry = t / BASE | 0;
        }
        r[k2] = (r[k2] + carry) % BASE | 0;
      }
      for (; !r[--rL]; ) r.pop();
      if (carry) ++e;
      else r.shift();
      y.d = r;
      y.e = getBase10Exponent(r, e);
      return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    };
    P2.toBinary = function(sd, rm) {
      return toStringBinary(this, 2, sd, rm);
    };
    P2.toDecimalPlaces = P2.toDP = function(dp, rm) {
      var x2 = this, Ctor = x2.constructor;
      x2 = new Ctor(x2);
      if (dp === void 0) return x2;
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
      return finalise(x2, dp + x2.e + 1, rm);
    };
    P2.toExponential = function(dp, rm) {
      var str, x2 = this, Ctor = x2.constructor;
      if (dp === void 0) {
        str = finiteToString(x2, true);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x2 = finalise(new Ctor(x2), dp + 1, rm);
        str = finiteToString(x2, true, dp + 1);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.toFixed = function(dp, rm) {
      var str, y, x2 = this, Ctor = x2.constructor;
      if (dp === void 0) {
        str = finiteToString(x2);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x2), dp + x2.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.toFraction = function(maxD) {
      var d, d0, d1, d2, e, k2, n, n0, n1, pr, q, r, x2 = this, xd = x2.d, Ctor = x2.constructor;
      if (!xd) return new Ctor(x2);
      n1 = d0 = new Ctor(1);
      d1 = n0 = new Ctor(0);
      d = new Ctor(d1);
      e = d.e = getPrecision(xd) - x2.e - 1;
      k2 = e % LOG_BASE;
      d.d[0] = mathpow(10, k2 < 0 ? LOG_BASE + k2 : k2);
      if (maxD == null) {
        maxD = e > 0 ? d : n1;
      } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
      }
      external = false;
      n = new Ctor(digitsToString(xd));
      pr = Ctor.precision;
      Ctor.precision = e = xd.length * LOG_BASE * 2;
      for (; ; ) {
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1) break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
      }
      d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x2.s;
      r = divide(n1, d1, e, 1).minus(x2).abs().cmp(divide(n0, d0, e, 1).minus(x2).abs()) < 1 ? [n1, d1] : [n0, d0];
      Ctor.precision = pr;
      external = true;
      return r;
    };
    P2.toHexadecimal = P2.toHex = function(sd, rm) {
      return toStringBinary(this, 16, sd, rm);
    };
    P2.toNearest = function(y, rm) {
      var x2 = this, Ctor = x2.constructor;
      x2 = new Ctor(x2);
      if (y == null) {
        if (!x2.d) return x2;
        y = new Ctor(1);
        rm = Ctor.rounding;
      } else {
        y = new Ctor(y);
        if (rm === void 0) {
          rm = Ctor.rounding;
        } else {
          checkInt32(rm, 0, 8);
        }
        if (!x2.d) return y.s ? x2 : y;
        if (!y.d) {
          if (y.s) y.s = x2.s;
          return y;
        }
      }
      if (y.d[0]) {
        external = false;
        x2 = divide(x2, y, 0, rm, 1).times(y);
        external = true;
        finalise(x2);
      } else {
        y.s = x2.s;
        x2 = y;
      }
      return x2;
    };
    P2.toNumber = function() {
      return +this;
    };
    P2.toOctal = function(sd, rm) {
      return toStringBinary(this, 8, sd, rm);
    };
    P2.toPower = P2.pow = function(y) {
      var e, k2, pr, r, rm, s, x2 = this, Ctor = x2.constructor, yn = +(y = new Ctor(y));
      if (!x2.d || !y.d || !x2.d[0] || !y.d[0]) return new Ctor(mathpow(+x2, yn));
      x2 = new Ctor(x2);
      if (x2.eq(1)) return x2;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (y.eq(1)) return finalise(x2, pr, rm);
      e = mathfloor(y.e / LOG_BASE);
      if (e >= y.d.length - 1 && (k2 = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x2, k2, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
      }
      s = x2.s;
      if (s < 0) {
        if (e < y.d.length - 1) return new Ctor(NaN);
        if ((y.d[e] & 1) == 0) s = 1;
        if (x2.e == 0 && x2.d[0] == 1 && x2.d.length == 1) {
          x2.s = s;
          return x2;
        }
      }
      k2 = mathpow(+x2, yn);
      e = k2 == 0 || !isFinite(k2) ? mathfloor(yn * (Math.log("0." + digitsToString(x2.d)) / Math.LN10 + x2.e + 1)) : new Ctor(k2 + "").e;
      if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
      external = false;
      Ctor.rounding = x2.s = 1;
      k2 = Math.min(12, (e + "").length);
      r = naturalExponential(y.times(naturalLogarithm(x2, pr + k2)), pr);
      if (r.d) {
        r = finalise(r, pr + 5, 1);
        if (checkRoundingDigits(r.d, pr, rm)) {
          e = pr + 10;
          r = finalise(naturalExponential(y.times(naturalLogarithm(x2, e + k2)), e), e + 5, 1);
          if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }
        }
      }
      r.s = s;
      external = true;
      Ctor.rounding = rm;
      return finalise(r, pr, rm);
    };
    P2.toPrecision = function(sd, rm) {
      var str, x2 = this, Ctor = x2.constructor;
      if (sd === void 0) {
        str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x2 = finalise(new Ctor(x2), sd, rm);
        str = finiteToString(x2, sd <= x2.e || x2.e <= Ctor.toExpNeg, sd);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.toSignificantDigits = P2.toSD = function(sd, rm) {
      var x2 = this, Ctor = x2.constructor;
      if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      }
      return finalise(new Ctor(x2), sd, rm);
    };
    P2.toString = function() {
      var x2 = this, Ctor = x2.constructor, str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.truncated = P2.trunc = function() {
      return finalise(new this.constructor(this), this.e + 1, 1);
    };
    P2.valueOf = P2.toJSON = function() {
      var x2 = this, Ctor = x2.constructor, str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      return x2.isNeg() ? "-" + str : str;
    };
    function digitsToString(d) {
      var i, k2, ws, indexOfLastWord = d.length - 1, str = "", w2 = d[0];
      if (indexOfLastWord > 0) {
        str += w2;
        for (i = 1; i < indexOfLastWord; i++) {
          ws = d[i] + "";
          k2 = LOG_BASE - ws.length;
          if (k2) str += getZeroString(k2);
          str += ws;
        }
        w2 = d[i];
        ws = w2 + "";
        k2 = LOG_BASE - ws.length;
        if (k2) str += getZeroString(k2);
      } else if (w2 === 0) {
        return "0";
      }
      for (; w2 % 10 === 0; ) w2 /= 10;
      return str + w2;
    }
    __name(digitsToString, "digitsToString");
    function checkInt32(i, min2, max2) {
      if (i !== ~~i || i < min2 || i > max2) {
        throw Error(invalidArgument + i);
      }
    }
    __name(checkInt32, "checkInt32");
    function checkRoundingDigits(d, i, rm, repeating) {
      var di, k2, r, rd;
      for (k2 = d[0]; k2 >= 10; k2 /= 10) --i;
      if (--i < 0) {
        i += LOG_BASE;
        di = 0;
      } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
      }
      k2 = mathpow(10, LOG_BASE - i);
      rd = d[di] % k2 | 0;
      if (repeating == null) {
        if (i < 3) {
          if (i == 0) rd = rd / 100 | 0;
          else if (i == 1) rd = rd / 10 | 0;
          r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
        } else {
          r = (rm < 4 && rd + 1 == k2 || rm > 3 && rd + 1 == k2 / 2) && (d[di + 1] / k2 / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k2 / 2 || rd == 0) && (d[di + 1] / k2 / 100 | 0) == 0;
        }
      } else {
        if (i < 4) {
          if (i == 0) rd = rd / 1e3 | 0;
          else if (i == 1) rd = rd / 100 | 0;
          else if (i == 2) rd = rd / 10 | 0;
          r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
          r = ((repeating || rm < 4) && rd + 1 == k2 || !repeating && rm > 3 && rd + 1 == k2 / 2) && (d[di + 1] / k2 / 1e3 | 0) == mathpow(10, i - 3) - 1;
        }
      }
      return r;
    }
    __name(checkRoundingDigits, "checkRoundingDigits");
    function convertBase(str, baseIn, baseOut) {
      var j, arr = [0], arrL, i = 0, strL = str.length;
      for (; i < strL; ) {
        for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] === void 0) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    __name(convertBase, "convertBase");
    function cosine(Ctor, x2) {
      var k2, len, y;
      if (x2.isZero()) return x2;
      len = x2.d.length;
      if (len < 32) {
        k2 = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k2)).toString();
      } else {
        k2 = 16;
        y = "2.3283064365386962890625e-10";
      }
      Ctor.precision += k2;
      x2 = taylorSeries(Ctor, 1, x2.times(y), new Ctor(1));
      for (var i = k2; i--; ) {
        var cos2x = x2.times(x2);
        x2 = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
      }
      Ctor.precision -= k2;
      return x2;
    }
    __name(cosine, "cosine");
    var divide = /* @__PURE__ */ function() {
      function multiplyInteger(x2, k2, base) {
        var temp, carry = 0, i = x2.length;
        for (x2 = x2.slice(); i--; ) {
          temp = x2[i] * k2 + carry;
          x2[i] = temp % base | 0;
          carry = temp / base | 0;
        }
        if (carry) x2.unshift(carry);
        return x2;
      }
      __name(multiplyInteger, "multiplyInteger");
      function compare(a, b2, aL, bL) {
        var i, r;
        if (aL != bL) {
          r = aL > bL ? 1 : -1;
        } else {
          for (i = r = 0; i < aL; i++) {
            if (a[i] != b2[i]) {
              r = a[i] > b2[i] ? 1 : -1;
              break;
            }
          }
        }
        return r;
      }
      __name(compare, "compare");
      function subtract(a, b2, aL, base) {
        var i = 0;
        for (; aL--; ) {
          a[aL] -= i;
          i = a[aL] < b2[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b2[aL];
        }
        for (; !a[0] && a.length > 1; ) a.shift();
      }
      __name(subtract, "subtract");
      return function(x2, y, pr, rm, dp, base) {
        var cmp, e, i, k2, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x2.constructor, sign2 = x2.s == y.s ? 1 : -1, xd = x2.d, yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
          return new Ctor(
            // Return NaN if either NaN, or both Infinity or 0.
            !x2.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
              // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
              xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
            )
          );
        }
        if (base) {
          logBase = 1;
          e = x2.e - y.e;
        } else {
          base = BASE;
          logBase = LOG_BASE;
          e = mathfloor(x2.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign2);
        qd = q.d = [];
        for (i = 0; yd[i] == (xd[i] || 0); i++) ;
        if (yd[i] > (xd[i] || 0)) e--;
        if (pr == null) {
          sd = pr = Ctor.precision;
          rm = Ctor.rounding;
        } else if (dp) {
          sd = pr + (x2.e - y.e) + 1;
        } else {
          sd = pr;
        }
        if (sd < 0) {
          qd.push(1);
          more = true;
        } else {
          sd = sd / logBase + 2 | 0;
          i = 0;
          if (yL == 1) {
            k2 = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k2) && sd--; i++) {
              t = k2 * base + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k2 = t % yd | 0;
            }
            more = k2 || i < xL;
          } else {
            k2 = base / (yd[0] + 1) | 0;
            if (k2 > 1) {
              yd = multiplyInteger(yd, k2, base);
              xd = multiplyInteger(xd, k2, base);
              yL = yd.length;
              xL = xd.length;
            }
            xi = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; ) rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= base / 2) ++yd0;
            do {
              k2 = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                k2 = rem0 / yd0 | 0;
                if (k2 > 1) {
                  if (k2 >= base) k2 = base - 1;
                  prod = multiplyInteger(yd, k2, base);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k2--;
                    subtract(prod, yL < prodL ? yz : yd, prodL, base);
                  }
                } else {
                  if (k2 == 0) cmp = k2 = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL) prod.unshift(0);
                subtract(rem, prod, remL, base);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k2++;
                    subtract(rem, yL < remL ? yz : yd, remL, base);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k2++;
                rem = [0];
              }
              qd[i++] = k2;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi] || 0;
              } else {
                rem = [xd[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] !== void 0) && sd--);
            more = rem[0] !== void 0;
          }
          if (!qd[0]) qd.shift();
        }
        if (logBase == 1) {
          q.e = e;
          inexact = more;
        } else {
          for (i = 1, k2 = qd[0]; k2 >= 10; k2 /= 10) i++;
          q.e = i + e * logBase - 1;
          finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
      };
    }();
    function finalise(x2, sd, rm, isTruncated) {
      var digits, i, j, k2, rd, roundUp, w2, xd, xdi, Ctor = x2.constructor;
      out: if (sd != null) {
        xd = x2.d;
        if (!xd) return x2;
        for (digits = 1, k2 = xd[0]; k2 >= 10; k2 /= 10) digits++;
        i = sd - digits;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w2 = xd[xdi = 0];
          rd = w2 / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k2 = xd.length;
          if (xdi >= k2) {
            if (isTruncated) {
              for (; k2++ <= xdi; ) xd.push(0);
              w2 = rd = 0;
              digits = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            w2 = k2 = xd[xdi];
            for (digits = 1; k2 >= 10; k2 /= 10) digits++;
            i %= LOG_BASE;
            j = i - LOG_BASE + digits;
            rd = j < 0 ? 0 : w2 / mathpow(10, digits - j - 1) % 10 | 0;
          }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w2 : w2 % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x2.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w2 / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x2.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
          xd.length = 0;
          if (roundUp) {
            sd -= x2.e + 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x2.e = -sd || 0;
          } else {
            xd[0] = x2.e = 0;
          }
          return x2;
        }
        if (i == 0) {
          xd.length = xdi;
          k2 = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k2 = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w2 / mathpow(10, digits - j) % mathpow(10, j) | 0) * k2 : 0;
        }
        if (roundUp) {
          for (; ; ) {
            if (xdi == 0) {
              for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
              j = xd[0] += k2;
              for (k2 = 1; j >= 10; j /= 10) k2++;
              if (i != k2) {
                x2.e++;
                if (xd[0] == BASE) xd[0] = 1;
              }
              break;
            } else {
              xd[xdi] += k2;
              if (xd[xdi] != BASE) break;
              xd[xdi--] = 0;
              k2 = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; ) xd.pop();
      }
      if (external) {
        if (x2.e > Ctor.maxE) {
          x2.d = null;
          x2.e = NaN;
        } else if (x2.e < Ctor.minE) {
          x2.e = 0;
          x2.d = [0];
        }
      }
      return x2;
    }
    __name(finalise, "finalise");
    function finiteToString(x2, isExp, sd) {
      if (!x2.isFinite()) return nonFiniteToString(x2);
      var k2, e = x2.e, str = digitsToString(x2.d), len = str.length;
      if (isExp) {
        if (sd && (k2 = sd - len) > 0) {
          str = str.charAt(0) + "." + str.slice(1) + getZeroString(k2);
        } else if (len > 1) {
          str = str.charAt(0) + "." + str.slice(1);
        }
        str = str + (x2.e < 0 ? "e" : "e+") + x2.e;
      } else if (e < 0) {
        str = "0." + getZeroString(-e - 1) + str;
        if (sd && (k2 = sd - len) > 0) str += getZeroString(k2);
      } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k2 = sd - e - 1) > 0) str = str + "." + getZeroString(k2);
      } else {
        if ((k2 = e + 1) < len) str = str.slice(0, k2) + "." + str.slice(k2);
        if (sd && (k2 = sd - len) > 0) {
          if (e + 1 === len) str += ".";
          str += getZeroString(k2);
        }
      }
      return str;
    }
    __name(finiteToString, "finiteToString");
    function getBase10Exponent(digits, e) {
      var w2 = digits[0];
      for (e *= LOG_BASE; w2 >= 10; w2 /= 10) e++;
      return e;
    }
    __name(getBase10Exponent, "getBase10Exponent");
    function getLn10(Ctor, sd, pr) {
      if (sd > LN10_PRECISION) {
        external = true;
        if (pr) Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
      }
      return finalise(new Ctor(LN10), sd, 1, true);
    }
    __name(getLn10, "getLn10");
    function getPi(Ctor, sd, rm) {
      if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
      return finalise(new Ctor(PI), sd, rm, true);
    }
    __name(getPi, "getPi");
    function getPrecision(digits) {
      var w2 = digits.length - 1, len = w2 * LOG_BASE + 1;
      w2 = digits[w2];
      if (w2) {
        for (; w2 % 10 == 0; w2 /= 10) len--;
        for (w2 = digits[0]; w2 >= 10; w2 /= 10) len++;
      }
      return len;
    }
    __name(getPrecision, "getPrecision");
    function getZeroString(k2) {
      var zs = "";
      for (; k2--; ) zs += "0";
      return zs;
    }
    __name(getZeroString, "getZeroString");
    function intPow(Ctor, x2, n, pr) {
      var isTruncated, r = new Ctor(1), k2 = Math.ceil(pr / LOG_BASE + 4);
      external = false;
      for (; ; ) {
        if (n % 2) {
          r = r.times(x2);
          if (truncate(r.d, k2)) isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
          n = r.d.length - 1;
          if (isTruncated && r.d[n] === 0) ++r.d[n];
          break;
        }
        x2 = x2.times(x2);
        truncate(x2.d, k2);
      }
      external = true;
      return r;
    }
    __name(intPow, "intPow");
    function isOdd(n) {
      return n.d[n.d.length - 1] & 1;
    }
    __name(isOdd, "isOdd");
    function maxOrMin(Ctor, args, n) {
      var k2, y, x2 = new Ctor(args[0]), i = 0;
      for (; ++i < args.length; ) {
        y = new Ctor(args[i]);
        if (!y.s) {
          x2 = y;
          break;
        }
        k2 = x2.cmp(y);
        if (k2 === n || k2 === 0 && x2.s === n) {
          x2 = y;
        }
      }
      return x2;
    }
    __name(maxOrMin, "maxOrMin");
    function naturalExponential(x2, sd) {
      var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k2 = 0, Ctor = x2.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (!x2.d || !x2.d[0] || x2.e > 17) {
        return new Ctor(x2.d ? !x2.d[0] ? 1 : x2.s < 0 ? 0 : 1 / 0 : x2.s ? x2.s < 0 ? 0 : x2 : 0 / 0);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      t = new Ctor(0.03125);
      while (x2.e > -2) {
        x2 = x2.times(t);
        k2 += 5;
      }
      guard = Math.log(mathpow(2, k2)) / Math.LN10 * 2 + 5 | 0;
      wpr += guard;
      denominator = pow2 = sum2 = new Ctor(1);
      Ctor.precision = wpr;
      for (; ; ) {
        pow2 = finalise(pow2.times(x2), wpr, 1);
        denominator = denominator.times(++i);
        t = sum2.plus(divide(pow2, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          j = k2;
          while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
          if (sd == null) {
            if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += 10;
              denominator = pow2 = t = new Ctor(1);
              i = 0;
              rep++;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
      }
    }
    __name(naturalExponential, "naturalExponential");
    function naturalLogarithm(y, sd) {
      var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x3 = y, xd = x3.d, Ctor = x3.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (x3.s < 0 || !xd || !xd[0] || !x3.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x3.s != 1 ? NaN : xd ? 0 : x3);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      Ctor.precision = wpr += guard;
      c = digitsToString(xd);
      c0 = c.charAt(0);
      if (Math.abs(e = x3.e) < 15e14) {
        while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
          x3 = x3.times(y);
          c = digitsToString(x3.d);
          c0 = c.charAt(0);
          n++;
        }
        e = x3.e;
        if (c0 > 1) {
          x3 = new Ctor("0." + c);
          e++;
        } else {
          x3 = new Ctor(c0 + "." + c.slice(1));
        }
      } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + "");
        x3 = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x3, pr, rm, external = true) : x3;
      }
      x1 = x3;
      sum2 = numerator = x3 = divide(x3.minus(1), x3.plus(1), wpr, 1);
      x2 = finalise(x3.times(x3), wpr, 1);
      denominator = 3;
      for (; ; ) {
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          sum2 = sum2.times(2);
          if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
          sum2 = divide(sum2, new Ctor(n), wpr, 1);
          if (sd == null) {
            if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += guard;
              t = numerator = x3 = divide(x1.minus(1), x1.plus(1), wpr, 1);
              x2 = finalise(x3.times(x3), wpr, 1);
              denominator = rep = 1;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
        denominator += 2;
      }
    }
    __name(naturalLogarithm, "naturalLogarithm");
    function nonFiniteToString(x2) {
      return String(x2.s * x2.s / 0);
    }
    __name(nonFiniteToString, "nonFiniteToString");
    function parseDecimal(x2, str) {
      var e, i, len;
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
      for (i = 0; str.charCodeAt(i) === 48; i++) ;
      for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
      str = str.slice(i, len);
      if (str) {
        len -= i;
        x2.e = e = e - i - 1;
        x2.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
          if (i) x2.d.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) x2.d.push(+str.slice(i, i += LOG_BASE));
          str = str.slice(i);
          i = LOG_BASE - str.length;
        } else {
          i -= len;
        }
        for (; i--; ) str += "0";
        x2.d.push(+str);
        if (external) {
          if (x2.e > x2.constructor.maxE) {
            x2.d = null;
            x2.e = NaN;
          } else if (x2.e < x2.constructor.minE) {
            x2.e = 0;
            x2.d = [0];
          }
        }
      } else {
        x2.e = 0;
        x2.d = [0];
      }
      return x2;
    }
    __name(parseDecimal, "parseDecimal");
    function parseOther(x2, str) {
      var base, Ctor, divisor, i, isFloat, len, p2, xd, xe;
      if (str.indexOf("_") > -1) {
        str = str.replace(/(\d)_(?=\d)/g, "$1");
        if (isDecimal.test(str)) return parseDecimal(x2, str);
      } else if (str === "Infinity" || str === "NaN") {
        if (!+str) x2.s = NaN;
        x2.e = NaN;
        x2.d = null;
        return x2;
      }
      if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
      } else if (isBinary.test(str)) {
        base = 2;
      } else if (isOctal.test(str)) {
        base = 8;
      } else {
        throw Error(invalidArgument + str);
      }
      i = str.search(/p/i);
      if (i > 0) {
        p2 = +str.slice(i + 1);
        str = str.substring(2, i);
      } else {
        str = str.slice(2);
      }
      i = str.indexOf(".");
      isFloat = i >= 0;
      Ctor = x2.constructor;
      if (isFloat) {
        str = str.replace(".", "");
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
      }
      xd = convertBase(str, base, BASE);
      xe = xd.length - 1;
      for (i = xe; xd[i] === 0; --i) xd.pop();
      if (i < 0) return new Ctor(x2.s * 0);
      x2.e = getBase10Exponent(xd, xe);
      x2.d = xd;
      external = false;
      if (isFloat) x2 = divide(x2, divisor, len * 4);
      if (p2) x2 = x2.times(Math.abs(p2) < 54 ? mathpow(2, p2) : Decimal3.pow(2, p2));
      external = true;
      return x2;
    }
    __name(parseOther, "parseOther");
    function sine(Ctor, x2) {
      var k2, len = x2.d.length;
      if (len < 3) {
        return x2.isZero() ? x2 : taylorSeries(Ctor, 2, x2, x2);
      }
      k2 = 1.4 * Math.sqrt(len);
      k2 = k2 > 16 ? 16 : k2 | 0;
      x2 = x2.times(1 / tinyPow(5, k2));
      x2 = taylorSeries(Ctor, 2, x2, x2);
      var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
      for (; k2--; ) {
        sin2_x = x2.times(x2);
        x2 = x2.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
      }
      return x2;
    }
    __name(sine, "sine");
    function taylorSeries(Ctor, n, x2, y, isHyperbolic) {
      var j, t, u, x22, i = 1, pr = Ctor.precision, k2 = Math.ceil(pr / LOG_BASE);
      external = false;
      x22 = x2.times(x2);
      u = new Ctor(y);
      for (; ; ) {
        t = divide(u.times(x22), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x22), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k2] !== void 0) {
          for (j = k2; t.d[j] === u.d[j] && j--; ) ;
          if (j == -1) break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
      }
      external = true;
      t.d.length = k2 + 1;
      return t;
    }
    __name(taylorSeries, "taylorSeries");
    function tinyPow(b2, e) {
      var n = b2;
      while (--e) n *= b2;
      return n;
    }
    __name(tinyPow, "tinyPow");
    function toLessThanHalfPi(Ctor, x2) {
      var t, isNeg = x2.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
      x2 = x2.abs();
      if (x2.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x2;
      }
      t = x2.divToInt(pi);
      if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
      } else {
        x2 = x2.minus(t.times(pi));
        if (x2.lte(halfPi)) {
          quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
          return x2;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
      }
      return x2.minus(pi).abs();
    }
    __name(toLessThanHalfPi, "toLessThanHalfPi");
    function toStringBinary(x2, baseOut, sd, rm) {
      var base, e, i, k2, len, roundUp, str, xd, y, Ctor = x2.constructor, isExp = sd !== void 0;
      if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      }
      if (!x2.isFinite()) {
        str = nonFiniteToString(x2);
      } else {
        str = finiteToString(x2);
        i = str.indexOf(".");
        if (isExp) {
          base = 2;
          if (baseOut == 16) {
            sd = sd * 4 - 3;
          } else if (baseOut == 8) {
            sd = sd * 3 - 2;
          }
        } else {
          base = baseOut;
        }
        if (i >= 0) {
          str = str.replace(".", "");
          y = new Ctor(1);
          y.e = str.length - i;
          y.d = convertBase(finiteToString(y), 10, base);
          y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for (; xd[--len] == 0; ) xd.pop();
        if (!xd[0]) {
          str = isExp ? "0p+0" : "0";
        } else {
          if (i < 0) {
            e--;
          } else {
            x2 = new Ctor(x2);
            x2.d = xd;
            x2.e = e;
            x2 = divide(x2, y, sd, rm, 0, base);
            xd = x2.d;
            e = x2.e;
            roundUp = inexact;
          }
          i = xd[sd];
          k2 = base / 2;
          roundUp = roundUp || xd[sd + 1] !== void 0;
          roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x2.s < 0 ? 3 : 2)) : i > k2 || i === k2 && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x2.s < 0 ? 8 : 7));
          xd.length = sd;
          if (roundUp) {
            for (; ++xd[--sd] > base - 1; ) {
              xd[sd] = 0;
              if (!sd) {
                ++e;
                xd.unshift(1);
              }
            }
          }
          for (len = xd.length; !xd[len - 1]; --len) ;
          for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
          if (isExp) {
            if (len > 1) {
              if (baseOut == 16 || baseOut == 8) {
                i = baseOut == 16 ? 4 : 3;
                for (--len; len % i; len++) str += "0";
                xd = convertBase(str, base, baseOut);
                for (len = xd.length; !xd[len - 1]; --len) ;
                for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
              } else {
                str = str.charAt(0) + "." + str.slice(1);
              }
            }
            str = str + (e < 0 ? "p" : "p+") + e;
          } else if (e < 0) {
            for (; ++e; ) str = "0" + str;
            str = "0." + str;
          } else {
            if (++e > len) for (e -= len; e--; ) str += "0";
            else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
      }
      return x2.s < 0 ? "-" + str : str;
    }
    __name(toStringBinary, "toStringBinary");
    function truncate(arr, len) {
      if (arr.length > len) {
        arr.length = len;
        return true;
      }
    }
    __name(truncate, "truncate");
    function abs(x2) {
      return new this(x2).abs();
    }
    __name(abs, "abs");
    function acos(x2) {
      return new this(x2).acos();
    }
    __name(acos, "acos");
    function acosh(x2) {
      return new this(x2).acosh();
    }
    __name(acosh, "acosh");
    function add(x2, y) {
      return new this(x2).plus(y);
    }
    __name(add, "add");
    function asin(x2) {
      return new this(x2).asin();
    }
    __name(asin, "asin");
    function asinh(x2) {
      return new this(x2).asinh();
    }
    __name(asinh, "asinh");
    function atan(x2) {
      return new this(x2).atan();
    }
    __name(atan, "atan");
    function atanh(x2) {
      return new this(x2).atanh();
    }
    __name(atanh, "atanh");
    function atan2(y, x2) {
      y = new this(y);
      x2 = new this(x2);
      var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
      if (!y.s || !x2.s) {
        r = new this(NaN);
      } else if (!y.d && !x2.d) {
        r = getPi(this, wpr, 1).times(x2.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
      } else if (!x2.d || y.isZero()) {
        r = x2.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
      } else if (!y.d || x2.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
      } else if (x2.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x2, wpr, 1));
        x2 = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x2) : r.plus(x2);
      } else {
        r = this.atan(divide(y, x2, wpr, 1));
      }
      return r;
    }
    __name(atan2, "atan2");
    function cbrt(x2) {
      return new this(x2).cbrt();
    }
    __name(cbrt, "cbrt");
    function ceil(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 2);
    }
    __name(ceil, "ceil");
    function clamp(x2, min2, max2) {
      return new this(x2).clamp(min2, max2);
    }
    __name(clamp, "clamp");
    function config2(obj) {
      if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
      var i, p2, v, useDefaults = obj.defaults === true, ps = [
        "precision",
        1,
        MAX_DIGITS,
        "rounding",
        0,
        8,
        "toExpNeg",
        -EXP_LIMIT,
        0,
        "toExpPos",
        0,
        EXP_LIMIT,
        "maxE",
        0,
        EXP_LIMIT,
        "minE",
        -EXP_LIMIT,
        0,
        "modulo",
        0,
        9
      ];
      for (i = 0; i < ps.length; i += 3) {
        if (p2 = ps[i], useDefaults) this[p2] = DEFAULTS[p2];
        if ((v = obj[p2]) !== void 0) {
          if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p2] = v;
          else throw Error(invalidArgument + p2 + ": " + v);
        }
      }
      if (p2 = "crypto", useDefaults) this[p2] = DEFAULTS[p2];
      if ((v = obj[p2]) !== void 0) {
        if (v === true || v === false || v === 0 || v === 1) {
          if (v) {
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
              this[p2] = true;
            } else {
              throw Error(cryptoUnavailable);
            }
          } else {
            this[p2] = false;
          }
        } else {
          throw Error(invalidArgument + p2 + ": " + v);
        }
      }
      return this;
    }
    __name(config2, "config");
    function cos(x2) {
      return new this(x2).cos();
    }
    __name(cos, "cos");
    function cosh(x2) {
      return new this(x2).cosh();
    }
    __name(cosh, "cosh");
    function clone(obj) {
      var i, p2, ps;
      function Decimal22(v) {
        var e, i2, t, x2 = this;
        if (!(x2 instanceof Decimal22)) return new Decimal22(v);
        x2.constructor = Decimal22;
        if (isDecimalInstance(v)) {
          x2.s = v.s;
          if (external) {
            if (!v.d || v.e > Decimal22.maxE) {
              x2.e = NaN;
              x2.d = null;
            } else if (v.e < Decimal22.minE) {
              x2.e = 0;
              x2.d = [0];
            } else {
              x2.e = v.e;
              x2.d = v.d.slice();
            }
          } else {
            x2.e = v.e;
            x2.d = v.d ? v.d.slice() : v.d;
          }
          return;
        }
        t = typeof v;
        if (t === "number") {
          if (v === 0) {
            x2.s = 1 / v < 0 ? -1 : 1;
            x2.e = 0;
            x2.d = [0];
            return;
          }
          if (v < 0) {
            v = -v;
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          if (v === ~~v && v < 1e7) {
            for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
            if (external) {
              if (e > Decimal22.maxE) {
                x2.e = NaN;
                x2.d = null;
              } else if (e < Decimal22.minE) {
                x2.e = 0;
                x2.d = [0];
              } else {
                x2.e = e;
                x2.d = [v];
              }
            } else {
              x2.e = e;
              x2.d = [v];
            }
            return;
          }
          if (v * 0 !== 0) {
            if (!v) x2.s = NaN;
            x2.e = NaN;
            x2.d = null;
            return;
          }
          return parseDecimal(x2, v.toString());
        }
        if (t === "string") {
          if ((i2 = v.charCodeAt(0)) === 45) {
            v = v.slice(1);
            x2.s = -1;
          } else {
            if (i2 === 43) v = v.slice(1);
            x2.s = 1;
          }
          return isDecimal.test(v) ? parseDecimal(x2, v) : parseOther(x2, v);
        }
        if (t === "bigint") {
          if (v < 0) {
            v = -v;
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          return parseDecimal(x2, v.toString());
        }
        throw Error(invalidArgument + v);
      }
      __name(Decimal22, "Decimal2");
      Decimal22.prototype = P2;
      Decimal22.ROUND_UP = 0;
      Decimal22.ROUND_DOWN = 1;
      Decimal22.ROUND_CEIL = 2;
      Decimal22.ROUND_FLOOR = 3;
      Decimal22.ROUND_HALF_UP = 4;
      Decimal22.ROUND_HALF_DOWN = 5;
      Decimal22.ROUND_HALF_EVEN = 6;
      Decimal22.ROUND_HALF_CEIL = 7;
      Decimal22.ROUND_HALF_FLOOR = 8;
      Decimal22.EUCLID = 9;
      Decimal22.config = Decimal22.set = config2;
      Decimal22.clone = clone;
      Decimal22.isDecimal = isDecimalInstance;
      Decimal22.abs = abs;
      Decimal22.acos = acos;
      Decimal22.acosh = acosh;
      Decimal22.add = add;
      Decimal22.asin = asin;
      Decimal22.asinh = asinh;
      Decimal22.atan = atan;
      Decimal22.atanh = atanh;
      Decimal22.atan2 = atan2;
      Decimal22.cbrt = cbrt;
      Decimal22.ceil = ceil;
      Decimal22.clamp = clamp;
      Decimal22.cos = cos;
      Decimal22.cosh = cosh;
      Decimal22.div = div;
      Decimal22.exp = exp;
      Decimal22.floor = floor;
      Decimal22.hypot = hypot;
      Decimal22.ln = ln;
      Decimal22.log = log;
      Decimal22.log10 = log10;
      Decimal22.log2 = log2;
      Decimal22.max = max;
      Decimal22.min = min;
      Decimal22.mod = mod;
      Decimal22.mul = mul;
      Decimal22.pow = pow;
      Decimal22.random = random;
      Decimal22.round = round;
      Decimal22.sign = sign;
      Decimal22.sin = sin;
      Decimal22.sinh = sinh;
      Decimal22.sqrt = sqrt;
      Decimal22.sub = sub;
      Decimal22.sum = sum;
      Decimal22.tan = tan;
      Decimal22.tanh = tanh;
      Decimal22.trunc = trunc;
      if (obj === void 0) obj = {};
      if (obj) {
        if (obj.defaults !== true) {
          ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
          for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p2 = ps[i++])) obj[p2] = this[p2];
        }
      }
      Decimal22.config(obj);
      return Decimal22;
    }
    __name(clone, "clone");
    function div(x2, y) {
      return new this(x2).div(y);
    }
    __name(div, "div");
    function exp(x2) {
      return new this(x2).exp();
    }
    __name(exp, "exp");
    function floor(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 3);
    }
    __name(floor, "floor");
    function hypot() {
      var i, n, t = new this(0);
      external = false;
      for (i = 0; i < arguments.length; ) {
        n = new this(arguments[i++]);
        if (!n.d) {
          if (n.s) {
            external = true;
            return new this(1 / 0);
          }
          t = n;
        } else if (t.d) {
          t = t.plus(n.times(n));
        }
      }
      external = true;
      return t.sqrt();
    }
    __name(hypot, "hypot");
    function isDecimalInstance(obj) {
      return obj instanceof Decimal3 || obj && obj.toStringTag === tag || false;
    }
    __name(isDecimalInstance, "isDecimalInstance");
    function ln(x2) {
      return new this(x2).ln();
    }
    __name(ln, "ln");
    function log(x2, y) {
      return new this(x2).log(y);
    }
    __name(log, "log");
    function log2(x2) {
      return new this(x2).log(2);
    }
    __name(log2, "log2");
    function log10(x2) {
      return new this(x2).log(10);
    }
    __name(log10, "log10");
    function max() {
      return maxOrMin(this, arguments, -1);
    }
    __name(max, "max");
    function min() {
      return maxOrMin(this, arguments, 1);
    }
    __name(min, "min");
    function mod(x2, y) {
      return new this(x2).mod(y);
    }
    __name(mod, "mod");
    function mul(x2, y) {
      return new this(x2).mul(y);
    }
    __name(mul, "mul");
    function pow(x2, y) {
      return new this(x2).pow(y);
    }
    __name(pow, "pow");
    function random(sd) {
      var d, e, k2, n, i = 0, r = new this(1), rd = [];
      if (sd === void 0) sd = this.precision;
      else checkInt32(sd, 1, MAX_DIGITS);
      k2 = Math.ceil(sd / LOG_BASE);
      if (!this.crypto) {
        for (; i < k2; ) rd[i++] = Math.random() * 1e7 | 0;
      } else if (crypto.getRandomValues) {
        d = crypto.getRandomValues(new Uint32Array(k2));
        for (; i < k2; ) {
          n = d[i];
          if (n >= 429e7) {
            d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
          } else {
            rd[i++] = n % 1e7;
          }
        }
      } else if (crypto.randomBytes) {
        d = crypto.randomBytes(k2 *= 4);
        for (; i < k2; ) {
          n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
          if (n >= 214e7) {
            crypto.randomBytes(4).copy(d, i);
          } else {
            rd.push(n % 1e7);
            i += 4;
          }
        }
        i = k2 / 4;
      } else {
        throw Error(cryptoUnavailable);
      }
      k2 = rd[--i];
      sd %= LOG_BASE;
      if (k2 && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k2 / n | 0) * n;
      }
      for (; rd[i] === 0; i--) rd.pop();
      if (i < 0) {
        e = 0;
        rd = [0];
      } else {
        e = -1;
        for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
        for (k2 = 1, n = rd[0]; n >= 10; n /= 10) k2++;
        if (k2 < LOG_BASE) e -= LOG_BASE - k2;
      }
      r.e = e;
      r.d = rd;
      return r;
    }
    __name(random, "random");
    function round(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, this.rounding);
    }
    __name(round, "round");
    function sign(x2) {
      x2 = new this(x2);
      return x2.d ? x2.d[0] ? x2.s : 0 * x2.s : x2.s || NaN;
    }
    __name(sign, "sign");
    function sin(x2) {
      return new this(x2).sin();
    }
    __name(sin, "sin");
    function sinh(x2) {
      return new this(x2).sinh();
    }
    __name(sinh, "sinh");
    function sqrt(x2) {
      return new this(x2).sqrt();
    }
    __name(sqrt, "sqrt");
    function sub(x2, y) {
      return new this(x2).sub(y);
    }
    __name(sub, "sub");
    function sum() {
      var i = 0, args = arguments, x2 = new this(args[i]);
      external = false;
      for (; x2.s && ++i < args.length; ) x2 = x2.plus(args[i]);
      external = true;
      return finalise(x2, this.precision, this.rounding);
    }
    __name(sum, "sum");
    function tan(x2) {
      return new this(x2).tan();
    }
    __name(tan, "tan");
    function tanh(x2) {
      return new this(x2).tanh();
    }
    __name(tanh, "tanh");
    function trunc(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 1);
    }
    __name(trunc, "trunc");
    P2[Symbol.for("nodejs.util.inspect.custom")] = P2.toString;
    P2[Symbol.toStringTag] = "Decimal";
    var Decimal3 = P2.constructor = clone(DEFAULTS);
    LN10 = new Decimal3(LN10);
    PI = new Decimal3(PI);
    var Sql3 = class _Sql {
      static {
        __name(this, "_Sql");
      }
      constructor(rawStrings, rawValues) {
        if (rawStrings.length - 1 !== rawValues.length) {
          if (rawStrings.length === 0) {
            throw new TypeError("Expected at least 1 string");
          }
          throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
        }
        const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
        this.values = new Array(valuesLength);
        this.strings = new Array(valuesLength + 1);
        this.strings[0] = rawStrings[0];
        let i = 0, pos = 0;
        while (i < rawValues.length) {
          const child = rawValues[i++];
          const rawString = rawStrings[i];
          if (child instanceof _Sql) {
            this.strings[pos] += child.strings[0];
            let childIndex = 0;
            while (childIndex < child.values.length) {
              this.values[pos++] = child.values[childIndex++];
              this.strings[pos] = child.strings[childIndex];
            }
            this.strings[pos] += rawString;
          } else {
            this.values[pos++] = child;
            this.strings[pos] = rawString;
          }
        }
      }
      get sql() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `?${this.strings[i++]}`;
        return value;
      }
      get statement() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `:${i}${this.strings[i++]}`;
        return value;
      }
      get text() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `$${i}${this.strings[i++]}`;
        return value;
      }
      inspect() {
        return {
          sql: this.sql,
          statement: this.statement,
          text: this.text,
          values: this.values
        };
      }
    };
    function join3(values, separator = ",", prefix = "", suffix = "") {
      if (values.length === 0) {
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      }
      return new Sql3([prefix, ...Array(values.length - 1).fill(separator), suffix], values);
    }
    __name(join3, "join");
    function raw3(value) {
      return new Sql3([value], []);
    }
    __name(raw3, "raw");
    var empty3 = raw3("");
    function sql(strings, ...values) {
      return new Sql3(strings, values);
    }
    __name(sql, "sql");
  }
});

// node_modules/@prisma/client/runtime/client.js
var require_client = __commonJS({
  "node_modules/@prisma/client/runtime/client.js"(exports, module) {
    "use strict";
    init_esm();
    var nu = Object.create;
    var Qt = Object.defineProperty;
    var iu = Object.getOwnPropertyDescriptor;
    var ou = Object.getOwnPropertyNames;
    var su = Object.getPrototypeOf;
    var au = Object.prototype.hasOwnProperty;
    var bi = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "bi");
    var q = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "q");
    var Ne = /* @__PURE__ */ __name((e, t) => {
      for (var r in t) Qt(e, r, { get: t[r], enumerable: true });
    }, "Ne");
    var xi = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of ou(t)) !au.call(e, i) && i !== r && Qt(e, i, { get: /* @__PURE__ */ __name(() => t[i], "get"), enumerable: !(n = iu(t, i)) || n.enumerable });
      return e;
    }, "xi");
    var B = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? nu(su(e)) : {}, xi(t || !e || !e.__esModule ? Qt(r, "default", { value: e, enumerable: true }) : r, e)), "B");
    var lu = /* @__PURE__ */ __name((e) => xi(Qt({}, "__esModule", { value: true }), e), "lu");
    var Fi = q((Af, Iu) => {
      Iu.exports = { name: "@prisma/engines-version", version: "7.8.0-6.3c6e192761c0362d496ed980de936e2f3cebcd3a", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "3c6e192761c0362d496ed980de936e2f3cebcd3a" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var _i = q((Ht) => {
      "use strict";
      Object.defineProperty(Ht, "__esModule", { value: true });
      Ht.enginesVersion = void 0;
      Ht.enginesVersion = Fi().prisma.enginesVersion;
    });
    var Li = q((Rf, $i) => {
      "use strict";
      $i.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var Bi = q((Of, Ui) => {
      "use strict";
      Ui.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Ji = q(($f, Gt) => {
      "use strict";
      Gt.exports = (e = {}) => {
        let t;
        if (e.repoUrl) t = e.repoUrl;
        else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Gt.exports.default = Gt.exports;
    });
    var un = q((Rg, Xi) => {
      "use strict";
      Xi.exports = /* @__PURE__ */ function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l2, u, c, p2, d, m, g, x2, w2, k2, P2, A, U = [];
          for (l2 = 0; l2 < i; l2++) U.push(l2 + 1), U.push(t.charCodeAt(s + l2));
          for (var Oe = U.length - 1; a < o - 3; ) for (w2 = r.charCodeAt(s + (u = a)), k2 = r.charCodeAt(s + (c = a + 1)), P2 = r.charCodeAt(s + (p2 = a + 2)), A = r.charCodeAt(s + (d = a + 3)), m = a += 4, l2 = 0; l2 < Oe; l2 += 2) g = U[l2], x2 = U[l2 + 1], u = e(g, u, c, w2, x2), c = e(u, c, p2, k2, x2), p2 = e(c, p2, d, P2, x2), m = e(p2, d, m, A, x2), U[l2] = m, d = p2, p2 = c, c = u, u = g;
          for (; a < o; ) for (w2 = r.charCodeAt(s + (u = a)), m = ++a, l2 = 0; l2 < Oe; l2 += 2) g = U[l2], U[l2] = m = e(g, u, m, w2, U[l2 + 1]), u = g;
          return m;
        };
      }();
    });
    var io = bi(() => {
      "use strict";
    });
    var oo = bi(() => {
      "use strict";
    });
    var In = q((Se) => {
      "use strict";
      Object.defineProperty(Se, "__esModule", { value: true });
      Se.anumber = kn;
      Se.abytes = Ss;
      Se.ahash = Dp;
      Se.aexists = Mp;
      Se.aoutput = Fp;
      function kn(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
      }
      __name(kn, "kn");
      function Np(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      __name(Np, "Np");
      function Ss(e, ...t) {
        if (!Np(e)) throw new Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
      }
      __name(Ss, "Ss");
      function Dp(e) {
        if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
        kn(e.outputLen), kn(e.blockLen);
      }
      __name(Dp, "Dp");
      function Mp(e, t = true) {
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished) throw new Error("Hash#digest() has already been called");
      }
      __name(Mp, "Mp");
      function Fp(e, t) {
        Ss(e);
        let r = t.outputLen;
        if (e.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
      }
      __name(Fp, "Fp");
    });
    var Hs = q((y) => {
      "use strict";
      Object.defineProperty(y, "__esModule", { value: true });
      y.add5L = y.add5H = y.add4H = y.add4L = y.add3H = y.add3L = y.rotlBL = y.rotlBH = y.rotlSL = y.rotlSH = y.rotr32L = y.rotr32H = y.rotrBL = y.rotrBH = y.rotrSL = y.rotrSH = y.shrSL = y.shrSH = y.toBig = void 0;
      y.fromBig = Nn;
      y.split = vs;
      y.add = Vs;
      var Pr = BigInt(2 ** 32 - 1), On = BigInt(32);
      function Nn(e, t = false) {
        return t ? { h: Number(e & Pr), l: Number(e >> On & Pr) } : { h: Number(e >> On & Pr) | 0, l: Number(e & Pr) | 0 };
      }
      __name(Nn, "Nn");
      function vs(e, t = false) {
        let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: o, l: s } = Nn(e[i], t);
          [r[i], n[i]] = [o, s];
        }
        return [r, n];
      }
      __name(vs, "vs");
      var As = /* @__PURE__ */ __name((e, t) => BigInt(e >>> 0) << On | BigInt(t >>> 0), "As");
      y.toBig = As;
      var Cs = /* @__PURE__ */ __name((e, t, r) => e >>> r, "Cs");
      y.shrSH = Cs;
      var Rs = /* @__PURE__ */ __name((e, t, r) => e << 32 - r | t >>> r, "Rs");
      y.shrSL = Rs;
      var ks = /* @__PURE__ */ __name((e, t, r) => e >>> r | t << 32 - r, "ks");
      y.rotrSH = ks;
      var Is = /* @__PURE__ */ __name((e, t, r) => e << 32 - r | t >>> r, "Is");
      y.rotrSL = Is;
      var Os = /* @__PURE__ */ __name((e, t, r) => e << 64 - r | t >>> r - 32, "Os");
      y.rotrBH = Os;
      var Ns = /* @__PURE__ */ __name((e, t, r) => e >>> r - 32 | t << 64 - r, "Ns");
      y.rotrBL = Ns;
      var Ds = /* @__PURE__ */ __name((e, t) => t, "Ds");
      y.rotr32H = Ds;
      var Ms = /* @__PURE__ */ __name((e, t) => e, "Ms");
      y.rotr32L = Ms;
      var Fs = /* @__PURE__ */ __name((e, t, r) => e << r | t >>> 32 - r, "Fs");
      y.rotlSH = Fs;
      var _s = /* @__PURE__ */ __name((e, t, r) => t << r | e >>> 32 - r, "_s");
      y.rotlSL = _s;
      var $s = /* @__PURE__ */ __name((e, t, r) => t << r - 32 | e >>> 64 - r, "$s");
      y.rotlBH = $s;
      var Ls = /* @__PURE__ */ __name((e, t, r) => e << r - 32 | t >>> 64 - r, "Ls");
      y.rotlBL = Ls;
      function Vs(e, t, r, n) {
        let i = (t >>> 0) + (n >>> 0);
        return { h: e + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
      }
      __name(Vs, "Vs");
      var qs = /* @__PURE__ */ __name((e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0), "qs");
      y.add3L = qs;
      var js = /* @__PURE__ */ __name((e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0, "js");
      y.add3H = js;
      var Us = /* @__PURE__ */ __name((e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0), "Us");
      y.add4L = Us;
      var Bs = /* @__PURE__ */ __name((e, t, r, n, i) => t + r + n + i + (e / 2 ** 32 | 0) | 0, "Bs");
      y.add4H = Bs;
      var Qs = /* @__PURE__ */ __name((e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0), "Qs");
      y.add5L = Qs;
      var Js = /* @__PURE__ */ __name((e, t, r, n, i, o) => t + r + n + i + o + (e / 2 ** 32 | 0) | 0, "Js");
      y.add5H = Js;
      var _p = { fromBig: Nn, split: vs, toBig: As, shrSH: Cs, shrSL: Rs, rotrSH: ks, rotrSL: Is, rotrBH: Os, rotrBL: Ns, rotr32H: Ds, rotr32L: Ms, rotlSH: Fs, rotlSL: _s, rotlBH: $s, rotlBL: Ls, add: Vs, add3L: qs, add3H: js, add4L: Us, add4H: Bs, add5H: Js, add5L: Qs };
      y.default = _p;
    });
    var zs = q((Tr) => {
      "use strict";
      Object.defineProperty(Tr, "__esModule", { value: true });
      Tr.crypto = void 0;
      var ge = __require("node:crypto");
      Tr.crypto = ge && typeof ge == "object" && "webcrypto" in ge ? ge.webcrypto : ge && typeof ge == "object" && "randomBytes" in ge ? ge : void 0;
    });
    var Ks = q((E) => {
      "use strict";
      Object.defineProperty(E, "__esModule", { value: true });
      E.Hash = E.nextTick = E.byteSwapIfBE = E.isLE = void 0;
      E.isBytes = $p;
      E.u8 = Lp;
      E.u32 = Vp;
      E.createView = qp;
      E.rotr = jp;
      E.rotl = Up;
      E.byteSwap = Fn;
      E.byteSwap32 = Bp;
      E.bytesToHex = Jp;
      E.hexToBytes = Hp;
      E.asyncLoop = Gp;
      E.utf8ToBytes = Ws;
      E.toBytes = Sr;
      E.concatBytes = Wp;
      E.checkOpts = Kp;
      E.wrapConstructor = Zp;
      E.wrapConstructorWithOpts = Yp;
      E.wrapXOFConstructorWithOpts = Xp;
      E.randomBytes = ed;
      var We = zs(), Mn = In();
      function $p(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      __name($p, "$p");
      function Lp(e) {
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      __name(Lp, "Lp");
      function Vp(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      __name(Vp, "Vp");
      function qp(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      __name(qp, "qp");
      function jp(e, t) {
        return e << 32 - t | e >>> t;
      }
      __name(jp, "jp");
      function Up(e, t) {
        return e << t | e >>> 32 - t >>> 0;
      }
      __name(Up, "Up");
      E.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
      function Fn(e) {
        return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
      }
      __name(Fn, "Fn");
      E.byteSwapIfBE = E.isLE ? (e) => e : (e) => Fn(e);
      function Bp(e) {
        for (let t = 0; t < e.length; t++) e[t] = Fn(e[t]);
      }
      __name(Bp, "Bp");
      var Qp = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      function Jp(e) {
        (0, Mn.abytes)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += Qp[e[r]];
        return t;
      }
      __name(Jp, "Jp");
      var le = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function Gs(e) {
        if (e >= le._0 && e <= le._9) return e - le._0;
        if (e >= le.A && e <= le.F) return e - (le.A - 10);
        if (e >= le.a && e <= le.f) return e - (le.a - 10);
      }
      __name(Gs, "Gs");
      function Hp(e) {
        if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
        let t = e.length, r = t / 2;
        if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let i = 0, o = 0; i < r; i++, o += 2) {
          let s = Gs(e.charCodeAt(o)), a = Gs(e.charCodeAt(o + 1));
          if (s === void 0 || a === void 0) {
            let l2 = e[o] + e[o + 1];
            throw new Error('hex string expected, got non-hex character "' + l2 + '" at index ' + o);
          }
          n[i] = s * 16 + a;
        }
        return n;
      }
      __name(Hp, "Hp");
      var zp = /* @__PURE__ */ __name(async () => {
      }, "zp");
      E.nextTick = zp;
      async function Gp(e, t, r) {
        let n = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          let o = Date.now() - n;
          o >= 0 && o < t || (await (0, E.nextTick)(), n += o);
        }
      }
      __name(Gp, "Gp");
      function Ws(e) {
        if (typeof e != "string") throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      __name(Ws, "Ws");
      function Sr(e) {
        return typeof e == "string" && (e = Ws(e)), (0, Mn.abytes)(e), e;
      }
      __name(Sr, "Sr");
      function Wp(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          (0, Mn.abytes)(i), t += i.length;
        }
        let r = new Uint8Array(t);
        for (let n = 0, i = 0; n < e.length; n++) {
          let o = e[n];
          r.set(o, i), i += o.length;
        }
        return r;
      }
      __name(Wp, "Wp");
      var Dn = class {
        static {
          __name(this, "Dn");
        }
        clone() {
          return this._cloneInto();
        }
      };
      E.Hash = Dn;
      function Kp(e, t) {
        if (t !== void 0 && {}.toString.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
        return Object.assign(e, t);
      }
      __name(Kp, "Kp");
      function Zp(e) {
        let t = /* @__PURE__ */ __name((n) => e().update(Sr(n)).digest(), "t"), r = e();
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
      }
      __name(Zp, "Zp");
      function Yp(e) {
        let t = /* @__PURE__ */ __name((n, i) => e(i).update(Sr(n)).digest(), "t"), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      __name(Yp, "Yp");
      function Xp(e) {
        let t = /* @__PURE__ */ __name((n, i) => e(i).update(Sr(n)).digest(), "t"), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      __name(Xp, "Xp");
      function ed(e = 32) {
        if (We.crypto && typeof We.crypto.getRandomValues == "function") return We.crypto.getRandomValues(new Uint8Array(e));
        if (We.crypto && typeof We.crypto.randomBytes == "function") return We.crypto.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
      }
      __name(ed, "ed");
    });
    var ia = q((R) => {
      "use strict";
      Object.defineProperty(R, "__esModule", { value: true });
      R.shake256 = R.shake128 = R.keccak_512 = R.keccak_384 = R.keccak_256 = R.keccak_224 = R.sha3_512 = R.sha3_384 = R.sha3_256 = R.sha3_224 = R.Keccak = void 0;
      R.keccakP = ra;
      var Ke = In(), It = Hs(), ue = Ks(), Xs = [], ea = [], ta = [], td = BigInt(0), kt = BigInt(1), rd = BigInt(2), nd = BigInt(7), id = BigInt(256), od = BigInt(113);
      for (let e = 0, t = kt, r = 1, n = 0; e < 24; e++) {
        [r, n] = [n, (2 * r + 3 * n) % 5], Xs.push(2 * (5 * n + r)), ea.push((e + 1) * (e + 2) / 2 % 64);
        let i = td;
        for (let o = 0; o < 7; o++) t = (t << kt ^ (t >> nd) * od) % id, t & rd && (i ^= kt << (kt << BigInt(o)) - kt);
        ta.push(i);
      }
      var [sd, ad] = (0, It.split)(ta, true), Zs = /* @__PURE__ */ __name((e, t, r) => r > 32 ? (0, It.rotlBH)(e, t, r) : (0, It.rotlSH)(e, t, r), "Zs"), Ys = /* @__PURE__ */ __name((e, t, r) => r > 32 ? (0, It.rotlBL)(e, t, r) : (0, It.rotlSL)(e, t, r), "Ys");
      function ra(e, t = 24) {
        let r = new Uint32Array(10);
        for (let n = 24 - t; n < 24; n++) {
          for (let s = 0; s < 10; s++) r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
          for (let s = 0; s < 10; s += 2) {
            let a = (s + 8) % 10, l2 = (s + 2) % 10, u = r[l2], c = r[l2 + 1], p2 = Zs(u, c, 1) ^ r[a], d = Ys(u, c, 1) ^ r[a + 1];
            for (let m = 0; m < 50; m += 10) e[s + m] ^= p2, e[s + m + 1] ^= d;
          }
          let i = e[2], o = e[3];
          for (let s = 0; s < 24; s++) {
            let a = ea[s], l2 = Zs(i, o, a), u = Ys(i, o, a), c = Xs[s];
            i = e[c], o = e[c + 1], e[c] = l2, e[c + 1] = u;
          }
          for (let s = 0; s < 50; s += 10) {
            for (let a = 0; a < 10; a++) r[a] = e[s + a];
            for (let a = 0; a < 10; a++) e[s + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
          }
          e[0] ^= sd[n], e[1] ^= ad[n];
        }
        r.fill(0);
      }
      __name(ra, "ra");
      var Ot = class e extends ue.Hash {
        static {
          __name(this, "e");
        }
        constructor(t, r, n, i = false, o = 24) {
          if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, (0, Ke.anumber)(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200), this.state32 = (0, ue.u32)(this.state);
        }
        keccak() {
          ue.isLE || (0, ue.byteSwap32)(this.state32), ra(this.state32, this.rounds), ue.isLE || (0, ue.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
        }
        update(t) {
          (0, Ke.aexists)(this);
          let { blockLen: r, state: n } = this;
          t = (0, ue.toBytes)(t);
          let i = t.length;
          for (let o = 0; o < i; ) {
            let s = Math.min(r - this.pos, i - o);
            for (let a = 0; a < s; a++) n[this.pos++] ^= t[o++];
            this.pos === r && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = true;
          let { state: t, suffix: r, pos: n, blockLen: i } = this;
          t[n] ^= r, (r & 128) !== 0 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
        }
        writeInto(t) {
          (0, Ke.aexists)(this, false), (0, Ke.abytes)(t), this.finish();
          let r = this.state, { blockLen: n } = this;
          for (let i = 0, o = t.length; i < o; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, o - i);
            t.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, Ke.anumber)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if ((0, Ke.aoutput)(t, this), this.finished) throw new Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true, this.state.fill(0);
        }
        _cloneInto(t) {
          let { blockLen: r, suffix: n, outputLen: i, rounds: o, enableXOF: s } = this;
          return t || (t = new e(r, n, i, s, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.destroyed = this.destroyed, t;
        }
      };
      R.Keccak = Ot;
      var ye = /* @__PURE__ */ __name((e, t, r) => (0, ue.wrapConstructor)(() => new Ot(t, e, r)), "ye");
      R.sha3_224 = ye(6, 144, 224 / 8);
      R.sha3_256 = ye(6, 136, 256 / 8);
      R.sha3_384 = ye(6, 104, 384 / 8);
      R.sha3_512 = ye(6, 72, 512 / 8);
      R.keccak_224 = ye(1, 144, 224 / 8);
      R.keccak_256 = ye(1, 136, 256 / 8);
      R.keccak_384 = ye(1, 104, 384 / 8);
      R.keccak_512 = ye(1, 72, 512 / 8);
      var na = /* @__PURE__ */ __name((e, t, r) => (0, ue.wrapXOFConstructorWithOpts)((n = {}) => new Ot(t, e, n.dkLen === void 0 ? r : n.dkLen, true)), "na");
      R.shake128 = na(31, 168, 128 / 8);
      R.shake256 = na(31, 136, 256 / 8);
    });
    var da = q((wx, he) => {
      "use strict";
      var { sha3_512: ld } = ia(), sa = 24, Nt = 32, _n = /* @__PURE__ */ __name((e = 4, t = Math.random) => {
        let r = "";
        for (; r.length < e; ) r = r + Math.floor(t() * 36).toString(36);
        return r;
      }, "_n");
      function aa(e) {
        let t = 8n, r = 0n;
        for (let n of e.values()) {
          let i = BigInt(n);
          r = (r << t) + i;
        }
        return r;
      }
      __name(aa, "aa");
      var la = /* @__PURE__ */ __name((e = "") => aa(ld(e)).toString(36).slice(1), "la"), oa = Array.from({ length: 26 }, (e, t) => String.fromCharCode(t + 97)), ud = /* @__PURE__ */ __name((e) => oa[Math.floor(e() * oa.length)], "ud"), ua = /* @__PURE__ */ __name(({ globalObj: e = typeof global < "u" ? global : typeof window < "u" ? window : {}, random: t = Math.random } = {}) => {
        let r = Object.keys(e).toString(), n = r.length ? r + _n(Nt, t) : _n(Nt, t);
        return la(n).substring(0, Nt);
      }, "ua"), ca = /* @__PURE__ */ __name((e) => () => e++, "ca"), cd = 476782367, pa = /* @__PURE__ */ __name(({ random: e = Math.random, counter: t = ca(Math.floor(e() * cd)), length: r = sa, fingerprint: n = ua({ random: e }) } = {}) => function() {
        let o = ud(e), s = Date.now().toString(36), a = t().toString(36), l2 = _n(r, e), u = `${s + l2 + a + n}`;
        return `${o + la(u).substring(1, r)}`;
      }, "pa"), pd = pa(), dd = /* @__PURE__ */ __name((e, { minLength: t = 2, maxLength: r = Nt } = {}) => {
        let n = e.length, i = /^[0-9a-z]+$/;
        try {
          if (typeof e == "string" && n >= t && n <= r && i.test(e)) return true;
        } finally {
        }
        return false;
      }, "dd");
      he.exports.getConstants = () => ({ defaultLength: sa, bigLength: Nt });
      he.exports.init = pa;
      he.exports.createId = pd;
      he.exports.bufToBigInt = aa;
      he.exports.createCounter = ca;
      he.exports.createFingerprint = ua;
      he.exports.isCuid = dd;
    });
    var ma = q((bx, Dt) => {
      "use strict";
      var { createId: md, init: fd, getConstants: gd, isCuid: yd } = da();
      Dt.exports.createId = md;
      Dt.exports.init = fd;
      Dt.exports.getConstants = gd;
      Dt.exports.isCuid = yd;
    });
    var zm = {};
    Ne(zm, { AnyNull: /* @__PURE__ */ __name(() => O.AnyNull, "AnyNull"), DMMF: /* @__PURE__ */ __name(() => yt, "DMMF"), DbNull: /* @__PURE__ */ __name(() => O.DbNull, "DbNull"), Debug: /* @__PURE__ */ __name(() => _, "Debug"), Decimal: /* @__PURE__ */ __name(() => Xl.Decimal, "Decimal"), Extensions: /* @__PURE__ */ __name(() => Wr, "Extensions"), JsonNull: /* @__PURE__ */ __name(() => O.JsonNull, "JsonNull"), NullTypes: /* @__PURE__ */ __name(() => O.NullTypes, "NullTypes"), ObjectEnumValue: /* @__PURE__ */ __name(() => O.ObjectEnumValue, "ObjectEnumValue"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => b2.PrismaClientInitializationError, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => b2.PrismaClientKnownRequestError, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => b2.PrismaClientRustPanicError, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => b2.PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => b2.PrismaClientValidationError, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => Kr, "Public"), Sql: /* @__PURE__ */ __name(() => oe.Sql, "Sql"), createParam: /* @__PURE__ */ __name(() => So, "createParam"), defineDmmfProperty: /* @__PURE__ */ __name(() => Io, "defineDmmfProperty"), deserializeJsonObject: /* @__PURE__ */ __name(() => Z, "deserializeJsonObject"), deserializeRawResult: /* @__PURE__ */ __name(() => Hr, "deserializeRawResult"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => vi, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => oe.empty, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => Kl, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => Yl, "getRuntime"), isAnyNull: /* @__PURE__ */ __name(() => O.isAnyNull, "isAnyNull"), isDbNull: /* @__PURE__ */ __name(() => O.isDbNull, "isDbNull"), isJsonNull: /* @__PURE__ */ __name(() => O.isJsonNull, "isJsonNull"), isObjectEnumValue: /* @__PURE__ */ __name(() => O.isObjectEnumValue, "isObjectEnumValue"), join: /* @__PURE__ */ __name(() => oe.join, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => Zl, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => Oo, "makeTypedQueryFactory"), raw: /* @__PURE__ */ __name(() => oe.raw, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => pr, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => cr, "skip"), sqltag: /* @__PURE__ */ __name(() => oe.sql, "sqltag"), warnOnce: /* @__PURE__ */ __name(() => ln, "warnOnce") });
    module.exports = lu(zm);
    var Wr = {};
    Ne(Wr, { defineExtension: /* @__PURE__ */ __name(() => Ei, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => Pi, "getExtensionContext") });
    function Ei(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(Ei, "Ei");
    function Pi(e) {
      return e;
    }
    __name(Pi, "Pi");
    var Kr = {};
    Ne(Kr, { validator: /* @__PURE__ */ __name(() => Ti, "validator") });
    function Ti(...e) {
      return (t) => t;
    }
    __name(Ti, "Ti");
    var Y = class {
      static {
        __name(this, "Y");
      }
      _map = /* @__PURE__ */ new Map();
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function de(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(de, "de");
    function Si(e, t) {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    }
    __name(Si, "Si");
    function it(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(it, "it");
    function vi(e) {
      return { models: Zr(e.models), enums: Zr(e.enums), types: Zr(e.types) };
    }
    __name(vi, "vi");
    function Zr(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    __name(Zr, "Zr");
    var Ao = require_dist();
    var Jt = {};
    Ne(Jt, { $: /* @__PURE__ */ __name(() => Ii, "$"), bgBlack: /* @__PURE__ */ __name(() => wu, "bgBlack"), bgBlue: /* @__PURE__ */ __name(() => Pu, "bgBlue"), bgCyan: /* @__PURE__ */ __name(() => Su, "bgCyan"), bgGreen: /* @__PURE__ */ __name(() => xu, "bgGreen"), bgMagenta: /* @__PURE__ */ __name(() => Tu, "bgMagenta"), bgRed: /* @__PURE__ */ __name(() => bu, "bgRed"), bgWhite: /* @__PURE__ */ __name(() => vu, "bgWhite"), bgYellow: /* @__PURE__ */ __name(() => Eu, "bgYellow"), black: /* @__PURE__ */ __name(() => fu, "black"), blue: /* @__PURE__ */ __name(() => xe, "blue"), bold: /* @__PURE__ */ __name(() => z, "bold"), cyan: /* @__PURE__ */ __name(() => se, "cyan"), dim: /* @__PURE__ */ __name(() => ot, "dim"), gray: /* @__PURE__ */ __name(() => ut, "gray"), green: /* @__PURE__ */ __name(() => at, "green"), grey: /* @__PURE__ */ __name(() => hu, "grey"), hidden: /* @__PURE__ */ __name(() => du, "hidden"), inverse: /* @__PURE__ */ __name(() => pu, "inverse"), italic: /* @__PURE__ */ __name(() => cu, "italic"), magenta: /* @__PURE__ */ __name(() => gu, "magenta"), red: /* @__PURE__ */ __name(() => be, "red"), reset: /* @__PURE__ */ __name(() => uu, "reset"), strikethrough: /* @__PURE__ */ __name(() => mu, "strikethrough"), underline: /* @__PURE__ */ __name(() => st, "underline"), white: /* @__PURE__ */ __name(() => yu, "white"), yellow: /* @__PURE__ */ __name(() => lt, "yellow") });
    var Yr;
    var Ai;
    var Ci;
    var Ri;
    var ki = true;
    typeof process < "u" && ({ FORCE_COLOR: Yr, NODE_DISABLE_COLORS: Ai, NO_COLOR: Ci, TERM: Ri } = process.env || {}, ki = process.stdout && process.stdout.isTTY);
    var Ii = { enabled: !Ai && Ci == null && Ri !== "dumb" && (Yr != null && Yr !== "0" || ki) };
    function v(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Ii.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(v, "v");
    var uu = v(0, 0);
    var z = v(1, 22);
    var ot = v(2, 22);
    var cu = v(3, 23);
    var st = v(4, 24);
    var pu = v(7, 27);
    var du = v(8, 28);
    var mu = v(9, 29);
    var fu = v(30, 39);
    var be = v(31, 39);
    var at = v(32, 39);
    var lt = v(33, 39);
    var xe = v(34, 39);
    var gu = v(35, 39);
    var se = v(36, 39);
    var yu = v(37, 39);
    var ut = v(90, 39);
    var hu = v(90, 39);
    var wu = v(40, 49);
    var bu = v(41, 49);
    var xu = v(42, 49);
    var Eu = v(43, 49);
    var Pu = v(44, 49);
    var Tu = v(45, 49);
    var Su = v(46, 49);
    var vu = v(47, 49);
    var Au = 100;
    var Oi = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var ct = [];
    var Ni = Date.now();
    var Cu = 0;
    var Xr = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ??= Xr.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= Xr.DEBUG_COLORS ? Xr.DEBUG_COLORS === "true" : true;
    var pt = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, "log"), formatters: {} };
    function Ru(e) {
      let t = { color: Oi[Cu++ % Oi.length], enabled: pt.enabled(e), namespace: e, log: pt.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && ct.push([o, ...n]), ct.length > Au && ct.shift(), pt.enabled(o) || i) {
          let l2 = n.map((c) => typeof c == "string" ? c : ku(c)), u = `+${Date.now() - Ni}ms`;
          Ni = Date.now(), globalThis.DEBUG_COLORS ? a(Jt[s](z(o)), ...l2, Jt[s](u)) : a(o, ...l2, u);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => t[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => t[i] = o, "set") });
    }
    __name(Ru, "Ru");
    var _ = new Proxy(Ru, { get: /* @__PURE__ */ __name((e, t) => pt[t], "get"), set: /* @__PURE__ */ __name((e, t, r) => pt[t] = r, "set") });
    function ku(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    __name(ku, "ku");
    function Di(e = 7500) {
      let t = ct.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    __name(Di, "Di");
    function Mi() {
      ct.length = 0;
    }
    __name(Mi, "Mi");
    function ae(e, t) {
      throw new Error(t);
    }
    __name(ae, "ae");
    var Vi = B(Li(), 1);
    function en(e) {
      let t = (0, Vi.default)(e);
      if (t === 0) return e;
      let r = new RegExp(`^[ \\t]{${t}}`, "gm");
      return e.replace(r, "");
    }
    __name(en, "en");
    var qi = "prisma+postgres";
    var zt = `${qi}:`;
    function ji(e) {
      return e?.toString().startsWith(`${zt}//`) ?? false;
    }
    __name(ji, "ji");
    function tn(e) {
      if (!ji(e)) return false;
      let { host: t } = new URL(e);
      return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
    }
    __name(tn, "tn");
    var mt = {};
    Ne(mt, { error: /* @__PURE__ */ __name(() => Du, "error"), info: /* @__PURE__ */ __name(() => Nu, "info"), log: /* @__PURE__ */ __name(() => Ou, "log"), query: /* @__PURE__ */ __name(() => Mu, "query"), should: /* @__PURE__ */ __name(() => Qi, "should"), tags: /* @__PURE__ */ __name(() => dt, "tags"), warn: /* @__PURE__ */ __name(() => rn, "warn") });
    var dt = { error: be("prisma:error"), warn: lt("prisma:warn"), info: se("prisma:info"), query: xe("prisma:query") };
    var Qi = { warn: /* @__PURE__ */ __name(() => !process.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function Ou(...e) {
      console.log(...e);
    }
    __name(Ou, "Ou");
    function rn(e, ...t) {
      Qi.warn() && console.warn(`${dt.warn} ${e}`, ...t);
    }
    __name(rn, "rn");
    function Nu(e, ...t) {
      console.info(`${dt.info} ${e}`, ...t);
    }
    __name(Nu, "Nu");
    function Du(e, ...t) {
      console.error(`${dt.error} ${e}`, ...t);
    }
    __name(Du, "Du");
    function Mu(e, ...t) {
      console.log(`${dt.query} ${e}`, ...t);
    }
    __name(Mu, "Mu");
    function nn({ onlyFirst: e = false } = {}) {
      let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
      return new RegExp(r, e ? void 0 : "g");
    }
    __name(nn, "nn");
    var Fu = nn();
    function De(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(Fu, "");
    }
    __name(De, "De");
    var ft = B(__require("node:path"));
    function on(e) {
      return ft.default.sep === ft.default.posix.sep ? e : e.split(ft.default.sep).join(ft.default.posix.sep);
    }
    __name(on, "on");
    function sn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(sn, "sn");
    function Wt(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Wt, "Wt");
    function an(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(an, "an");
    function gt(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(gt, "gt");
    var Hi = /* @__PURE__ */ new Set();
    var ln = /* @__PURE__ */ __name((e, t, ...r) => {
      Hi.has(e) || (Hi.add(e), rn(t, ...r));
    }, "ln");
    function Me(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(Me, "Me");
    function Kt(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Kt, "Kt");
    var zi = require_dist();
    function Fe(e) {
      return zi.Decimal.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(Fe, "Fe");
    var wo = require_dist();
    var yt = {};
    Ne(yt, { ModelAction: /* @__PURE__ */ __name(() => _e, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => _u, "datamodelEnumToSchemaEnum") });
    function _u(e) {
      return { name: e.name, values: e.values.map((t) => t.name) };
    }
    __name(_u, "_u");
    var _e = ((A) => (A.findUnique = "findUnique", A.findUniqueOrThrow = "findUniqueOrThrow", A.findFirst = "findFirst", A.findFirstOrThrow = "findFirstOrThrow", A.findMany = "findMany", A.create = "create", A.createMany = "createMany", A.createManyAndReturn = "createManyAndReturn", A.update = "update", A.updateMany = "updateMany", A.updateManyAndReturn = "updateManyAndReturn", A.upsert = "upsert", A.delete = "delete", A.deleteMany = "deleteMany", A.groupBy = "groupBy", A.count = "count", A.aggregate = "aggregate", A.findRaw = "findRaw", A.aggregateRaw = "aggregateRaw", A))(_e || {});
    var Yi = B(Bi());
    var Zi = B(__require("node:fs"));
    var Gi = { keyword: se, entity: se, value: /* @__PURE__ */ __name((e) => z(xe(e)), "value"), punctuation: xe, directive: se, function: se, variable: /* @__PURE__ */ __name((e) => z(xe(e)), "variable"), string: /* @__PURE__ */ __name((e) => z(at(e)), "string"), boolean: lt, number: se, comment: ut };
    var $u = /* @__PURE__ */ __name((e) => e, "$u");
    var Zt = {};
    var Lu = 0;
    var h = { manual: Zt.Prism && Zt.Prism.manual, disableWorkerMessageHandler: Zt.Prism && Zt.Prism.disableWorkerMessageHandler, util: { encode: /* @__PURE__ */ __name(function(e) {
      if (e instanceof G) {
        let t = e;
        return new G(t.type, h.util.encode(t.content), t.alias);
      } else return Array.isArray(e) ? e.map(h.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, "encode"), type: /* @__PURE__ */ __name(function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, "type"), objId: /* @__PURE__ */ __name(function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Lu }), e.__id;
    }, "objId"), clone: /* @__PURE__ */ __name(function e(t, r) {
      let n, i, o = h.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = h.util.objId(t), r[i]) return r[i];
          n = {}, r[i] = n;
          for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = h.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    }, "e") }, languages: { extend: /* @__PURE__ */ __name(function(e, t) {
      let r = h.util.clone(h.languages[e]);
      for (let n in t) r[n] = t[n];
      return r;
    }, "extend"), insertBefore: /* @__PURE__ */ __name(function(e, t, r, n) {
      n = n || h.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == t) for (let l2 in r) r.hasOwnProperty(l2) && (o[l2] = r[l2]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, h.languages.DFS(h.languages, function(a, l2) {
        l2 === s && a != e && (this[a] = o);
      }), o;
    }, "insertBefore"), DFS: /* @__PURE__ */ __name(function e(t, r, n, i) {
      i = i || {};
      let o = h.util.objId;
      for (let s in t) if (t.hasOwnProperty(s)) {
        r.call(t, s, t[s], n || s);
        let a = t[s], l2 = h.util.type(a);
        l2 === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l2 === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
    }, "e") }, plugins: {}, highlight: /* @__PURE__ */ __name(function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return h.hooks.run("before-tokenize", n), n.tokens = h.tokenize(n.code, n.grammar), h.hooks.run("after-tokenize", n), G.stringify(h.util.encode(n.tokens), n.language);
    }, "highlight"), matchGrammar: /* @__PURE__ */ __name(function(e, t, r, n, i, o, s) {
      for (let x2 in r) {
        if (!r.hasOwnProperty(x2) || !r[x2]) continue;
        if (x2 == s) return;
        let w2 = r[x2];
        w2 = h.util.type(w2) === "Array" ? w2 : [w2];
        for (let k2 = 0; k2 < w2.length; ++k2) {
          let P2 = w2[k2], A = P2.inside, U = !!P2.lookbehind, Oe = !!P2.greedy, Gr = 0, eu = P2.alias;
          if (Oe && !P2.pattern.global) {
            let L = P2.pattern.toString().match(/[imuy]*$/)[0];
            P2.pattern = RegExp(P2.pattern.source, L + "g");
          }
          P2 = P2.pattern || P2;
          for (let L = n, pe = i; L < t.length; pe += t[L].length, ++L) {
            let nt = t[L];
            if (t.length > e.length) return;
            if (nt instanceof G) continue;
            if (Oe && L != t.length - 1) {
              P2.lastIndex = pe;
              var p2 = P2.exec(e);
              if (!p2) break;
              var c = p2.index + (U ? p2[1].length : 0), d = p2.index + p2[0].length, a = L, l2 = pe;
              for (let ru = t.length; a < ru && (l2 < d || !t[a].type && !t[a - 1].greedy); ++a) l2 += t[a].length, c >= l2 && (++L, pe = l2);
              if (t[L] instanceof G) continue;
              u = a - L, nt = e.slice(pe, l2), p2.index -= pe;
            } else {
              P2.lastIndex = 0;
              var p2 = P2.exec(nt), u = 1;
            }
            if (!p2) {
              if (o) break;
              continue;
            }
            U && (Gr = p2[1] ? p2[1].length : 0);
            var c = p2.index + Gr, p2 = p2[0].slice(Gr), d = c + p2.length, m = nt.slice(0, c), g = nt.slice(d);
            let Bt = [L, u];
            m && (++L, pe += m.length, Bt.push(m));
            let tu = new G(x2, A ? h.tokenize(p2, A) : p2, eu, p2, Oe);
            if (Bt.push(tu), g && Bt.push(g), Array.prototype.splice.apply(t, Bt), u != 1 && h.matchGrammar(e, t, r, L, pe, true, x2), o) break;
          }
        }
      }
    }, "matchGrammar"), tokenize: /* @__PURE__ */ __name(function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return h.matchGrammar(e, r, t, 0, 0, false), r;
    }, "tokenize"), hooks: { all: {}, add: /* @__PURE__ */ __name(function(e, t) {
      let r = h.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, "add"), run: /* @__PURE__ */ __name(function(e, t) {
      let r = h.hooks.all[e];
      if (!(!r || !r.length)) for (var n = 0, i; i = r[n++]; ) i(t);
    }, "run") }, Token: G };
    h.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    h.languages.javascript = h.languages.extend("clike", { "class-name": [h.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    h.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    h.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: h.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: h.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: h.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: h.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    h.languages.markup && h.languages.markup.tag.addInlined("script", "javascript");
    h.languages.js = h.languages.javascript;
    h.languages.typescript = h.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    h.languages.ts = h.languages.typescript;
    function G(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    __name(G, "G");
    G.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return G.stringify(r, t);
      }).join("") : Vu(e.type)(e.content);
    };
    function Vu(e) {
      return Gi[e] || $u;
    }
    __name(Vu, "Vu");
    function Wi(e) {
      return qu(e, h.languages.javascript);
    }
    __name(Wi, "Wi");
    function qu(e, t) {
      return h.tokenize(e, t).map((n) => G.stringify(n)).join("");
    }
    __name(qu, "qu");
    function Ki(e) {
      return en(e);
    }
    __name(Ki, "Ki");
    var Yt = class e {
      static {
        __name(this, "e");
      }
      firstLineNumber;
      lines;
      static read(t) {
        let r;
        try {
          r = Zi.default.readFileSync(t, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber) return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Ki(n).split(`
`));
      }
      highlight() {
        let t = Wi(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var ju = { red: be, gray: ut, dim: ot, bold: z, underline: st, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var Uu = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function Bu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(Bu, "Bu");
    function Qu({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      let s = Bu({ message: t, originalMethod: r, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l2 = Math.max(1, a.lineNumber - 3), u = Yt.read(a.fileName)?.slice(l2, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p2 = Hu(c), d = Ju(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let m = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((g, x2) => o.gray(String(x2).padStart(m)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("→"))), i) {
          let g = p2 + m + 1;
          g += 2, s.callArguments = (0, Yi.default)(i, g).slice(g);
        }
      }
      return s;
    }
    __name(Qu, "Qu");
    function Ju(e) {
      let t = Object.keys(_e).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    __name(Ju, "Ju");
    function Hu(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ") return t;
        t++;
      }
      return t;
    }
    __name(Hu, "Hu");
    function zu({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l2 = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l2}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l2}`)), t && a.push(s.underline(Gu(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(zu, "zu");
    function Gu(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(Gu, "Gu");
    function Xt(e) {
      let t = e.showColors ? ju : Uu, r;
      return r = Qu(e, t), zu(r, t);
    }
    __name(Xt, "Xt");
    var ao = B(un());
    function ro(e, t, r) {
      let n = no(e), i = Wu(n), o = Zu(i);
      o ? er(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(ro, "ro");
    function no(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? no(t) : [t]);
    }
    __name(no, "no");
    function Wu(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Ku(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(Wu, "Wu");
    function Ku(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(Ku, "Ku");
    function Zu(e) {
      return an(e, (t, r) => {
        let n = eo(t), i = eo(r);
        return n !== i ? n - i : to(t) - to(r);
      });
    }
    __name(Zu, "Zu");
    function eo(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(eo, "eo");
    function to(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(to, "to");
    var j = class {
      static {
        __name(this, "j");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    oo();
    var $e = class {
      static {
        __name(this, "$e");
      }
      constructor(t = 0, r) {
        this.context = r;
        this.currentIndent = t;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    io();
    var tr = class {
      static {
        __name(this, "tr");
      }
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var rr = /* @__PURE__ */ __name((e) => e, "rr");
    var nr = { bold: rr, red: rr, green: rr, dim: rr, enabled: false };
    var so = { bold: z, red: be, green: at, dim: ot, enabled: true };
    var Le = { write(e) {
      e.writeLine(",");
    } };
    var X = class {
      static {
        __name(this, "X");
      }
      constructor(t) {
        this.contents = t;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((t) => t, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var me = class {
      static {
        __name(this, "me");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Ve = class extends me {
      static {
        __name(this, "Ve");
      }
      items = [];
      addItem(t) {
        return this.items.push(new tr(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let r = new X("[]");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithItems(t) {
        let { colors: r } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(Le, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var qe = class e extends me {
      static {
        __name(this, "e");
      }
      fields = {};
      suggestions = [];
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [r, ...n] = t, i = this.getField(r);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof Ve && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let r = this;
        for (let n of t) {
          if (!(r instanceof e)) return;
          let i = r.getSubSelectionValue(n);
          if (!i) return;
          r = i;
        }
        return r;
      }
      getDeepSelectionParent(t) {
        let r = this.getSelectionParent();
        if (!r) return;
        let n = r;
        for (let i of t) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let t = this.getField("select")?.value.asObject();
        if (t) return { kind: "select", value: t };
        let r = this.getField("include")?.value.asObject();
        if (r) return { kind: "include", value: r };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
      }
      write(t) {
        let r = Object.values(this.fields);
        if (r.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, r);
      }
      asObject() {
        return this;
      }
      writeEmpty(t) {
        let r = new X("{}");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithContents(t, r) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(Le, [...r, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var I = class extends me {
      static {
        __name(this, "I");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new X(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    var ht = class {
      static {
        __name(this, "ht");
      }
      fields = [];
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(Le, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function er(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Yu(e, t);
          break;
        case "IncludeOnScalar":
          Xu(e, t);
          break;
        case "EmptySelection":
          ec(e, t, r);
          break;
        case "UnknownSelectionField":
          ic(e, t);
          break;
        case "InvalidSelectionValue":
          oc(e, t);
          break;
        case "UnknownArgument":
          sc(e, t);
          break;
        case "UnknownInputField":
          ac(e, t);
          break;
        case "RequiredArgumentMissing":
          lc(e, t);
          break;
        case "InvalidArgumentType":
          uc(e, t);
          break;
        case "InvalidArgumentValue":
          cc(e, t);
          break;
        case "ValueTooLarge":
          pc(e, t);
          break;
        case "SomeFieldsMissing":
          dc(e, t);
          break;
        case "TooManyFieldsGiven":
          mc(e, t);
          break;
        case "Union":
          ro(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(er, "er");
    function Yu(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(Yu, "Yu");
    function Xu(e, t) {
      let [r, n] = je(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new j(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${wt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(Xu, "Xu");
    function ec(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          tc(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          rc(e, t);
          return;
        }
      }
      if (r?.[de(e.outputType.name)]) {
        nc(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(ec, "ec");
    function tc(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new j(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(tc, "tc");
    function rc(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), co(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${wt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(rc, "rc");
    function nc(e, t) {
      let r = new ht();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new j("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = je(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l2 = a?.value.asObject() ?? new qe();
          l2.addSuggestion(n), a.value = l2;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(nc, "nc");
    function ic(e, t) {
      let r = po(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            co(n, e.outputType);
            break;
          case "include":
            fc(n, e.outputType);
            break;
          case "omit":
            gc(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(wt(n)), i.join(" ");
      });
    }
    __name(ic, "ic");
    function oc(e, t) {
      let r = po(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(oc, "oc");
    function sc(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), yc(n, e.arguments)), t.addErrorMessage((i) => lo(i, r, e.arguments.map((o) => o.name)));
    }
    __name(sc, "sc");
    function ac(e, t) {
      let [r, n] = je(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && mo(o, e.inputType);
      }
      t.addErrorMessage((o) => lo(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(ac, "ac");
    function lo(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = wc(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(wt(e)), n.join(" ");
    }
    __name(lo, "lo");
    function lc(e, t) {
      let r;
      t.addErrorMessage((l2) => r?.value instanceof I && r.value.text === "null" ? `Argument \`${l2.green(o)}\` must not be ${l2.red("null")}.` : `Argument \`${l2.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = je(e.argumentPath), s = new ht(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) {
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l2 of e.inputTypes[0].fields) s.addField(l2.name, l2.typeNames.join(" | "));
          a.addSuggestion(new j(o, s).makeRequired());
        } else {
          let l2 = e.inputTypes.map(uo).join(" | ");
          a.addSuggestion(new j(o, l2).makeRequired());
        }
        if (e.dependentArgumentPath) {
          n.getDeepField(e.dependentArgumentPath)?.markAsError();
          let [, l2] = je(e.dependentArgumentPath);
          t.addErrorMessage((u) => `Argument \`${u.green(o)}\` is required because argument \`${u.green(l2)}\` was provided.`);
        }
      }
    }
    __name(lc, "lc");
    function uo(e) {
      return e.kind === "list" ? `${uo(e.elementType)}[]` : e.name;
    }
    __name(uo, "uo");
    function uc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = ir("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(uc, "uc");
    function cc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = ir("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(cc, "cc");
    function pc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof I && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(pc, "pc");
    function dc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && mo(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${ir("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(wt(i)), o.join(" ");
      });
    }
    __name(dc, "dc");
    function mc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${ir("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(mc, "mc");
    function co(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new j(r.name, "true"));
    }
    __name(co, "co");
    function fc(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new j(r.name, "true"));
    }
    __name(fc, "fc");
    function gc(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new j(r.name, "true"));
    }
    __name(gc, "gc");
    function yc(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new j(r.name, r.typeNames.join(" | ")));
    }
    __name(yc, "yc");
    function po(e, t) {
      let [r, n] = je(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l2 = o?.getField(n);
      return o && l2 ? { parentKind: "select", parent: o, field: l2, fieldName: n } : (l2 = s?.getField(n), s && l2 ? { parentKind: "include", field: l2, parent: s, fieldName: n } : (l2 = a?.getField(n), a && l2 ? { parentKind: "omit", field: l2, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(po, "po");
    function mo(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new j(r.name, r.typeNames.join(" | ")));
    }
    __name(mo, "mo");
    function je(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(je, "je");
    function wt({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(wt, "wt");
    function ir(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(ir, "ir");
    var hc = 3;
    function wc(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, ao.default)(e, i);
        o > hc || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(wc, "wc");
    var go = require_dist();
    var bt = class {
      static {
        __name(this, "bt");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Ue(e) {
      return e instanceof bt;
    }
    __name(Ue, "Ue");
    var fo = ": ";
    var or = class {
      static {
        __name(this, "or");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + fo.length;
      }
      write(t) {
        let r = new X(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(fo).write(this.value);
      }
    };
    var pn = class {
      static {
        __name(this, "pn");
      }
      arguments;
      errorMessages = [];
      constructor(t) {
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function Be(e) {
      return new pn(yo(e));
    }
    __name(Be, "Be");
    function yo(e) {
      let t = new qe();
      for (let [r, n] of Object.entries(e)) {
        let i = new or(r, ho(n));
        t.addField(i);
      }
      return t;
    }
    __name(yo, "yo");
    function ho(e) {
      if (typeof e == "string") return new I(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new I(String(e));
      if (typeof e == "bigint") return new I(`${e}n`);
      if (e === null) return new I("null");
      if (e === void 0) return new I("undefined");
      if (Fe(e)) return new I(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new I(`Buffer.alloc(${e.byteLength})`) : new I(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Kt(e) ? e.toISOString() : "Invalid Date";
        return new I(`new Date("${t}")`);
      }
      return (0, go.isObjectEnumValue)(e) ? new I(`Prisma.${e._getName()}`) : Ue(e) ? new I(`prisma.${de(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? bc(e) : typeof e == "object" ? yo(e) : new I(Object.prototype.toString.call(e));
    }
    __name(ho, "ho");
    function bc(e) {
      let t = new Ve();
      for (let r of e) t.addItem(ho(r));
      return t;
    }
    __name(bc, "bc");
    function sr(e, t) {
      let r = t === "pretty" ? so : nr, n = e.renderAllMessages(r), i = new $e(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(sr, "sr");
    function ar({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = Be(e);
      for (let p2 of t) er(p2, a, s);
      let { message: l2, args: u } = sr(a, r), c = Xt({ message: l2, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new wo.PrismaClientValidationError(c, { clientVersion: o });
    }
    __name(ar, "ar");
    function ee(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(ee, "ee");
    function xo(e, t, r) {
      let n = ee(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : xc({ ...e, ...bo(t.name, e, t.result.$allModels), ...bo(t.name, e, t.result[n]) });
    }
    __name(xo, "xo");
    function xc(e) {
      let t = new Y(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Wt(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(xc, "xc");
    function bo(e, t, r) {
      return r ? Wt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Ec(t, o, i) })) : {};
    }
    __name(bo, "bo");
    function Ec(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(Ec, "Ec");
    function Eo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(Eo, "Eo");
    function Po(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(Po, "Po");
    var lr = class {
      static {
        __name(this, "lr");
      }
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
      }
      computedFieldsCache = new Y();
      modelExtensionsCache = new Y();
      queryCallbacksCache = new Y();
      clientExtensions = it(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = it(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => xo(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = ee(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Qe = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new lr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new lr(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var ur = class {
      static {
        __name(this, "ur");
      }
      constructor(t) {
        this.name = t;
      }
    };
    function To(e) {
      return e instanceof ur;
    }
    __name(To, "To");
    function So(e) {
      return new ur(e);
    }
    __name(So, "So");
    var vo = Symbol();
    var xt = class {
      static {
        __name(this, "xt");
      }
      constructor(t) {
        if (t !== vo) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? cr : t;
      }
    };
    var cr = new xt(vo);
    function Q(e) {
      return e instanceof xt;
    }
    __name(Q, "Q");
    var Pc = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Co = "explicitly `undefined` values are not allowed";
    function pr({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = Qe.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l2, previewFeatures: u, globalOmit: c, wrapRawValues: p2 }) {
      let d = new dn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l2, previewFeatures: u, globalOmit: c, wrapRawValues: p2 });
      return { modelName: e, action: Pc[t], query: Et(r, d) };
    }
    __name(pr, "pr");
    function Et({ select: e, include: t, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: ko(r, n), selection: Tc(e, t, i, n) };
    }
    __name(Et, "Et");
    function Tc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Cc(e, n)) : Sc(n, t, r);
    }
    __name(Tc, "Tc");
    function Sc(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && vc(n, t, e), Ac(n, r, e), n;
    }
    __name(Sc, "Sc");
    function vc(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (Q(i)) continue;
        let o = r.nestSelection(n);
        if (mn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = Et(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Et(i, o);
      }
    }
    __name(vc, "vc");
    function Ac(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = Po(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (Q(a)) continue;
        mn(a, r.nestSelection(s));
        let l2 = r.findField(s);
        n?.[s] && !l2 || (e[s] = !a);
      }
    }
    __name(Ac, "Ac");
    function Cc(e, t) {
      let r = {}, n = t.getComputedFields(), i = Eo(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (Q(s)) continue;
        let a = t.nestSelection(o);
        mn(s, a);
        let l2 = t.findField(o);
        if (!(n?.[o] && !l2)) {
          if (s === false || s === void 0 || Q(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l2?.kind === "object" ? r[o] = Et({}, a) : r[o] = true;
            continue;
          }
          r[o] = Et(s, a);
        }
      }
      return r;
    }
    __name(Cc, "Cc");
    function Ro(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (Me(e)) {
        if (Kt(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (To(e)) return { $type: "Param", value: e.name };
      if (Ue(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return Rc(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: Buffer.from(r, n, i).toString("base64") };
      }
      if (kc(e)) return e.values;
      if (Fe(e)) return { $type: "Decimal", value: e.toFixed() };
      if ((0, Ao.isObjectEnumValue)(e)) {
        let r = e._getName();
        if (r !== "DbNull" && r !== "JsonNull" && r !== "AnyNull") throw new Error(`Invalid ObjectEnumValue: expected DbNull, JsonNull, or AnyNull, got ${r}`);
        return { $type: "Enum", value: r };
      }
      if (Ic(e)) return e.toJSON();
      if (typeof e == "object") return ko(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(Ro, "Ro");
    function ko(e, t) {
      if (t.shouldWrapRawValues() && e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        Q(i) || (i !== void 0 ? r[n] = Ro(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Co }));
      }
      return r;
    }
    __name(ko, "ko");
    function Rc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Q(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(Ro(o, i));
      }
      return r;
    }
    __name(Rc, "Rc");
    function kc(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(kc, "kc");
    function Ic(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(Ic, "Ic");
    function mn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: Co });
    }
    __name(mn, "mn");
    var dn = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(t) {
        ar({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      shouldWrapRawValues() {
        return this.params.wrapRawValues ?? true;
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[de(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            ae(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    function Io(e, t) {
      let r = it(() => Oc(t));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(Io, "Io");
    function Oc(e) {
      return { datamodel: { models: fn(e.models), enums: fn(e.enums), types: fn(e.types) } };
    }
    __name(Oc, "Oc");
    function fn(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    __name(fn, "fn");
    var gn = /* @__PURE__ */ new WeakMap();
    var dr = "$$PrismaTypedSql";
    var Pt = class {
      static {
        __name(this, "Pt");
      }
      constructor(t, r) {
        gn.set(this, { sql: t, values: r }), Object.defineProperty(this, dr, { value: dr });
      }
      get sql() {
        return gn.get(this).sql;
      }
      get values() {
        return gn.get(this).values;
      }
    };
    function Oo(e) {
      return (...t) => new Pt(e, t);
    }
    __name(Oo, "Oo");
    function mr(e) {
      return e != null && e[dr] === dr;
    }
    __name(mr, "mr");
    var Hl = require_dist();
    var zl = __require("node:async_hooks");
    var Gl = __require("node:events");
    function Tt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(Tt, "Tt");
    function $2(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name($2, "$");
    function Ee(e) {
      let t = new Y();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(Ee, "Ee");
    var fr = { enumerable: true, configurable: true, writable: true };
    function gr(e) {
      let t = new Set(e);
      return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => fr, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => t.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => t.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...t], "ownKeys") };
    }
    __name(gr, "gr");
    var No = Symbol.for("nodejs.util.inspect.custom");
    function W(e, t) {
      let r = Nc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Do(Reflect.ownKeys(o), r), a = Do(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l2 = r.get(s);
        return l2 ? l2.getPropertyDescriptor ? { ...fr, ...l2?.getPropertyDescriptor(s) } : fr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
      return i[No] = function() {
        let o = { ...this };
        return delete o[No], o;
      }, i;
    }
    __name(W, "W");
    function Nc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    __name(Nc, "Nc");
    function Do(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(Do, "Do");
    function Je(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(Je, "Je");
    function Mo(e) {
      if (e === void 0) return "";
      let t = Be(e);
      return new $e(0, { colors: nr }).write(t).toString();
    }
    __name(Mo, "Mo");
    var St = "<unknown>";
    function Fo(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = Fc(n) || $c(n) || qc(n) || Qc(n) || Uc(n);
        return i && r.push(i), r;
      }, []);
    }
    __name(Fo, "Fo");
    var Dc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var Mc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function Fc(e) {
      var t = Dc.exec(e);
      if (!t) return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Mc.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || St, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    __name(Fc, "Fc");
    var _c = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function $c(e) {
      var t = _c.exec(e);
      return t ? { file: t[2], methodName: t[1] || St, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    __name($c, "$c");
    var Lc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Vc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function qc(e) {
      var t = Lc.exec(e);
      if (!t) return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Vc.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || St, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    __name(qc, "qc");
    var jc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function Uc(e) {
      var t = jc.exec(e);
      return t ? { file: t[3], methodName: t[1] || St, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    __name(Uc, "Uc");
    var Bc = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Qc(e) {
      var t = Bc.exec(e);
      return t ? { file: t[2], methodName: t[1] || St, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    __name(Qc, "Qc");
    var yn = class {
      static {
        __name(this, "yn");
      }
      getLocation() {
        return null;
      }
    };
    var hn = class {
      static {
        __name(this, "hn");
      }
      _error;
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t) return null;
        let n = Fo(t).find((i) => {
          if (!i.file) return false;
          let o = on(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/client.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function fe(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new yn() : new hn();
    }
    __name(fe, "fe");
    var _o = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function He(e = {}) {
      let t = Hc(e);
      return Object.entries(t).reduce((n, [i, o]) => (_o[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(He, "He");
    function Hc(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(Hc, "Hc");
    function yr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(yr, "yr");
    function $o(e, t) {
      let r = yr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: He })(e);
    }
    __name($o, "$o");
    function zc(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? He({ ...r, _count: t }) : He({ ...r, _count: { _all: true } });
    }
    __name(zc, "zc");
    function Gc(e = {}) {
      return typeof e.select == "object" ? (t) => yr(e)(t)._count : (t) => yr(e)(t)._count._all;
    }
    __name(Gc, "Gc");
    function Lo(e, t) {
      return t({ action: "count", unpacker: Gc(e), argsMapper: zc })(e);
    }
    __name(Lo, "Lo");
    function Wc(e = {}) {
      let t = He(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(Wc, "Wc");
    function Kc(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(Kc, "Kc");
    function Vo(e, t) {
      return t({ action: "groupBy", unpacker: Kc(e), argsMapper: Wc })(e);
    }
    __name(Vo, "Vo");
    function qo(e, t, r) {
      if (t === "aggregate") return (n) => $o(n, r);
      if (t === "count") return (n) => Lo(n, r);
      if (t === "groupBy") return (n) => Vo(n, r);
    }
    __name(qo, "qo");
    function jo(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Si(r, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new bt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...gr(Object.keys(n)) });
    }
    __name(jo, "jo");
    var Uo = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "Uo");
    var wn = /* @__PURE__ */ __name((e, t) => Uo(t).reduce((r, n) => r && r[n], e), "wn");
    var Bo = /* @__PURE__ */ __name((e, t, r) => Uo(t).reduceRight((n, i, o, s) => Object.assign({}, wn(e, s.slice(0, o)), { [i]: n }), r), "Bo");
    function Zc(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(Zc, "Zc");
    function Yc(e, t, r) {
      return t === void 0 ? e ?? {} : Bo(t, r, e || true);
    }
    __name(Yc, "Yc");
    function bn(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l2, u) => ({ ...l2, [u.name]: u }), {});
      return (l2) => {
        let u = fe(e._errorFormat), c = Zc(n, i), p2 = Yc(l2, o, c), d = r({ dataPath: c, callsite: u })(p2), m = Xc(e, t);
        return new Proxy(d, { get(g, x2) {
          if (!m.includes(x2)) return g[x2];
          let k2 = [a[x2].type, r, x2], P2 = [c, p2];
          return bn(e, ...k2, ...P2);
        }, ...gr([...m, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    __name(bn, "bn");
    function Xc(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(Xc, "Xc");
    var ep = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var tp = ["aggregate", "count", "groupBy"];
    function xn(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [rp(e, t), ip(e, t), Tt(r), $2("name", () => t), $2("$name", () => t), $2("$parent", () => e._appliedParent)];
      return W({}, n);
    }
    __name(xn, "xn");
    function rp(e, t) {
      let r = ee(t), n = Object.keys(_e).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a) => (l2) => {
          let u = fe(e._errorFormat);
          return e._createPrismaPromise((c) => {
            let p2 = { args: l2, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: c, callsite: u };
            return e._request({ ...p2, ...a });
          }, { action: o, args: l2, model: t });
        }, "s");
        return ep.includes(o) ? bn(e, t, s) : np(i) ? qo(e, i, s) : s({});
      } };
    }
    __name(rp, "rp");
    function np(e) {
      return tp.includes(e);
    }
    __name(np, "np");
    function ip(e, t) {
      return Ee($2("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return jo(t, r);
      }));
    }
    __name(ip, "ip");
    function Qo(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(Qo, "Qo");
    var En = Symbol();
    function vt(e) {
      let t = [op(e), sp(e), $2(En, () => e), $2("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Tt(r)), W(e, t);
    }
    __name(vt, "vt");
    function op(e) {
      let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    __name(op, "op");
    function sp(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(ee), n = [...new Set(t.concat(r))];
      return Ee({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Qo(i);
        if (e._runtimeDataModel.models[o] !== void 0) return xn(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return xn(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(sp, "sp");
    function Jo(e) {
      return e[En] ? e[En] : e;
    }
    __name(Jo, "Jo");
    function Ho(e) {
      if (typeof e == "function") return e(this);
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } });
      return vt(t);
    }
    __name(Ho, "Ho");
    function zo({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a = [];
      for (let l2 of Object.values(o)) {
        if (n) {
          if (n[l2.name]) continue;
          let u = l2.needs.filter((c) => n[c]);
          u.length > 0 && a.push(Je(u));
        } else if (r) {
          if (!r[l2.name]) continue;
          let u = l2.needs.filter((c) => !r[c]);
          u.length > 0 && a.push(Je(u));
        }
        ap(e, l2.needs) && s.push(lp(l2, W(e, s)));
      }
      return s.length > 0 || a.length > 0 ? W(e, [...s, ...a]) : e;
    }
    __name(zo, "zo");
    function ap(e, t) {
      return t.every((r) => sn(e, r));
    }
    __name(ap, "ap");
    function lp(e, t) {
      return Ee($2(e.name, () => e.compute(t)));
    }
    __name(lp, "lp");
    function hr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = hr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && Go({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Go({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(hr, "hr");
    function Go({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || Q(s)) continue;
        let l2 = n.models[r].fields.find((c) => c.name === o);
        if (!l2 || l2.kind !== "object" || !l2.relationName) continue;
        let u = typeof s == "object" ? s : {};
        t[o] = hr({ visitor: i, result: t[o], args: u, modelName: l2.type, runtimeDataModel: n });
      }
    }
    __name(Go, "Go");
    function Wo({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : hr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, l2, u) => {
        let c = ee(l2);
        return zo({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o?.[c], ...u.omit }, extensions: n });
      }, "visitor") });
    }
    __name(Wo, "Wo");
    var Pe = require_dist();
    var up = ["$connect", "$disconnect", "$on", "$use", "$extends"];
    var Ko = up;
    function Zo(e) {
      if (e instanceof Pe.Sql) return cp(e);
      if (mr(e)) return pp(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = At(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = At(e[r]);
      return t;
    }
    __name(Zo, "Zo");
    function cp(e) {
      return new Pe.Sql(e.strings, e.values);
    }
    __name(cp, "cp");
    function pp(e) {
      return new Pt(e.sql, e.values);
    }
    __name(pp, "pp");
    function At(e) {
      if (typeof e != "object" || e == null || (0, Pe.isObjectEnumValue)(e) || Ue(e) || Q(e)) return e;
      if (Fe(e)) return new Pe.Decimal(e.toFixed());
      if (Me(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = At(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: At(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = At(e[r]);
        return t;
      }
      ae(e, "Unknown value");
    }
    __name(At, "At");
    function Xo(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Zo(t.args ?? {}), __internalParams: t, query: /* @__PURE__ */ __name((s, a = t) => {
          let l2 = a.customDataProxyFetch;
          return a.customDataProxyFetch = ns(o, l2), a.args = s, Xo(e, a, r, n + 1);
        }, "query") });
      });
    }
    __name(Xo, "Xo");
    function es(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return Xo(e, t, s);
    }
    __name(es, "es");
    function ts(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? rs(r, n, 0, e) : e(r);
      };
    }
    __name(ts, "ts");
    function rs(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l2 = a.customDataProxyFetch;
        return a.customDataProxyFetch = ns(i, l2), rs(a, t, r + 1, n);
      } });
    }
    __name(rs, "rs");
    var Yo = /* @__PURE__ */ __name((e) => e, "Yo");
    function ns(e = Yo, t = Yo) {
      return (r) => e(t(r));
    }
    __name(ns, "ns");
    function os({ dataPath: e, modelName: t, args: r, runtimeDataModel: n }) {
      let i = { modelName: t, args: r ?? {} }, o = dp(e);
      if (!o || o.length === 0) return i;
      let s = t, a = r ?? {};
      for (let l2 of o) {
        let u = n.models[s];
        if (!u) return i;
        let c = u.fields.find((p2) => p2.name === l2);
        if (!c) throw new Error(`Could not resolve relation field "${l2}" on model "${s}" from dataPath "${e.join(".")}"`);
        if (c.kind !== "object" || !c.relationName) return i;
        s = c.type, a = mp(a, l2);
      }
      return { modelName: s, args: a };
    }
    __name(os, "os");
    function dp(e) {
      let t = [];
      for (let r = 0; r < e.length; r += 2) {
        let n = e[r], i = e[r + 1];
        if (n !== "select" && n !== "include" || i === void 0) return;
        t.push(i);
      }
      return t;
    }
    __name(dp, "dp");
    function mp(e, t) {
      let r = e.select?.[t];
      if (is(r)) return r;
      let n = e.include?.[t];
      return is(n) ? n : {};
    }
    __name(mp, "mp");
    function is(e) {
      return !!e && typeof e == "object" && !Array.isArray(e);
    }
    __name(is, "is");
    var ps = require_dist();
    var Ct = require_dist();
    function T2(e, t) {
      throw new Error(t);
    }
    __name(T2, "T");
    function Pn(e, t) {
      return e === t || e !== null && t !== null && typeof e == "object" && typeof t == "object" && Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => Pn(e[r], t[r]));
    }
    __name(Pn, "Pn");
    function ze(e, t) {
      let r = Object.keys(e), n = Object.keys(t);
      return (r.length < n.length ? r : n).every((o) => {
        if (typeof e[o] == typeof t[o] && typeof e[o] != "object") return e[o] === t[o];
        if (Ct.Decimal.isDecimal(e[o]) || Ct.Decimal.isDecimal(t[o])) {
          let s = ss(e[o]), a = ss(t[o]);
          return s && a && s.equals(a);
        } else if (e[o] instanceof Uint8Array || t[o] instanceof Uint8Array) {
          let s = as(e[o]), a = as(t[o]);
          return s && a && s.equals(a);
        } else {
          if (e[o] instanceof Date || t[o] instanceof Date) return ls(e[o])?.getTime() === ls(t[o])?.getTime();
          if (typeof e[o] == "bigint" || typeof t[o] == "bigint") return us(e[o]) === us(t[o]);
          if (typeof e[o] == "number" || typeof t[o] == "number") return cs(e[o]) === cs(t[o]);
        }
        return Pn(e[o], t[o]);
      });
    }
    __name(ze, "ze");
    function ss(e) {
      return Ct.Decimal.isDecimal(e) ? e : typeof e == "number" || typeof e == "string" ? new Ct.Decimal(e) : void 0;
    }
    __name(ss, "ss");
    function as(e) {
      return Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? Buffer.from(e.buffer, e.byteOffset, e.byteLength) : typeof e == "string" ? Buffer.from(e, "base64") : void 0;
    }
    __name(as, "as");
    function ls(e) {
      return e instanceof Date ? e : typeof e == "string" || typeof e == "number" ? new Date(e) : void 0;
    }
    __name(ls, "ls");
    function us(e) {
      return typeof e == "bigint" ? e : typeof e == "number" || typeof e == "string" ? BigInt(e) : void 0;
    }
    __name(us, "us");
    function cs(e) {
      return typeof e == "number" ? e : typeof e == "string" ? Number(e) : void 0;
    }
    __name(cs, "cs");
    function K(e) {
      return JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() : ArrayBuffer.isView(r) ? Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("base64") : r);
    }
    __name(K, "K");
    function fp(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(fp, "fp");
    function gp(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(gp, "gp");
    function Z(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Z) : typeof e == "object" ? fp(e) ? yp(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : gp(e, Z) : e;
    }
    __name(Z, "Z");
    function yp({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new ps.Decimal(t);
        case "Json":
          return JSON.parse(t);
        case "Raw":
          return t;
        case "FieldRef":
          throw new Error("FieldRef tagged values cannot be deserialized to JavaScript values");
        case "Enum":
          return t;
        default:
          T2(t, "Unknown tagged value");
      }
    }
    __name(yp, "yp");
    function wr(e) {
      return e.name === "DriverAdapterError" && typeof e.cause == "object";
    }
    __name(wr, "wr");
    var f2 = { Int32: 0, Int64: 1, Float: 2, Double: 3, Numeric: 4, Boolean: 5, Character: 6, Text: 7, Date: 8, Time: 9, DateTime: 10, Json: 11, Enum: 12, Bytes: 13, Set: 14, Uuid: 15, Int32Array: 64, Int64Array: 65, FloatArray: 66, DoubleArray: 67, NumericArray: 68, BooleanArray: 69, CharacterArray: 70, TextArray: 71, DateArray: 72, TimeArray: 73, DateTimeArray: 74, JsonArray: 75, EnumArray: 76, BytesArray: 77, UuidArray: 78, UnknownNumber: 128 };
    var N = class extends Error {
      static {
        __name(this, "N");
      }
      name = "UserFacingError";
      code;
      meta;
      constructor(t, r, n) {
        super(t), this.code = r, this.meta = n ?? {};
      }
      toQueryResponseErrorObject() {
        return { error: this.message, user_facing_error: { is_panic: false, message: this.message, meta: this.meta, error_code: this.code } };
      }
    };
    function Ge(e) {
      if (!wr(e)) throw e;
      let t = hp(e), r = ds(e);
      throw !t || !r ? e : new N(r, t, { driverAdapterError: e });
    }
    __name(Ge, "Ge");
    function Sn(e) {
      throw wr(e) ? new N(`Raw query failed. Code: \`${e.cause.originalCode ?? "N/A"}\`. Message: \`${e.cause.originalMessage ?? ds(e)}\``, "P2010", { driverAdapterError: e }) : e;
    }
    __name(Sn, "Sn");
    function hp(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return "P1000";
        case "DatabaseNotReachable":
          return "P1001";
        case "DatabaseDoesNotExist":
          return "P1003";
        case "SocketTimeout":
          return "P1008";
        case "DatabaseAlreadyExists":
          return "P1009";
        case "DatabaseAccessDenied":
          return "P1010";
        case "TlsConnectionError":
          return "P1011";
        case "ConnectionClosed":
          return "P1017";
        case "TransactionAlreadyClosed":
          return "P1018";
        case "LengthMismatch":
          return "P2000";
        case "UniqueConstraintViolation":
          return "P2002";
        case "ForeignKeyConstraintViolation":
          return "P2003";
        case "InvalidInputValue":
          return "P2007";
        case "UnsupportedNativeDataType":
          return "P2010";
        case "NullConstraintViolation":
          return "P2011";
        case "ValueOutOfRange":
          return "P2020";
        case "TableDoesNotExist":
          return "P2021";
        case "ColumnNotFound":
          return "P2022";
        case "InvalidIsolationLevel":
        case "InconsistentColumnData":
          return "P2023";
        case "MissingFullTextSearchIndex":
          return "P2030";
        case "TransactionWriteConflict":
          return "P2034";
        case "GenericJs":
          return "P2036";
        case "TooManyConnections":
          return "P2037";
        case "postgres":
        case "sqlite":
        case "mysql":
        case "mssql":
          return;
        default:
          T2(e.cause, `Unknown error: ${K(e.cause)}`);
      }
    }
    __name(hp, "hp");
    function ds(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return `Authentication failed against the database server, the provided database credentials for \`${e.cause.user ?? "(not available)"}\` are not valid`;
        case "DatabaseNotReachable": {
          let t = e.cause.host && e.cause.port ? `${e.cause.host}:${e.cause.port}` : e.cause.host;
          return `Can't reach database server${t ? ` at ${t}` : ""}`;
        }
        case "DatabaseDoesNotExist":
          return `Database \`${e.cause.db ?? "(not available)"}\` does not exist on the database server`;
        case "SocketTimeout":
          return "Operation has timed out";
        case "DatabaseAlreadyExists":
          return `Database \`${e.cause.db ?? "(not available)"}\` already exists on the database server`;
        case "DatabaseAccessDenied":
          return `User was denied access on the database \`${e.cause.db ?? "(not available)"}\``;
        case "TlsConnectionError":
          return `Error opening a TLS connection: ${e.cause.reason}`;
        case "ConnectionClosed":
          return "Server has closed the connection.";
        case "TransactionAlreadyClosed":
          return e.cause.cause;
        case "LengthMismatch":
          return `The provided value for the column is too long for the column's type. Column: ${e.cause.column ?? "(not available)"}`;
        case "UniqueConstraintViolation":
          return `Unique constraint failed on the ${Tn(e.cause.constraint)}`;
        case "ForeignKeyConstraintViolation":
          return `Foreign key constraint violated on the ${Tn(e.cause.constraint)}`;
        case "UnsupportedNativeDataType":
          return `Failed to deserialize column of type '${e.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;
        case "NullConstraintViolation":
          return `Null constraint violation on the ${Tn(e.cause.constraint)}`;
        case "ValueOutOfRange":
          return `Value out of range for the type: ${e.cause.cause}`;
        case "TableDoesNotExist":
          return `The table \`${e.cause.table ?? "(not available)"}\` does not exist in the current database.`;
        case "ColumnNotFound":
          return `The column \`${e.cause.column ?? "(not available)"}\` does not exist in the current database.`;
        case "InvalidIsolationLevel":
          return `Error in connector: Conversion error: ${e.cause.level}`;
        case "InconsistentColumnData":
          return `Inconsistent column data: ${e.cause.cause}`;
        case "MissingFullTextSearchIndex":
          return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";
        case "TransactionWriteConflict":
          return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";
        case "GenericJs":
          return `Error in external connector (id ${e.cause.id})`;
        case "TooManyConnections":
          return `Too many database connections opened: ${e.cause.cause}`;
        case "InvalidInputValue":
          return `Invalid input value: ${e.cause.message}`;
        case "sqlite":
        case "postgres":
        case "mysql":
        case "mssql":
          return;
        default:
          T2(e.cause, `Unknown error: ${K(e.cause)}`);
      }
    }
    __name(ds, "ds");
    function Tn(e) {
      return e && "fields" in e ? `fields: (${e.fields.map((t) => `\`${t}\``).join(", ")})` : e && "index" in e ? `constraint: \`${e.index}\`` : e && "foreignKey" in e ? "foreign key" : "(not available)";
    }
    __name(Tn, "Tn");
    function wp(e) {
      if (typeof e != "object" || e === null) return false;
      let t = e;
      return "$type" in t && t.$type === "Param" || "prisma__type" in t && t.prisma__type === "param";
    }
    __name(wp, "wp");
    function bp(e) {
      return "prisma__type" in e ? e.prisma__value?.name : e.value.name;
    }
    __name(bp, "bp");
    function xp(e, t) {
      let r = {};
      for (let [n, i] of Object.entries(e)) if (r[n] = i, wp(i)) {
        let o = bp(i);
        o && o in t && (r[n] = t[o]);
      }
      return r;
    }
    __name(xp, "xp");
    function ms(e, t, r = {}) {
      let n = e.map((o) => t.keys.reduce((s, a) => (s[a] = Z(o[a]), s), {})), i = new Set(t.nestedSelection);
      return t.arguments.map((o) => {
        let s = xp(o, r), a = n.findIndex((l2) => ze(l2, s));
        if (a === -1) return t.expectNonEmpty ? new N("An operation failed because it depends on one or more records that were required but not found", "P2025") : null;
        {
          let l2 = Object.entries(e[a]).filter(([u]) => i.has(u));
          return Object.fromEntries(l2);
        }
      });
    }
    __name(ms, "ms");
    var ys = require_dist();
    var C = class extends N {
      static {
        __name(this, "C");
      }
      name = "DataMapperError";
      constructor(t, r) {
        super(t, "P2023", r);
      }
    };
    var fs = /* @__PURE__ */ new WeakMap();
    function Ep(e) {
      let t = fs.get(e);
      return t || (t = Object.entries(e), fs.set(e, t)), t;
    }
    __name(Ep, "Ep");
    function hs(e, t, r) {
      switch (t.type) {
        case "affectedRows":
          if (typeof e != "number") throw new C(`Expected an affected rows count, got: ${typeof e} (${e})`);
          return { count: e };
        case "object":
          return An(e, t.fields, r, t.skipNulls);
        case "field":
          return vn(e, "<result>", t.fieldType, r);
        default:
          T2(t, `Invalid data mapping type: '${t.type}'`);
      }
    }
    __name(hs, "hs");
    function An(e, t, r, n) {
      if (e === null) return null;
      if (Array.isArray(e)) {
        let i = e;
        return n && (i = i.filter((o) => o !== null)), i.map((o) => gs(o, t, r));
      }
      if (typeof e == "object") return gs(e, t, r);
      if (typeof e == "string") {
        let i;
        try {
          i = JSON.parse(e);
        } catch (o) {
          throw new C("Expected an array or object, got a string that is not valid JSON", { cause: o });
        }
        return An(i, t, r, n);
      }
      throw new C(`Expected an array or an object, got: ${typeof e}`);
    }
    __name(An, "An");
    function gs(e, t, r) {
      if (typeof e != "object") throw new C(`Expected an object, but got '${typeof e}'`);
      let n = {};
      for (let [i, o] of Ep(t)) switch (o.type) {
        case "affectedRows":
          throw new C(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);
        case "object": {
          let { serializedName: s, fields: a, skipNulls: l2 } = o;
          if (s !== null && !Object.hasOwn(e, s)) throw new C(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          let u = s !== null ? e[s] : e;
          n[i] = An(u, a, r, l2);
          break;
        }
        case "field":
          {
            let s = o.dbName;
            if (Object.hasOwn(e, s)) n[i] = Pp(e[s], s, o.fieldType, r);
            else throw new C(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          }
          break;
        default:
          T2(o, `DataMapper: Invalid data mapping node type: '${o.type}'`);
      }
      return n;
    }
    __name(gs, "gs");
    function Pp(e, t, r, n) {
      return e === null ? r.arity === "list" ? [] : null : r.arity === "list" ? e.map((o, s) => vn(o, `${t}[${s}]`, r, n)) : vn(e, t, r, n);
    }
    __name(Pp, "Pp");
    function vn(e, t, r, n) {
      switch (r.type) {
        case "unsupported":
          return e;
        case "string": {
          if (typeof e != "string") throw new C(`Expected a string in column '${t}', got ${typeof e}: ${e}`);
          return e;
        }
        case "int":
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string": {
              let i = Math.trunc(Number(e));
              if (Number.isNaN(i) || !Number.isFinite(i)) throw new C(`Expected an integer in column '${t}', got string: ${e}`);
              if (!Number.isSafeInteger(i)) throw new C(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e}. Consider using BigInt type.`);
              return i;
            }
            default:
              throw new C(`Expected an integer in column '${t}', got ${typeof e}: ${e}`);
          }
        case "bigint": {
          if (typeof e != "number" && typeof e != "string") throw new C(`Expected a bigint in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "BigInt", value: e };
        }
        case "float": {
          if (typeof e == "number") return e;
          if (typeof e == "string") {
            let i = Number(e);
            if (Number.isNaN(i) && !/^[-+]?nan$/.test(e.toLowerCase())) throw new C(`Expected a float in column '${t}', got string: ${e}`);
            return i;
          }
          throw new C(`Expected a float in column '${t}', got ${typeof e}: ${e}`);
        }
        case "boolean": {
          if (typeof e == "boolean") return e;
          if (typeof e == "number") return e === 1;
          if (typeof e == "string") {
            if (e === "true" || e === "TRUE" || e === "1") return true;
            if (e === "false" || e === "FALSE" || e === "0") return false;
            throw new C(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
          }
          if (Array.isArray(e) || e instanceof Uint8Array) {
            for (let i of e) if (i !== 0) return true;
            return false;
          }
          throw new C(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
        }
        case "decimal":
          if (typeof e != "number" && typeof e != "string" && !ys.Decimal.isDecimal(e)) throw new C(`Expected a decimal in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "Decimal", value: e };
        case "datetime": {
          if (typeof e == "string") return { $type: "DateTime", value: Sp(e) };
          if (typeof e == "number" || e instanceof Date) return { $type: "DateTime", value: e };
          throw new C(`Expected a date in column '${t}', got ${typeof e}: ${e}`);
        }
        case "object":
          return { $type: "Json", value: K(e) };
        case "json":
          return { $type: "Json", value: `${e}` };
        case "bytes": {
          switch (r.encoding) {
            case "base64":
              if (typeof e != "string") throw new C(`Expected a base64-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: e };
            case "hex":
              if (typeof e != "string" || !e.startsWith("\\x")) throw new C(`Expected a hex-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: Buffer.from(e.slice(2), "hex").toString("base64") };
            case "array":
              if (Array.isArray(e)) return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
              if (e instanceof Uint8Array) return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
              throw new C(`Expected a byte array in column '${t}', got ${typeof e}: ${e}`);
            default:
              T2(r.encoding, `DataMapper: Unknown bytes encoding: ${r.encoding}`);
          }
          break;
        }
        case "enum": {
          let i = n[r.name];
          if (i === void 0) throw new C(`Unknown enum '${r.name}'`);
          let o = i[`${e}`];
          if (o === void 0) throw new C(`Value '${e}' not found in enum '${r.name}'`);
          return o;
        }
        default:
          T2(r, `DataMapper: Unknown result type: ${r.type}`);
      }
    }
    __name(vn, "vn");
    var Tp = /\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
    function Sp(e) {
      let t = Tp.exec(e);
      if (t === null) return `${e}T00:00:00Z`;
      let r = e, [n, i, o] = t;
      if (i !== void 0 && i !== "Z" && o === void 0 ? r = `${e}:00` : i === void 0 && (r = `${e}Z`), n.length === e.length) return `1970-01-01T${r}`;
      let s = t.index - 1;
      return r[s] === " " && (r = `${r.slice(0, s)}T${r.slice(s + 1)}`), r;
    }
    __name(Sp, "Sp");
    function J(e) {
      if (typeof e != "object") return e;
      var t, r, n = Object.prototype.toString.call(e);
      if (n === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
          r = new e.constructor();
          for (t in e) e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = J(e[t]));
        } else {
          r = {};
          for (t in e) t === "__proto__" ? Object.defineProperty(r, t, { value: J(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = J(e[t]);
        }
        return r;
      }
      if (n === "[object Array]") {
        for (t = e.length, r = Array(t); t--; ) r[t] = J(e[t]);
        return r;
      }
      return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
        r.add(J(i));
      }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
        r.set(J(o), J(i));
      }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(J(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
    }
    __name(J, "J");
    function vp(e) {
      let t = Object.entries(e);
      return t.length === 0 ? "" : (t.sort(([n], [i]) => n.localeCompare(i)), `/*${t.map(([n, i]) => {
        let o = encodeURIComponent(n), s = encodeURIComponent(i).replace(/'/g, "\\'");
        return `${o}='${s}'`;
      }).join(",")}*/`);
    }
    __name(vp, "vp");
    function br(e, t) {
      let r = {};
      for (let n of e) {
        let i = n(J(t));
        for (let [o, s] of Object.entries(i)) s !== void 0 && (r[o] = s);
      }
      return r;
    }
    __name(br, "br");
    function ws(e, t) {
      let r = br(e, t);
      return vp(r);
    }
    __name(ws, "ws");
    function bs(e, t) {
      return t ? `${e} ${t}` : e;
    }
    __name(bs, "bs");
    var Rt;
    (function(e) {
      e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
    })(Rt || (Rt = {}));
    function Ap(e) {
      switch (e) {
        case "postgresql":
        case "postgres":
        case "prisma+postgres":
          return "postgresql";
        case "sqlserver":
          return "mssql";
        case "mysql":
        case "sqlite":
        case "cockroachdb":
        case "mongodb":
          return e;
        default:
          T2(e, `Unknown provider: ${e}`);
      }
    }
    __name(Ap, "Ap");
    async function xr({ query: e, tracingHelper: t, provider: r, onQuery: n, execute: i }) {
      let o = n === void 0 ? i : async () => {
        let s = /* @__PURE__ */ new Date(), a = performance.now(), l2 = await i(), u = performance.now();
        return n({ timestamp: s, duration: u - a, query: e.sql, params: e.args }), l2;
      };
      return t.isEnabled() ? await t.runInChildSpan({ name: "db_query", kind: Rt.CLIENT, attributes: { "db.query.text": e.sql, "db.system.name": Ap(r) } }, o) : o();
    }
    __name(xr, "xr");
    function Te(e, t) {
      var r = "000000000" + e;
      return r.substr(r.length - t);
    }
    __name(Te, "Te");
    var xs = B(__require("node:os"), 1);
    function Cp() {
      try {
        return xs.default.hostname();
      } catch {
        return process.env._CLUSTER_NETWORK_NAME_ || process.env.COMPUTERNAME || "hostname";
      }
    }
    __name(Cp, "Cp");
    var Es = 2;
    var Rp = Te(process.pid.toString(36), Es);
    var Ps = Cp();
    var kp = Ps.length;
    var Ip = Te(Ps.split("").reduce(function(e, t) {
      return +e + t.charCodeAt(0);
    }, +kp + 36).toString(36), Es);
    function Cn() {
      return Rp + Ip;
    }
    __name(Cn, "Cn");
    function Er(e) {
      return typeof e == "string" && /^c[a-z0-9]{20,32}$/.test(e);
    }
    __name(Er, "Er");
    function Rn(e) {
      let n = Math.pow(36, 4), i = 0;
      function o() {
        return Te((Math.random() * n << 0).toString(36), 4);
      }
      __name(o, "o");
      function s() {
        return i = i < n ? i : 0, i++, i - 1;
      }
      __name(s, "s");
      function a() {
        var l2 = "c", u = (/* @__PURE__ */ new Date()).getTime().toString(36), c = Te(s().toString(36), 4), p2 = e(), d = o() + o();
        return l2 + u + c + p2 + d;
      }
      __name(a, "a");
      return a.fingerprint = e, a.isCuid = Er, a;
    }
    __name(Rn, "Rn");
    var Op = Rn(Cn);
    var Ts = Op;
    var Pa = B(ma());
    var $n = __require("node:crypto");
    var fa = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    var hd = 128;
    var ve;
    var Ze;
    function wd(e) {
      !ve || ve.length < e ? (ve = Buffer.allocUnsafe(e * hd), $n.webcrypto.getRandomValues(ve), Ze = 0) : Ze + e > ve.length && ($n.webcrypto.getRandomValues(ve), Ze = 0), Ze += e;
    }
    __name(wd, "wd");
    function Ln(e = 21) {
      wd(e |= 0);
      let t = "";
      for (let r = Ze - e; r < Ze; r++) t += fa[ve[r] & 63];
      return t;
    }
    __name(Ln, "Ln");
    var Mt = B(__require("node:crypto"), 1);
    var ya = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    var Ft = 32;
    var bd = 16;
    var ha = 10;
    var ga = 281474976710655;
    var Ae;
    (function(e) {
      e.Base32IncorrectEncoding = "B32_ENC_INVALID", e.DecodeTimeInvalidCharacter = "DEC_TIME_CHAR", e.DecodeTimeValueMalformed = "DEC_TIME_MALFORMED", e.EncodeTimeNegative = "ENC_TIME_NEG", e.EncodeTimeSizeExceeded = "ENC_TIME_SIZE_EXCEED", e.EncodeTimeValueMalformed = "ENC_TIME_MALFORMED", e.PRNGDetectFailure = "PRNG_DETECT", e.ULIDInvalid = "ULID_INVALID", e.Unexpected = "UNEXPECTED", e.UUIDInvalid = "UUID_INVALID";
    })(Ae || (Ae = {}));
    var Ce = class extends Error {
      static {
        __name(this, "Ce");
      }
      constructor(t, r) {
        super(`${r} (${t})`), this.name = "ULIDError", this.code = t;
      }
    };
    function xd(e) {
      let t = Math.floor(e() * Ft);
      return t === Ft && (t = Ft - 1), ya.charAt(t);
    }
    __name(xd, "xd");
    function Ed(e) {
      let t = Pd(), r = t && (t.crypto || t.msCrypto) || (typeof Mt.default < "u" ? Mt.default : null);
      if (typeof r?.getRandomValues == "function") return () => {
        let n = new Uint8Array(1);
        return r.getRandomValues(n), n[0] / 255;
      };
      if (typeof r?.randomBytes == "function") return () => r.randomBytes(1).readUInt8() / 255;
      if (Mt.default?.randomBytes) return () => Mt.default.randomBytes(1).readUInt8() / 255;
      throw new Ce(Ae.PRNGDetectFailure, "Failed to find a reliable PRNG");
    }
    __name(Ed, "Ed");
    function Pd() {
      return vd() ? self : typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : null;
    }
    __name(Pd, "Pd");
    function Td(e, t) {
      let r = "";
      for (; e > 0; e--) r = xd(t) + r;
      return r;
    }
    __name(Td, "Td");
    function Sd(e, t = ha) {
      if (isNaN(e)) throw new Ce(Ae.EncodeTimeValueMalformed, `Time must be a number: ${e}`);
      if (e > ga) throw new Ce(Ae.EncodeTimeSizeExceeded, `Cannot encode a time larger than ${ga}: ${e}`);
      if (e < 0) throw new Ce(Ae.EncodeTimeNegative, `Time must be positive: ${e}`);
      if (Number.isInteger(e) === false) throw new Ce(Ae.EncodeTimeValueMalformed, `Time must be an integer: ${e}`);
      let r, n = "";
      for (let i = t; i > 0; i--) r = e % Ft, n = ya.charAt(r) + n, e = (e - r) / Ft;
      return n;
    }
    __name(Sd, "Sd");
    function vd() {
      return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
    }
    __name(vd, "vd");
    function wa(e, t) {
      let r = t || Ed(), n = !e || isNaN(e) ? Date.now() : e;
      return Sd(n, ha) + Td(bd, r);
    }
    __name(wa, "wa");
    var D = [];
    for (let e = 0; e < 256; ++e) D.push((e + 256).toString(16).slice(1));
    function vr(e, t = 0) {
      return (D[e[t + 0]] + D[e[t + 1]] + D[e[t + 2]] + D[e[t + 3]] + "-" + D[e[t + 4]] + D[e[t + 5]] + "-" + D[e[t + 6]] + D[e[t + 7]] + "-" + D[e[t + 8]] + D[e[t + 9]] + "-" + D[e[t + 10]] + D[e[t + 11]] + D[e[t + 12]] + D[e[t + 13]] + D[e[t + 14]] + D[e[t + 15]]).toLowerCase();
    }
    __name(vr, "vr");
    var ba = __require("node:crypto");
    var Cr = new Uint8Array(256);
    var Ar = Cr.length;
    function Ye() {
      return Ar > Cr.length - 16 && ((0, ba.randomFillSync)(Cr), Ar = 0), Cr.slice(Ar, Ar += 16);
    }
    __name(Ye, "Ye");
    var xa = __require("node:crypto");
    var Vn = { randomUUID: xa.randomUUID };
    function Ad(e, t, r) {
      if (Vn.randomUUID && !t && !e) return Vn.randomUUID();
      e = e || {};
      let n = e.random ?? e.rng?.() ?? Ye();
      if (n.length < 16) throw new Error("Random bytes length must be >= 16");
      if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
        if (r = r || 0, r < 0 || r + 16 > t.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
        for (let i = 0; i < 16; ++i) t[r + i] = n[i];
        return t;
      }
      return vr(n);
    }
    __name(Ad, "Ad");
    var qn = Ad;
    var jn = {};
    function Cd(e, t, r) {
      let n;
      if (e) n = Ea(e.random ?? e.rng?.() ?? Ye(), e.msecs, e.seq, t, r);
      else {
        let i = Date.now(), o = Ye();
        Rd(jn, i, o), n = Ea(o, jn.msecs, jn.seq, t, r);
      }
      return t ?? vr(n);
    }
    __name(Cd, "Cd");
    function Rd(e, t, r) {
      return e.msecs ??= -1 / 0, e.seq ??= 0, t > e.msecs ? (e.seq = r[6] << 23 | r[7] << 16 | r[8] << 8 | r[9], e.msecs = t) : (e.seq = e.seq + 1 | 0, e.seq === 0 && e.msecs++), e;
    }
    __name(Rd, "Rd");
    function Ea(e, t, r, n, i = 0) {
      if (e.length < 16) throw new Error("Random bytes length must be >= 16");
      if (!n) n = new Uint8Array(16), i = 0;
      else if (i < 0 || i + 16 > n.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
      return t ??= Date.now(), r ??= e[6] * 127 << 24 | e[7] << 16 | e[8] << 8 | e[9], n[i++] = t / 1099511627776 & 255, n[i++] = t / 4294967296 & 255, n[i++] = t / 16777216 & 255, n[i++] = t / 65536 & 255, n[i++] = t / 256 & 255, n[i++] = t & 255, n[i++] = 112 | r >>> 28 & 15, n[i++] = r >>> 20 & 255, n[i++] = 128 | r >>> 14 & 63, n[i++] = r >>> 6 & 255, n[i++] = r << 2 & 255 | e[10] & 3, n[i++] = e[11], n[i++] = e[12], n[i++] = e[13], n[i++] = e[14], n[i++] = e[15], n;
    }
    __name(Ea, "Ea");
    var Un = Cd;
    var Rr = class {
      static {
        __name(this, "Rr");
      }
      #e = {};
      constructor() {
        this.register("uuid", new Qn()), this.register("cuid", new Jn()), this.register("ulid", new Hn()), this.register("nanoid", new zn()), this.register("product", new Gn());
      }
      snapshot() {
        return Object.create(this.#e, { now: { value: new Bn() } });
      }
      register(t, r) {
        this.#e[t] = r;
      }
    };
    var Bn = class {
      static {
        __name(this, "Bn");
      }
      #e;
      generate() {
        return this.#e === void 0 && (this.#e = /* @__PURE__ */ new Date()), this.#e.toISOString();
      }
    };
    var Qn = class {
      static {
        __name(this, "Qn");
      }
      generate(t) {
        if (t === 4) return qn();
        if (t === 7) return Un();
        throw new Error("Invalid UUID generator arguments");
      }
    };
    var Jn = class {
      static {
        __name(this, "Jn");
      }
      generate(t) {
        if (t === 1) return Ts();
        if (t === 2) return (0, Pa.createId)();
        throw new Error("Invalid CUID generator arguments");
      }
    };
    var Hn = class {
      static {
        __name(this, "Hn");
      }
      generate() {
        return wa();
      }
    };
    var zn = class {
      static {
        __name(this, "zn");
      }
      generate(t) {
        if (typeof t == "number") return Ln(t);
        if (t === void 0) return Ln();
        throw new Error("Invalid Nanoid generator arguments");
      }
    };
    var Gn = class {
      static {
        __name(this, "Gn");
      }
      generate(t, r) {
        if (t === void 0 || r === void 0) throw new Error("Invalid Product generator arguments");
        return Array.isArray(t) && Array.isArray(r) ? t.flatMap((n) => r.map((i) => [n, i])) : Array.isArray(t) ? t.map((n) => [n, r]) : Array.isArray(r) ? r.map((n) => [t, n]) : [[t, r]];
      }
    };
    function kr(e, t) {
      return e == null ? e : typeof e == "string" ? kr(JSON.parse(e), t) : Array.isArray(e) ? Id(e, t) : kd(e, t);
    }
    __name(kr, "kr");
    function kd(e, t) {
      if (t.pagination) {
        let { skip: r, take: n, cursor: i } = t.pagination;
        if (r !== null && r > 0 || n === 0 || i !== null && !ze(e, i)) return null;
      }
      return Sa(e, t.nested);
    }
    __name(kd, "kd");
    function Sa(e, t) {
      for (let [r, n] of Object.entries(t)) e[r] = kr(e[r], n);
      return e;
    }
    __name(Sa, "Sa");
    function Id(e, t) {
      if (t.distinct !== null) {
        let r = t.linkingFields !== null ? [...t.distinct, ...t.linkingFields] : t.distinct;
        e = Od(e, r);
      }
      return t.pagination && (e = Nd(e, t.pagination, t.linkingFields)), t.reverse && e.reverse(), Object.keys(t.nested).length === 0 ? e : e.map((r) => Sa(r, t.nested));
    }
    __name(Id, "Id");
    function Od(e, t) {
      let r = /* @__PURE__ */ new Set(), n = [];
      for (let i of e) {
        let o = Xe(i, t);
        r.has(o) || (r.add(o), n.push(i));
      }
      return n;
    }
    __name(Od, "Od");
    function Nd(e, t, r) {
      if (r === null) return Ta(e, t);
      let n = /* @__PURE__ */ new Map();
      for (let o of e) {
        let s = Xe(o, r);
        n.has(s) || n.set(s, []), n.get(s).push(o);
      }
      let i = Array.from(n.entries());
      return i.sort(([o], [s]) => o < s ? -1 : o > s ? 1 : 0), i.flatMap(([, o]) => Ta(o, t));
    }
    __name(Nd, "Nd");
    function Ta(e, { cursor: t, skip: r, take: n }) {
      let i = t !== null ? e.findIndex((a) => ze(a, t)) : 0;
      if (i === -1) return [];
      let o = i + (r ?? 0), s = n !== null ? o + n : e.length;
      return e.slice(o, s);
    }
    __name(Ta, "Ta");
    function Xe(e, t, r) {
      let n = t.map((i, o) => r?.[o] ? e[i] !== null ? r[o](e[i]) : null : e[i]);
      return JSON.stringify(n);
    }
    __name(Xe, "Xe");
    function Wn(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "param";
    }
    __name(Wn, "Wn");
    function Kn(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "generatorCall";
    }
    __name(Kn, "Kn");
    function Xn(e, t, r, n) {
      let i = e.args.map((o) => H(o, t, r));
      switch (e.type) {
        case "rawSql":
          return [Fd(e.sql, i, e.argTypes)];
        case "templateSql":
          return (e.chunkable ? $d(e.fragments, i, n) : [i]).map((s) => {
            let a = Dd(e.fragments, e.placeholderFormat, s, e.argTypes);
            if (n !== void 0 && a.args.length > n) throw new N("The query parameter limit supported by your database is exceeded.", "P2029");
            return a;
          });
        default:
          T2(e.type, "Invalid query type");
      }
    }
    __name(Xn, "Xn");
    function H(e, t, r) {
      for (; _d(e); ) if (Wn(e)) {
        let n = t[e.prisma__value.name];
        if (n === void 0) throw new Error(`Missing value for query variable ${e.prisma__value.name}`);
        e.prisma__value.type === "DateTime" && typeof n == "string" ? e = new Date(n) : e = n;
      } else if (Kn(e)) {
        let { name: n, args: i } = e.prisma__value, o = r[n];
        if (!o) throw new Error(`Encountered an unknown generator '${n}'`);
        e = o.generate(...i.map((s) => H(s, t, r)));
      } else T2(e, `Unexpected unevaluated value type: ${e}`);
      return Array.isArray(e) && (e = e.map((n) => H(n, t, r))), e;
    }
    __name(H, "H");
    function Dd(e, t, r, n) {
      let i = "", o = { placeholderNumber: 1 }, s = [], a = [];
      for (let l2 of Yn(e, r, n)) {
        if (i += Md(l2, t, o), l2.type === "stringChunk") continue;
        let u = s.length, c = s.push(...va(l2)) - u;
        if (l2.argType.arity === "tuple") {
          if (c % l2.argType.elements.length !== 0) throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${c} parameters for a tuple of arity ${l2.argType.elements.length}.`);
          for (let p2 = 0; p2 < c / l2.argType.elements.length; p2++) a.push(...l2.argType.elements);
        } else for (let p2 = 0; p2 < c; p2++) a.push(l2.argType);
      }
      return { sql: i, args: s, argTypes: a };
    }
    __name(Dd, "Dd");
    function Md(e, t, r) {
      let n = e.type;
      switch (n) {
        case "parameter":
          return Zn(t, r.placeholderNumber++);
        case "stringChunk":
          return e.chunk;
        case "parameterTuple":
          return `(${e.value.length == 0 ? "NULL" : e.value.map(() => {
            let o = Zn(t, r.placeholderNumber++);
            return `${e.itemPrefix}${o}${e.itemSuffix}`;
          }).join(e.itemSeparator)})`;
        case "parameterTupleList":
          return e.value.map((i) => {
            let o = i.map(() => Zn(t, r.placeholderNumber++)).join(e.itemSeparator);
            return `${e.itemPrefix}${o}${e.itemSuffix}`;
          }).join(e.groupSeparator);
        default:
          T2(n, "Invalid fragment type");
      }
    }
    __name(Md, "Md");
    function Zn(e, t) {
      return e.hasNumbering ? `${e.prefix}${t}` : e.prefix;
    }
    __name(Zn, "Zn");
    function Fd(e, t, r) {
      return { sql: e, args: t, argTypes: r };
    }
    __name(Fd, "Fd");
    function _d(e) {
      return Wn(e) || Kn(e);
    }
    __name(_d, "_d");
    function* Yn(e, t, r) {
      let n = 0;
      for (let i of e) switch (i.type) {
        case "parameter": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          yield { ...i, value: t[n], argType: r?.[n] }, n++;
          break;
        }
        case "stringChunk": {
          yield i;
          break;
        }
        case "parameterTuple": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          yield { ...i, value: Array.isArray(o) ? o : [o], argType: r?.[n] }, n++;
          break;
        }
        case "parameterTupleList": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          if (!Array.isArray(o)) throw new Error("Malformed query template. Tuple list expected.");
          if (o.length === 0) throw new Error("Malformed query template. Tuple list cannot be empty.");
          for (let s of o) if (!Array.isArray(s)) throw new Error("Malformed query template. Tuple expected.");
          yield { ...i, value: o, argType: r?.[n] }, n++;
          break;
        }
      }
    }
    __name(Yn, "Yn");
    function* va(e) {
      switch (e.type) {
        case "parameter":
          yield e.value;
          break;
        case "stringChunk":
          break;
        case "parameterTuple":
          yield* e.value;
          break;
        case "parameterTupleList":
          for (let t of e.value) yield* t;
          break;
      }
    }
    __name(va, "va");
    function $d(e, t, r) {
      let n = 0, i = 0;
      for (let s of Yn(e, t, void 0)) {
        let a = 0;
        for (let l2 of va(s)) a++;
        i = Math.max(i, a), n += a;
      }
      let o = [[]];
      for (let s of Yn(e, t, void 0)) switch (s.type) {
        case "parameter": {
          for (let a of o) a.push(s.value);
          break;
        }
        case "stringChunk":
          break;
        case "parameterTuple": {
          let a = s.value.length, l2 = [];
          if (r && o.length === 1 && a === i && n > r && n - a < r) {
            let u = r - (n - a);
            l2 = Ld(s.value, u);
          } else l2 = [s.value];
          o = o.flatMap((u) => l2.map((c) => [...u, c]));
          break;
        }
        case "parameterTupleList": {
          let a = s.value.reduce((p2, d) => p2 + d.length, 0), l2 = [], u = [], c = 0;
          for (let p2 of s.value) r && o.length === 1 && a === i && u.length > 0 && n - a + c + p2.length > r && (l2.push(u), u = [], c = 0), u.push(p2), c += p2.length;
          u.length > 0 && l2.push(u), o = o.flatMap((p2) => l2.map((d) => [...p2, d]));
          break;
        }
      }
      return o;
    }
    __name($d, "$d");
    function Ld(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n += t) r.push(e.slice(n, n + t));
      return r;
    }
    __name(Ld, "Ld");
    function Aa(e) {
      return e.rows.map((t) => t.reduce((r, n, i) => (r[e.columnNames[i]] = n, r), {}));
    }
    __name(Aa, "Aa");
    function Ca(e) {
      return { columns: e.columnNames, types: e.columnTypes.map((t) => Vd(t)), rows: e.rows.map((t) => t.map((r, n) => _t(r, e.columnTypes[n]))) };
    }
    __name(Ca, "Ca");
    function _t(e, t) {
      if (e === null) return null;
      switch (t) {
        case f2.Int32:
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string":
              return Math.trunc(Number(e));
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int32`);
          }
        case f2.Int32Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int32Array`);
          return e.map((r) => _t(r, f2.Int32));
        case f2.Int64:
          switch (typeof e) {
            case "number":
              return BigInt(Math.trunc(e));
            case "string":
              return e;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int64`);
          }
        case f2.Int64Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int64Array`);
          return e.map((r) => _t(r, f2.Int64));
        case f2.Json:
          switch (typeof e) {
            case "string":
              return JSON.parse(e);
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Json`);
          }
        case f2.JsonArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as JsonArray`);
          return e.map((r) => _t(r, f2.Json));
        case f2.Boolean:
          switch (typeof e) {
            case "boolean":
              return e;
            case "string":
              return e === "true" || e === "1";
            case "number":
              return e === 1;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Boolean`);
          }
        case f2.BooleanArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as BooleanArray`);
          return e.map((r) => _t(r, f2.Boolean));
        default:
          return e;
      }
    }
    __name(_t, "_t");
    function Vd(e) {
      switch (e) {
        case f2.Int32:
          return "int";
        case f2.Int64:
          return "bigint";
        case f2.Float:
          return "float";
        case f2.Double:
          return "double";
        case f2.Text:
          return "string";
        case f2.Enum:
          return "enum";
        case f2.Bytes:
          return "bytes";
        case f2.Boolean:
          return "bool";
        case f2.Character:
          return "char";
        case f2.Numeric:
          return "decimal";
        case f2.Json:
          return "json";
        case f2.Uuid:
          return "uuid";
        case f2.DateTime:
          return "datetime";
        case f2.Date:
          return "date";
        case f2.Time:
          return "time";
        case f2.Int32Array:
          return "int-array";
        case f2.Int64Array:
          return "bigint-array";
        case f2.FloatArray:
          return "float-array";
        case f2.DoubleArray:
          return "double-array";
        case f2.TextArray:
          return "string-array";
        case f2.EnumArray:
          return "string-array";
        case f2.BytesArray:
          return "bytes-array";
        case f2.BooleanArray:
          return "bool-array";
        case f2.CharacterArray:
          return "char-array";
        case f2.NumericArray:
          return "decimal-array";
        case f2.JsonArray:
          return "json-array";
        case f2.UuidArray:
          return "uuid-array";
        case f2.DateTimeArray:
          return "datetime-array";
        case f2.DateArray:
          return "date-array";
        case f2.TimeArray:
          return "time-array";
        case f2.UnknownNumber:
          return "unknown";
        case f2.Set:
          return "string";
        default:
          T2(e, `Unexpected column type: ${e}`);
      }
    }
    __name(Vd, "Vd");
    function Ra(e, t, r) {
      if (!t.every((n) => ei(e, n))) {
        let n = qd(e, r), i = jd(r);
        throw new N(n, i, r.context);
      }
    }
    __name(Ra, "Ra");
    function ei(e, t) {
      switch (t.type) {
        case "rowCountEq":
          return Array.isArray(e) ? e.length === t.args : e === null ? t.args === 0 : t.args === 1;
        case "rowCountNeq":
          return Array.isArray(e) ? e.length !== t.args : e === null ? t.args !== 0 : t.args !== 1;
        case "affectedRowCountEq":
          return e === t.args;
        case "never":
          return false;
        default:
          T2(t, `Unknown rule type: ${t.type}`);
      }
    }
    __name(ei, "ei");
    function qd(e, t) {
      switch (t.errorIdentifier) {
        case "RELATION_VIOLATION":
          return `The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;
        case "MISSING_RECORD":
          return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;
        case "MISSING_RELATED_RECORD": {
          let r = t.context.neededFor ? ` (needed to ${t.context.neededFor})` : "";
          return `An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`;
        }
        case "INCOMPLETE_CONNECT_INPUT":
          return `An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e) ? e.length : e}.`;
        case "INCOMPLETE_CONNECT_OUTPUT":
          return `The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e) ? e.length : e}.`;
        case "RECORDS_NOT_CONNECTED":
          return `The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;
        default:
          T2(t, `Unknown error identifier: ${t}`);
      }
    }
    __name(qd, "qd");
    function jd(e) {
      switch (e.errorIdentifier) {
        case "RELATION_VIOLATION":
          return "P2014";
        case "RECORDS_NOT_CONNECTED":
          return "P2017";
        case "INCOMPLETE_CONNECT_OUTPUT":
          return "P2018";
        case "MISSING_RECORD":
        case "MISSING_RELATED_RECORD":
        case "INCOMPLETE_CONNECT_INPUT":
          return "P2025";
        default:
          T2(e, `Unknown error identifier: ${e}`);
      }
    }
    __name(jd, "jd");
    var $t = class e {
      static {
        __name(this, "e");
      }
      #e;
      #t = new Rr();
      #r;
      #n;
      #i;
      #o;
      #s;
      constructor({ onQuery: t, tracingHelper: r, serializer: n, rawSerializer: i, provider: o, connectionInfo: s }) {
        this.#e = t, this.#r = r, this.#n = n, this.#i = i ?? n, this.#o = o, this.#s = s;
      }
      static forSql(t) {
        return new e({ onQuery: t.onQuery, tracingHelper: t.tracingHelper, serializer: Aa, rawSerializer: Ca, provider: t.provider, connectionInfo: t.connectionInfo });
      }
      async run(t, r) {
        let { value: n } = await this.interpretNode(t, { ...r, generators: this.#t.snapshot() }).catch((i) => Ge(i));
        return n;
      }
      async interpretNode(t, r) {
        switch (t.type) {
          case "value":
            return { value: H(t.args, r.scope, r.generators) };
          case "seq": {
            let n;
            for (let i of t.args) n = await this.interpretNode(i, r);
            return n ?? { value: void 0 };
          }
          case "get":
            return { value: r.scope[t.args.name] };
          case "let": {
            let n = Object.create(r.scope);
            for (let i of t.args.bindings) {
              let { value: o } = await this.interpretNode(i.expr, { ...r, scope: n });
              n[i.name] = o;
            }
            return this.interpretNode(t.args.expr, { ...r, scope: n });
          }
          case "getFirstNonEmpty": {
            for (let n of t.args.names) {
              let i = r.scope[n];
              if (!ka(i)) return { value: i };
            }
            return { value: [] };
          }
          case "concat": {
            let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
            return { value: n.length > 0 ? n.reduce((i, o) => i.concat(ti(o)), []) : [] };
          }
          case "sum": {
            let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
            return { value: n.length > 0 ? n.reduce((i, o) => te(i) + te(o)) : 0 };
          }
          case "execute": {
            let n = Xn(t.args, r.scope, r.generators, this.#a()), i = 0;
            for (let o of n) {
              let s = Ia(o, r.sqlCommenter);
              i += await this.#u(s, r.queryable, () => r.queryable.executeRaw(ri(s)).catch((a) => t.args.type === "rawSql" ? Sn(a) : Ge(a)));
            }
            return { value: i };
          }
          case "query": {
            let n = Xn(t.args, r.scope, r.generators, this.#a()), i;
            for (let o of n) {
              let s = Ia(o, r.sqlCommenter), a = await this.#u(s, r.queryable, () => r.queryable.queryRaw(ri(s)).catch((l2) => t.args.type === "rawSql" ? Sn(l2) : Ge(l2)));
              i === void 0 ? i = a : (i.rows.push(...a.rows), i.lastInsertId = a.lastInsertId);
            }
            return { value: t.args.type === "rawSql" ? this.#i(i) : this.#n(i), lastInsertId: i?.lastInsertId };
          }
          case "reverse": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            return { value: Array.isArray(n) ? n.reverse() : n, lastInsertId: i };
          }
          case "unique": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            if (!Array.isArray(n)) return { value: n, lastInsertId: i };
            if (n.length > 1) throw new Error(`Expected zero or one element, got ${n.length}`);
            return { value: n[0] ?? null, lastInsertId: i };
          }
          case "required": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            if (ka(n)) throw new Error("Required value is empty");
            return { value: n, lastInsertId: i };
          }
          case "mapField": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.records, r);
            return { value: Oa(n, t.args.field), lastInsertId: i };
          }
          case "join": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.parent, r);
            if (n === null) return { value: null, lastInsertId: i };
            let o = await Promise.all(t.args.children.map(async (s) => ({ joinExpr: s, childRecords: (await this.interpretNode(s.child, r)).value })));
            return { value: Ud(n, o, t.args.canAssumeStrictEquality), lastInsertId: i };
          }
          case "transaction": {
            if (!r.transactionManager.enabled) return this.interpretNode(t.args, r);
            let n = r.transactionManager.manager, i = await n.startInternalTransaction(), o = await n.getTransaction(i, "query");
            try {
              let s = await this.interpretNode(t.args, { ...r, queryable: o });
              return await n.commitTransaction(i.id), s;
            } catch (s) {
              throw await n.rollbackTransaction(i.id), s;
            }
          }
          case "dataMap": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
            return { value: hs(n, t.args.structure, t.args.enums), lastInsertId: i };
          }
          case "validate": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
            return Ra(n, t.args.rules, t.args), { value: n, lastInsertId: i };
          }
          case "if": {
            let { value: n } = await this.interpretNode(t.args.value, r);
            return ei(n, t.args.rule) ? await this.interpretNode(t.args.then, r) : await this.interpretNode(t.args.else, r);
          }
          case "unit":
            return { value: void 0 };
          case "diff": {
            let { value: n } = await this.interpretNode(t.args.from, r), { value: i } = await this.interpretNode(t.args.to, r), o = /* @__PURE__ */ __name((a) => a !== null ? Xe(Lt(a), t.args.fields) : null, "o"), s = new Set(ti(i).map(o));
            return { value: ti(n).filter((a) => !s.has(o(a))) };
          }
          case "process": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = ri(t.args.operations);
            return Na(o, r.scope, r.generators), { value: kr(n, o), lastInsertId: i };
          }
          case "initializeRecord": {
            let { lastInsertId: n } = await this.interpretNode(t.args.expr, r), i = {};
            for (let [o, s] of Object.entries(t.args.fields)) i[o] = Qd(s, n, r.scope, r.generators);
            return { value: i, lastInsertId: n };
          }
          case "mapRecord": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = n === null ? {} : Lt(n);
            for (let [s, a] of Object.entries(t.args.fields)) o[s] = Jd(a, o[s], r.scope, r.generators);
            return { value: o, lastInsertId: i };
          }
          default:
            T2(t, `Unexpected node type: ${t.type}`);
        }
      }
      #a() {
        return this.#s?.maxBindValues !== void 0 ? this.#s.maxBindValues : this.#l();
      }
      #l() {
        if (this.#o !== void 0) switch (this.#o) {
          case "cockroachdb":
          case "postgres":
          case "postgresql":
          case "prisma+postgres":
            return 32766;
          case "mysql":
            return 65535;
          case "sqlite":
            return 999;
          case "sqlserver":
            return 2098;
          case "mongodb":
            return;
          default:
            T2(this.#o, `Unexpected provider: ${this.#o}`);
        }
      }
      #u(t, r, n) {
        return xr({ query: t, execute: n, provider: this.#o ?? r.provider, tracingHelper: this.#r, onQuery: this.#e });
      }
    };
    function ka(e) {
      return Array.isArray(e) ? e.length === 0 : e == null;
    }
    __name(ka, "ka");
    function ti(e) {
      return Array.isArray(e) ? e : [e];
    }
    __name(ti, "ti");
    function te(e) {
      if (typeof e == "number") return e;
      if (typeof e == "string") return Number(e);
      throw new Error(`Expected number, got ${typeof e}`);
    }
    __name(te, "te");
    function Lt(e) {
      if (typeof e == "object" && e !== null) return e;
      throw new Error(`Expected object, got ${typeof e}`);
    }
    __name(Lt, "Lt");
    function Oa(e, t) {
      return Array.isArray(e) ? e.map((r) => Oa(r, t)) : typeof e == "object" && e !== null ? e[t] ?? null : e;
    }
    __name(Oa, "Oa");
    function Ud(e, t, r) {
      for (let { joinExpr: n, childRecords: i } of t) {
        let o = n.on.map(([c]) => c), s = n.on.map(([, c]) => c), a = {}, l2 = Array.isArray(e) ? e : [e];
        for (let c of l2) {
          let p2 = Lt(c), d = Xe(p2, o);
          a[d] || (a[d] = []), a[d].push(p2), n.isRelationUnique ? p2[n.parentField] = null : p2[n.parentField] = [];
        }
        let u = r ? void 0 : Bd(l2, o);
        for (let c of Array.isArray(i) ? i : [i]) {
          if (c === null) continue;
          let p2 = Xe(Lt(c), s, u);
          for (let d of a[p2] ?? []) n.isRelationUnique ? d[n.parentField] = c : d[n.parentField].push(c);
        }
      }
      return e;
    }
    __name(Ud, "Ud");
    function Bd(e, t) {
      function r(o) {
        switch (o) {
          case "number":
            return Number;
          case "string":
            return String;
          case "boolean":
            return Boolean;
          case "bigint":
            return BigInt;
          default:
            return;
        }
      }
      __name(r, "r");
      let n = Array.from({ length: t.length }), i = 0;
      for (let o of e) {
        let s = Lt(o);
        for (let [a, l2] of t.entries()) if (s[l2] !== null && n[a] === void 0) {
          let u = r(typeof s[l2]);
          u !== void 0 && (n[a] = u), i++;
        }
        if (i === t.length) break;
      }
      return n;
    }
    __name(Bd, "Bd");
    function Qd(e, t, r, n) {
      switch (e.type) {
        case "value":
          return H(e.value, r, n);
        case "lastInsertId":
          return t;
        default:
          T2(e, `Unexpected field initializer type: ${e.type}`);
      }
    }
    __name(Qd, "Qd");
    function Jd(e, t, r, n) {
      switch (e.type) {
        case "set":
          return H(e.value, r, n);
        case "add":
          return te(t) + te(H(e.value, r, n));
        case "subtract":
          return te(t) - te(H(e.value, r, n));
        case "multiply":
          return te(t) * te(H(e.value, r, n));
        case "divide": {
          let i = te(t), o = te(H(e.value, r, n));
          return o === 0 ? null : i / o;
        }
        default:
          T2(e, `Unexpected field operation type: ${e.type}`);
      }
    }
    __name(Jd, "Jd");
    function Ia(e, t) {
      if (!t || t.plugins.length === 0) return e;
      let r = ws(t.plugins, { query: t.queryInfo, sql: e.sql });
      return r ? { ...e, sql: bs(e.sql, r) } : e;
    }
    __name(Ia, "Ia");
    function Na(e, t, r) {
      let n = e.pagination?.cursor;
      if (n) for (let [i, o] of Object.entries(n)) n[i] = H(o, t, r);
      for (let i of Object.values(e.nested)) Na(i, t, r);
    }
    __name(Na, "Na");
    function ri(e) {
      return J(e);
    }
    __name(ri, "ri");
    function Da(e) {
      return new ni(e).deserialize();
    }
    __name(Da, "Da");
    function Hd(e) {
      return Buffer.from(e, "base64url");
    }
    __name(Hd, "Hd");
    var ni = class {
      static {
        __name(this, "ni");
      }
      #e;
      #t;
      #r = 0;
      constructor(t) {
        this.#e = t;
        let r = Hd(t.graph);
        this.#t = new DataView(r.buffer, r.byteOffset, r.byteLength);
      }
      deserialize() {
        let { inputNodeCount: t, outputNodeCount: r, rootCount: n } = this.#a(), i = this.#l(t), o = this.#u(r), s = this.#p(n);
        return { strings: this.#e.strings, inputNodes: i, outputNodes: o, roots: s };
      }
      #n() {
        let t = 0, r = 0, n;
        do
          n = this.#t.getUint8(this.#r++), t |= (n & 127) << r, r += 7;
        while (n >= 128);
        return t;
      }
      #i() {
        let t = this.#n();
        return t === 0 ? void 0 : t - 1;
      }
      #o() {
        let t = this.#t.getUint8(this.#r);
        return this.#r += 1, t;
      }
      #s() {
        let t = this.#t.getUint16(this.#r, true);
        return this.#r += 2, t;
      }
      #a() {
        let t = this.#n(), r = this.#n(), n = this.#n();
        return { inputNodeCount: t, outputNodeCount: r, rootCount: n };
      }
      #l(t) {
        let r = [];
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = {};
          for (let s = 0; s < i; s++) {
            let a = this.#n(), l2 = this.#s(), u = this.#i(), c = this.#i(), d = { flags: this.#o() };
            l2 !== 0 && (d.scalarMask = l2), u !== void 0 && (d.childNodeId = u), c !== void 0 && (d.enumNameIndex = c), o[a] = d;
          }
          r.push({ edges: o });
        }
        return r;
      }
      #u(t) {
        let r = [];
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = {};
          for (let s = 0; s < i; s++) {
            let a = this.#n(), l2 = this.#i(), u = this.#i(), c = {};
            l2 !== void 0 && (c.argsNodeId = l2), u !== void 0 && (c.outputNodeId = u), o[a] = c;
          }
          r.push({ edges: o });
        }
        return r;
      }
      #p(t) {
        let r = {};
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = this.#i(), s = this.#i(), a = this.#e.strings[i], l2 = {};
          o !== void 0 && (l2.argsNodeId = o), s !== void 0 && (l2.outputNodeId = s), r[a] = l2;
        }
        return r;
      }
    };
    var Vt = class e {
      static {
        __name(this, "e");
      }
      #e;
      #t;
      #r;
      constructor(t, r) {
        this.#e = t, this.#r = r, this.#t = /* @__PURE__ */ new Map();
        for (let n = 0; n < t.strings.length; n++) this.#t.set(t.strings[n], n);
      }
      static deserialize(t, r) {
        let n = Da(t);
        return new e(n, r);
      }
      static fromData(t, r) {
        return new e(t, r);
      }
      root(t) {
        let r = this.#e.roots[t];
        if (r) return { argsNodeId: r.argsNodeId, outputNodeId: r.outputNodeId };
      }
      inputNode(t) {
        if (!(t === void 0 || t < 0 || t >= this.#e.inputNodes.length)) return { id: t };
      }
      outputNode(t) {
        if (!(t === void 0 || t < 0 || t >= this.#e.outputNodes.length)) return { id: t };
      }
      inputEdge(t, r) {
        if (!t) return;
        let n = this.#e.inputNodes[t.id];
        if (!n) return;
        let i = this.#t.get(r);
        if (i === void 0) return;
        let o = n.edges[i];
        if (o) return { flags: o.flags, childNodeId: o.childNodeId, scalarMask: o.scalarMask ?? 0, enumNameIndex: o.enumNameIndex };
      }
      outputEdge(t, r) {
        if (!t) return;
        let n = this.#e.outputNodes[t.id];
        if (!n) return;
        let i = this.#t.get(r);
        if (i === void 0) return;
        let o = n.edges[i];
        if (o) return { argsNodeId: o.argsNodeId, outputNodeId: o.outputNodeId };
      }
      enumValues(t) {
        if (t?.enumNameIndex === void 0) return;
        let r = this.#e.strings[t.enumNameIndex];
        if (r) return this.#r(r);
      }
      getString(t) {
        return this.#e.strings[t];
      }
    };
    var re = { ParamScalar: 1, ParamEnum: 2, ParamListScalar: 4, ParamListEnum: 8, ListObject: 16, Object: 32 };
    var M = { String: 1, Int: 2, BigInt: 4, Float: 8, Decimal: 16, Boolean: 32, DateTime: 64, Json: 128, Bytes: 256 };
    function ne(e, t) {
      return (e.flags & t) !== 0;
    }
    __name(ne, "ne");
    function we(e) {
      return e.scalarMask;
    }
    __name(we, "we");
    var zd = /* @__PURE__ */ new Set(["DateTime", "Decimal", "BigInt", "Bytes", "Json", "Raw"]);
    function Ir(e) {
      if (e == null) return { kind: "null" };
      if (typeof e == "string") return { kind: "primitive", value: e };
      if (typeof e == "number") return { kind: "primitive", value: e };
      if (typeof e == "boolean") return { kind: "primitive", value: e };
      if (Array.isArray(e)) return { kind: "array", items: e };
      if (typeof e == "object") {
        let t = e;
        if ("$type" in t && typeof t.$type == "string") {
          let r = t.$type;
          return zd.has(r) ? { kind: "taggedScalar", tag: r, value: t.value } : { kind: "structural", value: t.value };
        }
        return { kind: "object", entries: t };
      }
      return { kind: "structural", value: e };
    }
    __name(Ir, "Ir");
    function Ma(e) {
      return typeof e == "object" && e !== null && !Array.isArray(e) && !("$type" in e);
    }
    __name(Ma, "Ma");
    function Fa(e) {
      return typeof e == "object" && e !== null && "$type" in e && typeof e.$type == "string";
    }
    __name(Fa, "Fa");
    function ii(e, t) {
      let r = new Or(t), n = e.modelName ? `${e.modelName}.${e.action}` : e.action, i = t.root(n);
      return { parameterizedQuery: { ...e, query: r.parameterizeFieldSelection(e.query, i?.argsNodeId, i?.outputNodeId) }, placeholderValues: r.getPlaceholderValues() };
    }
    __name(ii, "ii");
    function oi(e, t) {
      let r = new Or(t), n = [];
      for (let i = 0; i < e.batch.length; i++) {
        let o = e.batch[i], s = o.modelName ? `${o.modelName}.${o.action}` : o.action, a = t.root(s);
        n.push({ ...o, query: r.parameterizeFieldSelection(o.query, a?.argsNodeId, a?.outputNodeId) });
      }
      return { parameterizedBatch: { ...e, batch: n }, placeholderValues: r.getPlaceholderValues() };
    }
    __name(oi, "oi");
    var Or = class {
      static {
        __name(this, "Or");
      }
      #e;
      #t = /* @__PURE__ */ new Map();
      #r = /* @__PURE__ */ new Map();
      #n = 1;
      constructor(t) {
        this.#e = t;
      }
      getPlaceholderValues() {
        return Object.fromEntries(this.#t);
      }
      #i(t, r) {
        let n = Wd(t, r), i = this.#r.get(n);
        if (i !== void 0) return _a(i, r);
        let o = `%${this.#n++}`;
        return this.#r.set(n, o), this.#t.set(o, t), _a(o, r);
      }
      parameterizeFieldSelection(t, r, n) {
        let i = this.#e.inputNode(r), o = this.#e.outputNode(n), s = { ...t };
        return t.arguments && t.arguments.$type !== "Raw" && (s.arguments = this.#o(t.arguments, i)), t.selection && (s.selection = this.#c(t.selection, o)), s;
      }
      #o(t, r) {
        if (!r) return t;
        let n = {};
        for (let [i, o] of Object.entries(t)) {
          let s = this.#e.inputEdge(r, i);
          s ? n[i] = this.#s(o, s) : n[i] = o;
        }
        return n;
      }
      #s(t, r) {
        let n = Ir(t);
        switch (n.kind) {
          case "null":
            return t;
          case "structural":
            return t;
          case "primitive":
            return this.#a(n.value, r);
          case "taggedScalar":
            return this.#l(t, n.tag, r);
          case "array":
            return this.#u(n.items, t, r);
          case "object":
            return this.#p(n.entries, r);
          default:
            throw new Error(`Unknown value kind ${n.kind}`);
        }
      }
      #a(t, r) {
        if (ne(r, re.ParamEnum) && r.enumNameIndex !== void 0 && typeof t == "string") {
          let o = this.#e.enumValues(r);
          if (o && Object.hasOwn(o, t)) {
            let s = { type: "Enum" };
            return this.#i(o[t], s);
          }
        }
        if (!ne(r, re.ParamScalar)) return t;
        let n = we(r);
        if (n === 0) return t;
        let i = si(t);
        return La(i, n) ? (n & M.Json && (t = JSON.stringify(t)), this.#i(t, i)) : t;
      }
      #l(t, r, n) {
        if (!ne(n, re.ParamScalar)) return t;
        let i = we(n);
        if (i === 0 || !qa(r, i)) return t;
        let o = Va(t.$type), s = ja(t);
        return this.#i(s, o);
      }
      #u(t, r, n) {
        if (ne(n, re.ParamScalar) && we(n) & M.Json) {
          let i = K(Z(t)), o = { type: "Json" };
          return this.#i(i, o);
        }
        if (ne(n, re.ParamEnum)) {
          let i = this.#e.enumValues(n);
          if (i && t.every((o) => typeof o == "string" && Object.hasOwn(i, o))) {
            let o = { type: "List", inner: { type: "Enum" } };
            return this.#i(t, o);
          }
        }
        if (ne(n, re.ParamListScalar) && t.every((o) => em(o, n)) && t.length > 0) {
          let o = t.map((l2) => tm(l2)), a = { type: "List", inner: Yd(t) };
          return this.#i(o, a);
        }
        if (ne(n, re.ListObject)) {
          let i = this.#e.inputNode(n.childNodeId);
          if (i) return t.map((o) => Ma(o) ? this.#o(o, i) : o);
        }
        return r;
      }
      #p(t, r) {
        if (ne(r, re.Object)) {
          let i = this.#e.inputNode(r.childNodeId);
          if (i) return this.#o(t, i);
        }
        if (we(r) & M.Json) {
          let i = K(Z(t)), o = { type: "Json" };
          return this.#i(i, o);
        }
        return t;
      }
      #c(t, r) {
        if (!t || !r) return t;
        let n = {};
        for (let [i, o] of Object.entries(t)) {
          if (i === "$scalars" || i === "$composites" || typeof o == "boolean") {
            n[i] = o;
            continue;
          }
          let s = this.#e.outputEdge(r, i);
          if (s) {
            let a = o, l2 = this.#e.inputNode(s.argsNodeId), u = this.#e.outputNode(s.outputNodeId), c = { selection: a.selection ? this.#c(a.selection, u) : {} };
            a.arguments && (c.arguments = this.#o(a.arguments, l2)), n[i] = c;
          } else n[i] = o;
        }
        return n;
      }
    };
    function _a(e, t) {
      return { $type: "Param", value: { name: e, ...t } };
    }
    __name(_a, "_a");
    function $a(e) {
      return e.type === "List" ? `List<${$a(e.inner)}>` : e.type;
    }
    __name($a, "$a");
    function Gd(e) {
      return ArrayBuffer.isView(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64") : JSON.stringify(e);
    }
    __name(Gd, "Gd");
    function Wd(e, t) {
      let r = $a(t), n = Gd(e);
      return `${r}:${n}`;
    }
    __name(Wd, "Wd");
    var Kd = 2 ** 31 - 1;
    var Zd = -(2 ** 31);
    function si(e) {
      switch (typeof e) {
        case "boolean":
          return { type: "Boolean" };
        case "number":
          return Number.isInteger(e) ? Zd <= e && e <= Kd ? { type: "Int" } : { type: "BigInt" } : { type: "Float" };
        case "string":
          return { type: "String" };
        default:
          throw new Error("unreachable");
      }
    }
    __name(si, "si");
    function La({ type: e }, t) {
      switch (e) {
        case "Boolean":
          return (t & M.Boolean) !== 0;
        case "Int":
          return (t & (M.Int | M.BigInt | M.Float)) !== 0;
        case "BigInt":
          return (t & M.BigInt) !== 0;
        case "Float":
          return (t & M.Float) !== 0;
        case "String":
          return (t & M.String) !== 0;
        default:
          return false;
      }
    }
    __name(La, "La");
    function Va(e) {
      switch (e) {
        case "BigInt":
        case "Bytes":
        case "DateTime":
        case "Json":
          return { type: e };
        case "Decimal":
          return { type: "Float" };
        default:
          return;
      }
    }
    __name(Va, "Va");
    function Yd(e) {
      let t = { type: "Any" };
      for (let r of e) {
        let n = Ir(r), i;
        switch (n.kind) {
          case "primitive":
            i = si(n.value);
            break;
          case "taggedScalar":
            i = Va(n.tag) ?? { type: "Any" };
            break;
          default:
            return { type: "Any" };
        }
        t = Xd(t, i);
      }
      return t;
    }
    __name(Yd, "Yd");
    function Xd(e, t) {
      if (e.type === "Any") return t;
      if (t.type === "Any" || e.type === t.type) return e;
      let r = { Int: 0, BigInt: 1, Float: 2 }, n = r[e.type], i = r[t.type];
      return n !== void 0 && i !== void 0 ? n >= i ? e : t : { type: "Any" };
    }
    __name(Xd, "Xd");
    function qa(e, t) {
      switch (e) {
        case "DateTime":
          return (t & M.DateTime) !== 0;
        case "Decimal":
          return (t & M.Decimal) !== 0;
        case "BigInt":
          return (t & M.BigInt) !== 0;
        case "Bytes":
          return (t & M.Bytes) !== 0;
        case "Json":
          return (t & M.Json) !== 0;
        default:
          return false;
      }
    }
    __name(qa, "qa");
    function em(e, t) {
      let r = Ir(e);
      switch (r.kind) {
        case "structural":
          return false;
        case "null":
          return false;
        case "primitive": {
          let n = si(r.value), i = we(t);
          return i !== 0 && La(n, i);
        }
        case "taggedScalar": {
          let n = we(t);
          return n !== 0 && qa(r.tag, n);
        }
        default:
          return false;
      }
    }
    __name(em, "em");
    function tm(e) {
      return Fa(e) ? ja(e) : e;
    }
    __name(tm, "tm");
    function ja(e) {
      return e.value;
    }
    __name(ja, "ja");
    async function rm() {
      return globalThis.crypto ?? await import("node:crypto");
    }
    __name(rm, "rm");
    async function Ua() {
      return (await rm()).randomUUID();
    }
    __name(Ua, "Ua");
    async function Ba(e, t) {
      return new Promise((r) => {
        e.addEventListener(t, r, { once: true });
      });
    }
    __name(Ba, "Ba");
    var V = class extends N {
      static {
        __name(this, "V");
      }
      name = "TransactionManagerError";
      constructor(t, r) {
        super("Transaction API error: " + t, "P2028", r);
      }
    };
    var Re = class extends V {
      static {
        __name(this, "Re");
      }
      constructor() {
        super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");
      }
    };
    var Nr = class extends V {
      static {
        __name(this, "Nr");
      }
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`);
      }
    };
    var Dr = class extends V {
      static {
        __name(this, "Dr");
      }
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`);
      }
    };
    var Mr = class extends V {
      static {
        __name(this, "Mr");
      }
      constructor() {
        super("Unable to start a transaction in the given time.");
      }
    };
    var Fr = class extends V {
      static {
        __name(this, "Fr");
      }
      constructor(t, { timeout: r, timeTaken: n }) {
        super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`, { operation: t, timeout: r, timeTaken: n });
      }
    };
    var ie = class extends V {
      static {
        __name(this, "ie");
      }
      constructor(t) {
        super(`Internal Consistency Error: ${t}`);
      }
    };
    var _r = class extends V {
      static {
        __name(this, "_r");
      }
      constructor(t) {
        super(`Invalid isolation level: ${t}`, { isolationLevel: t });
      }
    };
    var nm = 100;
    var et = _("prisma:client:transactionManager");
    var im = /* @__PURE__ */ __name(() => ({ sql: "COMMIT", args: [], argTypes: [] }), "im");
    var om = /* @__PURE__ */ __name(() => ({ sql: "ROLLBACK", args: [], argTypes: [] }), "om");
    var sm = /* @__PURE__ */ __name(() => ({ sql: '-- Implicit "COMMIT" query via underlying driver', args: [], argTypes: [] }), "sm");
    var am = /* @__PURE__ */ __name(() => ({ sql: '-- Implicit "ROLLBACK" query via underlying driver', args: [], argTypes: [] }), "am");
    var qt = class {
      static {
        __name(this, "qt");
      }
      transactions = /* @__PURE__ */ new Map();
      closedTransactions = [];
      driverAdapter;
      transactionOptions;
      tracingHelper;
      #e;
      #t;
      constructor({ driverAdapter: t, transactionOptions: r, tracingHelper: n, onQuery: i, provider: o }) {
        this.driverAdapter = t, this.transactionOptions = r, this.tracingHelper = n, this.#e = i, this.#t = o;
      }
      async startInternalTransaction(t) {
        let r = t !== void 0 ? this.#m(t) : {};
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async startTransaction(t) {
        let r = t !== void 0 ? this.#m(t) : this.transactionOptions;
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async #r(t) {
        if (t.newTxId) return await this.#p(t.newTxId, "start", async (s) => {
          if (s.status !== "running") throw new ie(`Transaction in invalid state ${s.status} when starting a nested transaction.`);
          if (!s.transaction) throw new ie("Transaction missing underlying driver transaction when starting a nested transaction.");
          s.depth += 1;
          let a = this.#i(s);
          s.savepoints.push(a);
          try {
            await this.#o(s.transaction)(a);
          } catch (l2) {
            throw s.depth -= 1, s.savepoints.pop(), l2;
          }
          return { id: s.id };
        });
        let r = { id: await Ua(), status: "waiting", timer: void 0, timeout: t.timeout, startedAt: Date.now(), transaction: void 0, operationQueue: Promise.resolve(), depth: 1, savepoints: [], savepointCounter: 0 }, n = new AbortController(), i = Qa(() => n.abort(), t.maxWait);
        i?.unref?.();
        let o = this.driverAdapter.startTransaction(t.isolationLevel).catch(Ge);
        switch (r.transaction = await Promise.race([o.finally(() => clearTimeout(i)), Ba(n.signal, "abort").then(() => {
        })]), this.transactions.set(r.id, r), r.status) {
          case "waiting":
            if (n.signal.aborted) throw o.then((s) => s.rollback()).catch((s) => et("error in discarded transaction:", s)), await this.#d(r, "timed_out"), new Mr();
            return r.status = "running", r.timer = this.#u(r.id, t.timeout), { id: r.id };
          case "timed_out":
          case "running":
          case "committed":
          case "rolled_back":
            throw new ie(`Transaction in invalid state ${r.status} although it just finished startup.`);
          default:
            T2(r.status, "Unknown transaction status.");
        }
      }
      async commitTransaction(t) {
        return await this.tracingHelper.runInChildSpan("commit_transaction", async () => {
          await this.#p(t, "commit", async (r) => {
            if (r.depth > 1) {
              if (!r.transaction) throw new Re();
              let n = r.savepoints.at(-1);
              if (!n) throw new ie(`Missing savepoint for nested commit. Depth: ${r.depth}, transactionId: ${r.id}`);
              try {
                await this.#a(r.transaction, n);
              } finally {
                r.savepoints.pop(), r.depth -= 1;
              }
              return;
            }
            await this.#d(r, "committed");
          });
        });
      }
      async rollbackTransaction(t) {
        return await this.tracingHelper.runInChildSpan("rollback_transaction", async () => {
          await this.#p(t, "rollback", async (r) => {
            if (r.depth > 1) {
              if (!r.transaction) throw new Re();
              let n = r.savepoints.at(-1);
              if (!n) throw new ie(`Missing savepoint for nested rollback. Depth: ${r.depth}, transactionId: ${r.id}`);
              try {
                await this.#s(r.transaction)(n), await this.#a(r.transaction, n);
              } finally {
                r.savepoints.pop(), r.depth -= 1;
              }
              return;
            }
            await this.#d(r, "rolled_back");
          });
        });
      }
      async getTransaction(t, r) {
        let n = this.#n(t.id, r);
        if (n.status === "closing" && (await n.closing, n = this.#n(t.id, r)), !n.transaction) throw new Re();
        return n.transaction;
      }
      #n(t, r) {
        let n = this.transactions.get(t);
        if (!n) {
          let i = this.closedTransactions.find((o) => o.id === t);
          if (i) switch (et("Transaction already closed.", { transactionId: t, status: i.status }), i.status) {
            case "closing":
            case "waiting":
            case "running":
              throw new ie("Active transaction found in closed transactions list.");
            case "committed":
              throw new Nr(r);
            case "rolled_back":
              throw new Dr(r);
            case "timed_out":
              throw new Fr(r, { timeout: i.timeout, timeTaken: Date.now() - i.startedAt });
          }
          else throw et("Transaction not found.", t), new Re();
        }
        if (["committed", "rolled_back", "timed_out"].includes(n.status)) throw new ie("Closed transaction found in active transactions map.");
        return n;
      }
      async cancelAllTransactions() {
        await Promise.allSettled([...this.transactions.values()].map((t) => this.#c(t, async () => {
          let r = this.transactions.get(t.id);
          r && await this.#d(r, "rolled_back");
        })));
      }
      #i(t) {
        return `prisma_sp_${t.savepointCounter++}`;
      }
      #o(t) {
        if (t.createSavepoint) return t.createSavepoint.bind(t);
        throw new V(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): createSavepoint is not implemented.`);
      }
      #s(t) {
        if (t.rollbackToSavepoint) return t.rollbackToSavepoint.bind(t);
        throw new V(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): rollbackToSavepoint is not implemented.`);
      }
      async #a(t, r) {
        t.releaseSavepoint && await t.releaseSavepoint(r);
      }
      #l(t) {
        et("Transaction already committed or rolled back when timeout happened.", t);
      }
      #u(t, r) {
        let n = Date.now(), i = Qa(async () => {
          et("Transaction timed out.", { transactionId: t, timeoutStartedAt: n, timeout: r });
          let o = this.transactions.get(t);
          if (!o) {
            this.#l(t);
            return;
          }
          await this.#c(o, async () => {
            let s = this.transactions.get(t);
            s && ["running", "waiting"].includes(s.status) ? await this.#d(s, "timed_out") : this.#l(t);
          });
        }, r);
        return i?.unref?.(), i;
      }
      async #p(t, r, n) {
        let i = this.#n(t, r);
        return await this.#c(i, async () => {
          let o = this.#n(t, r);
          return await n(o);
        });
      }
      async #c(t, r) {
        let n = t.operationQueue, i;
        t.operationQueue = new Promise((o) => {
          i = o;
        }), await n;
        try {
          return await r();
        } finally {
          i();
        }
      }
      async #d(t, r) {
        let n = /* @__PURE__ */ __name(async () => {
          et("Closing transaction.", { transactionId: t.id, status: r });
          try {
            if (t.transaction && r === "committed") if (t.transaction.options.usePhantomQuery) await this.#f(sm(), t.transaction, () => t.transaction.commit());
            else {
              let i = im();
              await this.#f(i, t.transaction, () => t.transaction.executeRaw(i)).then(() => t.transaction.commit(), (o) => {
                let s = /* @__PURE__ */ __name(() => Promise.reject(o), "s");
                return t.transaction.rollback().then(s, s);
              });
            }
            else if (t.transaction) if (t.transaction.options.usePhantomQuery) await this.#f(am(), t.transaction, () => t.transaction.rollback());
            else {
              let i = om();
              try {
                await this.#f(i, t.transaction, () => t.transaction.executeRaw(i));
              } finally {
                await t.transaction.rollback();
              }
            }
          } finally {
            t.status = r, clearTimeout(t.timer), t.timer = void 0, this.transactions.delete(t.id), this.closedTransactions.push(t), this.closedTransactions.length > nm && this.closedTransactions.shift();
          }
        }, "n");
        t.status === "closing" ? (await t.closing, this.#n(t.id, r === "committed" ? "commit" : "rollback")) : await Object.assign(t, { status: "closing", reason: r, closing: n() }).closing;
      }
      #m(t) {
        if (!t.timeout) throw new V("timeout is required");
        if (!t.maxWait) throw new V("maxWait is required");
        if (t.isolationLevel === "SNAPSHOT") throw new _r(t.isolationLevel);
        return { ...t, timeout: t.timeout, maxWait: t.maxWait };
      }
      #f(t, r, n) {
        return xr({ query: t, execute: n, provider: this.#t ?? r.provider, tracingHelper: this.tracingHelper, onQuery: this.#e });
      }
    };
    function Qa(e, t) {
      return t !== void 0 ? setTimeout(e, t) : void 0;
    }
    __name(Qa, "Qa");
    var F2 = require_dist();
    var $r = "7.8.0";
    var Ja = { bigint: "bigint", date: "datetime", decimal: "decimal", bytes: "bytes" };
    function za(e) {
      let t;
      try {
        t = JSON.parse(e);
      } catch (i) {
        throw new Error(`Received invalid serialized parameters: ${i.message}`);
      }
      if (!Array.isArray(t)) throw new Error("Received invalid serialized parameters: expected an array");
      let r = t.map((i) => Ga(i)), n = t.map((i) => um(i));
      return { args: r, argTypes: n };
    }
    __name(za, "za");
    function Ga(e) {
      if (Array.isArray(e)) return e.map((t) => Ga(t));
      if (typeof e == "object" && e !== null && "prisma__value" in e) {
        if (!("prisma__type" in e)) throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");
        return `${e.prisma__value}`;
      }
      return typeof e == "object" && e !== null ? JSON.stringify(e) : e;
    }
    __name(Ga, "Ga");
    function um(e) {
      return Array.isArray(e) ? { scalarType: e.length > 0 ? Ha(e[0]) : "unknown", arity: "list" } : { scalarType: Ha(e), arity: "scalar" };
    }
    __name(um, "um");
    function Ha(e) {
      return typeof e == "object" && e !== null && "prisma__type" in e && typeof e.prisma__type == "string" && e.prisma__type in Ja ? Ja[e.prisma__type] : typeof e == "number" ? "decimal" : typeof e == "string" ? "string" : "unknown";
    }
    __name(Ha, "Ha");
    function Wa(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(Wa, "Wa");
    function Ka(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    __name(Ka, "Ka");
    function Za(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    __name(Za, "Za");
    var Ya = B(Ji());
    function Xa({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, Ya.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    __name(Xa, "Xa");
    function el({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let a = Di(6e3 - (s?.length ?? 0)), l2 = Za(De(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = De(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l2}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Ka(s) : ""}
\`\`\`
`), p2 = Xa({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${st(p2)}

If you want the Prisma team to look into it, please open the link above 🙏
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    __name(el, "el");
    var Lr = class e {
      static {
        __name(this, "e");
      }
      #e;
      #t;
      #r;
      #n;
      #i;
      constructor(t, r, n) {
        this.#e = t, this.#t = r, this.#r = n, this.#n = r.getConnectionInfo?.(), this.#i = $t.forSql({ onQuery: this.#e.onQuery, tracingHelper: this.#e.tracingHelper, provider: this.#e.provider, connectionInfo: this.#n });
      }
      static async connect(t) {
        let r, n;
        try {
          r = await t.driverAdapterFactory.connect(), n = new qt({ driverAdapter: r, transactionOptions: t.transactionOptions, tracingHelper: t.tracingHelper, onQuery: t.onQuery, provider: t.provider });
        } catch (i) {
          throw await r?.dispose(), i;
        }
        return new e(t, r, n);
      }
      getConnectionInfo() {
        let t = this.#n ?? { supportsRelationJoins: false };
        return Promise.resolve({ provider: this.#t.provider, connectionInfo: t });
      }
      async execute({ plan: t, placeholderValues: r, transaction: n, batchIndex: i, queryInfo: o }) {
        let s = n ? await this.#r.getTransaction(n, i !== void 0 ? "batch query" : "query") : this.#t;
        return await this.#i.run(t, { queryable: s, transactionManager: n ? { enabled: false } : { enabled: true, manager: this.#r }, scope: r, sqlCommenter: this.#e.sqlCommenters && { plugins: this.#e.sqlCommenters, queryInfo: o } });
      }
      async startTransaction(t) {
        return { ...await this.#r.startTransaction(t), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#r.commitTransaction(t.id);
      }
      async rollbackTransaction(t) {
        await this.#r.rollbackTransaction(t.id);
      }
      async disconnect() {
        try {
          await this.#r.cancelAllTransactions();
        } finally {
          await this.#t.dispose();
        }
      }
      apiKey() {
        return null;
      }
    };
    var Vr = class {
      static {
        __name(this, "Vr");
      }
      #e;
      #t;
      #r;
      constructor(t = 1e3) {
        this.#e = /* @__PURE__ */ new Map(), this.#t = /* @__PURE__ */ new Map(), this.#r = t;
      }
      getSingle(t) {
        let r = this.#e.get(t);
        return r && (this.#e.delete(t), this.#e.set(t, r)), r;
      }
      setSingle(t, r) {
        if (this.#e.has(t)) {
          this.#e.delete(t), this.#e.set(t, r);
          return;
        }
        if (this.#e.size >= this.#r) {
          let n = this.#e.keys().next().value;
          n !== void 0 && this.#e.delete(n);
        }
        this.#e.set(t, r);
      }
      getBatch(t) {
        let r = this.#t.get(t);
        return r && (this.#t.delete(t), this.#t.set(t, r)), r;
      }
      setBatch(t, r) {
        if (this.#t.has(t)) {
          this.#t.delete(t), this.#t.set(t, r);
          return;
        }
        if (this.#t.size >= this.#r) {
          let n = this.#t.keys().next().value;
          n !== void 0 && this.#t.delete(n);
        }
        this.#t.set(t, r);
      }
      clear() {
        this.#e.clear(), this.#t.clear();
      }
      get size() {
        return this.#e.size + this.#t.size;
      }
      get singleCacheSize() {
        return this.#e.size;
      }
      get batchCacheSize() {
        return this.#t.size;
      }
    };
    var sl = require_dist();
    var qr = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    function tl(e, t, r) {
      let n = r || {}, i = n.encode || encodeURIComponent;
      if (typeof i != "function") throw new TypeError("option encode is invalid");
      if (!qr.test(e)) throw new TypeError("argument name is invalid");
      let o = i(t);
      if (o && !qr.test(o)) throw new TypeError("argument val is invalid");
      let s = e + "=" + o;
      if (n.maxAge !== void 0 && n.maxAge !== null) {
        let a = n.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a);
      }
      if (n.domain) {
        if (!qr.test(n.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + n.domain;
      }
      if (n.path) {
        if (!qr.test(n.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + n.path;
      }
      if (n.expires) {
        if (!cm(n.expires) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
        s += "; Expires=" + n.expires.toUTCString();
      }
      if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority) {
        case "low": {
          s += "; Priority=Low";
          break;
        }
        case "medium": {
          s += "; Priority=Medium";
          break;
        }
        case "high": {
          s += "; Priority=High";
          break;
        }
        default:
          throw new TypeError("option priority is invalid");
      }
      if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
        case true: {
          s += "; SameSite=Strict";
          break;
        }
        case "lax": {
          s += "; SameSite=Lax";
          break;
        }
        case "strict": {
          s += "; SameSite=Strict";
          break;
        }
        case "none": {
          s += "; SameSite=None";
          break;
        }
        default:
          throw new TypeError("option sameSite is invalid");
      }
      return n.partitioned && (s += "; Partitioned"), s;
    }
    __name(tl, "tl");
    function cm(e) {
      return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
    }
    __name(cm, "cm");
    function rl(e, t) {
      let r = (e || "").split(";").filter((l2) => typeof l2 == "string" && !!l2.trim()), n = r.shift() || "", i = pm(n), o = i.name, s = i.value;
      try {
        s = t?.decode === false ? s : (t?.decode || decodeURIComponent)(s);
      } catch {
      }
      let a = { name: o, value: s };
      for (let l2 of r) {
        let u = l2.split("="), c = (u.shift() || "").trimStart().toLowerCase(), p2 = u.join("=");
        switch (c) {
          case "expires": {
            a.expires = new Date(p2);
            break;
          }
          case "max-age": {
            a.maxAge = Number.parseInt(p2, 10);
            break;
          }
          case "secure": {
            a.secure = true;
            break;
          }
          case "httponly": {
            a.httpOnly = true;
            break;
          }
          case "samesite": {
            a.sameSite = p2;
            break;
          }
          default:
            a[c] = p2;
        }
      }
      return a;
    }
    __name(rl, "rl");
    function pm(e) {
      let t = "", r = "", n = e.split("=");
      return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, { name: t, value: r };
    }
    __name(pm, "pm");
    var jr = class extends Error {
      static {
        __name(this, "jr");
      }
      clientVersion;
      cause;
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var Ur = class extends jr {
      static {
        __name(this, "Ur");
      }
      isRetryable;
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    function nl(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(nl, "nl");
    var ke = class extends Ur {
      static {
        __name(this, "ke");
      }
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(t, r) {
        super(t, nl(r, false));
      }
    };
    gt(ke, "InvalidDatasourceError");
    function il(e) {
      let t = { clientVersion: e.clientVersion }, r;
      try {
        r = new URL(e.accelerateUrl);
      } catch (l2) {
        let u = l2.message;
        throw new ke(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${u}`, t);
      }
      let { protocol: n, searchParams: i } = r;
      if (n !== "prisma:" && n !== zt) throw new ke("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`", t);
      let o = i.get("api_key");
      if (o === null || o.length < 1) throw new ke("Error validating `accelerateUrl`: the URL must contain a valid API key", t);
      let s = tn(r) ? "http:" : "https:";
      process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && r.searchParams.has("use_http") && (s = "http:");
      let a = new URL(r.href.replace(n, s));
      return { apiKey: o, url: a };
    }
    __name(il, "il");
    var ol = B(_i());
    var Br = class {
      static {
        __name(this, "Br");
      }
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, transactionId: r } = {}) {
        let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": ol.enginesVersion };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-Transaction-Id"] = r);
        let i = this.#e();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
      }
      #e() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    function dm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(dm, "dm");
    function ai(e) {
      return new Date(dm(e));
    }
    __name(ai, "ai");
    var al = _("prisma:client:clientEngine:remoteExecutor");
    var Qr = class {
      static {
        __name(this, "Qr");
      }
      #e;
      #t;
      #r;
      #n;
      #i;
      #o;
      constructor(t) {
        this.#e = t.clientVersion, this.#n = t.logEmitter, this.#i = t.tracingHelper, this.#o = t.sqlCommenters;
        let { url: r, apiKey: n } = il({ clientVersion: t.clientVersion, accelerateUrl: t.accelerateUrl });
        this.#r = new li(r), this.#t = new Br({ apiKey: n, engineHash: t.clientVersion, logLevel: t.logLevel, logQueries: t.logQueries, tracingHelper: t.tracingHelper });
      }
      async getConnectionInfo() {
        return await this.#s({ path: "/connection-info", method: "GET" });
      }
      async execute({ plan: t, placeholderValues: r, batchIndex: n, model: i, operation: o, transaction: s, customFetch: a, queryInfo: l2 }) {
        let u = l2 && this.#o?.length ? br(this.#o, { query: l2 }) : void 0;
        return (await this.#s({ path: s ? `/transaction/${s.id}/query` : "/query", method: "POST", body: { model: i, operation: o, plan: t, params: r, comments: u && Object.keys(u).length > 0 ? u : void 0 }, batchRequestIdx: n, fetch: a })).data;
      }
      async startTransaction(t) {
        return { ...await this.#s({ path: "/transaction/start", method: "POST", body: t }), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#s({ path: `/transaction/${t.id}/commit`, method: "POST" });
      }
      async rollbackTransaction(t) {
        await this.#s({ path: `/transaction/${t.id}/rollback`, method: "POST" });
      }
      disconnect() {
        return Promise.resolve();
      }
      apiKey() {
        return this.#t.apiKey;
      }
      async #s({ path: t, method: r, body: n, fetch: i = globalThis.fetch, batchRequestIdx: o }) {
        let s = await this.#r.request({ method: r, path: t, headers: this.#t.build(), body: n, fetch: i });
        s.ok || await this.#a(s, o);
        let a = await s.json();
        return typeof a.extensions == "object" && a.extensions !== null && this.#l(a.extensions), a;
      }
      async #a(t, r) {
        let n = t.headers.get("Prisma-Error-Code"), i = await t.text(), o, s = i;
        try {
          o = JSON.parse(i);
        } catch {
          o = {};
        }
        typeof o.code == "string" && (n = o.code), typeof o.error == "string" ? s = o.error : typeof o.message == "string" ? s = o.message : typeof o.InvalidRequestError == "object" && o.InvalidRequestError !== null && typeof o.InvalidRequestError.reason == "string" && (s = o.InvalidRequestError.reason), s = s || `HTTP ${t.status}: ${t.statusText}`;
        let a = typeof o.meta == "object" && o.meta !== null ? o.meta : o;
        throw new sl.PrismaClientKnownRequestError(s, { clientVersion: this.#e, code: n ?? "P6000", batchRequestIdx: r, meta: a });
      }
      #l(t) {
        if (t.logs) for (let r of t.logs) this.#u(r);
        t.spans && this.#i.dispatchEngineSpans(t.spans);
      }
      #u(t) {
        switch (t.level) {
          case "debug":
          case "trace":
            al(t);
            break;
          case "error":
          case "warn":
          case "info": {
            this.#n.emit(t.level, { timestamp: ai(t.timestamp), message: t.attributes.message ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          case "query": {
            this.#n.emit("query", { query: t.attributes.query ?? "", timestamp: ai(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          default:
            throw new Error(`Unexpected log level: ${t.level}`);
        }
      }
    };
    var li = class {
      static {
        __name(this, "li");
      }
      #e;
      #t;
      #r;
      constructor(t) {
        this.#e = t, this.#t = /* @__PURE__ */ new Map();
      }
      async request({ method: t, path: r, headers: n, body: i, fetch: o }) {
        let s = new URL(r, this.#e), a = this.#n(s);
        a && (n.Cookie = a), this.#r && (n["Accelerate-Query-Engine-Jwt"] = this.#r);
        let l2 = await o(s.href, { method: t, body: i !== void 0 ? JSON.stringify(i) : void 0, headers: n });
        return al(t, s, l2.status, l2.statusText), this.#r = l2.headers.get("Accelerate-Query-Engine-Jwt") ?? void 0, this.#i(s, l2), l2;
      }
      #n(t) {
        let r = [], n = /* @__PURE__ */ new Date();
        for (let [i, o] of this.#t) {
          if (o.expires && o.expires < n) {
            this.#t.delete(i);
            continue;
          }
          let s = o.domain ?? t.hostname, a = o.path ?? "/";
          t.hostname.endsWith(s) && t.pathname.startsWith(a) && r.push(tl(o.name, o.value));
        }
        return r.length > 0 ? r.join("; ") : void 0;
      }
      #i(t, r) {
        let n = r.headers.getSetCookie?.() || [];
        if (n.length === 0) {
          let i = r.headers.get("Set-Cookie");
          i && n.push(i);
        }
        for (let i of n) {
          let o = rl(i), s = o.domain ?? t.hostname, a = o.path ?? "/", l2 = `${s}:${a}:${o.name}`;
          this.#t.set(l2, { name: o.name, value: o.value, domain: s, path: a, expires: o.expires });
        }
      }
    };
    var ci = require_dist();
    var ui = {};
    var ll = { async loadQueryCompiler(e) {
      let { clientVersion: t, compilerWasm: r } = e;
      if (r === void 0) throw new ci.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`", t);
      let n;
      return e.activeProvider === void 0 || ui[e.activeProvider] === void 0 ? (n = (async () => {
        let i = await r.getRuntime(), o = await r.getQueryCompilerWasmModule();
        if (o == null) throw new ci.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let s = { [r.importName]: i }, a = new WebAssembly.Instance(o, s), l2 = a.exports.__wbindgen_start;
        return i.__wbg_set_wasm(a.exports), l2(), i.QueryCompiler;
      })(), e.activeProvider !== void 0 && (ui[e.activeProvider] = n)) : n = ui[e.activeProvider], await n;
    } };
    var mm = "P2038";
    var ce = _("prisma:client:clientEngine");
    var dl = globalThis;
    dl.PRISMA_WASM_PANIC_REGISTRY = { set_message(e) {
      throw new F2.PrismaClientRustPanicError(e, $r);
    } };
    var jt = class {
      static {
        __name(this, "jt");
      }
      name = "ClientEngine";
      #e;
      #t = { type: "disconnected" };
      #r;
      #n;
      #i;
      #o;
      config;
      datamodel;
      logEmitter;
      logQueries;
      logLevel;
      tracingHelper;
      #s;
      constructor(t, r) {
        if (t.accelerateUrl !== void 0) this.#n = { remote: true, accelerateUrl: t.accelerateUrl };
        else if (t.adapter) this.#n = { remote: false, driverAdapterFactory: t.adapter }, ce("Using driver adapter: %O", t.adapter);
        else throw new F2.PrismaClientInitializationError("Missing configured driver adapter. Engine type `client` requires an active driver adapter. Please check your PrismaClient initialization code.", t.clientVersion, mm);
        this.#r = r ?? ll, this.config = t, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, this.#i = t.queryPlanCacheMaxSize === 0 ? void 0 : new Vr(t.queryPlanCacheMaxSize), this.#o = Vt.deserialize(t.parameterizationSchema, (n) => {
          if (!Object.hasOwn(t.runtimeDataModel.enums, n)) return;
          let i = {};
          for (let o of t.runtimeDataModel.enums[n].values) i[o.name] = o.dbName ?? o.name;
          return i;
        }), t.enableDebugLogs && (this.logLevel = "debug"), this.logQueries && (this.#s = (n) => {
          this.logEmitter.emit("query", { ...n, params: K(n.params), target: "ClientEngine" });
        });
      }
      async #a() {
        switch (this.#t.type) {
          case "disconnected": {
            let t = this.tracingHelper.runInChildSpan("connect", async () => {
              let r, n;
              try {
                r = await this.#l(), n = await this.#u(r);
              } catch (o) {
                throw this.#t = { type: "disconnected" }, n?.free(), await r?.disconnect(), o;
              }
              let i = { executor: r, queryCompiler: n };
              return this.#t = { type: "connected", engine: i }, i;
            });
            return this.#t = { type: "connecting", promise: t }, await t;
          }
          case "connecting":
            return await this.#t.promise;
          case "connected":
            return this.#t.engine;
          case "disconnecting":
            return await this.#t.promise, await this.#a();
        }
      }
      async #l() {
        return this.#n.remote ? new Qr({ clientVersion: this.config.clientVersion, accelerateUrl: this.#n.accelerateUrl, logEmitter: this.logEmitter, logLevel: this.logLevel, logQueries: this.logQueries, tracingHelper: this.tracingHelper, sqlCommenters: this.config.sqlCommenters }) : await Lr.connect({ driverAdapterFactory: this.#n.driverAdapterFactory, tracingHelper: this.tracingHelper, transactionOptions: { ...this.config.transactionOptions, isolationLevel: this.#y(this.config.transactionOptions.isolationLevel) }, onQuery: this.#s, provider: this.config.activeProvider, sqlCommenters: this.config.sqlCommenters });
      }
      async #u(t) {
        let r = this.#e;
        r === void 0 && (r = await this.#r.loadQueryCompiler(this.config), this.#e = r);
        let { provider: n, connectionInfo: i } = await t.getConnectionInfo();
        try {
          return this.#m(() => new r({ datamodel: this.datamodel, provider: n, connectionInfo: i }), void 0, false);
        } catch (o) {
          throw this.#p(o);
        }
      }
      #p(t) {
        if (t instanceof F2.PrismaClientRustPanicError) return t;
        try {
          let r = JSON.parse(t.message);
          return new F2.PrismaClientInitializationError(r.message, this.config.clientVersion, r.error_code);
        } catch {
          return t;
        }
      }
      #c(t, r) {
        if (t instanceof F2.PrismaClientInitializationError) return t;
        if (t.code === "GenericFailure" && t.message?.startsWith("PANIC:")) return new F2.PrismaClientRustPanicError(ul(this, t.message, r), this.config.clientVersion);
        if (t instanceof N) return new F2.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion });
        try {
          let n = JSON.parse(t);
          return new F2.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`, { clientVersion: this.config.clientVersion });
        } catch {
          return t;
        }
      }
      #d(t) {
        return t instanceof F2.PrismaClientRustPanicError ? t : typeof t.message == "string" && typeof t.code == "string" ? new F2.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion }) : typeof t.message == "string" ? new F2.PrismaClientUnknownRequestError(t.message, { clientVersion: this.config.clientVersion }) : t;
      }
      #m(t, r, n = true) {
        let i = dl.PRISMA_WASM_PANIC_REGISTRY.set_message, o;
        global.PRISMA_WASM_PANIC_REGISTRY.set_message = (s) => {
          o = s;
        };
        try {
          return t();
        } finally {
          if (global.PRISMA_WASM_PANIC_REGISTRY.set_message = i, o) throw this.#e = void 0, n && this.stop().catch((s) => ce("failed to disconnect:", s)), new F2.PrismaClientRustPanicError(ul(this, o, r), this.config.clientVersion);
        }
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        await this.#a();
      }
      async stop() {
        switch (this.#t.type) {
          case "disconnected":
            return;
          case "connecting":
            return await this.#t.promise, await this.stop();
          case "connected": {
            let t = this.#t.engine, r = this.tracingHelper.runInChildSpan("disconnect", async () => {
              try {
                await t.executor.disconnect(), t.queryCompiler.free();
              } finally {
                this.#t = { type: "disconnected" };
              }
            });
            return this.#t = { type: "disconnecting", promise: r }, await r;
          }
          case "disconnecting":
            return await this.#t.promise;
        }
      }
      version() {
        return "unknown";
      }
      async transaction(t, r, n) {
        let i, { executor: o } = await this.#a();
        try {
          if (t === "start") {
            let s = n;
            i = await o.startTransaction({ ...s, isolationLevel: this.#y(s.isolationLevel) });
          } else if (t === "commit") {
            let s = n;
            await o.commitTransaction(s);
          } else if (t === "rollback") {
            let s = n;
            await o.rollbackTransaction(s);
          } else ae(t, "Invalid transaction action.");
        } catch (s) {
          throw this.#c(s);
        }
        return i ? { id: i.id, payload: void 0 } : void 0;
      }
      async request(t, { interactiveTransaction: r, customDataProxyFetch: n }) {
        ce("sending request");
        let { executor: i, queryCompiler: o } = await this.#a().catch((l2) => {
          throw this.#c(l2, JSON.stringify(t));
        }), s, a = {};
        if (cl(t)) s = pl(t);
        else {
          let { parameterizedQuery: l2, placeholderValues: u } = ii(t, this.#o), c = JSON.stringify(l2);
          a = u;
          let p2 = t.action !== "createMany" && t.action !== "createManyAndReturn", d = p2 ? this.#i?.getSingle(c) : void 0;
          d ? (ce("query plan cache hit"), s = d) : (ce("query plan cache miss"), s = this.#f(l2, c, o), p2 && this.#i?.setSingle(c, s));
        }
        try {
          ce("query plan created", s);
          let l2 = await i.execute({ plan: s, model: t.modelName, operation: t.action, placeholderValues: a, transaction: r, batchIndex: void 0, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", modelName: t.modelName, action: t.action, query: t.query } });
          return ce("query plan executed"), { data: { [t.action]: l2 } };
        } catch (l2) {
          throw this.#c(l2, JSON.stringify(t));
        }
      }
      async requestBatch(t, { transaction: r, customDataProxyFetch: n }) {
        if (t.length === 0) return [];
        let i = t[0].action, o = t[0].modelName, s = Wa(t, r), a = JSON.stringify(s), { executor: l2, queryCompiler: u } = await this.#a().catch((m) => {
          throw this.#c(m, a);
        }), c = o === void 0, p2, d = {};
        if (c) p2 = this.#g(t, a, u);
        else {
          let { parameterizedBatch: m, placeholderValues: g } = oi(s, this.#o), x2 = JSON.stringify(m);
          d = g;
          let w2 = this.#i?.getBatch(x2);
          if (w2) ce("batch query plan cache hit"), p2 = w2;
          else {
            ce("batch query plan cache miss");
            try {
              p2 = this.#g(m.batch, x2, u), this.#i?.setBatch(x2, p2);
            } catch (k2) {
              throw this.#d(k2);
            }
          }
        }
        try {
          let m;
          switch (r?.kind === "itx" && (m = r.options), p2.type) {
            case "multi": {
              if (r?.kind !== "itx") {
                let w2 = r?.options, k2 = { maxWait: w2?.maxWait ?? this.config.transactionOptions.maxWait, timeout: w2?.timeout ?? this.config.transactionOptions.timeout, isolationLevel: w2?.isolationLevel ?? this.config.transactionOptions.isolationLevel };
                m = await this.transaction("start", {}, k2);
              }
              let g = [], x2 = false;
              for (let [w2, k2] of p2.plans.entries()) try {
                let P2 = await l2.execute({ plan: k2, placeholderValues: d, model: t[w2].modelName, operation: t[w2].action, batchIndex: w2, transaction: m, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", ...t[w2] } });
                g.push({ data: { [t[w2].action]: P2 } });
              } catch (P2) {
                g.push(P2), x2 = true;
                break;
              }
              return m !== void 0 && r?.kind !== "itx" && (x2 ? await this.transaction("rollback", {}, m) : await this.transaction("commit", {}, m)), g;
            }
            case "compacted": {
              if (!t.every((w2) => w2.action === i && w2.modelName === o)) {
                let w2 = t.map((P2) => P2.action).join(", "), k2 = t.map((P2) => P2.modelName).join(", ");
                throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${w2}] and model names: [${k2}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`);
              }
              if (o === void 0) throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");
              let g = await l2.execute({ plan: p2.plan, placeholderValues: d, model: o, operation: i, batchIndex: void 0, transaction: m, customFetch: n?.(globalThis.fetch), queryInfo: { type: "compacted", action: i, modelName: o, queries: t } });
              return ms(g, p2, d).map((w2) => ({ data: { [i]: w2 } }));
            }
          }
        } catch (m) {
          throw this.#c(m, a);
        }
      }
      async apiKey() {
        let { executor: t } = await this.#a();
        return t.apiKey();
      }
      #f(t, r, n) {
        try {
          return this.#m(() => this.#h({ queries: [t], execute: /* @__PURE__ */ __name(() => n.compile(r), "execute") }));
        } catch (i) {
          throw this.#d(i);
        }
      }
      #g(t, r, n) {
        if (t.every(cl)) return { type: "multi", plans: t.map((i) => pl(i)) };
        try {
          return this.#m(() => this.#h({ queries: t, execute: /* @__PURE__ */ __name(() => n.compileBatch(r), "execute") }));
        } catch (i) {
          throw this.#d(i);
        }
      }
      #y(t) {
        switch (t) {
          case void 0:
            return;
          case "ReadUncommitted":
            return "READ UNCOMMITTED";
          case "ReadCommitted":
            return "READ COMMITTED";
          case "RepeatableRead":
            return "REPEATABLE READ";
          case "Serializable":
            return "SERIALIZABLE";
          case "Snapshot":
            return "SNAPSHOT";
          default:
            throw new F2.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``, { code: "P2023", clientVersion: this.config.clientVersion, meta: { providedIsolationLevel: t } });
        }
      }
      #h({ queries: t, execute: r }) {
        return this.tracingHelper.runInChildSpan({ name: "compile", attributes: { models: t.map((n) => n.modelName).filter((n) => n !== void 0), actions: t.map((n) => n.action) } }, r);
      }
    };
    function ul(e, t, r) {
      return el({ binaryTarget: void 0, title: t, version: e.config.clientVersion, engineVersion: "unknown", database: e.config.activeProvider, query: r });
    }
    __name(ul, "ul");
    function cl(e) {
      return e.action === "queryRaw" || e.action === "executeRaw";
    }
    __name(cl, "cl");
    function pl(e) {
      let t = e.query.arguments.query, { args: r, argTypes: n } = za(e.query.arguments.parameters);
      return { type: e.action === "queryRaw" ? "query" : "execute", args: { type: "rawSql", sql: t, args: r, argTypes: n } };
    }
    __name(pl, "pl");
    function ml(e) {
      return new jt(e);
    }
    __name(ml, "ml");
    var fl = /* @__PURE__ */ __name((e) => ({ command: e }), "fl");
    var Pl = require_dist();
    var gl = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "gl");
    var wl = require_dist();
    function tt(e) {
      try {
        return yl(e, "fast");
      } catch {
        return yl(e, "slow");
      }
    }
    __name(tt, "tt");
    function yl(e, t) {
      return JSON.stringify(e.map((r) => bl(r, t)));
    }
    __name(yl, "yl");
    function bl(e, t) {
      if (Array.isArray(e)) return e.map((r) => bl(r, t));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (Me(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (wl.Decimal.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (fm(e)) return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: Buffer.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? xl(e) : e;
    }
    __name(bl, "bl");
    function fm(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(fm, "fm");
    function xl(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(hl);
      let t = {};
      for (let r of Object.keys(e)) t[r] = hl(e[r]);
      return t;
    }
    __name(xl, "xl");
    function hl(e) {
      return typeof e == "bigint" ? e.toString() : xl(e);
    }
    __name(hl, "hl");
    var gm = /^(\s*alter\s)/i;
    var El = _("prisma:client");
    function pi(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && gm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(pi, "pi");
    var di = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (mr(r)) n = r.sql, i = { values: tt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: tt(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: tt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: tt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = gl(r), i = { values: tt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return i?.values ? El(`prisma.${e}(${n}, ${i.values})`) : El(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "di");
    var Tl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new Pl.Sql(t, r);
    } };
    var Sl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function mi(e) {
      return function(r, n) {
        let i, o = /* @__PURE__ */ __name((s = e) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= vl(r(s)) : vl(r(s));
          } catch (a) {
            return Promise.reject(a);
          }
        }, "o");
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(mi, "mi");
    function vl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(vl, "vl");
    var Al = { name: "@prisma/instrumentation-contract", version: "7.8.0", description: "Shared types and utilities for Prisma instrumentation", main: "dist/index.js", module: "dist/index.mjs", types: "dist/index.d.ts", exports: { ".": { require: { types: "./dist/index.d.ts", default: "./dist/index.js" }, import: { types: "./dist/index.d.mts", default: "./dist/index.mjs" } } }, license: "Apache-2.0", homepage: "https://www.prisma.io", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/instrumentation-contract" }, bugs: "https://github.com/prisma/prisma/issues", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", prepublishOnly: "pnpm run build", test: "vitest run" }, files: ["dist"], sideEffects: false, devDependencies: { "@opentelemetry/api": "1.9.0" }, peerDependencies: { "@opentelemetry/api": "^1.8" } };
    var hm = Al.version.split(".")[0];
    var wm = "PRISMA_INSTRUMENTATION";
    var bm = `V${hm}_PRISMA_INSTRUMENTATION`;
    var Cl = globalThis;
    function Rl() {
      let e = Cl[bm];
      return e?.helper ? e.helper : Cl[wm]?.helper;
    }
    __name(Rl, "Rl");
    var xm = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var fi = class {
      static {
        __name(this, "fi");
      }
      isEnabled() {
        return this.getTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getTracingHelper().getTraceParent(t);
      }
      dispatchEngineSpans(t) {
        return this.getTracingHelper().dispatchEngineSpans(t);
      }
      getActiveContext() {
        return this.getTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getTracingHelper().runInChildSpan(t, r);
      }
      getTracingHelper() {
        return Rl() ?? xm;
      }
    };
    function kl() {
      return new fi();
    }
    __name(kl, "kl");
    function Il(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(Il, "Il");
    function Ol(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(Ol, "Ol");
    var Dl = require_dist();
    function yi(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(gi(e.query.arguments)), t.push(gi(e.query.selection)), t.join("");
    }
    __name(yi, "yi");
    function gi(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${gi(n)})` : r;
      }).join(" ")})`;
    }
    __name(gi, "gi");
    var Em = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function hi(e) {
      return Em[e];
    }
    __name(hi, "hi");
    var Jr = class {
      static {
        __name(this, "Jr");
      }
      constructor(t) {
        this.options = t;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var Nl = require_dist();
    function Ie(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new Nl.Decimal(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Ie("bigint", r));
        case "bytes-array":
          return t.map((r) => Ie("bytes", r));
        case "decimal-array":
          return t.map((r) => Ie("decimal", r));
        case "datetime-array":
          return t.map((r) => Ie("datetime", r));
        case "date-array":
          return t.map((r) => Ie("date", r));
        case "time-array":
          return t.map((r) => Ie("time", r));
        default:
          return t;
      }
    }
    __name(Ie, "Ie");
    function Hr(e) {
      let t = [], r = Pm(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = Ie(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(Hr, "Hr");
    function Pm(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    __name(Pm, "Pm");
    var Tm = _("prisma:client:request_handler");
    var zr = class {
      static {
        __name(this, "zr");
      }
      client;
      dataloader;
      logEmitter;
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Jr({ batchLoader: ts(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p2) => p2.protocolQuery), l2 = this.client._tracingHelper.getTraceParent(s), u = n.some((p2) => hi(p2.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l2, transaction: Sm(o), containsWrite: u, customDataProxyFetch: i })).map((p2, d) => {
            if (p2 instanceof Error) return p2;
            try {
              return this.mapQueryEngineResult(n[d], p2);
            } catch (m) {
              return m;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? Ml(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: hi(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => {
          if (n.transaction?.kind === "itx") {
            let i = yi(n.protocolQuery);
            return `itx-${n.transaction.id}${i ? `-${i}` : ""}`;
          }
          return n.transaction?.id ? `transaction-${n.transaction.id}` : yi(n.protocolQuery);
        }, "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Tm(t), vm(t, i)) throw t;
        if (t instanceof b2.PrismaClientKnownRequestError && Am(t)) {
          let u = Fl(t.meta);
          ar({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l2 = t.message;
        if (n && (l2 = Xt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l2 })), l2 = this.sanitizeMessage(l2), t.code) {
          let u = s ? { modelName: s, ...t.meta } : t.meta;
          throw new b2.PrismaClientKnownRequestError(l2, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new b2.PrismaClientRustPanicError(l2, this.client._clientVersion);
          if (t instanceof b2.PrismaClientUnknownRequestError) throw new b2.PrismaClientUnknownRequestError(l2, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof b2.PrismaClientInitializationError) throw new b2.PrismaClientInitializationError(l2, this.client._clientVersion);
          if (t instanceof b2.PrismaClientRustPanicError) throw new b2.PrismaClientRustPanicError(l2, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? De(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = wn(o, s), l2 = i === "queryRaw" ? Hr(a) : Z(a);
        return n ? n(l2) : l2;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Sm(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel, maxWait: e.maxWait, timeout: e.timeout } };
        if (e.kind === "itx") return { kind: "itx", options: Ml(e) };
        ae(e, "Unknown transaction kind");
      }
    }
    __name(Sm, "Sm");
    function Ml(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(Ml, "Ml");
    function vm(e, t) {
      return (0, Dl.hasBatchIndex)(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(vm, "vm");
    function Am(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(Am, "Am");
    function Fl(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Fl) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(Fl, "Fl");
    var wi = $r;
    var ql = B(un());
    var S2 = class extends Error {
      static {
        __name(this, "S");
      }
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    gt(S2, "PrismaClientConstructorValidationError");
    var _l = ["errorFormat", "adapter", "accelerateUrl", "log", "transactionOptions", "omit", "comments", "queryPlanCacheMaxSize", "__internal"];
    var $l = ["pretty", "colorless", "minimal"];
    var Ll = ["info", "query", "warn", "error"];
    var Cm = { adapter: /* @__PURE__ */ __name(() => {
    }, "adapter"), accelerateUrl: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (typeof e != "string") throw new S2(`Invalid value ${JSON.stringify(e)} for "accelerateUrl" provided to PrismaClient constructor.`);
        if (e.trim().length === 0) throw new S2('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.');
      }
    }, "accelerateUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new S2(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!$l.includes(e)) {
          let t = Ut(e, $l);
          throw new S2(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new S2(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Ll.includes(r)) {
          let n = Ut(r, Ll);
          throw new S2(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Ut(i, o);
            throw new S2(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new S2(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new S2(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new S2(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, t) => {
      if (typeof e != "object") throw new S2('"omit" option is expected to be an object.');
      if (e === null) throw new S2('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Im(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l2 = o.fields.find((u) => u.name === s);
          if (!l2) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l2.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new S2(Om(e, r));
    }, "omit"), queryPlanCacheMaxSize: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (typeof e != "number") throw new S2(`Invalid value ${JSON.stringify(e)} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected a number.`);
        if (!Number.isInteger(e)) throw new S2(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected an integer.`);
        if (e < 0) throw new S2(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Cache size needs to be greater or equal to 0.`);
      }
    }, "queryPlanCacheMaxSize"), comments: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (!Array.isArray(e)) throw new S2(`Invalid value ${JSON.stringify(e)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);
        for (let t = 0; t < e.length; t++) if (typeof e[t] != "function") throw new S2(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`);
      }
    }, "comments"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new S2(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = Ut(r, t);
        throw new S2(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function Rm(e) {
      let t = e.adapter !== void 0, r = e.accelerateUrl !== void 0;
      if (t && r) throw new S2('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');
      if (!t && !r) throw new S2('Using engine type "client" requires either "adapter" or "accelerateUrl" to be provided to PrismaClient constructor.');
    }
    __name(Rm, "Rm");
    function jl(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!_l.includes(r)) {
          let i = Ut(r, _l);
          throw new S2(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Cm[r](n, t);
      }
      Rm(e);
    }
    __name(jl, "jl");
    function Ut(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = km(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(Ut, "Ut");
    function km(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, ql.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(km, "km");
    function Im(e, t) {
      return Vl(t.models, e) ?? Vl(t.types, e);
    }
    __name(Im, "Im");
    function Vl(e, t) {
      let r = Object.keys(e).find((n) => de(n) === t);
      if (r) return e[r];
    }
    __name(Vl, "Vl");
    function Om(e, t) {
      let r = Be(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = sr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(Om, "Om");
    var Ul = require_dist();
    function Bl(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), l2 = /* @__PURE__ */ __name((u) => {
          o || (o = true, r(u));
        }, "l");
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!(0, Ul.hasBatchIndex)(c)) {
            l2(c);
            return;
          }
          c.batchRequestIdx === u ? l2(c) : (i || (i = c), a());
        });
      });
    }
    __name(Bl, "Bl");
    var rt = _("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Nm = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var Wl = Symbol.for("prisma.client.transaction.scope_context");
    function Ql(e) {
      let r = e[Wl];
      if (r === void 0) return { kind: "top-level" };
      if (Dm(r)) return r;
      throw new Error("Internal error: inconsistent transaction scope context.");
    }
    __name(Ql, "Ql");
    function Dm(e) {
      if (typeof e != "object" || e === null) return false;
      let t = e;
      return t.kind === "nested" && typeof t.txId == "string" && typeof t.scopeId == "string" && Mm(t.scopeState);
    }
    __name(Dm, "Dm");
    function Mm(e) {
      return typeof e != "object" || e === null ? false : Array.isArray(e.stack);
    }
    __name(Mm, "Mm");
    function Fm() {
      return typeof globalThis.crypto?.randomUUID == "function" ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }
    __name(Fm, "Fm");
    var _m = { id: 0, nextId() {
      return ++this.id;
    } };
    function Kl(e) {
      class t {
        static {
          __name(this, "t");
        }
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = mi();
        constructor(n) {
          if (!n) throw new b2.PrismaClientInitializationError("`PrismaClient` needs to be constructed with a non-empty, valid `PrismaClientOptions`:\n\n```\nnew PrismaClient({\n  ...\n})\n```\n\nor\n\n```\nconstructor() {\n  super({ ... });\n}\n```\n          ", wi);
          e = n.__internal?.configOverride?.(e) ?? e, jl(n, e);
          let i = new Gl.EventEmitter().on("error", () => {
          });
          this._extensions = Qe.empty(), this._previewFeatures = e.previewFeatures, this._clientVersion = e.clientVersion ?? wi, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = kl();
          let o;
          if (n.adapter) {
            o = n.adapter;
            let s = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
            if (o.provider !== s) throw new b2.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`, this._clientVersion);
          }
          try {
            let s = n ?? {}, l2 = (s.__internal ?? {}).debug === true;
            if (l2 && _.enable("prisma:client"), s.errorFormat ? this._errorFormat = s.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { enableDebugLogs: l2, logLevel: s.log && Ol(s.log), logQueries: s.log && !!(typeof s.log == "string" ? s.log === "query" : s.log.find((u) => typeof u == "string" ? u === "query" : u.level === "query")), compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: s.transactionOptions?.maxWait ?? 2e3, timeout: s.transactionOptions?.timeout ?? 5e3, isolationLevel: s.transactionOptions?.isolationLevel }, logEmitter: i, adapter: o, accelerateUrl: s.accelerateUrl, sqlCommenters: s.comments, parameterizationSchema: e.parameterizationSchema, runtimeDataModel: e.runtimeDataModel, queryPlanCacheMaxSize: n.queryPlanCacheMaxSize }, this._accelerateEngineConfig = Object.create(this._engineConfig), this._accelerateEngineConfig.accelerateUtils = { resolveDatasourceUrl: /* @__PURE__ */ __name(() => {
              if (s.accelerateUrl) return s.accelerateUrl;
              throw new b2.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`, e.clientVersion);
            }, "resolveDatasourceUrl") }, rt("clientVersion", e.clientVersion), this._engine = ml(this._engineConfig), this._requestHandler = new zr(this, i), s.log) for (let u of s.log) {
              let c = typeof u == "string" ? u : u.emit === "stdout" ? u.level : null;
              c && this.$on(c, (p2) => {
                mt.log(`${mt.tags[c] ?? ""}`, p2.message || p2.query);
              });
            }
          } catch (s) {
            throw s.clientVersion = this._clientVersion, s;
          }
          return this._appliedParent = vt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Mi();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: di({ clientMethod: i, activeProvider: a }), callsite: fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Jl(n, i);
              return pi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new b2.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (pi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new b2.PrismaClientValidationError(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: fl, callsite: fe(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: di({ clientMethod: i, activeProvider: a }), callsite: fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Jl(n, i));
            throw new b2.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new b2.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = _m.nextId(), s = Il(n.length), a = n.map((l2, u) => {
            if (l2?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p2 = { kind: "batch", id: o, index: u, isolationLevel: c, maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, lock: s };
            return l2.requestTransaction?.(p2) ?? l2;
          });
          return Bl(a);
        }
        async _transactionWithCallback({ callback: n, options: i = {} }) {
          let o = Ql(this), s = o.kind === "nested", a = s ? o.scopeState : { stack: [] }, l2 = a.stack, u = Fm();
          if (s) {
            if (l2.at(-1) !== o.scopeId) throw new Error("Concurrent nested transactions are not supported");
            i.newTxId = o.txId;
          }
          l2.push(u);
          let c = { traceparent: this._tracingHelper.getTraceParent() }, p2 = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, newTxId: i.newTxId }, d;
          try {
            d = await this._engine.transaction("start", c, p2);
          } catch (g) {
            throw l2.at(-1) === u && l2.pop(), g;
          }
          let m;
          try {
            let g = { kind: "itx", ...d };
            if (m = await n(this._createItxClient(g, u, a)), s) {
              if (l2.at(-1) !== u) throw new Error("Nested transactions must be closed in reverse order of creation.");
            } else if (l2.length !== 1) throw new Error("Cannot close transaction while a nested transaction is still active.");
            await this._engine.transaction("commit", c, d);
          } catch (g) {
            let w2 = l2.at(-1) !== u ? Math.max(1, l2.length) : 1;
            for (let k2 = 0; k2 < w2; k2++) await this._engine.transaction("rollback", c, d).catch((P2) => {
              rt("rollback attempt %d/%d failed: %O", k2 + 1, w2, P2);
            });
            throw g;
          } finally {
            l2.at(-1) === u ? l2.pop() : l2.length = 0;
          }
          return m;
        }
        _createItxClient(n, i, o) {
          let s = { kind: "nested", txId: n.id, scopeId: i, scopeState: o };
          return W(vt(W(Jo(this), [$2("_appliedParent", () => this._appliedParent._createItxClient(n, i, o)), $2("_createPrismaPromise", () => mi(n)), $2(Wl, () => s)])), [Je(Ko)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : e.activeProvider === "mongodb" && Ql(this).kind === "nested" ? o = /* @__PURE__ */ __name(() => {
            throw new b2.PrismaClientValidationError(`The ${e.activeProvider} provider does not support nested transactions`, { clientVersion: this._clientVersion });
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Nm, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = /* @__PURE__ */ __name(async (l2) => {
            let { runInTransaction: u, args: c, ...p2 } = l2, d = { ...n, ...p2 };
            c && (d.args = i.middlewareArgsToRequestArgs(c)), n.transaction !== void 0 && u === false && delete d.transaction;
            let m = await es(this, d);
            if (!d.model) return m;
            let g = os({ dataPath: d.dataPath, modelName: d.model, args: d.args, runtimeDataModel: this._runtimeDataModel });
            return Wo({ result: m, modelName: g.modelName, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit });
          }, "a");
          return this._tracingHelper.runInChildSpan(s.operation, () => new zl.AsyncResource("prisma-client-request").runInAsyncScope(() => a(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l2, argsMapper: u, transaction: c, unpacker: p2, otelParentCtx: d, customDataProxyFetch: m }) {
          try {
            n = u ? u(n) : n;
            let g = { name: "serialize" }, x2 = this._tracingHelper.runInChildSpan(g, () => pr({ modelName: l2, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return _.enabled("prisma:client") && (rt("Prisma Client call:"), rt(`prisma.${i}(${Mo(n)})`), rt("Generated request:"), rt(JSON.stringify(x2, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: x2, modelName: l2, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p2, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: m });
          } catch (g) {
            throw g.clientVersion = this._clientVersion, g;
          }
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $extends = Ho;
      }
      return t;
    }
    __name(Kl, "Kl");
    function Jl(e, t) {
      return $m(e) ? [new Hl.Sql(e, t), Tl] : [e, Sl];
    }
    __name(Jl, "Jl");
    function $m(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name($m, "$m");
    var Lm = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Zl(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!Lm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(Zl, "Zl");
    var Vm = /* @__PURE__ */ __name(() => globalThis.process?.release?.name === "node", "Vm");
    var qm = /* @__PURE__ */ __name(() => !!globalThis.Bun || !!globalThis.process?.versions?.bun, "qm");
    var jm = /* @__PURE__ */ __name(() => !!globalThis.Deno, "jm");
    var Um = /* @__PURE__ */ __name(() => typeof globalThis.Netlify == "object", "Um");
    var Bm = /* @__PURE__ */ __name(() => typeof globalThis.EdgeRuntime == "object", "Bm");
    var Qm = /* @__PURE__ */ __name(() => globalThis.navigator?.userAgent === "Cloudflare-Workers", "Qm");
    function Jm() {
      return [[Um, "netlify"], [Bm, "edge-light"], [Qm, "workerd"], [jm, "deno"], [qm, "bun"], [Vm, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
    }
    __name(Jm, "Jm");
    var Hm = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Yl() {
      let e = Jm();
      return { id: e, prettyName: Hm[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Yl, "Yl");
    var b2 = require_dist();
    var oe = require_dist();
    var O = require_dist();
    var Xl = require_dist();
  }
});

// node_modules/postgres-array/index.js
var require_postgres_array = __commonJS({
  "node_modules/postgres-array/index.js"(exports) {
    "use strict";
    init_esm();
    exports.parse = function(source, transform) {
      return new ArrayParser(source, transform).parse();
    };
    var ArrayParser = class _ArrayParser {
      static {
        __name(this, "ArrayParser");
      }
      constructor(source, transform) {
        this.source = source;
        this.transform = transform || identity;
        this.position = 0;
        this.entries = [];
        this.recorded = [];
        this.dimension = 0;
      }
      isEof() {
        return this.position >= this.source.length;
      }
      nextCharacter() {
        var character = this.source[this.position++];
        if (character === "\\") {
          return {
            value: this.source[this.position++],
            escaped: true
          };
        }
        return {
          value: character,
          escaped: false
        };
      }
      record(character) {
        this.recorded.push(character);
      }
      newEntry(includeEmpty) {
        var entry;
        if (this.recorded.length > 0 || includeEmpty) {
          entry = this.recorded.join("");
          if (entry === "NULL" && !includeEmpty) {
            entry = null;
          }
          if (entry !== null) entry = this.transform(entry);
          this.entries.push(entry);
          this.recorded = [];
        }
      }
      consumeDimensions() {
        if (this.source[0] === "[") {
          while (!this.isEof()) {
            var char = this.nextCharacter();
            if (char.value === "=") break;
          }
        }
      }
      parse(nested) {
        var character, parser, quote;
        this.consumeDimensions();
        while (!this.isEof()) {
          character = this.nextCharacter();
          if (character.value === "{" && !quote) {
            this.dimension++;
            if (this.dimension > 1) {
              parser = new _ArrayParser(this.source.substr(this.position - 1), this.transform);
              this.entries.push(parser.parse(true));
              this.position += parser.position - 2;
            }
          } else if (character.value === "}" && !quote) {
            this.dimension--;
            if (!this.dimension) {
              this.newEntry();
              if (nested) return this.entries;
            }
          } else if (character.value === '"' && !character.escaped) {
            if (quote) this.newEntry(true);
            quote = !quote;
          } else if (character.value === "," && !quote) {
            this.newEntry();
          } else {
            this.record(character.value);
          }
        }
        if (this.dimension !== 0) {
          throw new Error("array dimension not balanced");
        }
        return this.entries;
      }
    };
    function identity(value) {
      return value;
    }
    __name(identity, "identity");
  }
});

// node_modules/pg-types/lib/arrayParser.js
var require_arrayParser = __commonJS({
  "node_modules/pg-types/lib/arrayParser.js"(exports, module) {
    init_esm();
    var array = require_postgres_array();
    module.exports = {
      create: /* @__PURE__ */ __name(function(source, transform) {
        return {
          parse: /* @__PURE__ */ __name(function() {
            return array.parse(source, transform);
          }, "parse")
        };
      }, "create")
    };
  }
});

// node_modules/postgres-date/index.js
var require_postgres_date = __commonJS({
  "node_modules/postgres-date/index.js"(exports, module) {
    "use strict";
    init_esm();
    var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/;
    var DATE = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/;
    var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/;
    var INFINITY = /^-?infinity$/;
    module.exports = /* @__PURE__ */ __name(function parseDate(isoDate) {
      if (INFINITY.test(isoDate)) {
        return Number(isoDate.replace("i", "I"));
      }
      var matches = DATE_TIME.exec(isoDate);
      if (!matches) {
        return getDate(isoDate) || null;
      }
      var isBC = !!matches[8];
      var year = parseInt(matches[1], 10);
      if (isBC) {
        year = bcYearToNegativeYear(year);
      }
      var month = parseInt(matches[2], 10) - 1;
      var day = matches[3];
      var hour = parseInt(matches[4], 10);
      var minute = parseInt(matches[5], 10);
      var second = parseInt(matches[6], 10);
      var ms = matches[7];
      ms = ms ? 1e3 * parseFloat(ms) : 0;
      var date;
      var offset = timeZoneOffset(isoDate);
      if (offset != null) {
        date = new Date(Date.UTC(year, month, day, hour, minute, second, ms));
        if (is0To99(year)) {
          date.setUTCFullYear(year);
        }
        if (offset !== 0) {
          date.setTime(date.getTime() - offset);
        }
      } else {
        date = new Date(year, month, day, hour, minute, second, ms);
        if (is0To99(year)) {
          date.setFullYear(year);
        }
      }
      return date;
    }, "parseDate");
    function getDate(isoDate) {
      var matches = DATE.exec(isoDate);
      if (!matches) {
        return;
      }
      var year = parseInt(matches[1], 10);
      var isBC = !!matches[4];
      if (isBC) {
        year = bcYearToNegativeYear(year);
      }
      var month = parseInt(matches[2], 10) - 1;
      var day = matches[3];
      var date = new Date(year, month, day);
      if (is0To99(year)) {
        date.setFullYear(year);
      }
      return date;
    }
    __name(getDate, "getDate");
    function timeZoneOffset(isoDate) {
      if (isoDate.endsWith("+00")) {
        return 0;
      }
      var zone = TIME_ZONE.exec(isoDate.split(" ")[1]);
      if (!zone) return;
      var type = zone[1];
      if (type === "Z") {
        return 0;
      }
      var sign = type === "-" ? -1 : 1;
      var offset = parseInt(zone[2], 10) * 3600 + parseInt(zone[3] || 0, 10) * 60 + parseInt(zone[4] || 0, 10);
      return offset * sign * 1e3;
    }
    __name(timeZoneOffset, "timeZoneOffset");
    function bcYearToNegativeYear(year) {
      return -(year - 1);
    }
    __name(bcYearToNegativeYear, "bcYearToNegativeYear");
    function is0To99(num) {
      return num >= 0 && num < 100;
    }
    __name(is0To99, "is0To99");
  }
});

// node_modules/xtend/mutable.js
var require_mutable = __commonJS({
  "node_modules/xtend/mutable.js"(exports, module) {
    init_esm();
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
    __name(extend, "extend");
  }
});

// node_modules/postgres-interval/index.js
var require_postgres_interval = __commonJS({
  "node_modules/postgres-interval/index.js"(exports, module) {
    "use strict";
    init_esm();
    var extend = require_mutable();
    module.exports = PostgresInterval;
    function PostgresInterval(raw3) {
      if (!(this instanceof PostgresInterval)) {
        return new PostgresInterval(raw3);
      }
      extend(this, parse(raw3));
    }
    __name(PostgresInterval, "PostgresInterval");
    var properties = ["seconds", "minutes", "hours", "days", "months", "years"];
    PostgresInterval.prototype.toPostgres = function() {
      var filtered = properties.filter(this.hasOwnProperty, this);
      if (this.milliseconds && filtered.indexOf("seconds") < 0) {
        filtered.push("seconds");
      }
      if (filtered.length === 0) return "0";
      return filtered.map(function(property) {
        var value = this[property] || 0;
        if (property === "seconds" && this.milliseconds) {
          value = (value + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, "");
        }
        return value + " " + property;
      }, this).join(" ");
    };
    var propertiesISOEquivalent = {
      years: "Y",
      months: "M",
      days: "D",
      hours: "H",
      minutes: "M",
      seconds: "S"
    };
    var dateProperties = ["years", "months", "days"];
    var timeProperties = ["hours", "minutes", "seconds"];
    PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function() {
      var datePart = dateProperties.map(buildProperty, this).join("");
      var timePart = timeProperties.map(buildProperty, this).join("");
      return "P" + datePart + "T" + timePart;
      function buildProperty(property) {
        var value = this[property] || 0;
        if (property === "seconds" && this.milliseconds) {
          value = (value + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "");
        }
        return value + propertiesISOEquivalent[property];
      }
      __name(buildProperty, "buildProperty");
    };
    var NUMBER = "([+-]?\\d+)";
    var YEAR = NUMBER + "\\s+years?";
    var MONTH = NUMBER + "\\s+mons?";
    var DAY = NUMBER + "\\s+days?";
    var TIME = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?";
    var INTERVAL = new RegExp([YEAR, MONTH, DAY, TIME].map(function(regexString) {
      return "(" + regexString + ")?";
    }).join("\\s*"));
    var positions = {
      years: 2,
      months: 4,
      days: 6,
      hours: 9,
      minutes: 10,
      seconds: 11,
      milliseconds: 12
    };
    var negatives = ["hours", "minutes", "seconds", "milliseconds"];
    function parseMilliseconds(fraction) {
      var microseconds = fraction + "000000".slice(fraction.length);
      return parseInt(microseconds, 10) / 1e3;
    }
    __name(parseMilliseconds, "parseMilliseconds");
    function parse(interval) {
      if (!interval) return {};
      var matches = INTERVAL.exec(interval);
      var isNegative = matches[8] === "-";
      return Object.keys(positions).reduce(function(parsed, property) {
        var position = positions[property];
        var value = matches[position];
        if (!value) return parsed;
        value = property === "milliseconds" ? parseMilliseconds(value) : parseInt(value, 10);
        if (!value) return parsed;
        if (isNegative && ~negatives.indexOf(property)) {
          value *= -1;
        }
        parsed[property] = value;
        return parsed;
      }, {});
    }
    __name(parse, "parse");
  }
});

// node_modules/postgres-bytea/index.js
var require_postgres_bytea = __commonJS({
  "node_modules/postgres-bytea/index.js"(exports, module) {
    "use strict";
    init_esm();
    var bufferFrom = Buffer.from || Buffer;
    module.exports = /* @__PURE__ */ __name(function parseBytea(input) {
      if (/^\\x/.test(input)) {
        return bufferFrom(input.substr(2), "hex");
      }
      var output = "";
      var i = 0;
      while (i < input.length) {
        if (input[i] !== "\\") {
          output += input[i];
          ++i;
        } else {
          if (/[0-7]{3}/.test(input.substr(i + 1, 3))) {
            output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8));
            i += 4;
          } else {
            var backslashes = 1;
            while (i + backslashes < input.length && input[i + backslashes] === "\\") {
              backslashes++;
            }
            for (var k2 = 0; k2 < Math.floor(backslashes / 2); ++k2) {
              output += "\\";
            }
            i += Math.floor(backslashes / 2) * 2;
          }
        }
      }
      return bufferFrom(output, "binary");
    }, "parseBytea");
  }
});

// node_modules/pg-types/lib/textParsers.js
var require_textParsers = __commonJS({
  "node_modules/pg-types/lib/textParsers.js"(exports, module) {
    init_esm();
    var array = require_postgres_array();
    var arrayParser = require_arrayParser();
    var parseDate = require_postgres_date();
    var parseInterval = require_postgres_interval();
    var parseByteA = require_postgres_bytea();
    function allowNull(fn) {
      return /* @__PURE__ */ __name(function nullAllowed(value) {
        if (value === null) return value;
        return fn(value);
      }, "nullAllowed");
    }
    __name(allowNull, "allowNull");
    function parseBool(value) {
      if (value === null) return value;
      return value === "TRUE" || value === "t" || value === "true" || value === "y" || value === "yes" || value === "on" || value === "1";
    }
    __name(parseBool, "parseBool");
    function parseBoolArray(value) {
      if (!value) return null;
      return array.parse(value, parseBool);
    }
    __name(parseBoolArray, "parseBoolArray");
    function parseBaseTenInt(string) {
      return parseInt(string, 10);
    }
    __name(parseBaseTenInt, "parseBaseTenInt");
    function parseIntegerArray(value) {
      if (!value) return null;
      return array.parse(value, allowNull(parseBaseTenInt));
    }
    __name(parseIntegerArray, "parseIntegerArray");
    function parseBigIntegerArray(value) {
      if (!value) return null;
      return array.parse(value, allowNull(function(entry) {
        return parseBigInteger(entry).trim();
      }));
    }
    __name(parseBigIntegerArray, "parseBigIntegerArray");
    var parsePointArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parsePoint(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parsePointArray");
    var parseFloatArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseFloat(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parseFloatArray");
    var parseStringArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value);
      return p2.parse();
    }, "parseStringArray");
    var parseDateArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseDate(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parseDateArray");
    var parseIntervalArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseInterval(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parseIntervalArray");
    var parseByteAArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      return array.parse(value, allowNull(parseByteA));
    }, "parseByteAArray");
    var parseInteger = /* @__PURE__ */ __name(function(value) {
      return parseInt(value, 10);
    }, "parseInteger");
    var parseBigInteger = /* @__PURE__ */ __name(function(value) {
      var valStr = String(value);
      if (/^\d+$/.test(valStr)) {
        return valStr;
      }
      return value;
    }, "parseBigInteger");
    var parseJsonArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      return array.parse(value, allowNull(JSON.parse));
    }, "parseJsonArray");
    var parsePoint = /* @__PURE__ */ __name(function(value) {
      if (value[0] !== "(") {
        return null;
      }
      value = value.substring(1, value.length - 1).split(",");
      return {
        x: parseFloat(value[0]),
        y: parseFloat(value[1])
      };
    }, "parsePoint");
    var parseCircle = /* @__PURE__ */ __name(function(value) {
      if (value[0] !== "<" && value[1] !== "(") {
        return null;
      }
      var point = "(";
      var radius = "";
      var pointParsed = false;
      for (var i = 2; i < value.length - 1; i++) {
        if (!pointParsed) {
          point += value[i];
        }
        if (value[i] === ")") {
          pointParsed = true;
          continue;
        } else if (!pointParsed) {
          continue;
        }
        if (value[i] === ",") {
          continue;
        }
        radius += value[i];
      }
      var result = parsePoint(point);
      result.radius = parseFloat(radius);
      return result;
    }, "parseCircle");
    var init2 = /* @__PURE__ */ __name(function(register) {
      register(20, parseBigInteger);
      register(21, parseInteger);
      register(23, parseInteger);
      register(26, parseInteger);
      register(700, parseFloat);
      register(701, parseFloat);
      register(16, parseBool);
      register(1082, parseDate);
      register(1114, parseDate);
      register(1184, parseDate);
      register(600, parsePoint);
      register(651, parseStringArray);
      register(718, parseCircle);
      register(1e3, parseBoolArray);
      register(1001, parseByteAArray);
      register(1005, parseIntegerArray);
      register(1007, parseIntegerArray);
      register(1028, parseIntegerArray);
      register(1016, parseBigIntegerArray);
      register(1017, parsePointArray);
      register(1021, parseFloatArray);
      register(1022, parseFloatArray);
      register(1231, parseFloatArray);
      register(1014, parseStringArray);
      register(1015, parseStringArray);
      register(1008, parseStringArray);
      register(1009, parseStringArray);
      register(1040, parseStringArray);
      register(1041, parseStringArray);
      register(1115, parseDateArray);
      register(1182, parseDateArray);
      register(1185, parseDateArray);
      register(1186, parseInterval);
      register(1187, parseIntervalArray);
      register(17, parseByteA);
      register(114, JSON.parse.bind(JSON));
      register(3802, JSON.parse.bind(JSON));
      register(199, parseJsonArray);
      register(3807, parseJsonArray);
      register(3907, parseStringArray);
      register(2951, parseStringArray);
      register(791, parseStringArray);
      register(1183, parseStringArray);
      register(1270, parseStringArray);
    }, "init");
    module.exports = {
      init: init2
    };
  }
});

// node_modules/pg-int8/index.js
var require_pg_int8 = __commonJS({
  "node_modules/pg-int8/index.js"(exports, module) {
    "use strict";
    init_esm();
    var BASE = 1e6;
    function readInt8(buffer) {
      var high = buffer.readInt32BE(0);
      var low = buffer.readUInt32BE(4);
      var sign = "";
      if (high < 0) {
        high = ~high + (low === 0);
        low = ~low + 1 >>> 0;
        sign = "-";
      }
      var result = "";
      var carry;
      var t;
      var digits;
      var pad;
      var l2;
      var i;
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l2 = 6 - digits.length;
        for (i = 0; i < l2; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l2 = 6 - digits.length;
        for (i = 0; i < l2; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l2 = 6 - digits.length;
        for (i = 0; i < l2; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        t = 4294967296 * carry + low;
        digits = "" + t % BASE;
        return sign + digits + result;
      }
    }
    __name(readInt8, "readInt8");
    module.exports = readInt8;
  }
});

// node_modules/pg-types/lib/binaryParsers.js
var require_binaryParsers = __commonJS({
  "node_modules/pg-types/lib/binaryParsers.js"(exports, module) {
    init_esm();
    var parseInt64 = require_pg_int8();
    var parseBits = /* @__PURE__ */ __name(function(data, bits, offset, invert, callback) {
      offset = offset || 0;
      invert = invert || false;
      callback = callback || function(lastValue, newValue, bits2) {
        return lastValue * Math.pow(2, bits2) + newValue;
      };
      var offsetBytes = offset >> 3;
      var inv = /* @__PURE__ */ __name(function(value) {
        if (invert) {
          return ~value & 255;
        }
        return value;
      }, "inv");
      var mask = 255;
      var firstBits = 8 - offset % 8;
      if (bits < firstBits) {
        mask = 255 << 8 - bits & 255;
        firstBits = bits;
      }
      if (offset) {
        mask = mask >> offset % 8;
      }
      var result = 0;
      if (offset % 8 + bits >= 8) {
        result = callback(0, inv(data[offsetBytes]) & mask, firstBits);
      }
      var bytes = bits + offset >> 3;
      for (var i = offsetBytes + 1; i < bytes; i++) {
        result = callback(result, inv(data[i]), 8);
      }
      var lastBits = (bits + offset) % 8;
      if (lastBits > 0) {
        result = callback(result, inv(data[bytes]) >> 8 - lastBits, lastBits);
      }
      return result;
    }, "parseBits");
    var parseFloatFromBits = /* @__PURE__ */ __name(function(data, precisionBits, exponentBits) {
      var bias = Math.pow(2, exponentBits - 1) - 1;
      var sign = parseBits(data, 1);
      var exponent = parseBits(data, exponentBits, 1);
      if (exponent === 0) {
        return 0;
      }
      var precisionBitsCounter = 1;
      var parsePrecisionBits = /* @__PURE__ */ __name(function(lastValue, newValue, bits) {
        if (lastValue === 0) {
          lastValue = 1;
        }
        for (var i = 1; i <= bits; i++) {
          precisionBitsCounter /= 2;
          if ((newValue & 1 << bits - i) > 0) {
            lastValue += precisionBitsCounter;
          }
        }
        return lastValue;
      }, "parsePrecisionBits");
      var mantissa = parseBits(data, precisionBits, exponentBits + 1, false, parsePrecisionBits);
      if (exponent == Math.pow(2, exponentBits + 1) - 1) {
        if (mantissa === 0) {
          return sign === 0 ? Infinity : -Infinity;
        }
        return NaN;
      }
      return (sign === 0 ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
    }, "parseFloatFromBits");
    var parseInt16 = /* @__PURE__ */ __name(function(value) {
      if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 15, 1, true) + 1);
      }
      return parseBits(value, 15, 1);
    }, "parseInt16");
    var parseInt32 = /* @__PURE__ */ __name(function(value) {
      if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 31, 1, true) + 1);
      }
      return parseBits(value, 31, 1);
    }, "parseInt32");
    var parseFloat32 = /* @__PURE__ */ __name(function(value) {
      return parseFloatFromBits(value, 23, 8);
    }, "parseFloat32");
    var parseFloat64 = /* @__PURE__ */ __name(function(value) {
      return parseFloatFromBits(value, 52, 11);
    }, "parseFloat64");
    var parseNumeric = /* @__PURE__ */ __name(function(value) {
      var sign = parseBits(value, 16, 32);
      if (sign == 49152) {
        return NaN;
      }
      var weight = Math.pow(1e4, parseBits(value, 16, 16));
      var result = 0;
      var digits = [];
      var ndigits = parseBits(value, 16);
      for (var i = 0; i < ndigits; i++) {
        result += parseBits(value, 16, 64 + 16 * i) * weight;
        weight /= 1e4;
      }
      var scale = Math.pow(10, parseBits(value, 16, 48));
      return (sign === 0 ? 1 : -1) * Math.round(result * scale) / scale;
    }, "parseNumeric");
    var parseDate = /* @__PURE__ */ __name(function(isUTC, value) {
      var sign = parseBits(value, 1);
      var rawValue = parseBits(value, 63, 1);
      var result = new Date((sign === 0 ? 1 : -1) * rawValue / 1e3 + 9466848e5);
      if (!isUTC) {
        result.setTime(result.getTime() + result.getTimezoneOffset() * 6e4);
      }
      result.usec = rawValue % 1e3;
      result.getMicroSeconds = function() {
        return this.usec;
      };
      result.setMicroSeconds = function(value2) {
        this.usec = value2;
      };
      result.getUTCMicroSeconds = function() {
        return this.usec;
      };
      return result;
    }, "parseDate");
    var parseArray2 = /* @__PURE__ */ __name(function(value) {
      var dim2 = parseBits(value, 32);
      var flags = parseBits(value, 32, 32);
      var elementType = parseBits(value, 32, 64);
      var offset = 96;
      var dims = [];
      for (var i = 0; i < dim2; i++) {
        dims[i] = parseBits(value, 32, offset);
        offset += 32;
        offset += 32;
      }
      var parseElement = /* @__PURE__ */ __name(function(elementType2) {
        var length = parseBits(value, 32, offset);
        offset += 32;
        if (length == 4294967295) {
          return null;
        }
        var result;
        if (elementType2 == 23 || elementType2 == 20) {
          result = parseBits(value, length * 8, offset);
          offset += length * 8;
          return result;
        } else if (elementType2 == 25) {
          result = value.toString(this.encoding, offset >> 3, (offset += length << 3) >> 3);
          return result;
        } else {
          console.log("ERROR: ElementType not implemented: " + elementType2);
        }
      }, "parseElement");
      var parse = /* @__PURE__ */ __name(function(dimension, elementType2) {
        var array = [];
        var i2;
        if (dimension.length > 1) {
          var count = dimension.shift();
          for (i2 = 0; i2 < count; i2++) {
            array[i2] = parse(dimension, elementType2);
          }
          dimension.unshift(count);
        } else {
          for (i2 = 0; i2 < dimension[0]; i2++) {
            array[i2] = parseElement(elementType2);
          }
        }
        return array;
      }, "parse");
      return parse(dims, elementType);
    }, "parseArray");
    var parseText = /* @__PURE__ */ __name(function(value) {
      return value.toString("utf8");
    }, "parseText");
    var parseBool = /* @__PURE__ */ __name(function(value) {
      if (value === null) return null;
      return parseBits(value, 8) > 0;
    }, "parseBool");
    var init2 = /* @__PURE__ */ __name(function(register) {
      register(20, parseInt64);
      register(21, parseInt16);
      register(23, parseInt32);
      register(26, parseInt32);
      register(1700, parseNumeric);
      register(700, parseFloat32);
      register(701, parseFloat64);
      register(16, parseBool);
      register(1114, parseDate.bind(null, false));
      register(1184, parseDate.bind(null, true));
      register(1e3, parseArray2);
      register(1007, parseArray2);
      register(1016, parseArray2);
      register(1008, parseArray2);
      register(1009, parseArray2);
      register(25, parseText);
    }, "init");
    module.exports = {
      init: init2
    };
  }
});

// node_modules/pg-types/lib/builtins.js
var require_builtins = __commonJS({
  "node_modules/pg-types/lib/builtins.js"(exports, module) {
    init_esm();
    module.exports = {
      BOOL: 16,
      BYTEA: 17,
      CHAR: 18,
      INT8: 20,
      INT2: 21,
      INT4: 23,
      REGPROC: 24,
      TEXT: 25,
      OID: 26,
      TID: 27,
      XID: 28,
      CID: 29,
      JSON: 114,
      XML: 142,
      PG_NODE_TREE: 194,
      SMGR: 210,
      PATH: 602,
      POLYGON: 604,
      CIDR: 650,
      FLOAT4: 700,
      FLOAT8: 701,
      ABSTIME: 702,
      RELTIME: 703,
      TINTERVAL: 704,
      CIRCLE: 718,
      MACADDR8: 774,
      MONEY: 790,
      MACADDR: 829,
      INET: 869,
      ACLITEM: 1033,
      BPCHAR: 1042,
      VARCHAR: 1043,
      DATE: 1082,
      TIME: 1083,
      TIMESTAMP: 1114,
      TIMESTAMPTZ: 1184,
      INTERVAL: 1186,
      TIMETZ: 1266,
      BIT: 1560,
      VARBIT: 1562,
      NUMERIC: 1700,
      REFCURSOR: 1790,
      REGPROCEDURE: 2202,
      REGOPER: 2203,
      REGOPERATOR: 2204,
      REGCLASS: 2205,
      REGTYPE: 2206,
      UUID: 2950,
      TXID_SNAPSHOT: 2970,
      PG_LSN: 3220,
      PG_NDISTINCT: 3361,
      PG_DEPENDENCIES: 3402,
      TSVECTOR: 3614,
      TSQUERY: 3615,
      GTSVECTOR: 3642,
      REGCONFIG: 3734,
      REGDICTIONARY: 3769,
      JSONB: 3802,
      REGNAMESPACE: 4089,
      REGROLE: 4096
    };
  }
});

// node_modules/pg-types/index.js
var require_pg_types = __commonJS({
  "node_modules/pg-types/index.js"(exports) {
    init_esm();
    var textParsers = require_textParsers();
    var binaryParsers = require_binaryParsers();
    var arrayParser = require_arrayParser();
    var builtinTypes = require_builtins();
    exports.getTypeParser = getTypeParser2;
    exports.setTypeParser = setTypeParser;
    exports.arrayParser = arrayParser;
    exports.builtins = builtinTypes;
    var typeParsers = {
      text: {},
      binary: {}
    };
    function noParse(val) {
      return String(val);
    }
    __name(noParse, "noParse");
    function getTypeParser2(oid, format) {
      format = format || "text";
      if (!typeParsers[format]) {
        return noParse;
      }
      return typeParsers[format][oid] || noParse;
    }
    __name(getTypeParser2, "getTypeParser");
    function setTypeParser(oid, format, parseFn) {
      if (typeof format == "function") {
        parseFn = format;
        format = "text";
      }
      typeParsers[format][oid] = parseFn;
    }
    __name(setTypeParser, "setTypeParser");
    textParsers.init(function(oid, converter) {
      typeParsers.text[oid] = converter;
    });
    binaryParsers.init(function(oid, converter) {
      typeParsers.binary[oid] = converter;
    });
  }
});

// node_modules/pg/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/pg/lib/defaults.js"(exports, module) {
    "use strict";
    init_esm();
    var user;
    try {
      user = process.platform === "win32" ? process.env.USERNAME : process.env.USER;
    } catch {
    }
    module.exports = {
      // database host. defaults to localhost
      host: "localhost",
      // database user's name
      user,
      // name of database to connect
      database: void 0,
      // database user's password
      password: null,
      // a Postgres connection string to be used instead of setting individual connection items
      // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
      // in the defaults object.
      connectionString: void 0,
      // database port
      port: 5432,
      // number of rows to return at a time from a prepared statement's
      // portal. 0 will return all rows at once
      rows: 0,
      // binary result mode
      binary: false,
      // Connection pool options - see https://github.com/brianc/node-pg-pool
      // number of connections to use in connection pool
      // 0 will disable connection pooling
      max: 10,
      // max milliseconds a client can go unused before it is removed
      // from the pool and destroyed
      idleTimeoutMillis: 3e4,
      client_encoding: "",
      ssl: false,
      application_name: void 0,
      fallback_application_name: void 0,
      options: void 0,
      parseInputDatesAsUTC: false,
      // max milliseconds any query using this connection will execute for before timing out in error.
      // false=unlimited
      statement_timeout: false,
      // Abort any statement that waits longer than the specified duration in milliseconds while attempting to acquire a lock.
      // false=unlimited
      lock_timeout: false,
      // Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
      // false=unlimited
      idle_in_transaction_session_timeout: false,
      // max milliseconds to wait for query to complete (client side)
      query_timeout: false,
      connect_timeout: 0,
      keepalives: 1,
      keepalives_idle: 0
    };
    var pgTypes = require_pg_types();
    var parseBigInteger = pgTypes.getTypeParser(20, "text");
    var parseBigIntegerArray = pgTypes.getTypeParser(1016, "text");
    module.exports.__defineSetter__("parseInt8", function(val) {
      pgTypes.setTypeParser(20, "text", val ? pgTypes.getTypeParser(23, "text") : parseBigInteger);
      pgTypes.setTypeParser(1016, "text", val ? pgTypes.getTypeParser(1007, "text") : parseBigIntegerArray);
    });
  }
});

// node_modules/pg/lib/utils.js
var require_utils = __commonJS({
  "node_modules/pg/lib/utils.js"(exports, module) {
    "use strict";
    init_esm();
    var defaults2 = require_defaults();
    var { isDate } = __require("util/types");
    function escapeElement(elementRepresentation) {
      const escaped = elementRepresentation.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      return '"' + escaped + '"';
    }
    __name(escapeElement, "escapeElement");
    function arrayString(val) {
      let result = "{";
      for (let i = 0; i < val.length; i++) {
        if (i > 0) {
          result += ",";
        }
        let item = val[i];
        if (item == null) {
          result += "NULL";
        } else if (Array.isArray(item)) {
          result += arrayString(item);
        } else if (ArrayBuffer.isView(item)) {
          if (!(item instanceof Buffer)) {
            item = Buffer.from(item.buffer, item.byteOffset, item.byteLength);
          }
          result += "\\\\x" + item.toString("hex");
        } else {
          result += escapeElement(prepareValue(item));
        }
      }
      result += "}";
      return result;
    }
    __name(arrayString, "arrayString");
    var prepareValue = /* @__PURE__ */ __name(function(val, seen) {
      if (val == null) {
        return null;
      }
      if (typeof val === "object") {
        if (val instanceof Buffer) {
          return val;
        }
        if (ArrayBuffer.isView(val)) {
          return Buffer.from(val.buffer, val.byteOffset, val.byteLength);
        }
        if (isDate(val)) {
          if (defaults2.parseInputDatesAsUTC) {
            return dateToStringUTC(val);
          } else {
            return dateToString(val);
          }
        }
        if (Array.isArray(val)) {
          return arrayString(val);
        }
        return prepareObject(val, seen);
      }
      return val.toString();
    }, "prepareValue");
    function prepareObject(val, seen) {
      if (val && typeof val.toPostgres === "function") {
        seen = seen || [];
        if (seen.indexOf(val) !== -1) {
          throw new Error('circular reference detected while preparing "' + val + '" for query');
        }
        seen.push(val);
        return prepareValue(val.toPostgres(prepareValue), seen);
      }
      return JSON.stringify(val);
    }
    __name(prepareObject, "prepareObject");
    function dateToString(date) {
      let offset = -date.getTimezoneOffset();
      let year = date.getFullYear();
      const isBCYear = year < 1;
      if (isBCYear) year = Math.abs(year) + 1;
      let ret = String(year).padStart(4, "0") + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0") + "T" + String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0") + "." + String(date.getMilliseconds()).padStart(3, "0");
      if (offset < 0) {
        ret += "-";
        offset *= -1;
      } else {
        ret += "+";
      }
      ret += String(Math.floor(offset / 60)).padStart(2, "0") + ":" + String(offset % 60).padStart(2, "0");
      if (isBCYear) ret += " BC";
      return ret;
    }
    __name(dateToString, "dateToString");
    function dateToStringUTC(date) {
      let year = date.getUTCFullYear();
      const isBCYear = year < 1;
      if (isBCYear) year = Math.abs(year) + 1;
      let ret = String(year).padStart(4, "0") + "-" + String(date.getUTCMonth() + 1).padStart(2, "0") + "-" + String(date.getUTCDate()).padStart(2, "0") + "T" + String(date.getUTCHours()).padStart(2, "0") + ":" + String(date.getUTCMinutes()).padStart(2, "0") + ":" + String(date.getUTCSeconds()).padStart(2, "0") + "." + String(date.getUTCMilliseconds()).padStart(3, "0");
      ret += "+00:00";
      if (isBCYear) ret += " BC";
      return ret;
    }
    __name(dateToStringUTC, "dateToStringUTC");
    function normalizeQueryConfig(config2, values, callback) {
      config2 = typeof config2 === "string" ? { text: config2 } : config2;
      if (values) {
        if (typeof values === "function") {
          config2.callback = values;
        } else {
          config2.values = values;
        }
      }
      if (callback) {
        config2.callback = callback;
      }
      return config2;
    }
    __name(normalizeQueryConfig, "normalizeQueryConfig");
    var escapeIdentifier2 = /* @__PURE__ */ __name(function(str) {
      return '"' + str.replace(/"/g, '""') + '"';
    }, "escapeIdentifier");
    var escapeLiteral2 = /* @__PURE__ */ __name(function(str) {
      let hasBackslash = false;
      let escaped = "'";
      if (str == null) {
        return "''";
      }
      if (typeof str !== "string") {
        return "''";
      }
      for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c === "'") {
          escaped += c + c;
        } else if (c === "\\") {
          escaped += c + c;
          hasBackslash = true;
        } else {
          escaped += c;
        }
      }
      escaped += "'";
      if (hasBackslash === true) {
        escaped = " E" + escaped;
      }
      return escaped;
    }, "escapeLiteral");
    module.exports = {
      prepareValue: /* @__PURE__ */ __name(function prepareValueWrapper(value) {
        return prepareValue(value);
      }, "prepareValueWrapper"),
      normalizeQueryConfig,
      escapeIdentifier: escapeIdentifier2,
      escapeLiteral: escapeLiteral2
    };
  }
});

// node_modules/pg/lib/crypto/utils.js
var require_utils2 = __commonJS({
  "node_modules/pg/lib/crypto/utils.js"(exports, module) {
    init_esm();
    var nodeCrypto = __require("crypto");
    module.exports = {
      postgresMd5PasswordHash,
      randomBytes,
      deriveKey,
      sha256,
      hashByName,
      hmacSha256,
      md5
    };
    var webCrypto = nodeCrypto.webcrypto || globalThis.crypto;
    var subtleCrypto = webCrypto.subtle;
    var textEncoder = new TextEncoder();
    function randomBytes(length) {
      return webCrypto.getRandomValues(Buffer.alloc(length));
    }
    __name(randomBytes, "randomBytes");
    async function md5(string) {
      try {
        return nodeCrypto.createHash("md5").update(string, "utf-8").digest("hex");
      } catch (e) {
        const data = typeof string === "string" ? textEncoder.encode(string) : string;
        const hash = await subtleCrypto.digest("MD5", data);
        return Array.from(new Uint8Array(hash)).map((b2) => b2.toString(16).padStart(2, "0")).join("");
      }
    }
    __name(md5, "md5");
    async function postgresMd5PasswordHash(user, password, salt) {
      const inner = await md5(password + user);
      const outer = await md5(Buffer.concat([Buffer.from(inner), salt]));
      return "md5" + outer;
    }
    __name(postgresMd5PasswordHash, "postgresMd5PasswordHash");
    async function sha256(text) {
      return await subtleCrypto.digest("SHA-256", text);
    }
    __name(sha256, "sha256");
    async function hashByName(hashName, text) {
      return await subtleCrypto.digest(hashName, text);
    }
    __name(hashByName, "hashByName");
    async function hmacSha256(keyBuffer, msg) {
      const key = await subtleCrypto.importKey("raw", keyBuffer, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
      return await subtleCrypto.sign("HMAC", key, textEncoder.encode(msg));
    }
    __name(hmacSha256, "hmacSha256");
    async function deriveKey(password, salt, iterations) {
      const key = await subtleCrypto.importKey("raw", textEncoder.encode(password), "PBKDF2", false, ["deriveBits"]);
      const params = { name: "PBKDF2", hash: "SHA-256", salt, iterations };
      return await subtleCrypto.deriveBits(params, key, 32 * 8, ["deriveBits"]);
    }
    __name(deriveKey, "deriveKey");
  }
});

// node_modules/pg/lib/crypto/cert-signatures.js
var require_cert_signatures = __commonJS({
  "node_modules/pg/lib/crypto/cert-signatures.js"(exports, module) {
    init_esm();
    function x509Error(msg, cert) {
      return new Error("SASL channel binding: " + msg + " when parsing public certificate " + cert.toString("base64"));
    }
    __name(x509Error, "x509Error");
    function readASN1Length(data, index) {
      let length = data[index++];
      if (length < 128) return { length, index };
      const lengthBytes = length & 127;
      if (lengthBytes > 4) throw x509Error("bad length", data);
      length = 0;
      for (let i = 0; i < lengthBytes; i++) {
        length = length << 8 | data[index++];
      }
      return { length, index };
    }
    __name(readASN1Length, "readASN1Length");
    function readASN1OID(data, index) {
      if (data[index++] !== 6) throw x509Error("non-OID data", data);
      const { length: OIDLength, index: indexAfterOIDLength } = readASN1Length(data, index);
      index = indexAfterOIDLength;
      const lastIndex = index + OIDLength;
      const byte1 = data[index++];
      let oid = (byte1 / 40 >> 0) + "." + byte1 % 40;
      while (index < lastIndex) {
        let value = 0;
        while (index < lastIndex) {
          const nextByte = data[index++];
          value = value << 7 | nextByte & 127;
          if (nextByte < 128) break;
        }
        oid += "." + value;
      }
      return { oid, index };
    }
    __name(readASN1OID, "readASN1OID");
    function expectASN1Seq(data, index) {
      if (data[index++] !== 48) throw x509Error("non-sequence data", data);
      return readASN1Length(data, index);
    }
    __name(expectASN1Seq, "expectASN1Seq");
    function signatureAlgorithmHashFromCertificate(data, index) {
      if (index === void 0) index = 0;
      index = expectASN1Seq(data, index).index;
      const { length: certInfoLength, index: indexAfterCertInfoLength } = expectASN1Seq(data, index);
      index = indexAfterCertInfoLength + certInfoLength;
      index = expectASN1Seq(data, index).index;
      const { oid, index: indexAfterOID } = readASN1OID(data, index);
      switch (oid) {
        // RSA
        case "1.2.840.113549.1.1.4":
          return "MD5";
        case "1.2.840.113549.1.1.5":
          return "SHA-1";
        case "1.2.840.113549.1.1.11":
          return "SHA-256";
        case "1.2.840.113549.1.1.12":
          return "SHA-384";
        case "1.2.840.113549.1.1.13":
          return "SHA-512";
        case "1.2.840.113549.1.1.14":
          return "SHA-224";
        case "1.2.840.113549.1.1.15":
          return "SHA512-224";
        case "1.2.840.113549.1.1.16":
          return "SHA512-256";
        // ECDSA
        case "1.2.840.10045.4.1":
          return "SHA-1";
        case "1.2.840.10045.4.3.1":
          return "SHA-224";
        case "1.2.840.10045.4.3.2":
          return "SHA-256";
        case "1.2.840.10045.4.3.3":
          return "SHA-384";
        case "1.2.840.10045.4.3.4":
          return "SHA-512";
        // RSASSA-PSS: hash is indicated separately
        case "1.2.840.113549.1.1.10": {
          index = indexAfterOID;
          index = expectASN1Seq(data, index).index;
          if (data[index++] !== 160) throw x509Error("non-tag data", data);
          index = readASN1Length(data, index).index;
          index = expectASN1Seq(data, index).index;
          const { oid: hashOID } = readASN1OID(data, index);
          switch (hashOID) {
            // standalone hash OIDs
            case "1.2.840.113549.2.5":
              return "MD5";
            case "1.3.14.3.2.26":
              return "SHA-1";
            case "2.16.840.1.101.3.4.2.1":
              return "SHA-256";
            case "2.16.840.1.101.3.4.2.2":
              return "SHA-384";
            case "2.16.840.1.101.3.4.2.3":
              return "SHA-512";
          }
          throw x509Error("unknown hash OID " + hashOID, data);
        }
        // Ed25519 -- see https: return//github.com/openssl/openssl/issues/15477
        case "1.3.101.110":
        case "1.3.101.112":
          return "SHA-512";
        // Ed448 -- still not in pg 17.2 (if supported, digest would be SHAKE256 x 64 bytes)
        case "1.3.101.111":
        case "1.3.101.113":
          throw x509Error("Ed448 certificate channel binding is not currently supported by Postgres");
      }
      throw x509Error("unknown OID " + oid, data);
    }
    __name(signatureAlgorithmHashFromCertificate, "signatureAlgorithmHashFromCertificate");
    module.exports = { signatureAlgorithmHashFromCertificate };
  }
});

// node_modules/pg/lib/crypto/sasl.js
var require_sasl = __commonJS({
  "node_modules/pg/lib/crypto/sasl.js"(exports, module) {
    "use strict";
    init_esm();
    var crypto2 = require_utils2();
    var { signatureAlgorithmHashFromCertificate } = require_cert_signatures();
    function saslprep(password) {
      const nonAsciiSpace = /[\u00A0\u1680\u2000-\u200B\u202F\u205F\u3000]/g;
      const mappedToNothing = /[\u00AD\u034F\u1806\u180B\u180C\u180D\u200C\u200D\u2060\uFE00-\uFE0F\uFEFF]/g;
      return password.replace(nonAsciiSpace, " ").replace(mappedToNothing, "").normalize("NFKC");
    }
    __name(saslprep, "saslprep");
    var DEFAULT_MAX_SCRAM_ITERATIONS = 1e5;
    function startSession(mechanisms, stream, scramMaxIterations = DEFAULT_MAX_SCRAM_ITERATIONS) {
      const candidates = ["SCRAM-SHA-256"];
      if (stream) candidates.unshift("SCRAM-SHA-256-PLUS");
      const mechanism = candidates.find((candidate) => mechanisms.includes(candidate));
      if (!mechanism) {
        throw new Error("SASL: Only mechanism(s) " + candidates.join(" and ") + " are supported");
      }
      if (mechanism === "SCRAM-SHA-256-PLUS" && typeof stream.getPeerCertificate !== "function") {
        throw new Error("SASL: Mechanism SCRAM-SHA-256-PLUS requires a certificate");
      }
      const clientNonce = crypto2.randomBytes(18).toString("base64");
      const gs2Header = mechanism === "SCRAM-SHA-256-PLUS" ? "p=tls-server-end-point" : stream ? "y" : "n";
      return {
        mechanism,
        clientNonce,
        response: gs2Header + ",,n=*,r=" + clientNonce,
        message: "SASLInitialResponse",
        scramMaxIterations
      };
    }
    __name(startSession, "startSession");
    async function continueSession(session, password, serverData, stream) {
      if (session.message !== "SASLInitialResponse") {
        throw new Error("SASL: Last message was not SASLInitialResponse");
      }
      if (typeof password !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
      }
      if (password === "") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a non-empty string");
      }
      if (typeof serverData !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
      }
      const sv = parseServerFirstMessage(serverData);
      if (!sv.nonce.startsWith(session.clientNonce)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
      } else if (sv.nonce.length === session.clientNonce.length) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
      }
      const scramMaxIterations = typeof session.scramMaxIterations === "number" ? session.scramMaxIterations : DEFAULT_MAX_SCRAM_ITERATIONS;
      if (scramMaxIterations !== 0 && sv.iteration > scramMaxIterations) {
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration count " + sv.iteration + " exceeds scramMaxIterations of " + scramMaxIterations
        );
      }
      const clientFirstMessageBare = "n=*,r=" + session.clientNonce;
      const serverFirstMessage = "r=" + sv.nonce + ",s=" + sv.salt + ",i=" + sv.iteration;
      let channelBinding = stream ? "eSws" : "biws";
      if (session.mechanism === "SCRAM-SHA-256-PLUS") {
        const peerCert = stream.getPeerCertificate().raw;
        let hashName = signatureAlgorithmHashFromCertificate(peerCert);
        if (hashName === "MD5" || hashName === "SHA-1") hashName = "SHA-256";
        const certHash = await crypto2.hashByName(hashName, peerCert);
        const bindingData = Buffer.concat([Buffer.from("p=tls-server-end-point,,"), Buffer.from(certHash)]);
        channelBinding = bindingData.toString("base64");
      }
      const clientFinalMessageWithoutProof = "c=" + channelBinding + ",r=" + sv.nonce;
      const authMessage = clientFirstMessageBare + "," + serverFirstMessage + "," + clientFinalMessageWithoutProof;
      const saltBytes = Buffer.from(sv.salt, "base64");
      const saltedPassword = await crypto2.deriveKey(saslprep(password), saltBytes, sv.iteration);
      const clientKey = await crypto2.hmacSha256(saltedPassword, "Client Key");
      const storedKey = await crypto2.sha256(clientKey);
      const clientSignature = await crypto2.hmacSha256(storedKey, authMessage);
      const clientProof = xorBuffers(Buffer.from(clientKey), Buffer.from(clientSignature)).toString("base64");
      const serverKey = await crypto2.hmacSha256(saltedPassword, "Server Key");
      const serverSignatureBytes = await crypto2.hmacSha256(serverKey, authMessage);
      session.message = "SASLResponse";
      session.serverSignature = Buffer.from(serverSignatureBytes).toString("base64");
      session.response = clientFinalMessageWithoutProof + ",p=" + clientProof;
    }
    __name(continueSession, "continueSession");
    function finalizeSession(session, serverData) {
      if (session.message !== "SASLResponse") {
        throw new Error("SASL: Last message was not SASLResponse");
      }
      if (typeof serverData !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
      }
      const { serverSignature } = parseServerFinalMessage(serverData);
      if (serverSignature !== session.serverSignature) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
      }
    }
    __name(finalizeSession, "finalizeSession");
    function isPrintableChars(text) {
      if (typeof text !== "string") {
        throw new TypeError("SASL: text must be a string");
      }
      return text.split("").map((_, i) => text.charCodeAt(i)).every((c) => c >= 33 && c <= 43 || c >= 45 && c <= 126);
    }
    __name(isPrintableChars, "isPrintableChars");
    function isBase64(text) {
      return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(text);
    }
    __name(isBase64, "isBase64");
    function parseAttributePairs(text) {
      if (typeof text !== "string") {
        throw new TypeError("SASL: attribute pairs text must be a string");
      }
      return new Map(
        text.split(",").map((attrValue) => {
          if (!/^.=/.test(attrValue)) {
            throw new Error("SASL: Invalid attribute pair entry");
          }
          const name2 = attrValue[0];
          const value = attrValue.substring(2);
          return [name2, value];
        })
      );
    }
    __name(parseAttributePairs, "parseAttributePairs");
    function parseServerFirstMessage(data) {
      const attrPairs = parseAttributePairs(data);
      const nonce = attrPairs.get("r");
      if (!nonce) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
      } else if (!isPrintableChars(nonce)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
      }
      const salt = attrPairs.get("s");
      if (!salt) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
      } else if (!isBase64(salt)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
      }
      const iterationText = attrPairs.get("i");
      if (!iterationText) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
      } else if (!/^[1-9][0-9]*$/.test(iterationText)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
      }
      const iteration = parseInt(iterationText, 10);
      return {
        nonce,
        salt,
        iteration
      };
    }
    __name(parseServerFirstMessage, "parseServerFirstMessage");
    function parseServerFinalMessage(serverData) {
      const attrPairs = parseAttributePairs(serverData);
      const error = attrPairs.get("e");
      const serverSignature = attrPairs.get("v");
      if (error) {
        throw new Error(`SASL: SCRAM-SERVER-FINAL-MESSAGE: server returned error: "${error}"`);
      }
      if (!serverSignature) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
      } else if (!isBase64(serverSignature)) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
      }
      return {
        serverSignature
      };
    }
    __name(parseServerFinalMessage, "parseServerFinalMessage");
    function xorBuffers(a, b2) {
      if (!Buffer.isBuffer(a)) {
        throw new TypeError("first argument must be a Buffer");
      }
      if (!Buffer.isBuffer(b2)) {
        throw new TypeError("second argument must be a Buffer");
      }
      if (a.length !== b2.length) {
        throw new Error("Buffer lengths must match");
      }
      if (a.length === 0) {
        throw new Error("Buffers cannot be empty");
      }
      return Buffer.from(a.map((_, i) => a[i] ^ b2[i]));
    }
    __name(xorBuffers, "xorBuffers");
    module.exports = {
      startSession,
      continueSession,
      finalizeSession,
      DEFAULT_MAX_SCRAM_ITERATIONS
    };
  }
});

// node_modules/pg/lib/type-overrides.js
var require_type_overrides = __commonJS({
  "node_modules/pg/lib/type-overrides.js"(exports, module) {
    "use strict";
    init_esm();
    var types3 = require_pg_types();
    function TypeOverrides2(userTypes) {
      this._types = userTypes || types3;
      this.text = {};
      this.binary = {};
    }
    __name(TypeOverrides2, "TypeOverrides");
    TypeOverrides2.prototype.getOverrides = function(format) {
      switch (format) {
        case "text":
          return this.text;
        case "binary":
          return this.binary;
        default:
          return {};
      }
    };
    TypeOverrides2.prototype.setTypeParser = function(oid, format, parseFn) {
      if (typeof format === "function") {
        parseFn = format;
        format = "text";
      }
      this.getOverrides(format)[oid] = parseFn;
    };
    TypeOverrides2.prototype.getTypeParser = function(oid, format) {
      format = format || "text";
      return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format);
    };
    module.exports = TypeOverrides2;
  }
});

// node_modules/pg-connection-string/index.js
var require_pg_connection_string = __commonJS({
  "node_modules/pg-connection-string/index.js"(exports, module) {
    "use strict";
    init_esm();
    function parse(str, options = {}) {
      if (str.charAt(0) === "/") {
        const config3 = str.split(" ");
        return { host: config3[0], database: config3[1] };
      }
      const config2 = /* @__PURE__ */ Object.create(null);
      let result;
      let dummyHost = false;
      if (/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {
        str = encodeURI(str).replace(/%25(\d\d)/g, "%$1");
      }
      try {
        try {
          result = new URL(str, "postgres://base");
        } catch (e) {
          result = new URL(str.replace("@/", "@___DUMMY___/"), "postgres://base");
          dummyHost = true;
        }
      } catch (err) {
        err.input && (err.input = "*****REDACTED*****");
        throw err;
      }
      for (const entry of result.searchParams.entries()) {
        config2[entry[0]] = entry[1];
      }
      config2.user = config2.user || decodeURIComponent(result.username);
      config2.password = config2.password || decodeURIComponent(result.password);
      if (result.protocol == "socket:") {
        config2.host = decodeURI(result.pathname);
        config2.database = result.searchParams.get("db");
        config2.client_encoding = result.searchParams.get("encoding");
        return config2;
      }
      const hostname = dummyHost ? "" : result.hostname;
      if (!config2.host) {
        config2.host = decodeURIComponent(hostname);
      } else if (hostname && /^%2f/i.test(hostname)) {
        result.pathname = hostname + result.pathname;
      }
      if (!config2.port) {
        config2.port = result.port;
      }
      const pathname = result.pathname.slice(1) || null;
      config2.database = pathname ? decodeURI(pathname) : null;
      if (config2.ssl === "true" || config2.ssl === "1") {
        config2.ssl = true;
      }
      if (config2.ssl === "0") {
        config2.ssl = false;
      }
      if (config2.sslcert || config2.sslkey || config2.sslrootcert || config2.sslmode) {
        config2.ssl = {};
      }
      const fs = config2.sslcert || config2.sslkey || config2.sslrootcert ? __require("fs") : null;
      if (config2.sslcert) {
        config2.ssl.cert = fs.readFileSync(config2.sslcert).toString();
      }
      if (config2.sslkey) {
        config2.ssl.key = fs.readFileSync(config2.sslkey).toString();
      }
      if (config2.sslrootcert) {
        config2.ssl.ca = fs.readFileSync(config2.sslrootcert).toString();
      }
      if (options.useLibpqCompat && config2.uselibpqcompat) {
        throw new Error("Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.");
      }
      if (config2.uselibpqcompat === "true" || options.useLibpqCompat) {
        switch (config2.sslmode) {
          case "disable": {
            config2.ssl = false;
            break;
          }
          case "prefer": {
            config2.ssl.rejectUnauthorized = false;
            break;
          }
          case "require": {
            if (config2.sslrootcert) {
              config2.ssl.checkServerIdentity = function() {
              };
            } else {
              config2.ssl.rejectUnauthorized = false;
            }
            break;
          }
          case "verify-ca": {
            if (!config2.ssl.ca) {
              throw new Error(
                "SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security."
              );
            }
            config2.ssl.checkServerIdentity = function() {
            };
            break;
          }
          case "verify-full": {
            break;
          }
        }
      } else {
        switch (config2.sslmode) {
          case "disable": {
            config2.ssl = false;
            break;
          }
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full": {
            if (config2.sslmode !== "verify-full") {
              deprecatedSslModeWarning(config2.sslmode);
            }
            break;
          }
          case "no-verify": {
            config2.ssl.rejectUnauthorized = false;
            break;
          }
        }
      }
      return config2;
    }
    __name(parse, "parse");
    function toConnectionOptions(sslConfig) {
      const connectionOptions = Object.entries(sslConfig).reduce((c, [key, value]) => {
        if (value !== void 0 && value !== null) {
          c[key] = value;
        }
        return c;
      }, /* @__PURE__ */ Object.create(null));
      return connectionOptions;
    }
    __name(toConnectionOptions, "toConnectionOptions");
    function toClientConfig(config2) {
      const poolConfig = Object.entries(config2).reduce((c, [key, value]) => {
        if (key === "ssl") {
          const sslConfig = value;
          if (typeof sslConfig === "boolean") {
            c[key] = sslConfig;
          }
          if (typeof sslConfig === "object") {
            c[key] = toConnectionOptions(sslConfig);
          }
        } else if (value !== void 0 && value !== null) {
          if (key === "port") {
            if (value !== "") {
              const v = parseInt(value, 10);
              if (isNaN(v)) {
                throw new Error(`Invalid ${key}: ${value}`);
              }
              c[key] = v;
            }
          } else {
            c[key] = value;
          }
        }
        return c;
      }, /* @__PURE__ */ Object.create(null));
      return poolConfig;
    }
    __name(toClientConfig, "toClientConfig");
    function parseIntoClientConfig(str) {
      return toClientConfig(parse(str));
    }
    __name(parseIntoClientConfig, "parseIntoClientConfig");
    function deprecatedSslModeWarning(sslmode) {
      if (!deprecatedSslModeWarning.warned && typeof process !== "undefined" && process.emitWarning) {
        deprecatedSslModeWarning.warned = true;
        process.emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${sslmode}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`);
      }
    }
    __name(deprecatedSslModeWarning, "deprecatedSslModeWarning");
    module.exports = parse;
    parse.parse = parse;
    parse.toClientConfig = toClientConfig;
    parse.parseIntoClientConfig = parseIntoClientConfig;
  }
});

// node_modules/pg/lib/connection-parameters.js
var require_connection_parameters = __commonJS({
  "node_modules/pg/lib/connection-parameters.js"(exports, module) {
    "use strict";
    init_esm();
    var dns2 = __require("dns");
    var defaults2 = require_defaults();
    var parse = require_pg_connection_string().parse;
    var val = /* @__PURE__ */ __name(function(key, config2, envVar) {
      if (config2[key]) {
        return config2[key];
      }
      if (envVar === void 0) {
        envVar = process.env["PG" + key.toUpperCase()];
      } else if (envVar === false) {
      } else {
        envVar = process.env[envVar];
      }
      return envVar || defaults2[key];
    }, "val");
    var readSSLConfigFromEnvironment = /* @__PURE__ */ __name(function() {
      switch (process.env.PGSSLMODE) {
        case "disable":
          return false;
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          return true;
        case "no-verify":
          return { rejectUnauthorized: false };
      }
      return defaults2.ssl;
    }, "readSSLConfigFromEnvironment");
    var quoteParamValue = /* @__PURE__ */ __name(function(value) {
      return "'" + ("" + value).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    }, "quoteParamValue");
    var add = /* @__PURE__ */ __name(function(params, config2, paramName) {
      const value = config2[paramName];
      if (value !== void 0 && value !== null) {
        params.push(paramName + "=" + quoteParamValue(value));
      }
    }, "add");
    var ConnectionParameters = class {
      static {
        __name(this, "ConnectionParameters");
      }
      constructor(config2) {
        config2 = typeof config2 === "string" ? parse(config2) : config2 || {};
        if (config2.connectionString) {
          config2 = Object.assign({}, config2, parse(config2.connectionString));
        }
        this.user = val("user", config2);
        this.database = val("database", config2);
        if (this.database === void 0) {
          this.database = this.user;
        }
        this.port = parseInt(val("port", config2), 10);
        this.host = val("host", config2);
        Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: val("password", config2)
        });
        this.binary = val("binary", config2);
        this.options = val("options", config2);
        this.ssl = typeof config2.ssl === "undefined" ? readSSLConfigFromEnvironment() : config2.ssl;
        if (typeof this.ssl === "string") {
          if (this.ssl === "true") {
            this.ssl = true;
          }
        }
        if (this.ssl === "no-verify") {
          this.ssl = { rejectUnauthorized: false };
        }
        if (this.ssl && this.ssl.key) {
          Object.defineProperty(this.ssl, "key", {
            enumerable: false
          });
        }
        this.client_encoding = val("client_encoding", config2);
        this.replication = val("replication", config2);
        this.isDomainSocket = !(this.host || "").indexOf("/");
        this.application_name = val("application_name", config2, "PGAPPNAME");
        this.fallback_application_name = val("fallback_application_name", config2, false);
        this.statement_timeout = val("statement_timeout", config2, false);
        this.lock_timeout = val("lock_timeout", config2, false);
        this.idle_in_transaction_session_timeout = val("idle_in_transaction_session_timeout", config2, false);
        this.query_timeout = val("query_timeout", config2, false);
        if (config2.connectionTimeoutMillis === void 0) {
          this.connect_timeout = process.env.PGCONNECT_TIMEOUT || 0;
        } else {
          this.connect_timeout = Math.floor(config2.connectionTimeoutMillis / 1e3);
        }
        if (config2.keepAlive === false) {
          this.keepalives = 0;
        } else if (config2.keepAlive === true) {
          this.keepalives = 1;
        }
        if (typeof config2.keepAliveInitialDelayMillis === "number") {
          this.keepalives_idle = Math.floor(config2.keepAliveInitialDelayMillis / 1e3);
        }
      }
      getLibpqConnectionString(cb) {
        const params = [];
        add(params, this, "user");
        add(params, this, "password");
        add(params, this, "port");
        add(params, this, "application_name");
        add(params, this, "fallback_application_name");
        add(params, this, "connect_timeout");
        add(params, this, "options");
        const ssl = typeof this.ssl === "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
        add(params, ssl, "sslmode");
        add(params, ssl, "sslca");
        add(params, ssl, "sslkey");
        add(params, ssl, "sslcert");
        add(params, ssl, "sslrootcert");
        if (this.database) {
          params.push("dbname=" + quoteParamValue(this.database));
        }
        if (this.replication) {
          params.push("replication=" + quoteParamValue(this.replication));
        }
        if (this.host) {
          params.push("host=" + quoteParamValue(this.host));
        }
        if (this.isDomainSocket) {
          return cb(null, params.join(" "));
        }
        if (this.client_encoding) {
          params.push("client_encoding=" + quoteParamValue(this.client_encoding));
        }
        dns2.lookup(this.host, function(err, address) {
          if (err) return cb(err, null);
          params.push("hostaddr=" + quoteParamValue(address));
          return cb(null, params.join(" "));
        });
      }
    };
    module.exports = ConnectionParameters;
  }
});

// node_modules/pg/lib/result.js
var require_result = __commonJS({
  "node_modules/pg/lib/result.js"(exports, module) {
    "use strict";
    init_esm();
    var types3 = require_pg_types();
    var matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/;
    var Result2 = class {
      static {
        __name(this, "Result");
      }
      constructor(rowMode, types4) {
        this.command = null;
        this.rowCount = null;
        this.oid = null;
        this.rows = [];
        this.fields = [];
        this._parsers = void 0;
        this._types = types4;
        this.RowCtor = null;
        this.rowAsArray = rowMode === "array";
        if (this.rowAsArray) {
          this.parseRow = this._parseRowAsArray;
        }
        this._prebuiltEmptyResultObject = null;
      }
      // adds a command complete message
      addCommandComplete(msg) {
        let match;
        if (msg.text) {
          match = matchRegexp.exec(msg.text);
        } else {
          match = matchRegexp.exec(msg.command);
        }
        if (match) {
          this.command = match[1];
          if (match[3]) {
            this.oid = parseInt(match[2], 10);
            this.rowCount = parseInt(match[3], 10);
          } else if (match[2]) {
            this.rowCount = parseInt(match[2], 10);
          }
        }
      }
      _parseRowAsArray(rowData) {
        const row = new Array(rowData.length);
        for (let i = 0, len = rowData.length; i < len; i++) {
          const rawValue = rowData[i];
          if (rawValue !== null) {
            row[i] = this._parsers[i](rawValue);
          } else {
            row[i] = null;
          }
        }
        return row;
      }
      parseRow(rowData) {
        const row = { ...this._prebuiltEmptyResultObject };
        for (let i = 0, len = rowData.length; i < len; i++) {
          const rawValue = rowData[i];
          const field = this.fields[i].name;
          if (rawValue !== null) {
            const v = this.fields[i].format === "binary" ? Buffer.from(rawValue) : rawValue;
            row[field] = this._parsers[i](v);
          } else {
            row[field] = null;
          }
        }
        return row;
      }
      addRow(row) {
        this.rows.push(row);
      }
      addFields(fieldDescriptions) {
        this.fields = fieldDescriptions;
        if (this.fields.length) {
          this._parsers = new Array(fieldDescriptions.length);
        }
        const row = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < fieldDescriptions.length; i++) {
          const desc = fieldDescriptions[i];
          row[desc.name] = null;
          if (this._types) {
            this._parsers[i] = this._types.getTypeParser(desc.dataTypeID, desc.format || "text");
          } else {
            this._parsers[i] = types3.getTypeParser(desc.dataTypeID, desc.format || "text");
          }
        }
        this._prebuiltEmptyResultObject = { ...row };
      }
    };
    module.exports = Result2;
  }
});

// node_modules/pg/lib/query.js
var require_query = __commonJS({
  "node_modules/pg/lib/query.js"(exports, module) {
    "use strict";
    init_esm();
    var { EventEmitter } = __require("events");
    var Result2 = require_result();
    var utils = require_utils();
    var Query2 = class extends EventEmitter {
      static {
        __name(this, "Query");
      }
      constructor(config2, values, callback) {
        super();
        config2 = utils.normalizeQueryConfig(config2, values, callback);
        this.text = config2.text;
        this.values = config2.values;
        this.rows = config2.rows;
        this.types = config2.types;
        this.name = config2.name;
        this.queryMode = config2.queryMode;
        this.binary = config2.binary;
        this.portal = config2.portal || "";
        this.callback = config2.callback;
        this._rowMode = config2.rowMode;
        if (process.domain && config2.callback) {
          this.callback = process.domain.bind(config2.callback);
        }
        this._result = new Result2(this._rowMode, this.types);
        this._results = this._result;
        this._canceledDueToError = false;
      }
      requiresPreparation() {
        if (this.queryMode === "extended") {
          return true;
        }
        if (this.name) {
          return true;
        }
        if (this.rows) {
          return true;
        }
        if (!this.text) {
          return false;
        }
        if (!this.values) {
          return false;
        }
        return this.values.length > 0;
      }
      _checkForMultirow() {
        if (this._result.command) {
          if (!Array.isArray(this._results)) {
            this._results = [this._result];
          }
          this._result = new Result2(this._rowMode, this._result._types);
          this._results.push(this._result);
        }
      }
      // associates row metadata from the supplied
      // message with this query object
      // metadata used when parsing row results
      handleRowDescription(msg) {
        this._checkForMultirow();
        this._result.addFields(msg.fields);
        this._accumulateRows = this.callback || !this.listeners("row").length;
      }
      handleDataRow(msg) {
        let row;
        if (this._canceledDueToError) {
          return;
        }
        try {
          row = this._result.parseRow(msg.fields);
        } catch (err) {
          this._canceledDueToError = err;
          return;
        }
        this.emit("row", row, this._result);
        if (this._accumulateRows) {
          this._result.addRow(row);
        }
      }
      handleCommandComplete(msg, connection) {
        this._checkForMultirow();
        this._result.addCommandComplete(msg);
        if (this.rows) {
          connection.sync();
        }
      }
      // if a named prepared statement is created with empty query text
      // the backend will send an emptyQuery message but *not* a command complete message
      // since we pipeline sync immediately after execute we don't need to do anything here
      // unless we have rows specified, in which case we did not pipeline the initial sync call
      handleEmptyQuery(connection) {
        if (this.rows) {
          connection.sync();
        }
      }
      handleError(err, connection) {
        if (this._canceledDueToError) {
          err = this._canceledDueToError;
          this._canceledDueToError = false;
        }
        if (this.callback) {
          return this.callback(err);
        }
        this.emit("error", err);
      }
      handleReadyForQuery(con) {
        if (this._canceledDueToError) {
          return this.handleError(this._canceledDueToError, con);
        }
        if (this.callback) {
          try {
            this.callback(null, this._results);
          } catch (err) {
            process.nextTick(() => {
              throw err;
            });
          }
        }
        this.emit("end", this._results);
      }
      submit(connection) {
        if (typeof this.text !== "string" && typeof this.name !== "string") {
          return new Error("A query must have either text or a name. Supplying neither is unsupported.");
        }
        const previous = connection.parsedStatements[this.name];
        if (this.text && previous && this.text !== previous) {
          return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
        }
        if (this.values && !Array.isArray(this.values)) {
          return new Error("Query values must be an array");
        }
        if (this.requiresPreparation()) {
          connection.stream.cork && connection.stream.cork();
          try {
            this.prepare(connection);
          } finally {
            connection.stream.uncork && connection.stream.uncork();
          }
        } else {
          connection.query(this.text);
        }
        return null;
      }
      hasBeenParsed(connection) {
        return this.name && connection.parsedStatements[this.name];
      }
      handlePortalSuspended(connection) {
        this._getRows(connection, this.rows);
      }
      _getRows(connection, rows) {
        connection.execute({
          portal: this.portal,
          rows
        });
        if (!rows) {
          connection.sync();
        } else {
          connection.flush();
        }
      }
      // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
      prepare(connection) {
        if (!this.hasBeenParsed(connection)) {
          connection.parse({
            text: this.text,
            name: this.name,
            types: this.types
          });
        }
        try {
          connection.bind({
            portal: this.portal,
            statement: this.name,
            values: this.values,
            binary: this.binary,
            valueMapper: utils.prepareValue
          });
        } catch (err) {
          this.handleError(err, connection);
          return;
        }
        connection.describe({
          type: "P",
          name: this.portal || ""
        });
        this._getRows(connection, this.rows);
      }
      handleCopyInResponse(connection) {
        connection.sendCopyFail("No source stream defined");
      }
      handleCopyData(msg, connection) {
      }
    };
    module.exports = Query2;
  }
});

// node_modules/pg-protocol/dist/messages.js
var require_messages = __commonJS({
  "node_modules/pg-protocol/dist/messages.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoticeMessage = exports.DataRowMessage = exports.CommandCompleteMessage = exports.ReadyForQueryMessage = exports.NotificationResponseMessage = exports.BackendKeyDataMessage = exports.AuthenticationMD5Password = exports.ParameterStatusMessage = exports.ParameterDescriptionMessage = exports.RowDescriptionMessage = exports.Field = exports.CopyResponse = exports.CopyDataMessage = exports.DatabaseError = exports.copyDone = exports.emptyQuery = exports.replicationStart = exports.portalSuspended = exports.noData = exports.closeComplete = exports.bindComplete = exports.parseComplete = void 0;
    exports.parseComplete = {
      name: "parseComplete",
      length: 5
    };
    exports.bindComplete = {
      name: "bindComplete",
      length: 5
    };
    exports.closeComplete = {
      name: "closeComplete",
      length: 5
    };
    exports.noData = {
      name: "noData",
      length: 5
    };
    exports.portalSuspended = {
      name: "portalSuspended",
      length: 5
    };
    exports.replicationStart = {
      name: "replicationStart",
      length: 4
    };
    exports.emptyQuery = {
      name: "emptyQuery",
      length: 4
    };
    exports.copyDone = {
      name: "copyDone",
      length: 4
    };
    var DatabaseError2 = class extends Error {
      static {
        __name(this, "DatabaseError");
      }
      constructor(message, length, name2) {
        super(message);
        this.length = length;
        this.name = name2;
      }
    };
    exports.DatabaseError = DatabaseError2;
    var CopyDataMessage = class {
      static {
        __name(this, "CopyDataMessage");
      }
      constructor(length, chunk) {
        this.length = length;
        this.chunk = chunk;
        this.name = "copyData";
      }
    };
    exports.CopyDataMessage = CopyDataMessage;
    var CopyResponse = class {
      static {
        __name(this, "CopyResponse");
      }
      constructor(length, name2, binary, columnCount) {
        this.length = length;
        this.name = name2;
        this.binary = binary;
        this.columnTypes = new Array(columnCount);
      }
    };
    exports.CopyResponse = CopyResponse;
    var Field = class {
      static {
        __name(this, "Field");
      }
      constructor(name2, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, format) {
        this.name = name2;
        this.tableID = tableID;
        this.columnID = columnID;
        this.dataTypeID = dataTypeID;
        this.dataTypeSize = dataTypeSize;
        this.dataTypeModifier = dataTypeModifier;
        this.format = format;
      }
    };
    exports.Field = Field;
    var RowDescriptionMessage = class {
      static {
        __name(this, "RowDescriptionMessage");
      }
      constructor(length, fieldCount) {
        this.length = length;
        this.fieldCount = fieldCount;
        this.name = "rowDescription";
        this.fields = new Array(this.fieldCount);
      }
    };
    exports.RowDescriptionMessage = RowDescriptionMessage;
    var ParameterDescriptionMessage = class {
      static {
        __name(this, "ParameterDescriptionMessage");
      }
      constructor(length, parameterCount) {
        this.length = length;
        this.parameterCount = parameterCount;
        this.name = "parameterDescription";
        this.dataTypeIDs = new Array(this.parameterCount);
      }
    };
    exports.ParameterDescriptionMessage = ParameterDescriptionMessage;
    var ParameterStatusMessage = class {
      static {
        __name(this, "ParameterStatusMessage");
      }
      constructor(length, parameterName, parameterValue) {
        this.length = length;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
        this.name = "parameterStatus";
      }
    };
    exports.ParameterStatusMessage = ParameterStatusMessage;
    var AuthenticationMD5Password = class {
      static {
        __name(this, "AuthenticationMD5Password");
      }
      constructor(length, salt) {
        this.length = length;
        this.salt = salt;
        this.name = "authenticationMD5Password";
      }
    };
    exports.AuthenticationMD5Password = AuthenticationMD5Password;
    var BackendKeyDataMessage = class {
      static {
        __name(this, "BackendKeyDataMessage");
      }
      constructor(length, processID, secretKey) {
        this.length = length;
        this.processID = processID;
        this.secretKey = secretKey;
        this.name = "backendKeyData";
      }
    };
    exports.BackendKeyDataMessage = BackendKeyDataMessage;
    var NotificationResponseMessage = class {
      static {
        __name(this, "NotificationResponseMessage");
      }
      constructor(length, processId, channel, payload) {
        this.length = length;
        this.processId = processId;
        this.channel = channel;
        this.payload = payload;
        this.name = "notification";
      }
    };
    exports.NotificationResponseMessage = NotificationResponseMessage;
    var ReadyForQueryMessage = class {
      static {
        __name(this, "ReadyForQueryMessage");
      }
      constructor(length, status) {
        this.length = length;
        this.status = status;
        this.name = "readyForQuery";
      }
    };
    exports.ReadyForQueryMessage = ReadyForQueryMessage;
    var CommandCompleteMessage = class {
      static {
        __name(this, "CommandCompleteMessage");
      }
      constructor(length, text) {
        this.length = length;
        this.text = text;
        this.name = "commandComplete";
      }
    };
    exports.CommandCompleteMessage = CommandCompleteMessage;
    var DataRowMessage = class {
      static {
        __name(this, "DataRowMessage");
      }
      constructor(length, fields) {
        this.length = length;
        this.fields = fields;
        this.name = "dataRow";
        this.fieldCount = fields.length;
      }
    };
    exports.DataRowMessage = DataRowMessage;
    var NoticeMessage = class {
      static {
        __name(this, "NoticeMessage");
      }
      constructor(length, message) {
        this.length = length;
        this.message = message;
        this.name = "notice";
      }
    };
    exports.NoticeMessage = NoticeMessage;
  }
});

// node_modules/pg-protocol/dist/buffer-writer.js
var require_buffer_writer = __commonJS({
  "node_modules/pg-protocol/dist/buffer-writer.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Writer = void 0;
    var Writer = class {
      static {
        __name(this, "Writer");
      }
      constructor(size = 256) {
        this.size = size;
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.allocUnsafe(size);
      }
      ensure(size) {
        const remaining = this.buffer.length - this.offset;
        if (remaining < size) {
          const oldBuffer = this.buffer;
          const newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
          this.buffer = Buffer.allocUnsafe(newSize);
          oldBuffer.copy(this.buffer);
        }
      }
      addInt32(num) {
        this.ensure(4);
        this.buffer[this.offset++] = num >>> 24 & 255;
        this.buffer[this.offset++] = num >>> 16 & 255;
        this.buffer[this.offset++] = num >>> 8 & 255;
        this.buffer[this.offset++] = num >>> 0 & 255;
        return this;
      }
      addInt16(num) {
        this.ensure(2);
        this.buffer[this.offset++] = num >>> 8 & 255;
        this.buffer[this.offset++] = num >>> 0 & 255;
        return this;
      }
      addCString(string) {
        if (!string) {
          this.ensure(1);
        } else {
          const len = Buffer.byteLength(string);
          this.ensure(len + 1);
          this.buffer.write(string, this.offset, "utf-8");
          this.offset += len;
        }
        this.buffer[this.offset++] = 0;
        return this;
      }
      addString(string = "") {
        const len = Buffer.byteLength(string);
        this.ensure(len);
        this.buffer.write(string, this.offset);
        this.offset += len;
        return this;
      }
      add(otherBuffer) {
        this.ensure(otherBuffer.length);
        otherBuffer.copy(this.buffer, this.offset);
        this.offset += otherBuffer.length;
        return this;
      }
      join(code) {
        if (code) {
          this.buffer[this.headerPosition] = code;
          const length = this.offset - (this.headerPosition + 1);
          this.buffer.writeInt32BE(length, this.headerPosition + 1);
        }
        return this.buffer.slice(code ? 0 : 5, this.offset);
      }
      flush(code) {
        const result = this.join(code);
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.allocUnsafe(this.size);
        return result;
      }
    };
    exports.Writer = Writer;
  }
});

// node_modules/pg-protocol/dist/serializer.js
var require_serializer = __commonJS({
  "node_modules/pg-protocol/dist/serializer.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serialize = void 0;
    var buffer_writer_1 = require_buffer_writer();
    var writer = new buffer_writer_1.Writer();
    var startup = /* @__PURE__ */ __name((opts) => {
      writer.addInt16(3).addInt16(0);
      for (const key of Object.keys(opts)) {
        writer.addCString(key).addCString(opts[key]);
      }
      writer.addCString("client_encoding").addCString("UTF8");
      const bodyBuffer = writer.addCString("").flush();
      const length = bodyBuffer.length + 4;
      return new buffer_writer_1.Writer().addInt32(length).add(bodyBuffer).flush();
    }, "startup");
    var requestSsl = /* @__PURE__ */ __name(() => {
      const response = Buffer.allocUnsafe(8);
      response.writeInt32BE(8, 0);
      response.writeInt32BE(80877103, 4);
      return response;
    }, "requestSsl");
    var password = /* @__PURE__ */ __name((password2) => {
      return writer.addCString(password2).flush(
        112
        /* code.startup */
      );
    }, "password");
    var sendSASLInitialResponseMessage = /* @__PURE__ */ __name(function(mechanism, initialResponse) {
      writer.addCString(mechanism).addInt32(Buffer.byteLength(initialResponse)).addString(initialResponse);
      return writer.flush(
        112
        /* code.startup */
      );
    }, "sendSASLInitialResponseMessage");
    var sendSCRAMClientFinalMessage = /* @__PURE__ */ __name(function(additionalData) {
      return writer.addString(additionalData).flush(
        112
        /* code.startup */
      );
    }, "sendSCRAMClientFinalMessage");
    var query = /* @__PURE__ */ __name((text) => {
      return writer.addCString(text).flush(
        81
        /* code.query */
      );
    }, "query");
    var emptyArray = [];
    var parse = /* @__PURE__ */ __name((query2) => {
      const name2 = query2.name || "";
      if (name2.length > 63) {
        console.error("Warning! Postgres only supports 63 characters for query names.");
        console.error("You supplied %s (%s)", name2, name2.length);
        console.error("This can cause conflicts and silent errors executing queries");
      }
      const types3 = query2.types || emptyArray;
      const len = types3.length;
      const buffer = writer.addCString(name2).addCString(query2.text).addInt16(len);
      for (let i = 0; i < len; i++) {
        buffer.addInt32(types3[i]);
      }
      return writer.flush(
        80
        /* code.parse */
      );
    }, "parse");
    var paramWriter = new buffer_writer_1.Writer();
    var writeValues = /* @__PURE__ */ __name(function(values, valueMapper) {
      for (let i = 0; i < values.length; i++) {
        const mappedVal = valueMapper ? valueMapper(values[i], i) : values[i];
        if (mappedVal == null) {
          writer.addInt16(
            0
            /* ParamType.STRING */
          );
          paramWriter.addInt32(-1);
        } else if (mappedVal instanceof Buffer) {
          writer.addInt16(
            1
            /* ParamType.BINARY */
          );
          paramWriter.addInt32(mappedVal.length);
          paramWriter.add(mappedVal);
        } else {
          writer.addInt16(
            0
            /* ParamType.STRING */
          );
          paramWriter.addInt32(Buffer.byteLength(mappedVal));
          paramWriter.addString(mappedVal);
        }
      }
    }, "writeValues");
    var bind = /* @__PURE__ */ __name((config2 = {}) => {
      const portal = config2.portal || "";
      const statement = config2.statement || "";
      const binary = config2.binary || false;
      const values = config2.values || emptyArray;
      const len = values.length;
      writer.addCString(portal).addCString(statement);
      writer.addInt16(len);
      writeValues(values, config2.valueMapper);
      writer.addInt16(len);
      writer.add(paramWriter.flush());
      writer.addInt16(1);
      writer.addInt16(
        binary ? 1 : 0
        /* ParamType.STRING */
      );
      return writer.flush(
        66
        /* code.bind */
      );
    }, "bind");
    var emptyExecute = Buffer.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]);
    var execute = /* @__PURE__ */ __name((config2) => {
      if (!config2 || !config2.portal && !config2.rows) {
        return emptyExecute;
      }
      const portal = config2.portal || "";
      const rows = config2.rows || 0;
      const portalLength = Buffer.byteLength(portal);
      const len = 4 + portalLength + 1 + 4;
      const buff = Buffer.allocUnsafe(1 + len);
      buff[0] = 69;
      buff.writeInt32BE(len, 1);
      buff.write(portal, 5, "utf-8");
      buff[portalLength + 5] = 0;
      buff.writeUInt32BE(rows, buff.length - 4);
      return buff;
    }, "execute");
    var cancel = /* @__PURE__ */ __name((processID, secretKey) => {
      const buffer = Buffer.allocUnsafe(16);
      buffer.writeInt32BE(16, 0);
      buffer.writeInt16BE(1234, 4);
      buffer.writeInt16BE(5678, 6);
      buffer.writeInt32BE(processID, 8);
      buffer.writeInt32BE(secretKey, 12);
      return buffer;
    }, "cancel");
    var cstringMessage = /* @__PURE__ */ __name((code, string) => {
      const stringLen = Buffer.byteLength(string);
      const len = 4 + stringLen + 1;
      const buffer = Buffer.allocUnsafe(1 + len);
      buffer[0] = code;
      buffer.writeInt32BE(len, 1);
      buffer.write(string, 5, "utf-8");
      buffer[len] = 0;
      return buffer;
    }, "cstringMessage");
    var emptyDescribePortal = writer.addCString("P").flush(
      68
      /* code.describe */
    );
    var emptyDescribeStatement = writer.addCString("S").flush(
      68
      /* code.describe */
    );
    var describe = /* @__PURE__ */ __name((msg) => {
      return msg.name ? cstringMessage(68, `${msg.type}${msg.name || ""}`) : msg.type === "P" ? emptyDescribePortal : emptyDescribeStatement;
    }, "describe");
    var close = /* @__PURE__ */ __name((msg) => {
      const text = `${msg.type}${msg.name || ""}`;
      return cstringMessage(67, text);
    }, "close");
    var copyData = /* @__PURE__ */ __name((chunk) => {
      return writer.add(chunk).flush(
        100
        /* code.copyFromChunk */
      );
    }, "copyData");
    var copyFail = /* @__PURE__ */ __name((message) => {
      return cstringMessage(102, message);
    }, "copyFail");
    var codeOnlyBuffer = /* @__PURE__ */ __name((code) => Buffer.from([code, 0, 0, 0, 4]), "codeOnlyBuffer");
    var flushBuffer = codeOnlyBuffer(
      72
      /* code.flush */
    );
    var syncBuffer = codeOnlyBuffer(
      83
      /* code.sync */
    );
    var endBuffer = codeOnlyBuffer(
      88
      /* code.end */
    );
    var copyDoneBuffer = codeOnlyBuffer(
      99
      /* code.copyDone */
    );
    var serialize = {
      startup,
      password,
      requestSsl,
      sendSASLInitialResponseMessage,
      sendSCRAMClientFinalMessage,
      query,
      parse,
      bind,
      execute,
      describe,
      close,
      flush: /* @__PURE__ */ __name(() => flushBuffer, "flush"),
      sync: /* @__PURE__ */ __name(() => syncBuffer, "sync"),
      end: /* @__PURE__ */ __name(() => endBuffer, "end"),
      copyData,
      copyDone: /* @__PURE__ */ __name(() => copyDoneBuffer, "copyDone"),
      copyFail,
      cancel
    };
    exports.serialize = serialize;
  }
});

// node_modules/pg-protocol/dist/buffer-reader.js
var require_buffer_reader = __commonJS({
  "node_modules/pg-protocol/dist/buffer-reader.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BufferReader = void 0;
    var BufferReader = class {
      static {
        __name(this, "BufferReader");
      }
      constructor(offset = 0) {
        this.offset = offset;
        this.buffer = Buffer.allocUnsafe(0);
        this.encoding = "utf-8";
      }
      setBuffer(offset, buffer) {
        this.offset = offset;
        this.buffer = buffer;
      }
      int16() {
        const result = this.buffer.readInt16BE(this.offset);
        this.offset += 2;
        return result;
      }
      byte() {
        const result = this.buffer[this.offset];
        this.offset++;
        return result;
      }
      int32() {
        const result = this.buffer.readInt32BE(this.offset);
        this.offset += 4;
        return result;
      }
      uint32() {
        const result = this.buffer.readUInt32BE(this.offset);
        this.offset += 4;
        return result;
      }
      string(length) {
        const result = this.buffer.toString(this.encoding, this.offset, this.offset + length);
        this.offset += length;
        return result;
      }
      cstring() {
        const start = this.offset;
        let end = start;
        while (this.buffer[end++] !== 0) {
        }
        this.offset = end;
        return this.buffer.toString(this.encoding, start, end - 1);
      }
      bytes(length) {
        const result = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return result;
      }
    };
    exports.BufferReader = BufferReader;
  }
});

// node_modules/pg-protocol/dist/parser.js
var require_parser = __commonJS({
  "node_modules/pg-protocol/dist/parser.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var messages_1 = require_messages();
    var buffer_reader_1 = require_buffer_reader();
    var CODE_LENGTH = 1;
    var LEN_LENGTH = 4;
    var HEADER_LENGTH = CODE_LENGTH + LEN_LENGTH;
    var LATEINIT_LENGTH = -1;
    var emptyBuffer = Buffer.allocUnsafe(0);
    var Parser = class {
      static {
        __name(this, "Parser");
      }
      constructor(opts) {
        this.buffer = emptyBuffer;
        this.bufferLength = 0;
        this.bufferOffset = 0;
        this.reader = new buffer_reader_1.BufferReader();
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === "binary") {
          throw new Error("Binary mode not supported yet");
        }
        this.mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || "text";
      }
      parse(buffer, callback) {
        this.mergeBuffer(buffer);
        const bufferFullLength = this.bufferOffset + this.bufferLength;
        let offset = this.bufferOffset;
        while (offset + HEADER_LENGTH <= bufferFullLength) {
          const code = this.buffer[offset];
          const length = this.buffer.readUInt32BE(offset + CODE_LENGTH);
          const fullMessageLength = CODE_LENGTH + length;
          if (fullMessageLength + offset <= bufferFullLength) {
            const message = this.handlePacket(offset + HEADER_LENGTH, code, length, this.buffer);
            callback(message);
            offset += fullMessageLength;
          } else {
            break;
          }
        }
        if (offset === bufferFullLength) {
          this.buffer = emptyBuffer;
          this.bufferLength = 0;
          this.bufferOffset = 0;
        } else {
          this.bufferLength = bufferFullLength - offset;
          this.bufferOffset = offset;
        }
      }
      mergeBuffer(buffer) {
        if (this.bufferLength > 0) {
          const newLength = this.bufferLength + buffer.byteLength;
          const newFullLength = newLength + this.bufferOffset;
          if (newFullLength > this.buffer.byteLength) {
            let newBuffer;
            if (newLength <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) {
              newBuffer = this.buffer;
            } else {
              let newBufferLength = this.buffer.byteLength * 2;
              while (newLength >= newBufferLength) {
                newBufferLength *= 2;
              }
              newBuffer = Buffer.allocUnsafe(newBufferLength);
            }
            this.buffer.copy(newBuffer, 0, this.bufferOffset, this.bufferOffset + this.bufferLength);
            this.buffer = newBuffer;
            this.bufferOffset = 0;
          }
          buffer.copy(this.buffer, this.bufferOffset + this.bufferLength);
          this.bufferLength = newLength;
        } else {
          this.buffer = buffer;
          this.bufferOffset = 0;
          this.bufferLength = buffer.byteLength;
        }
      }
      handlePacket(offset, code, length, bytes) {
        const { reader } = this;
        reader.setBuffer(offset, bytes);
        let message;
        switch (code) {
          case 50:
            message = messages_1.bindComplete;
            break;
          case 49:
            message = messages_1.parseComplete;
            break;
          case 51:
            message = messages_1.closeComplete;
            break;
          case 110:
            message = messages_1.noData;
            break;
          case 115:
            message = messages_1.portalSuspended;
            break;
          case 99:
            message = messages_1.copyDone;
            break;
          case 87:
            message = messages_1.replicationStart;
            break;
          case 73:
            message = messages_1.emptyQuery;
            break;
          case 68:
            message = parseDataRowMessage(reader);
            break;
          case 67:
            message = parseCommandCompleteMessage(reader);
            break;
          case 90:
            message = parseReadyForQueryMessage(reader);
            break;
          case 65:
            message = parseNotificationMessage(reader);
            break;
          case 82:
            message = parseAuthenticationResponse(reader, length);
            break;
          case 83:
            message = parseParameterStatusMessage(reader);
            break;
          case 75:
            message = parseBackendKeyData(reader);
            break;
          case 69:
            message = parseErrorMessage(reader, "error");
            break;
          case 78:
            message = parseErrorMessage(reader, "notice");
            break;
          case 84:
            message = parseRowDescriptionMessage(reader);
            break;
          case 116:
            message = parseParameterDescriptionMessage(reader);
            break;
          case 71:
            message = parseCopyInMessage(reader);
            break;
          case 72:
            message = parseCopyOutMessage(reader);
            break;
          case 100:
            message = parseCopyData(reader, length);
            break;
          default:
            return new messages_1.DatabaseError("received invalid response: " + code.toString(16), length, "error");
        }
        reader.setBuffer(0, emptyBuffer);
        message.length = length;
        return message;
      }
    };
    exports.Parser = Parser;
    var parseReadyForQueryMessage = /* @__PURE__ */ __name((reader) => {
      const status = reader.string(1);
      return new messages_1.ReadyForQueryMessage(LATEINIT_LENGTH, status);
    }, "parseReadyForQueryMessage");
    var parseCommandCompleteMessage = /* @__PURE__ */ __name((reader) => {
      const text = reader.cstring();
      return new messages_1.CommandCompleteMessage(LATEINIT_LENGTH, text);
    }, "parseCommandCompleteMessage");
    var parseCopyData = /* @__PURE__ */ __name((reader, length) => {
      const chunk = reader.bytes(length - 4);
      return new messages_1.CopyDataMessage(LATEINIT_LENGTH, chunk);
    }, "parseCopyData");
    var parseCopyInMessage = /* @__PURE__ */ __name((reader) => parseCopyMessage(reader, "copyInResponse"), "parseCopyInMessage");
    var parseCopyOutMessage = /* @__PURE__ */ __name((reader) => parseCopyMessage(reader, "copyOutResponse"), "parseCopyOutMessage");
    var parseCopyMessage = /* @__PURE__ */ __name((reader, messageName) => {
      const isBinary = reader.byte() !== 0;
      const columnCount = reader.int16();
      const message = new messages_1.CopyResponse(LATEINIT_LENGTH, messageName, isBinary, columnCount);
      for (let i = 0; i < columnCount; i++) {
        message.columnTypes[i] = reader.int16();
      }
      return message;
    }, "parseCopyMessage");
    var parseNotificationMessage = /* @__PURE__ */ __name((reader) => {
      const processId = reader.int32();
      const channel = reader.cstring();
      const payload = reader.cstring();
      return new messages_1.NotificationResponseMessage(LATEINIT_LENGTH, processId, channel, payload);
    }, "parseNotificationMessage");
    var parseRowDescriptionMessage = /* @__PURE__ */ __name((reader) => {
      const fieldCount = reader.int16();
      const message = new messages_1.RowDescriptionMessage(LATEINIT_LENGTH, fieldCount);
      for (let i = 0; i < fieldCount; i++) {
        message.fields[i] = parseField(reader);
      }
      return message;
    }, "parseRowDescriptionMessage");
    var parseField = /* @__PURE__ */ __name((reader) => {
      const name2 = reader.cstring();
      const tableID = reader.uint32();
      const columnID = reader.int16();
      const dataTypeID = reader.uint32();
      const dataTypeSize = reader.int16();
      const dataTypeModifier = reader.int32();
      const mode = reader.int16() === 0 ? "text" : "binary";
      return new messages_1.Field(name2, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, mode);
    }, "parseField");
    var parseParameterDescriptionMessage = /* @__PURE__ */ __name((reader) => {
      const parameterCount = reader.int16();
      const message = new messages_1.ParameterDescriptionMessage(LATEINIT_LENGTH, parameterCount);
      for (let i = 0; i < parameterCount; i++) {
        message.dataTypeIDs[i] = reader.int32();
      }
      return message;
    }, "parseParameterDescriptionMessage");
    var parseDataRowMessage = /* @__PURE__ */ __name((reader) => {
      const fieldCount = reader.int16();
      const fields = new Array(fieldCount);
      for (let i = 0; i < fieldCount; i++) {
        const len = reader.int32();
        fields[i] = len === -1 ? null : reader.string(len);
      }
      return new messages_1.DataRowMessage(LATEINIT_LENGTH, fields);
    }, "parseDataRowMessage");
    var parseParameterStatusMessage = /* @__PURE__ */ __name((reader) => {
      const name2 = reader.cstring();
      const value = reader.cstring();
      return new messages_1.ParameterStatusMessage(LATEINIT_LENGTH, name2, value);
    }, "parseParameterStatusMessage");
    var parseBackendKeyData = /* @__PURE__ */ __name((reader) => {
      const processID = reader.int32();
      const secretKey = reader.int32();
      return new messages_1.BackendKeyDataMessage(LATEINIT_LENGTH, processID, secretKey);
    }, "parseBackendKeyData");
    var parseAuthenticationResponse = /* @__PURE__ */ __name((reader, length) => {
      const code = reader.int32();
      const message = {
        name: "authenticationOk",
        length
      };
      switch (code) {
        case 0:
          break;
        case 3:
          if (message.length === 8) {
            message.name = "authenticationCleartextPassword";
          }
          break;
        case 5:
          if (message.length === 12) {
            message.name = "authenticationMD5Password";
            const salt = reader.bytes(4);
            return new messages_1.AuthenticationMD5Password(LATEINIT_LENGTH, salt);
          }
          break;
        case 10:
          {
            message.name = "authenticationSASL";
            message.mechanisms = [];
            let mechanism;
            do {
              mechanism = reader.cstring();
              if (mechanism) {
                message.mechanisms.push(mechanism);
              }
            } while (mechanism);
          }
          break;
        case 11:
          message.name = "authenticationSASLContinue";
          message.data = reader.string(length - 8);
          break;
        case 12:
          message.name = "authenticationSASLFinal";
          message.data = reader.string(length - 8);
          break;
        default:
          throw new Error("Unknown authenticationOk message type " + code);
      }
      return message;
    }, "parseAuthenticationResponse");
    var parseErrorMessage = /* @__PURE__ */ __name((reader, name2) => {
      const fields = {};
      let fieldType = reader.string(1);
      while (fieldType !== "\0") {
        fields[fieldType] = reader.cstring();
        fieldType = reader.string(1);
      }
      const messageValue = fields.M;
      const message = name2 === "notice" ? new messages_1.NoticeMessage(LATEINIT_LENGTH, messageValue) : new messages_1.DatabaseError(messageValue, LATEINIT_LENGTH, name2);
      message.severity = fields.S;
      message.code = fields.C;
      message.detail = fields.D;
      message.hint = fields.H;
      message.position = fields.P;
      message.internalPosition = fields.p;
      message.internalQuery = fields.q;
      message.where = fields.W;
      message.schema = fields.s;
      message.table = fields.t;
      message.column = fields.c;
      message.dataType = fields.d;
      message.constraint = fields.n;
      message.file = fields.F;
      message.line = fields.L;
      message.routine = fields.R;
      return message;
    }, "parseErrorMessage");
  }
});

// node_modules/pg-protocol/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/pg-protocol/dist/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DatabaseError = exports.serialize = exports.parse = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "DatabaseError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return messages_1.DatabaseError;
    }, "get") });
    var serializer_1 = require_serializer();
    Object.defineProperty(exports, "serialize", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return serializer_1.serialize;
    }, "get") });
    var parser_1 = require_parser();
    function parse(stream, callback) {
      const parser = new parser_1.Parser();
      stream.on("data", (buffer) => parser.parse(buffer, callback));
      return new Promise((resolve) => stream.on("end", () => resolve()));
    }
    __name(parse, "parse");
    exports.parse = parse;
  }
});

// node_modules/pg-cloudflare/dist/empty.js
var require_empty = __commonJS({
  "node_modules/pg-cloudflare/dist/empty.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {};
  }
});

// node_modules/pg/lib/stream.js
var require_stream = __commonJS({
  "node_modules/pg/lib/stream.js"(exports, module) {
    init_esm();
    var { getStream, getSecureStream } = getStreamFuncs();
    module.exports = {
      /**
       * Get a socket stream compatible with the current runtime environment.
       * @returns {Duplex}
       */
      getStream,
      /**
       * Get a TLS secured socket, compatible with the current environment,
       * using the socket and other settings given in `options`.
       * @returns {Duplex}
       */
      getSecureStream
    };
    function getNodejsStreamFuncs() {
      function getStream2(ssl) {
        const net = __require("net");
        return new net.Socket();
      }
      __name(getStream2, "getStream");
      function getSecureStream2(options) {
        const tls = __require("tls");
        return tls.connect(options);
      }
      __name(getSecureStream2, "getSecureStream");
      return {
        getStream: getStream2,
        getSecureStream: getSecureStream2
      };
    }
    __name(getNodejsStreamFuncs, "getNodejsStreamFuncs");
    function getCloudflareStreamFuncs() {
      function getStream2(ssl) {
        const { CloudflareSocket } = require_empty();
        return new CloudflareSocket(ssl);
      }
      __name(getStream2, "getStream");
      function getSecureStream2(options) {
        options.socket.startTls(options);
        return options.socket;
      }
      __name(getSecureStream2, "getSecureStream");
      return {
        getStream: getStream2,
        getSecureStream: getSecureStream2
      };
    }
    __name(getCloudflareStreamFuncs, "getCloudflareStreamFuncs");
    function isCloudflareRuntime() {
      if (typeof navigator === "object" && navigator !== null && typeof navigator.userAgent === "string") {
        return navigator.userAgent === "Cloudflare-Workers";
      }
      if (typeof Response === "function") {
        const resp = new Response(null, { cf: { thing: true } });
        if (typeof resp.cf === "object" && resp.cf !== null && resp.cf.thing) {
          return true;
        }
      }
      return false;
    }
    __name(isCloudflareRuntime, "isCloudflareRuntime");
    function getStreamFuncs() {
      if (isCloudflareRuntime()) {
        return getCloudflareStreamFuncs();
      }
      return getNodejsStreamFuncs();
    }
    __name(getStreamFuncs, "getStreamFuncs");
  }
});

// node_modules/pg/lib/connection.js
var require_connection = __commonJS({
  "node_modules/pg/lib/connection.js"(exports, module) {
    "use strict";
    init_esm();
    var EventEmitter = __require("events").EventEmitter;
    var { parse, serialize } = require_dist2();
    var { getStream, getSecureStream } = require_stream();
    var flushBuffer = serialize.flush();
    var syncBuffer = serialize.sync();
    var endBuffer = serialize.end();
    var Connection2 = class extends EventEmitter {
      static {
        __name(this, "Connection");
      }
      constructor(config2) {
        super();
        config2 = config2 || {};
        this.stream = config2.stream || getStream(config2.ssl);
        if (typeof this.stream === "function") {
          this.stream = this.stream(config2);
        }
        this._keepAlive = config2.keepAlive;
        this._keepAliveInitialDelayMillis = config2.keepAliveInitialDelayMillis;
        this.parsedStatements = {};
        this.ssl = config2.ssl || false;
        this._ending = false;
        this._emitMessage = false;
        const self2 = this;
        this.on("newListener", function(eventName) {
          if (eventName === "message") {
            self2._emitMessage = true;
          }
        });
      }
      connect(port, host) {
        const self2 = this;
        this._connecting = true;
        this.stream.setNoDelay(true);
        this.stream.connect(port, host);
        this.stream.once("connect", function() {
          if (self2._keepAlive) {
            self2.stream.setKeepAlive(true, self2._keepAliveInitialDelayMillis);
          }
          self2.emit("connect");
        });
        const reportStreamError = /* @__PURE__ */ __name(function(error) {
          if (self2._ending && (error.code === "ECONNRESET" || error.code === "EPIPE")) {
            return;
          }
          self2.emit("error", error);
        }, "reportStreamError");
        this.stream.on("error", reportStreamError);
        this.stream.on("close", function() {
          self2.emit("end");
        });
        if (!this.ssl) {
          return this.attachListeners(this.stream);
        }
        this.stream.once("data", function(buffer) {
          const responseCode = buffer.toString("utf8");
          switch (responseCode) {
            case "S":
              break;
            case "N":
              self2.stream.end();
              return self2.emit("error", new Error("The server does not support SSL connections"));
            default:
              self2.stream.end();
              return self2.emit("error", new Error("There was an error establishing an SSL connection"));
          }
          const options = {
            socket: self2.stream
          };
          if (self2.ssl !== true) {
            Object.assign(options, self2.ssl);
            if ("key" in self2.ssl) {
              options.key = self2.ssl.key;
            }
          }
          const net = __require("net");
          if (net.isIP && net.isIP(host) === 0) {
            options.servername = host;
          }
          try {
            self2.stream = getSecureStream(options);
          } catch (err) {
            return self2.emit("error", err);
          }
          self2.attachListeners(self2.stream);
          self2.stream.on("error", reportStreamError);
          self2.emit("sslconnect");
        });
      }
      attachListeners(stream) {
        parse(stream, (msg) => {
          const eventName = msg.name === "error" ? "errorMessage" : msg.name;
          if (this._emitMessage) {
            this.emit("message", msg);
          }
          this.emit(eventName, msg);
        });
      }
      requestSsl() {
        this.stream.write(serialize.requestSsl());
      }
      startup(config2) {
        this.stream.write(serialize.startup(config2));
      }
      cancel(processID, secretKey) {
        this._send(serialize.cancel(processID, secretKey));
      }
      password(password) {
        this._send(serialize.password(password));
      }
      sendSASLInitialResponseMessage(mechanism, initialResponse) {
        this._send(serialize.sendSASLInitialResponseMessage(mechanism, initialResponse));
      }
      sendSCRAMClientFinalMessage(additionalData) {
        this._send(serialize.sendSCRAMClientFinalMessage(additionalData));
      }
      _send(buffer) {
        if (!this.stream.writable) {
          return false;
        }
        return this.stream.write(buffer);
      }
      query(text) {
        this._send(serialize.query(text));
      }
      // send parse message
      parse(query) {
        this._send(serialize.parse(query));
      }
      // send bind message
      bind(config2) {
        this._send(serialize.bind(config2));
      }
      // send execute message
      execute(config2) {
        this._send(serialize.execute(config2));
      }
      flush() {
        if (this.stream.writable) {
          this.stream.write(flushBuffer);
        }
      }
      sync() {
        this._ending = true;
        this._send(syncBuffer);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        this._ending = true;
        if (!this._connecting || !this.stream.writable) {
          this.stream.end();
          return;
        }
        return this.stream.write(endBuffer, () => {
          this.stream.end();
        });
      }
      close(msg) {
        this._send(serialize.close(msg));
      }
      describe(msg) {
        this._send(serialize.describe(msg));
      }
      sendCopyFromChunk(chunk) {
        this._send(serialize.copyData(chunk));
      }
      endCopyFrom() {
        this._send(serialize.copyDone());
      }
      sendCopyFail(msg) {
        this._send(serialize.copyFail(msg));
      }
    };
    module.exports = Connection2;
  }
});

// node_modules/split2/index.js
var require_split2 = __commonJS({
  "node_modules/split2/index.js"(exports, module) {
    "use strict";
    init_esm();
    var { Transform } = __require("stream");
    var { StringDecoder } = __require("string_decoder");
    var kLast = Symbol("last");
    var kDecoder = Symbol("decoder");
    function transform(chunk, enc, cb) {
      let list;
      if (this.overflow) {
        const buf = this[kDecoder].write(chunk);
        list = buf.split(this.matcher);
        if (list.length === 1) return cb();
        list.shift();
        this.overflow = false;
      } else {
        this[kLast] += this[kDecoder].write(chunk);
        list = this[kLast].split(this.matcher);
      }
      this[kLast] = list.pop();
      for (let i = 0; i < list.length; i++) {
        try {
          push(this, this.mapper(list[i]));
        } catch (error) {
          return cb(error);
        }
      }
      this.overflow = this[kLast].length > this.maxLength;
      if (this.overflow && !this.skipOverflow) {
        cb(new Error("maximum buffer reached"));
        return;
      }
      cb();
    }
    __name(transform, "transform");
    function flush(cb) {
      this[kLast] += this[kDecoder].end();
      if (this[kLast]) {
        try {
          push(this, this.mapper(this[kLast]));
        } catch (error) {
          return cb(error);
        }
      }
      cb();
    }
    __name(flush, "flush");
    function push(self2, val) {
      if (val !== void 0) {
        self2.push(val);
      }
    }
    __name(push, "push");
    function noop(incoming) {
      return incoming;
    }
    __name(noop, "noop");
    function split(matcher, mapper, options) {
      matcher = matcher || /\r?\n/;
      mapper = mapper || noop;
      options = options || {};
      switch (arguments.length) {
        case 1:
          if (typeof matcher === "function") {
            mapper = matcher;
            matcher = /\r?\n/;
          } else if (typeof matcher === "object" && !(matcher instanceof RegExp) && !matcher[Symbol.split]) {
            options = matcher;
            matcher = /\r?\n/;
          }
          break;
        case 2:
          if (typeof matcher === "function") {
            options = mapper;
            mapper = matcher;
            matcher = /\r?\n/;
          } else if (typeof mapper === "object") {
            options = mapper;
            mapper = noop;
          }
      }
      options = Object.assign({}, options);
      options.autoDestroy = true;
      options.transform = transform;
      options.flush = flush;
      options.readableObjectMode = true;
      const stream = new Transform(options);
      stream[kLast] = "";
      stream[kDecoder] = new StringDecoder("utf8");
      stream.matcher = matcher;
      stream.mapper = mapper;
      stream.maxLength = options.maxLength;
      stream.skipOverflow = options.skipOverflow || false;
      stream.overflow = false;
      stream._destroy = function(err, cb) {
        this._writableState.errorEmitted = false;
        cb(err);
      };
      return stream;
    }
    __name(split, "split");
    module.exports = split;
  }
});

// node_modules/pgpass/lib/helper.js
var require_helper = __commonJS({
  "node_modules/pgpass/lib/helper.js"(exports, module) {
    "use strict";
    init_esm();
    var path2 = __require("path");
    var Stream = __require("stream").Stream;
    var split = require_split2();
    var util = __require("util");
    var defaultPort = 5432;
    var isWin = process.platform === "win32";
    var warnStream = process.stderr;
    var S_IRWXG = 56;
    var S_IRWXO = 7;
    var S_IFMT = 61440;
    var S_IFREG = 32768;
    function isRegFile(mode) {
      return (mode & S_IFMT) == S_IFREG;
    }
    __name(isRegFile, "isRegFile");
    var fieldNames = ["host", "port", "database", "user", "password"];
    var nrOfFields = fieldNames.length;
    var passKey = fieldNames[nrOfFields - 1];
    function warn() {
      var isWritable = warnStream instanceof Stream && true === warnStream.writable;
      if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat("\n");
        warnStream.write(util.format.apply(util, args));
      }
    }
    __name(warn, "warn");
    Object.defineProperty(module.exports, "isWin", {
      get: /* @__PURE__ */ __name(function() {
        return isWin;
      }, "get"),
      set: /* @__PURE__ */ __name(function(val) {
        isWin = val;
      }, "set")
    });
    module.exports.warnTo = function(stream) {
      var old = warnStream;
      warnStream = stream;
      return old;
    };
    module.exports.getFileName = function(rawEnv) {
      var env = rawEnv || process.env;
      var file = env.PGPASSFILE || (isWin ? path2.join(env.APPDATA || "./", "postgresql", "pgpass.conf") : path2.join(env.HOME || "./", ".pgpass"));
      return file;
    };
    module.exports.usePgPass = function(stats, fname) {
      if (Object.prototype.hasOwnProperty.call(process.env, "PGPASSWORD")) {
        return false;
      }
      if (isWin) {
        return true;
      }
      fname = fname || "<unkn>";
      if (!isRegFile(stats.mode)) {
        warn('WARNING: password file "%s" is not a plain file', fname);
        return false;
      }
      if (stats.mode & (S_IRWXG | S_IRWXO)) {
        warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname);
        return false;
      }
      return true;
    };
    var matcher = module.exports.match = function(connInfo, entry) {
      return fieldNames.slice(0, -1).reduce(function(prev, field, idx) {
        if (idx == 1) {
          if (Number(connInfo[field] || defaultPort) === Number(entry[field])) {
            return prev && true;
          }
        }
        return prev && (entry[field] === "*" || entry[field] === connInfo[field]);
      }, true);
    };
    module.exports.getPassword = function(connInfo, stream, cb) {
      var pass;
      var lineStream = stream.pipe(split());
      function onLine(line) {
        var entry = parseLine(line);
        if (entry && isValidEntry(entry) && matcher(connInfo, entry)) {
          pass = entry[passKey];
          lineStream.end();
        }
      }
      __name(onLine, "onLine");
      var onEnd = /* @__PURE__ */ __name(function() {
        stream.destroy();
        cb(pass);
      }, "onEnd");
      var onErr = /* @__PURE__ */ __name(function(err) {
        stream.destroy();
        warn("WARNING: error on reading file: %s", err);
        cb(void 0);
      }, "onErr");
      stream.on("error", onErr);
      lineStream.on("data", onLine).on("end", onEnd).on("error", onErr);
    };
    var parseLine = module.exports.parseLine = function(line) {
      if (line.length < 11 || line.match(/^\s+#/)) {
        return null;
      }
      var curChar = "";
      var prevChar = "";
      var fieldIdx = 0;
      var startIdx = 0;
      var endIdx = 0;
      var obj = {};
      var isLastField = false;
      var addToObj = /* @__PURE__ */ __name(function(idx, i0, i1) {
        var field = line.substring(i0, i1);
        if (!Object.hasOwnProperty.call(process.env, "PGPASS_NO_DEESCAPE")) {
          field = field.replace(/\\([:\\])/g, "$1");
        }
        obj[fieldNames[idx]] = field;
      }, "addToObj");
      for (var i = 0; i < line.length - 1; i += 1) {
        curChar = line.charAt(i + 1);
        prevChar = line.charAt(i);
        isLastField = fieldIdx == nrOfFields - 1;
        if (isLastField) {
          addToObj(fieldIdx, startIdx);
          break;
        }
        if (i >= 0 && curChar == ":" && prevChar !== "\\") {
          addToObj(fieldIdx, startIdx, i + 1);
          startIdx = i + 2;
          fieldIdx += 1;
        }
      }
      obj = Object.keys(obj).length === nrOfFields ? obj : null;
      return obj;
    };
    var isValidEntry = module.exports.isValidEntry = function(entry) {
      var rules = {
        // host
        0: function(x2) {
          return x2.length > 0;
        },
        // port
        1: function(x2) {
          if (x2 === "*") {
            return true;
          }
          x2 = Number(x2);
          return isFinite(x2) && x2 > 0 && x2 < 9007199254740992 && Math.floor(x2) === x2;
        },
        // database
        2: function(x2) {
          return x2.length > 0;
        },
        // username
        3: function(x2) {
          return x2.length > 0;
        },
        // password
        4: function(x2) {
          return x2.length > 0;
        }
      };
      for (var idx = 0; idx < fieldNames.length; idx += 1) {
        var rule = rules[idx];
        var value = entry[fieldNames[idx]] || "";
        var res = rule(value);
        if (!res) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/pgpass/lib/index.js
var require_lib = __commonJS({
  "node_modules/pgpass/lib/index.js"(exports, module) {
    "use strict";
    init_esm();
    var path2 = __require("path");
    var fs = __require("fs");
    var helper = require_helper();
    module.exports = function(connInfo, cb) {
      var file = helper.getFileName();
      fs.stat(file, function(err, stat) {
        if (err || !helper.usePgPass(stat, file)) {
          return cb(void 0);
        }
        var st = fs.createReadStream(file);
        helper.getPassword(connInfo, st, cb);
      });
    };
    module.exports.warnTo = helper.warnTo;
  }
});

// node_modules/pg/lib/client.js
var require_client2 = __commonJS({
  "node_modules/pg/lib/client.js"(exports, module) {
    init_esm();
    var EventEmitter = __require("events").EventEmitter;
    var utils = require_utils();
    var nodeUtils = __require("util");
    var sasl = require_sasl();
    var TypeOverrides2 = require_type_overrides();
    var ConnectionParameters = require_connection_parameters();
    var Query2 = require_query();
    var defaults2 = require_defaults();
    var Connection2 = require_connection();
    var crypto2 = require_utils2();
    var activeQueryDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Client.activeQuery is deprecated and will be removed in pg@9.0"
    );
    var queryQueueDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Client.queryQueue is deprecated and will be removed in pg@9.0."
    );
    var pgPassDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "pgpass support is deprecated and will be removed in pg@9.0. You can provide an async function as the password property to the Client/Pool constructor that returns a password instead. Within this function you can call the pgpass module in your own code."
    );
    var byoPromiseDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Passing a custom Promise implementation to the Client/Pool constructor is deprecated and will be removed in pg@9.0."
    );
    var queryQueueLengthDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Calling client.query() when the client is already executing a query is deprecated and will be removed in pg@9.0. Use async/await or an external async flow control mechanism instead."
    );
    function coerceNumberOrDefault(value, defaultValue) {
      if (typeof value === "number") {
        return Number.isFinite(value) ? value : defaultValue;
      }
      if (typeof value === "string" && value.trim() !== "") {
        const n = Number(value);
        return Number.isFinite(n) ? n : defaultValue;
      }
      return defaultValue;
    }
    __name(coerceNumberOrDefault, "coerceNumberOrDefault");
    var Client2 = class extends EventEmitter {
      static {
        __name(this, "Client");
      }
      constructor(config2) {
        super();
        this.connectionParameters = new ConnectionParameters(config2);
        this.user = this.connectionParameters.user;
        this.database = this.connectionParameters.database;
        this.port = this.connectionParameters.port;
        this.host = this.connectionParameters.host;
        Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: this.connectionParameters.password
        });
        this.replication = this.connectionParameters.replication;
        const c = config2 || {};
        if (c.Promise) {
          byoPromiseDeprecationNotice();
        }
        this._Promise = c.Promise || global.Promise;
        this._types = new TypeOverrides2(c.types);
        this._ending = false;
        this._ended = false;
        this._connecting = false;
        this._connected = false;
        this._connectionError = false;
        this._queryable = true;
        this._activeQuery = null;
        this._txStatus = null;
        this.enableChannelBinding = Boolean(c.enableChannelBinding);
        this.scramMaxIterations = coerceNumberOrDefault(c.scramMaxIterations, sasl.DEFAULT_MAX_SCRAM_ITERATIONS);
        this.connection = c.connection || new Connection2({
          stream: c.stream,
          ssl: this.connectionParameters.ssl,
          keepAlive: c.keepAlive || false,
          keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
          encoding: this.connectionParameters.client_encoding || "utf8"
        });
        this._queryQueue = [];
        this.binary = c.binary || defaults2.binary;
        this.processID = null;
        this.secretKey = null;
        this.ssl = this.connectionParameters.ssl || false;
        if (this.ssl && this.ssl.key) {
          Object.defineProperty(this.ssl, "key", {
            enumerable: false
          });
        }
        this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0;
      }
      get activeQuery() {
        activeQueryDeprecationNotice();
        return this._activeQuery;
      }
      set activeQuery(val) {
        activeQueryDeprecationNotice();
        this._activeQuery = val;
      }
      _getActiveQuery() {
        return this._activeQuery;
      }
      _errorAllQueries(err) {
        const enqueueError = /* @__PURE__ */ __name((query) => {
          process.nextTick(() => {
            query.handleError(err, this.connection);
          });
        }, "enqueueError");
        const activeQuery = this._getActiveQuery();
        if (activeQuery) {
          enqueueError(activeQuery);
          this._activeQuery = null;
        }
        this._queryQueue.forEach(enqueueError);
        this._queryQueue.length = 0;
      }
      _connect(callback) {
        const self2 = this;
        const con = this.connection;
        this._connectionCallback = callback;
        if (this._connecting || this._connected) {
          const err = new Error("Client has already been connected. You cannot reuse a client.");
          process.nextTick(() => {
            callback(err);
          });
          return;
        }
        this._connecting = true;
        if (this._connectionTimeoutMillis > 0) {
          this.connectionTimeoutHandle = setTimeout(() => {
            con._ending = true;
            con.stream.destroy(new Error("timeout expired"));
          }, this._connectionTimeoutMillis);
          if (this.connectionTimeoutHandle.unref) {
            this.connectionTimeoutHandle.unref();
          }
        }
        if (this.host && this.host.indexOf("/") === 0) {
          con.connect(this.host + "/.s.PGSQL." + this.port);
        } else {
          con.connect(this.port, this.host);
        }
        con.on("connect", function() {
          if (self2.ssl) {
            con.requestSsl();
          } else {
            con.startup(self2.getStartupConf());
          }
        });
        con.on("sslconnect", function() {
          con.startup(self2.getStartupConf());
        });
        this._attachListeners(con);
        con.once("end", () => {
          const error = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
          clearTimeout(this.connectionTimeoutHandle);
          this._errorAllQueries(error);
          this._ended = true;
          if (!this._ending) {
            if (this._connecting && !this._connectionError) {
              if (this._connectionCallback) {
                this._connectionCallback(error);
              } else {
                this._handleErrorEvent(error);
              }
            } else if (!this._connectionError) {
              this._handleErrorEvent(error);
            }
          }
          process.nextTick(() => {
            this.emit("end");
          });
        });
      }
      connect(callback) {
        if (callback) {
          this._connect(callback);
          return;
        }
        return new this._Promise((resolve, reject) => {
          this._connect((error) => {
            if (error) {
              reject(error);
            } else {
              resolve(this);
            }
          });
        });
      }
      _attachListeners(con) {
        con.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this));
        con.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this));
        con.on("authenticationSASL", this._handleAuthSASL.bind(this));
        con.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this));
        con.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this));
        con.on("backendKeyData", this._handleBackendKeyData.bind(this));
        con.on("error", this._handleErrorEvent.bind(this));
        con.on("errorMessage", this._handleErrorMessage.bind(this));
        con.on("readyForQuery", this._handleReadyForQuery.bind(this));
        con.on("notice", this._handleNotice.bind(this));
        con.on("rowDescription", this._handleRowDescription.bind(this));
        con.on("dataRow", this._handleDataRow.bind(this));
        con.on("portalSuspended", this._handlePortalSuspended.bind(this));
        con.on("emptyQuery", this._handleEmptyQuery.bind(this));
        con.on("commandComplete", this._handleCommandComplete.bind(this));
        con.on("parseComplete", this._handleParseComplete.bind(this));
        con.on("copyInResponse", this._handleCopyInResponse.bind(this));
        con.on("copyData", this._handleCopyData.bind(this));
        con.on("notification", this._handleNotification.bind(this));
      }
      _getPassword(cb) {
        const con = this.connection;
        if (typeof this.password === "function") {
          this._Promise.resolve().then(() => this.password(this.connectionParameters)).then((pass) => {
            if (pass !== void 0) {
              if (typeof pass !== "string") {
                con.emit("error", new TypeError("Password must be a string"));
                return;
              }
              this.connectionParameters.password = this.password = pass;
            } else {
              this.connectionParameters.password = this.password = null;
            }
            cb();
          }).catch((err) => {
            con.emit("error", err);
          });
        } else if (this.password !== null) {
          cb();
        } else {
          try {
            const pgPass = require_lib();
            pgPass(this.connectionParameters, (pass) => {
              if (void 0 !== pass) {
                pgPassDeprecationNotice();
                this.connectionParameters.password = this.password = pass;
              }
              cb();
            });
          } catch (e) {
            this.emit("error", e);
          }
        }
      }
      _handleAuthCleartextPassword(msg) {
        this._getPassword(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(msg) {
        this._getPassword(async () => {
          try {
            const hashedPassword = await crypto2.postgresMd5PasswordHash(this.user, this.password, msg.salt);
            this.connection.password(hashedPassword);
          } catch (e) {
            this.emit("error", e);
          }
        });
      }
      _handleAuthSASL(msg) {
        this._getPassword(() => {
          try {
            this.saslSession = sasl.startSession(
              msg.mechanisms,
              this.enableChannelBinding && this.connection.stream,
              this.scramMaxIterations
            );
            this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
          } catch (err) {
            this.connection.emit("error", err);
          }
        });
      }
      async _handleAuthSASLContinue(msg) {
        try {
          await sasl.continueSession(
            this.saslSession,
            this.password,
            msg.data,
            this.enableChannelBinding && this.connection.stream
          );
          this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
        } catch (err) {
          this.connection.emit("error", err);
        }
      }
      _handleAuthSASLFinal(msg) {
        try {
          sasl.finalizeSession(this.saslSession, msg.data);
          this.saslSession = null;
        } catch (err) {
          this.connection.emit("error", err);
        }
      }
      _handleBackendKeyData(msg) {
        this.processID = msg.processID;
        this.secretKey = msg.secretKey;
      }
      _handleReadyForQuery(msg) {
        if (this._connecting) {
          this._connecting = false;
          this._connected = true;
          clearTimeout(this.connectionTimeoutHandle);
          if (this._connectionCallback) {
            this._connectionCallback(null, this);
            this._connectionCallback = null;
          }
          this.emit("connect");
        }
        const activeQuery = this._getActiveQuery();
        this._activeQuery = null;
        this._txStatus = msg?.status ?? null;
        this.readyForQuery = true;
        if (activeQuery) {
          activeQuery.handleReadyForQuery(this.connection);
        }
        this._pulseQueryQueue();
      }
      // if we receive an error event or error message
      // during the connection process we handle it here
      _handleErrorWhileConnecting(err) {
        if (this._connectionError) {
          return;
        }
        this._connectionError = true;
        clearTimeout(this.connectionTimeoutHandle);
        if (this._connectionCallback) {
          return this._connectionCallback(err);
        }
        this.emit("error", err);
      }
      // if we're connected and we receive an error event from the connection
      // this means the socket is dead - do a hard abort of all queries and emit
      // the socket error on the client as well
      _handleErrorEvent(err) {
        if (this._connecting) {
          return this._handleErrorWhileConnecting(err);
        }
        this._queryable = false;
        this._errorAllQueries(err);
        this.emit("error", err);
      }
      // handle error messages from the postgres backend
      _handleErrorMessage(msg) {
        if (this._connecting) {
          return this._handleErrorWhileConnecting(msg);
        }
        const activeQuery = this._getActiveQuery();
        if (!activeQuery) {
          this._handleErrorEvent(msg);
          return;
        }
        this._activeQuery = null;
        activeQuery.handleError(msg, this.connection);
      }
      _handleRowDescription(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected rowDescription message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleRowDescription(msg);
      }
      _handleDataRow(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected dataRow message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleDataRow(msg);
      }
      _handlePortalSuspended(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected portalSuspended message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected emptyQuery message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected commandComplete message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCommandComplete(msg, this.connection);
      }
      _handleParseComplete() {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected parseComplete message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        if (activeQuery.name) {
          this.connection.parsedStatements[activeQuery.name] = activeQuery.text;
        }
      }
      _handleCopyInResponse(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected copyInResponse message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCopyInResponse(this.connection);
      }
      _handleCopyData(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected copyData message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCopyData(msg, this.connection);
      }
      _handleNotification(msg) {
        this.emit("notification", msg);
      }
      _handleNotice(msg) {
        this.emit("notice", msg);
      }
      getStartupConf() {
        const params = this.connectionParameters;
        const data = {
          user: params.user,
          database: params.database
        };
        const appName = params.application_name || params.fallback_application_name;
        if (appName) {
          data.application_name = appName;
        }
        if (params.replication) {
          data.replication = "" + params.replication;
        }
        if (params.statement_timeout) {
          data.statement_timeout = String(parseInt(params.statement_timeout, 10));
        }
        if (params.lock_timeout) {
          data.lock_timeout = String(parseInt(params.lock_timeout, 10));
        }
        if (params.idle_in_transaction_session_timeout) {
          data.idle_in_transaction_session_timeout = String(parseInt(params.idle_in_transaction_session_timeout, 10));
        }
        if (params.options) {
          data.options = params.options;
        }
        return data;
      }
      cancel(client, query) {
        if (client.activeQuery === query) {
          const con = this.connection;
          if (this.host && this.host.indexOf("/") === 0) {
            con.connect(this.host + "/.s.PGSQL." + this.port);
          } else {
            con.connect(this.port, this.host);
          }
          con.on("connect", function() {
            con.cancel(client.processID, client.secretKey);
          });
        } else if (client._queryQueue.indexOf(query) !== -1) {
          client._queryQueue.splice(client._queryQueue.indexOf(query), 1);
        }
      }
      setTypeParser(oid, format, parseFn) {
        return this._types.setTypeParser(oid, format, parseFn);
      }
      getTypeParser(oid, format) {
        return this._types.getTypeParser(oid, format);
      }
      // escapeIdentifier and escapeLiteral moved to utility functions & exported
      // on PG
      // re-exported here for backwards compatibility
      escapeIdentifier(str) {
        return utils.escapeIdentifier(str);
      }
      escapeLiteral(str) {
        return utils.escapeLiteral(str);
      }
      _pulseQueryQueue() {
        if (this.readyForQuery === true) {
          this._activeQuery = this._queryQueue.shift();
          const activeQuery = this._getActiveQuery();
          if (activeQuery) {
            this.readyForQuery = false;
            this.hasExecuted = true;
            const queryError = activeQuery.submit(this.connection);
            if (queryError) {
              process.nextTick(() => {
                activeQuery.handleError(queryError, this.connection);
                this.readyForQuery = true;
                this._pulseQueryQueue();
              });
            }
          } else if (this.hasExecuted) {
            this._activeQuery = null;
            this.emit("drain");
          }
        }
      }
      query(config2, values, callback) {
        let query;
        let result;
        if (config2 == null) {
          throw new TypeError("Client was passed a null or undefined query");
        }
        if (typeof config2.submit === "function") {
          result = query = config2;
          if (!query.callback) {
            if (typeof values === "function") {
              query.callback = values;
            } else if (callback) {
              query.callback = callback;
            }
          }
        } else {
          query = new Query2(config2, values, callback);
          if (!query.callback) {
            result = new this._Promise((resolve, reject) => {
              query.callback = (err, res) => err ? reject(err) : resolve(res);
            }).catch((err) => {
              Error.captureStackTrace(err);
              throw err;
            });
          } else if (typeof query.callback !== "function") {
            throw new TypeError("callback is not a function");
          }
        }
        const readTimeout = config2.query_timeout || this.connectionParameters.query_timeout;
        if (readTimeout) {
          const queryCallback = query.callback || (() => {
          });
          const readTimeoutTimer = setTimeout(() => {
            const error = new Error("Query read timeout");
            process.nextTick(() => {
              query.handleError(error, this.connection);
            });
            queryCallback(error);
            query.callback = () => {
            };
            const index = this._queryQueue.indexOf(query);
            if (index > -1) {
              this._queryQueue.splice(index, 1);
            }
            this._pulseQueryQueue();
          }, readTimeout);
          query.callback = (err, res) => {
            clearTimeout(readTimeoutTimer);
            queryCallback(err, res);
          };
        }
        if (this.binary && !query.binary) {
          query.binary = true;
        }
        if (query._result && !query._result._types) {
          query._result._types = this._types;
        }
        if (!this._queryable) {
          process.nextTick(() => {
            query.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
          });
          return result;
        }
        if (this._ending) {
          process.nextTick(() => {
            query.handleError(new Error("Client was closed and is not queryable"), this.connection);
          });
          return result;
        }
        if (this._queryQueue.length > 0) {
          queryQueueLengthDeprecationNotice();
        }
        this._queryQueue.push(query);
        this._pulseQueryQueue();
        return result;
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      getTransactionStatus() {
        return this._txStatus;
      }
      end(cb) {
        this._ending = true;
        if (!this.connection._connecting || this._ended) {
          if (cb) {
            cb();
            return;
          } else {
            return this._Promise.resolve();
          }
        }
        if (this._getActiveQuery() || !this._queryable) {
          this.connection.stream.destroy();
        } else {
          this.connection.end();
        }
        if (cb) {
          this.connection.once("end", cb);
        } else {
          return new this._Promise((resolve) => {
            this.connection.once("end", resolve);
          });
        }
      }
      get queryQueue() {
        queryQueueDeprecationNotice();
        return this._queryQueue;
      }
    };
    Client2.Query = Query2;
    module.exports = Client2;
  }
});

// node_modules/pg-pool/index.js
var require_pg_pool = __commonJS({
  "node_modules/pg-pool/index.js"(exports, module) {
    "use strict";
    init_esm();
    var EventEmitter = __require("events").EventEmitter;
    var NOOP = /* @__PURE__ */ __name(function() {
    }, "NOOP");
    var removeWhere = /* @__PURE__ */ __name((list, predicate) => {
      const i = list.findIndex(predicate);
      return i === -1 ? void 0 : list.splice(i, 1)[0];
    }, "removeWhere");
    var IdleItem = class {
      static {
        __name(this, "IdleItem");
      }
      constructor(client, idleListener, timeoutId) {
        this.client = client;
        this.idleListener = idleListener;
        this.timeoutId = timeoutId;
      }
    };
    var PendingItem = class {
      static {
        __name(this, "PendingItem");
      }
      constructor(callback) {
        this.callback = callback;
      }
    };
    function throwOnDoubleRelease() {
      throw new Error("Release called on client which has already been released to the pool.");
    }
    __name(throwOnDoubleRelease, "throwOnDoubleRelease");
    function promisify(Promise2, callback) {
      if (callback) {
        return { callback, result: void 0 };
      }
      let rej;
      let res;
      const cb = /* @__PURE__ */ __name(function(err, client) {
        err ? rej(err) : res(client);
      }, "cb");
      const result = new Promise2(function(resolve, reject) {
        res = resolve;
        rej = reject;
      }).catch((err) => {
        Error.captureStackTrace(err);
        throw err;
      });
      return { callback: cb, result };
    }
    __name(promisify, "promisify");
    function makeIdleListener(pool, client) {
      return /* @__PURE__ */ __name(function idleListener(err) {
        err.client = client;
        client.removeListener("error", idleListener);
        client.on("error", () => {
          pool.log("additional client error after disconnection due to error", err);
        });
        pool._remove(client);
        pool.emit("error", err, client);
      }, "idleListener");
    }
    __name(makeIdleListener, "makeIdleListener");
    var Pool2 = class extends EventEmitter {
      static {
        __name(this, "Pool");
      }
      constructor(options, Client2) {
        super();
        this.options = Object.assign({}, options);
        if (options != null && "password" in options) {
          Object.defineProperty(this.options, "password", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: options.password
          });
        }
        if (options != null && options.ssl && options.ssl.key) {
          Object.defineProperty(this.options.ssl, "key", {
            enumerable: false
          });
        }
        this.options.max = this.options.max || this.options.poolSize || 10;
        this.options.min = this.options.min || 0;
        this.options.maxUses = this.options.maxUses || Infinity;
        this.options.allowExitOnIdle = this.options.allowExitOnIdle || false;
        this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0;
        this.log = this.options.log || function() {
        };
        this.Client = this.options.Client || Client2 || require_lib2().Client;
        this.Promise = this.options.Promise || global.Promise;
        if (typeof this.options.idleTimeoutMillis === "undefined") {
          this.options.idleTimeoutMillis = 1e4;
        }
        this._clients = [];
        this._idle = [];
        this._expired = /* @__PURE__ */ new WeakSet();
        this._pendingQueue = [];
        this._endCallback = void 0;
        this.ending = false;
        this.ended = false;
      }
      _promiseTry(f2) {
        const Promise2 = this.Promise;
        if (typeof Promise2.try === "function") {
          return Promise2.try(f2);
        }
        return new Promise2((resolve) => resolve(f2()));
      }
      _isFull() {
        return this._clients.length >= this.options.max;
      }
      _isAboveMin() {
        return this._clients.length > this.options.min;
      }
      _pulseQueue() {
        this.log("pulse queue");
        if (this.ended) {
          this.log("pulse queue ended");
          return;
        }
        if (this.ending) {
          this.log("pulse queue on ending");
          if (this._idle.length) {
            this._idle.slice().map((item) => {
              this._remove(item.client);
            });
          }
          if (!this._clients.length) {
            this.ended = true;
            this._endCallback();
          }
          return;
        }
        if (!this._pendingQueue.length) {
          this.log("no queued requests");
          return;
        }
        if (!this._idle.length && this._isFull()) {
          return;
        }
        const pendingItem = this._pendingQueue.shift();
        if (this._idle.length) {
          const idleItem = this._idle.pop();
          clearTimeout(idleItem.timeoutId);
          const client = idleItem.client;
          client.ref && client.ref();
          const idleListener = idleItem.idleListener;
          return this._acquireClient(client, pendingItem, idleListener, false);
        }
        if (!this._isFull()) {
          return this.newClient(pendingItem);
        }
        throw new Error("unexpected condition");
      }
      _remove(client, callback) {
        const removed = removeWhere(this._idle, (item) => item.client === client);
        if (removed !== void 0) {
          clearTimeout(removed.timeoutId);
        }
        this._clients = this._clients.filter((c) => c !== client);
        const context = this;
        client.end(() => {
          context.emit("remove", client);
          if (typeof callback === "function") {
            callback();
          }
        });
      }
      connect(cb) {
        if (this.ending) {
          const err = new Error("Cannot use a pool after calling end on the pool");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        const response = promisify(this.Promise, cb);
        const result = response.result;
        if (this._isFull() || this._idle.length) {
          if (this._idle.length) {
            process.nextTick(() => this._pulseQueue());
          }
          if (!this.options.connectionTimeoutMillis) {
            this._pendingQueue.push(new PendingItem(response.callback));
            return result;
          }
          const queueCallback = /* @__PURE__ */ __name((err, res, done) => {
            clearTimeout(tid);
            response.callback(err, res, done);
          }, "queueCallback");
          const pendingItem = new PendingItem(queueCallback);
          const tid = setTimeout(() => {
            removeWhere(this._pendingQueue, (i) => i.callback === queueCallback);
            pendingItem.timedOut = true;
            response.callback(new Error("timeout exceeded when trying to connect"));
          }, this.options.connectionTimeoutMillis);
          if (tid.unref) {
            tid.unref();
          }
          this._pendingQueue.push(pendingItem);
          return result;
        }
        this.newClient(new PendingItem(response.callback));
        return result;
      }
      newClient(pendingItem) {
        const client = new this.Client(this.options);
        this._clients.push(client);
        const idleListener = makeIdleListener(this, client);
        this.log("checking client timeout");
        let tid;
        let timeoutHit = false;
        if (this.options.connectionTimeoutMillis) {
          tid = setTimeout(() => {
            if (client.connection) {
              this.log("ending client due to timeout");
              timeoutHit = true;
              client.connection.stream.destroy();
            } else if (!client.isConnected()) {
              this.log("ending client due to timeout");
              timeoutHit = true;
              client.end();
            }
          }, this.options.connectionTimeoutMillis);
        }
        this.log("connecting new client");
        client.connect((err) => {
          if (tid) {
            clearTimeout(tid);
          }
          client.on("error", idleListener);
          if (err) {
            this.log("client failed to connect", err);
            this._clients = this._clients.filter((c) => c !== client);
            if (timeoutHit) {
              err = new Error("Connection terminated due to connection timeout", { cause: err });
            }
            this._pulseQueue();
            if (!pendingItem.timedOut) {
              pendingItem.callback(err, void 0, NOOP);
            }
          } else {
            this.log("new client connected");
            if (this.options.onConnect) {
              this._promiseTry(() => this.options.onConnect(client)).then(
                () => {
                  this._afterConnect(client, pendingItem, idleListener);
                },
                (hookErr) => {
                  this._clients = this._clients.filter((c) => c !== client);
                  client.end(() => {
                    this._pulseQueue();
                    if (!pendingItem.timedOut) {
                      pendingItem.callback(hookErr, void 0, NOOP);
                    }
                  });
                }
              );
              return;
            }
            return this._afterConnect(client, pendingItem, idleListener);
          }
        });
      }
      _afterConnect(client, pendingItem, idleListener) {
        if (this.options.maxLifetimeSeconds !== 0) {
          const maxLifetimeTimeout = setTimeout(() => {
            this.log("ending client due to expired lifetime");
            this._expired.add(client);
            const idleIndex = this._idle.findIndex((idleItem) => idleItem.client === client);
            if (idleIndex !== -1) {
              this._acquireClient(
                client,
                new PendingItem((err, client2, clientRelease) => clientRelease()),
                idleListener,
                false
              );
            }
          }, this.options.maxLifetimeSeconds * 1e3);
          maxLifetimeTimeout.unref();
          client.once("end", () => clearTimeout(maxLifetimeTimeout));
        }
        return this._acquireClient(client, pendingItem, idleListener, true);
      }
      // acquire a client for a pending work item
      _acquireClient(client, pendingItem, idleListener, isNew) {
        if (isNew) {
          this.emit("connect", client);
        }
        this.emit("acquire", client);
        client.release = this._releaseOnce(client, idleListener);
        client.removeListener("error", idleListener);
        if (!pendingItem.timedOut) {
          if (isNew && this.options.verify) {
            this.options.verify(client, (err) => {
              if (err) {
                client.release(err);
                return pendingItem.callback(err, void 0, NOOP);
              }
              pendingItem.callback(void 0, client, client.release);
            });
          } else {
            pendingItem.callback(void 0, client, client.release);
          }
        } else {
          if (isNew && this.options.verify) {
            this.options.verify(client, client.release);
          } else {
            client.release();
          }
        }
      }
      // returns a function that wraps _release and throws if called more than once
      _releaseOnce(client, idleListener) {
        let released = false;
        return (err) => {
          if (released) {
            throwOnDoubleRelease();
          }
          released = true;
          this._release(client, idleListener, err);
        };
      }
      // release a client back to the poll, include an error
      // to remove it from the pool
      _release(client, idleListener, err) {
        client.on("error", idleListener);
        client._poolUseCount = (client._poolUseCount || 0) + 1;
        this.emit("release", err, client);
        if (err || this.ending || !client._queryable || client._ending || client._poolUseCount >= this.options.maxUses) {
          if (client._poolUseCount >= this.options.maxUses) {
            this.log("remove expended client");
          }
          return this._remove(client, this._pulseQueue.bind(this));
        }
        const isExpired = this._expired.has(client);
        if (isExpired) {
          this.log("remove expired client");
          this._expired.delete(client);
          return this._remove(client, this._pulseQueue.bind(this));
        }
        let tid;
        if (this.options.idleTimeoutMillis && this._isAboveMin()) {
          tid = setTimeout(() => {
            if (this._isAboveMin()) {
              this.log("remove idle client");
              this._remove(client, this._pulseQueue.bind(this));
            }
          }, this.options.idleTimeoutMillis);
          if (this.options.allowExitOnIdle) {
            tid.unref();
          }
        }
        if (this.options.allowExitOnIdle) {
          client.unref();
        }
        this._idle.push(new IdleItem(client, idleListener, tid));
        this._pulseQueue();
      }
      query(text, values, cb) {
        if (typeof text === "function") {
          const response2 = promisify(this.Promise, text);
          setImmediate(function() {
            return response2.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
          });
          return response2.result;
        }
        if (typeof values === "function") {
          cb = values;
          values = void 0;
        }
        const response = promisify(this.Promise, cb);
        cb = response.callback;
        this.connect((err, client) => {
          if (err) {
            return cb(err);
          }
          let clientReleased = false;
          const onError = /* @__PURE__ */ __name((err2) => {
            if (clientReleased) {
              return;
            }
            clientReleased = true;
            client.release(err2);
            cb(err2);
          }, "onError");
          client.once("error", onError);
          this.log("dispatching query");
          try {
            client.query(text, values, (err2, res) => {
              this.log("query dispatched");
              client.removeListener("error", onError);
              if (clientReleased) {
                return;
              }
              clientReleased = true;
              client.release(err2);
              if (err2) {
                return cb(err2);
              }
              return cb(void 0, res);
            });
          } catch (err2) {
            client.release(err2);
            return cb(err2);
          }
        });
        return response.result;
      }
      end(cb) {
        this.log("ending");
        if (this.ending) {
          const err = new Error("Called end on pool more than once");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        this.ending = true;
        const promised = promisify(this.Promise, cb);
        this._endCallback = promised.callback;
        this._pulseQueue();
        return promised.result;
      }
      get waitingCount() {
        return this._pendingQueue.length;
      }
      get idleCount() {
        return this._idle.length;
      }
      get expiredCount() {
        return this._clients.reduce((acc, client) => acc + (this._expired.has(client) ? 1 : 0), 0);
      }
      get totalCount() {
        return this._clients.length;
      }
    };
    module.exports = Pool2;
  }
});

// node_modules/pg/lib/native/query.js
var require_query2 = __commonJS({
  "node_modules/pg/lib/native/query.js"(exports, module) {
    "use strict";
    init_esm();
    var EventEmitter = __require("events").EventEmitter;
    var util = __require("util");
    var utils = require_utils();
    var NativeQuery = module.exports = function(config2, values, callback) {
      EventEmitter.call(this);
      config2 = utils.normalizeQueryConfig(config2, values, callback);
      this.text = config2.text;
      this.values = config2.values;
      this.name = config2.name;
      this.queryMode = config2.queryMode;
      this.callback = config2.callback;
      this.state = "new";
      this._arrayMode = config2.rowMode === "array";
      this._emitRowEvents = false;
      this.on(
        "newListener",
        function(event) {
          if (event === "row") this._emitRowEvents = true;
        }.bind(this)
      );
    };
    util.inherits(NativeQuery, EventEmitter);
    var errorFieldMap = {
      sqlState: "code",
      statementPosition: "position",
      messagePrimary: "message",
      context: "where",
      schemaName: "schema",
      tableName: "table",
      columnName: "column",
      dataTypeName: "dataType",
      constraintName: "constraint",
      sourceFile: "file",
      sourceLine: "line",
      sourceFunction: "routine"
    };
    NativeQuery.prototype.handleError = function(err) {
      const fields = this.native.pq.resultErrorFields();
      if (fields) {
        for (const key in fields) {
          const normalizedFieldName = errorFieldMap[key] || key;
          err[normalizedFieldName] = fields[key];
        }
      }
      if (this.callback) {
        this.callback(err);
      } else {
        this.emit("error", err);
      }
      this.state = "error";
    };
    NativeQuery.prototype.then = function(onSuccess, onFailure) {
      return this._getPromise().then(onSuccess, onFailure);
    };
    NativeQuery.prototype.catch = function(callback) {
      return this._getPromise().catch(callback);
    };
    NativeQuery.prototype._getPromise = function() {
      if (this._promise) return this._promise;
      this._promise = new Promise(
        function(resolve, reject) {
          this._once("end", resolve);
          this._once("error", reject);
        }.bind(this)
      );
      return this._promise;
    };
    NativeQuery.prototype.submit = function(client) {
      this.state = "running";
      const self2 = this;
      this.native = client.native;
      client.native.arrayMode = this._arrayMode;
      let after = /* @__PURE__ */ __name(function(err, rows, results) {
        client.native.arrayMode = false;
        setImmediate(function() {
          self2.emit("_done");
        });
        if (err) {
          return self2.handleError(err);
        }
        if (self2._emitRowEvents) {
          if (results.length > 1) {
            rows.forEach((rowOfRows, i) => {
              rowOfRows.forEach((row) => {
                self2.emit("row", row, results[i]);
              });
            });
          } else {
            rows.forEach(function(row) {
              self2.emit("row", row, results);
            });
          }
        }
        self2.state = "end";
        self2.emit("end", results);
        if (self2.callback) {
          self2.callback(null, results);
        }
      }, "after");
      if (process.domain) {
        after = process.domain.bind(after);
      }
      if (this.name) {
        if (this.name.length > 63) {
          console.error("Warning! Postgres only supports 63 characters for query names.");
          console.error("You supplied %s (%s)", this.name, this.name.length);
          console.error("This can cause conflicts and silent errors executing queries");
        }
        const values = (this.values || []).map(utils.prepareValue);
        if (client.namedQueries[this.name]) {
          if (this.text && client.namedQueries[this.name] !== this.text) {
            const err = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
            return after(err);
          }
          return client.native.execute(this.name, values, after);
        }
        return client.native.prepare(this.name, this.text, values.length, function(err) {
          if (err) return after(err);
          client.namedQueries[self2.name] = self2.text;
          return self2.native.execute(self2.name, values, after);
        });
      } else if (this.values) {
        if (!Array.isArray(this.values)) {
          const err = new Error("Query values must be an array");
          return after(err);
        }
        const vals = this.values.map(utils.prepareValue);
        client.native.query(this.text, vals, after);
      } else if (this.queryMode === "extended") {
        client.native.query(this.text, [], after);
      } else {
        client.native.query(this.text, after);
      }
    };
  }
});

// node_modules/pg/lib/native/client.js
var require_client3 = __commonJS({
  "node_modules/pg/lib/native/client.js"(exports, module) {
    init_esm();
    var nodeUtils = __require("util");
    var Native;
    try {
      Native = __require("pg-native");
    } catch (e) {
      throw e;
    }
    var TypeOverrides2 = require_type_overrides();
    var EventEmitter = __require("events").EventEmitter;
    var util = __require("util");
    var ConnectionParameters = require_connection_parameters();
    var NativeQuery = require_query2();
    var queryQueueLengthDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Calling client.query() when the client is already executing a query is deprecated and will be removed in pg@9.0. Use async/await or an external async flow control mechanism instead."
    );
    var Client2 = module.exports = function(config2) {
      EventEmitter.call(this);
      config2 = config2 || {};
      this._Promise = config2.Promise || global.Promise;
      this._types = new TypeOverrides2(config2.types);
      this.native = new Native({
        types: this._types
      });
      this._queryQueue = [];
      this._ending = false;
      this._connecting = false;
      this._connected = false;
      this._queryable = true;
      const cp = this.connectionParameters = new ConnectionParameters(config2);
      if (config2.nativeConnectionString) cp.nativeConnectionString = config2.nativeConnectionString;
      this.user = cp.user;
      Object.defineProperty(this, "password", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: cp.password
      });
      this.database = cp.database;
      this.host = cp.host;
      this.port = cp.port;
      this.namedQueries = {};
    };
    Client2.Query = NativeQuery;
    util.inherits(Client2, EventEmitter);
    Client2.prototype._errorAllQueries = function(err) {
      const enqueueError = /* @__PURE__ */ __name((query) => {
        process.nextTick(() => {
          query.native = this.native;
          query.handleError(err);
        });
      }, "enqueueError");
      if (this._hasActiveQuery()) {
        enqueueError(this._activeQuery);
        this._activeQuery = null;
      }
      this._queryQueue.forEach(enqueueError);
      this._queryQueue.length = 0;
    };
    Client2.prototype._connect = function(cb) {
      const self2 = this;
      if (this._connecting) {
        process.nextTick(() => cb(new Error("Client has already been connected. You cannot reuse a client.")));
        return;
      }
      this._connecting = true;
      this.connectionParameters.getLibpqConnectionString(function(err, conString) {
        if (self2.connectionParameters.nativeConnectionString) conString = self2.connectionParameters.nativeConnectionString;
        if (err) return cb(err);
        self2.native.connect(conString, function(err2) {
          if (err2) {
            self2.native.end();
            return cb(err2);
          }
          self2._connected = true;
          self2.native.on("error", function(err3) {
            self2._queryable = false;
            self2._errorAllQueries(err3);
            self2.emit("error", err3);
          });
          self2.native.on("notification", function(msg) {
            self2.emit("notification", {
              channel: msg.relname,
              payload: msg.extra
            });
          });
          self2.emit("connect");
          self2._pulseQueryQueue(true);
          cb(null, this);
        });
      });
    };
    Client2.prototype.connect = function(callback) {
      if (callback) {
        this._connect(callback);
        return;
      }
      return new this._Promise((resolve, reject) => {
        this._connect((error) => {
          if (error) {
            reject(error);
          } else {
            resolve(this);
          }
        });
      });
    };
    Client2.prototype.query = function(config2, values, callback) {
      let query;
      let result;
      let readTimeout;
      let readTimeoutTimer;
      let queryCallback;
      if (config2 === null || config2 === void 0) {
        throw new TypeError("Client was passed a null or undefined query");
      } else if (typeof config2.submit === "function") {
        readTimeout = config2.query_timeout || this.connectionParameters.query_timeout;
        result = query = config2;
        if (typeof values === "function") {
          config2.callback = values;
        }
      } else {
        readTimeout = config2.query_timeout || this.connectionParameters.query_timeout;
        query = new NativeQuery(config2, values, callback);
        if (!query.callback) {
          let resolveOut, rejectOut;
          result = new this._Promise((resolve, reject) => {
            resolveOut = resolve;
            rejectOut = reject;
          }).catch((err) => {
            Error.captureStackTrace(err);
            throw err;
          });
          query.callback = (err, res) => err ? rejectOut(err) : resolveOut(res);
        }
      }
      if (readTimeout) {
        queryCallback = query.callback || (() => {
        });
        readTimeoutTimer = setTimeout(() => {
          const error = new Error("Query read timeout");
          process.nextTick(() => {
            query.handleError(error, this.connection);
          });
          queryCallback(error);
          query.callback = () => {
          };
          const index = this._queryQueue.indexOf(query);
          if (index > -1) {
            this._queryQueue.splice(index, 1);
          }
          this._pulseQueryQueue();
        }, readTimeout);
        query.callback = (err, res) => {
          clearTimeout(readTimeoutTimer);
          queryCallback(err, res);
        };
      }
      if (!this._queryable) {
        query.native = this.native;
        process.nextTick(() => {
          query.handleError(new Error("Client has encountered a connection error and is not queryable"));
        });
        return result;
      }
      if (this._ending) {
        query.native = this.native;
        process.nextTick(() => {
          query.handleError(new Error("Client was closed and is not queryable"));
        });
        return result;
      }
      if (this._queryQueue.length > 0) {
        queryQueueLengthDeprecationNotice();
      }
      this._queryQueue.push(query);
      this._pulseQueryQueue();
      return result;
    };
    Client2.prototype.end = function(cb) {
      const self2 = this;
      this._ending = true;
      if (this._connecting && !this._connected) {
        this.once("connect", () => {
          this.end(() => {
          });
        });
      }
      let result;
      if (!cb) {
        result = new this._Promise(function(resolve, reject) {
          cb = /* @__PURE__ */ __name((err) => err ? reject(err) : resolve(), "cb");
        });
      }
      this.native.end(function() {
        self2._connected = false;
        self2._errorAllQueries(new Error("Connection terminated"));
        process.nextTick(() => {
          self2.emit("end");
          if (cb) cb();
        });
      });
      return result;
    };
    Client2.prototype._hasActiveQuery = function() {
      return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
    };
    Client2.prototype._pulseQueryQueue = function(initialConnection) {
      if (!this._connected) {
        return;
      }
      if (this._hasActiveQuery()) {
        return;
      }
      const query = this._queryQueue.shift();
      if (!query) {
        if (!initialConnection) {
          this.emit("drain");
        }
        return;
      }
      this._activeQuery = query;
      query.submit(this);
      const self2 = this;
      query.once("_done", function() {
        self2._pulseQueryQueue();
      });
    };
    Client2.prototype.cancel = function(query) {
      if (this._activeQuery === query) {
        this.native.cancel(function() {
        });
      } else if (this._queryQueue.indexOf(query) !== -1) {
        this._queryQueue.splice(this._queryQueue.indexOf(query), 1);
      }
    };
    Client2.prototype.ref = function() {
    };
    Client2.prototype.unref = function() {
    };
    Client2.prototype.setTypeParser = function(oid, format, parseFn) {
      return this._types.setTypeParser(oid, format, parseFn);
    };
    Client2.prototype.getTypeParser = function(oid, format) {
      return this._types.getTypeParser(oid, format);
    };
    Client2.prototype.isConnected = function() {
      return this._connected;
    };
    Client2.prototype.getTransactionStatus = function() {
      return this.native.getTransactionStatus();
    };
  }
});

// node_modules/pg/lib/native/index.js
var require_native = __commonJS({
  "node_modules/pg/lib/native/index.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = require_client3();
  }
});

// node_modules/pg/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/pg/lib/index.js"(exports, module) {
    "use strict";
    init_esm();
    var Client2 = require_client2();
    var defaults2 = require_defaults();
    var Connection2 = require_connection();
    var Result2 = require_result();
    var utils = require_utils();
    var Pool2 = require_pg_pool();
    var TypeOverrides2 = require_type_overrides();
    var { DatabaseError: DatabaseError2 } = require_dist2();
    var { escapeIdentifier: escapeIdentifier2, escapeLiteral: escapeLiteral2 } = require_utils();
    var poolFactory = /* @__PURE__ */ __name((Client3) => {
      return class BoundPool extends Pool2 {
        static {
          __name(this, "BoundPool");
        }
        constructor(options) {
          super(options, Client3);
        }
      };
    }, "poolFactory");
    var PG = /* @__PURE__ */ __name(function(clientConstructor2) {
      this.defaults = defaults2;
      this.Client = clientConstructor2;
      this.Query = this.Client.Query;
      this.Pool = poolFactory(this.Client);
      this._pools = [];
      this.Connection = Connection2;
      this.types = require_pg_types();
      this.DatabaseError = DatabaseError2;
      this.TypeOverrides = TypeOverrides2;
      this.escapeIdentifier = escapeIdentifier2;
      this.escapeLiteral = escapeLiteral2;
      this.Result = Result2;
      this.utils = utils;
    }, "PG");
    var clientConstructor = Client2;
    var forceNative = false;
    try {
      forceNative = !!process.env.NODE_PG_FORCE_NATIVE;
    } catch {
    }
    if (forceNative) {
      clientConstructor = require_native();
    }
    module.exports = new PG(clientConstructor);
    Object.defineProperty(module.exports, "native", {
      configurable: true,
      enumerable: false,
      get() {
        let native = null;
        try {
          native = new PG(require_native());
        } catch (err) {
          if (err.code !== "MODULE_NOT_FOUND") {
            throw err;
          }
        }
        Object.defineProperty(module.exports, "native", {
          value: native
        });
        return native;
      }
    });
  }
});

// node_modules/@prisma/adapter-pg/node_modules/postgres-array/index.js
var require_postgres_array2 = __commonJS({
  "node_modules/@prisma/adapter-pg/node_modules/postgres-array/index.js"(exports) {
    "use strict";
    init_esm();
    var BACKSLASH = "\\";
    var DQUOT = '"';
    var LBRACE = "{";
    var RBRACE = "}";
    var LBRACKET = "[";
    var EQUALS = "=";
    var COMMA = ",";
    var NULL_STRING = "NULL";
    function makeParseArrayWithTransform(transform) {
      const haveTransform = transform != null;
      return /* @__PURE__ */ __name(function parseArray3(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
          return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
          throw new Error("Invalid array text - must end with }");
        }
        let position = 0;
        if (str[position] === LBRACKET) {
          position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
          throw new Error("Invalid array text - must start with {");
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = "";
        let expectValue = true;
        for (; position < rbraceIndex; ++position) {
          let char = str[position];
          if (char === DQUOT) {
            currentStringStart = ++position;
            let dquot = str.indexOf(DQUOT, currentStringStart);
            let backSlash = str.indexOf(BACKSLASH, currentStringStart);
            while (backSlash !== -1 && backSlash < dquot) {
              position = backSlash;
              const part2 = str.slice(currentStringStart, position);
              currentString += part2;
              currentStringStart = ++position;
              if (dquot === position++) {
                dquot = str.indexOf(DQUOT, position);
              }
              backSlash = str.indexOf(BACKSLASH, position);
            }
            position = dquot;
            const part = str.slice(currentStringStart, position);
            currentString += part;
            current.push(haveTransform ? transform(currentString) : currentString);
            currentString = "";
            expectValue = false;
          } else if (char === LBRACE) {
            const newArray = [];
            current.push(newArray);
            stack.push(current);
            current = newArray;
            currentStringStart = position + 1;
            expectValue = true;
          } else if (char === COMMA) {
            expectValue = true;
          } else if (char === RBRACE) {
            expectValue = false;
            const arr = stack.pop();
            if (arr === void 0) {
              throw new Error("Invalid array text - too many '}'");
            }
            current = arr;
          } else if (expectValue) {
            currentStringStart = position;
            while ((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex) {
              ++position;
            }
            const part = str.slice(currentStringStart, position--);
            current.push(
              part === NULL_STRING ? null : haveTransform ? transform(part) : part
            );
            expectValue = false;
          } else {
            throw new Error("Was expecting delimeter");
          }
        }
        return output;
      }, "parseArray");
    }
    __name(makeParseArrayWithTransform, "makeParseArrayWithTransform");
    var parseArray2 = makeParseArrayWithTransform();
    exports.parse = (source, transform) => transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray2(source);
  }
});

// node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name2 in all)
        __defProp2(target, name2, { get: all[name2], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var default_index_exports = {};
    __export2(default_index_exports, {
      Prisma: /* @__PURE__ */ __name(() => Prisma, "Prisma"),
      PrismaClient: /* @__PURE__ */ __name(() => PrismaClient2, "PrismaClient"),
      default: /* @__PURE__ */ __name(() => default_index_default, "default")
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma2 = {
      enginesVersion: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
    };
    var version = "7.8.0";
    var clientVersion = version;
    var PrismaClient2 = class {
      static {
        __name(this, "PrismaClient");
      }
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    };
    function defineExtension2(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    __name(defineExtension2, "defineExtension");
    function getExtensionContext2(that) {
      return that;
    }
    __name(getExtensionContext2, "getExtensionContext");
    var Prisma = {
      defineExtension: defineExtension2,
      getExtensionContext: getExtensionContext2,
      prismaVersion: { client: clientVersion, engine: prisma2.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// lib/prisma.ts
init_esm();

// app/generated/prisma/client.ts
init_esm();
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// app/generated/prisma/internal/class.ts
init_esm();
var runtime = __toESM(require_client());
var config = {
  "previewFeatures": [],
  "clientVersion": "7.8.0",
  "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
  "activeProvider": "postgresql",
  "inlineSchema": 'enum ProjectStatus {\n  DRAFT\n  ARCHIVED\n}\n\nmodel Project {\n  id             String                @id @default(uuid())\n  ownerId        String\n  name           String\n  description    String?\n  status         ProjectStatus         @default(DRAFT)\n  canvasJsonPath String?\n  createdAt      DateTime              @default(now())\n  updatedAt      DateTime              @updatedAt\n  collaborators  ProjectCollaborator[]\n  specs          ProjectSpec[]\n\n  @@index([ownerId])\n  @@index([createdAt])\n}\n\nmodel ProjectCollaborator {\n  id        String   @id @default(uuid())\n  projectId String\n  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  email     String\n  createdAt DateTime @default(now())\n\n  @@unique([projectId, email])\n  @@index([email])\n  @@index([projectId, createdAt])\n}\n\nmodel ProjectSpec {\n  id        String   @id @default(uuid())\n  projectId String\n  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  filePath  String\n  createdAt DateTime @default(now())\n\n  @@index([projectId])\n  @@index([projectId, createdAt])\n}\n\nmodel TaskRun {\n  id        String   @id @default(uuid())\n  runId     String   @unique\n  projectId String\n  userId    String\n  createdAt DateTime @default(now())\n\n  @@index([runId])\n  @@index([userId, projectId])\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../app/generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Project":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"ownerId","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"ProjectStatus"},{"name":"canvasJsonPath","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"collaborators","kind":"object","type":"ProjectCollaborator","relationName":"ProjectToProjectCollaborator"},{"name":"specs","kind":"object","type":"ProjectSpec","relationName":"ProjectToProjectSpec"}],"dbName":null},"ProjectCollaborator":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"projectId","kind":"scalar","type":"String"},{"name":"project","kind":"object","type":"Project","relationName":"ProjectToProjectCollaborator"},{"name":"email","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"ProjectSpec":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"projectId","kind":"scalar","type":"String"},{"name":"project","kind":"object","type":"Project","relationName":"ProjectToProjectSpec"},{"name":"filePath","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"TaskRun":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"runId","kind":"scalar","type":"String"},{"name":"projectId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","project","collaborators","specs","_count","Project.findUnique","Project.findUniqueOrThrow","Project.findFirst","Project.findFirstOrThrow","Project.findMany","data","Project.createOne","Project.createMany","Project.createManyAndReturn","Project.updateOne","Project.updateMany","Project.updateManyAndReturn","create","update","Project.upsertOne","Project.deleteOne","Project.deleteMany","having","_min","_max","Project.groupBy","Project.aggregate","ProjectCollaborator.findUnique","ProjectCollaborator.findUniqueOrThrow","ProjectCollaborator.findFirst","ProjectCollaborator.findFirstOrThrow","ProjectCollaborator.findMany","ProjectCollaborator.createOne","ProjectCollaborator.createMany","ProjectCollaborator.createManyAndReturn","ProjectCollaborator.updateOne","ProjectCollaborator.updateMany","ProjectCollaborator.updateManyAndReturn","ProjectCollaborator.upsertOne","ProjectCollaborator.deleteOne","ProjectCollaborator.deleteMany","ProjectCollaborator.groupBy","ProjectCollaborator.aggregate","ProjectSpec.findUnique","ProjectSpec.findUniqueOrThrow","ProjectSpec.findFirst","ProjectSpec.findFirstOrThrow","ProjectSpec.findMany","ProjectSpec.createOne","ProjectSpec.createMany","ProjectSpec.createManyAndReturn","ProjectSpec.updateOne","ProjectSpec.updateMany","ProjectSpec.updateManyAndReturn","ProjectSpec.upsertOne","ProjectSpec.deleteOne","ProjectSpec.deleteMany","ProjectSpec.groupBy","ProjectSpec.aggregate","TaskRun.findUnique","TaskRun.findUniqueOrThrow","TaskRun.findFirst","TaskRun.findFirstOrThrow","TaskRun.findMany","TaskRun.createOne","TaskRun.createMany","TaskRun.createManyAndReturn","TaskRun.updateOne","TaskRun.updateMany","TaskRun.updateManyAndReturn","TaskRun.upsertOne","TaskRun.deleteOne","TaskRun.deleteMany","TaskRun.groupBy","TaskRun.aggregate","AND","OR","NOT","id","runId","projectId","userId","createdAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","filePath","email","ownerId","name","description","ProjectStatus","status","canvasJsonPath","updatedAt","every","some","none","projectId_email","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany"]'),
  graph: "xgEiQA0EAACBAQAgBQAAggEAIE0AAH4AME4AAA4AEE8AAH4AMFABAAAAAVRAAHMAIWIBAHIAIWMBAHIAIWQBAH8AIWYAAIABZiJnAQB_ACFoQABzACEBAAAAAQAgCAMAAIQBACBNAACGAQAwTgAAAwAQTwAAhgEAMFABAHIAIVIBAHIAIVRAAHMAIWEBAHIAIQEDAAC6AQAgCQMAAIQBACBNAACGAQAwTgAAAwAQTwAAhgEAMFABAAAAAVIBAHIAIVRAAHMAIWEBAHIAIWwAAIUBACADAAAAAwAgAQAABAAwAgAABQAgCAMAAIQBACBNAACDAQAwTgAABwAQTwAAgwEAMFABAHIAIVIBAHIAIVRAAHMAIWABAHIAIQEDAAC6AQAgCAMAAIQBACBNAACDAQAwTgAABwAQTwAAgwEAMFABAAAAAVIBAHIAIVRAAHMAIWABAHIAIQMAAAAHACABAAAIADACAAAJACABAAAAAwAgAQAAAAcAIAEAAAABACANBAAAgQEAIAUAAIIBACBNAAB-ADBOAAAOABBPAAB-ADBQAQByACFUQABzACFiAQByACFjAQByACFkAQB_ACFmAACAAWYiZwEAfwAhaEAAcwAhBAQAALgBACAFAAC5AQAgZAAAlgEAIGcAAJYBACADAAAADgAgAQAADwAwAgAAAQAgAwAAAA4AIAEAAA8AMAIAAAEAIAMAAAAOACABAAAPADACAAABACAKBAAAtgEAIAUAALcBACBQAQAAAAFUQAAAAAFiAQAAAAFjAQAAAAFkAQAAAAFmAAAAZgJnAQAAAAFoQAAAAAEBDAAAEwAgCFABAAAAAVRAAAAAAWIBAAAAAWMBAAAAAWQBAAAAAWYAAABmAmcBAAAAAWhAAAAAAQEMAAAVADABDAAAFQAwCgQAAJwBACAFAACdAQAgUAEAigEAIVRAAIsBACFiAQCKAQAhYwEAigEAIWQBAJoBACFmAACbAWYiZwEAmgEAIWhAAIsBACECAAAAAQAgDAAAGAAgCFABAIoBACFUQACLAQAhYgEAigEAIWMBAIoBACFkAQCaAQAhZgAAmwFmImcBAJoBACFoQACLAQAhAgAAAA4AIAwAABoAIAIAAAAOACAMAAAaACADAAAAAQAgEwAAEwAgFAAAGAAgAQAAAAEAIAEAAAAOACAFBgAAlwEAIBkAAJkBACAaAACYAQAgZAAAlgEAIGcAAJYBACALTQAAdgAwTgAAIQAQTwAAdgAwUAEAagAhVEAAawAhYgEAagAhYwEAagAhZAEAdwAhZgAAeGYiZwEAdwAhaEAAawAhAwAAAA4AIAEAACAAMBgAACEAIAMAAAAOACABAAAPADACAAABACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAUDAACVAQAgUAEAAAABUgEAAAABVEAAAAABYQEAAAABAQwAACkAIARQAQAAAAFSAQAAAAFUQAAAAAFhAQAAAAEBDAAAKwAwAQwAACsAMAUDAACUAQAgUAEAigEAIVIBAIoBACFUQACLAQAhYQEAigEAIQIAAAAFACAMAAAuACAEUAEAigEAIVIBAIoBACFUQACLAQAhYQEAigEAIQIAAAADACAMAAAwACACAAAAAwAgDAAAMAAgAwAAAAUAIBMAACkAIBQAAC4AIAEAAAAFACABAAAAAwAgAwYAAJEBACAZAACTAQAgGgAAkgEAIAdNAAB1ADBOAAA3ABBPAAB1ADBQAQBqACFSAQBqACFUQABrACFhAQBqACEDAAAAAwAgAQAANgAwGAAANwAgAwAAAAMAIAEAAAQAMAIAAAUAIAEAAAAJACABAAAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgBQMAAJABACBQAQAAAAFSAQAAAAFUQAAAAAFgAQAAAAEBDAAAPwAgBFABAAAAAVIBAAAAAVRAAAAAAWABAAAAAQEMAABBADABDAAAQQAwBQMAAI8BACBQAQCKAQAhUgEAigEAIVRAAIsBACFgAQCKAQAhAgAAAAkAIAwAAEQAIARQAQCKAQAhUgEAigEAIVRAAIsBACFgAQCKAQAhAgAAAAcAIAwAAEYAIAIAAAAHACAMAABGACADAAAACQAgEwAAPwAgFAAARAAgAQAAAAkAIAEAAAAHACADBgAAjAEAIBkAAI4BACAaAACNAQAgB00AAHQAME4AAE0AEE8AAHQAMFABAGoAIVIBAGoAIVRAAGsAIWABAGoAIQMAAAAHACABAABMADAYAABNACADAAAABwAgAQAACAAwAgAACQAgCE0AAHEAME4AAFMAEE8AAHEAMFABAAAAAVEBAAAAAVIBAHIAIVMBAHIAIVRAAHMAIQEAAABQACABAAAAUAAgCE0AAHEAME4AAFMAEE8AAHEAMFABAHIAIVEBAHIAIVIBAHIAIVMBAHIAIVRAAHMAIQADAAAAUwAgAQAAVAAwAgAAUAAgAwAAAFMAIAEAAFQAMAIAAFAAIAMAAABTACABAABUADACAABQACAFUAEAAAABUQEAAAABUgEAAAABUwEAAAABVEAAAAABAQwAAFgAIAVQAQAAAAFRAQAAAAFSAQAAAAFTAQAAAAFUQAAAAAEBDAAAWgAwAQwAAFoAMAVQAQCKAQAhUQEAigEAIVIBAIoBACFTAQCKAQAhVEAAiwEAIQIAAABQACAMAABdACAFUAEAigEAIVEBAIoBACFSAQCKAQAhUwEAigEAIVRAAIsBACECAAAAUwAgDAAAXwAgAgAAAFMAIAwAAF8AIAMAAABQACATAABYACAUAABdACABAAAAUAAgAQAAAFMAIAMGAACHAQAgGQAAiQEAIBoAAIgBACAITQAAaQAwTgAAZgAQTwAAaQAwUAEAagAhUQEAagAhUgEAagAhUwEAagAhVEAAawAhAwAAAFMAIAEAAGUAMBgAAGYAIAMAAABTACABAABUADACAABQACAITQAAaQAwTgAAZgAQTwAAaQAwUAEAagAhUQEAagAhUgEAagAhUwEAagAhVEAAawAhDgYAAG0AIBkAAHAAIBoAAHAAIFUBAAAAAVYBAAAABFcBAAAABFgBAAAAAVkBAAAAAVoBAAAAAVsBAAAAAVwBAG8AIV0BAAAAAV4BAAAAAV8BAAAAAQsGAABtACAZAABuACAaAABuACBVQAAAAAFWQAAAAARXQAAAAARYQAAAAAFZQAAAAAFaQAAAAAFbQAAAAAFcQABsACELBgAAbQAgGQAAbgAgGgAAbgAgVUAAAAABVkAAAAAEV0AAAAAEWEAAAAABWUAAAAABWkAAAAABW0AAAAABXEAAbAAhCFUCAAAAAVYCAAAABFcCAAAABFgCAAAAAVkCAAAAAVoCAAAAAVsCAAAAAVwCAG0AIQhVQAAAAAFWQAAAAARXQAAAAARYQAAAAAFZQAAAAAFaQAAAAAFbQAAAAAFcQABuACEOBgAAbQAgGQAAcAAgGgAAcAAgVQEAAAABVgEAAAAEVwEAAAAEWAEAAAABWQEAAAABWgEAAAABWwEAAAABXAEAbwAhXQEAAAABXgEAAAABXwEAAAABC1UBAAAAAVYBAAAABFcBAAAABFgBAAAAAVkBAAAAAVoBAAAAAVsBAAAAAVwBAHAAIV0BAAAAAV4BAAAAAV8BAAAAAQhNAABxADBOAABTABBPAABxADBQAQByACFRAQByACFSAQByACFTAQByACFUQABzACELVQEAAAABVgEAAAAEVwEAAAAEWAEAAAABWQEAAAABWgEAAAABWwEAAAABXAEAcAAhXQEAAAABXgEAAAABXwEAAAABCFVAAAAAAVZAAAAABFdAAAAABFhAAAAAAVlAAAAAAVpAAAAAAVtAAAAAAVxAAG4AIQdNAAB0ADBOAABNABBPAAB0ADBQAQBqACFSAQBqACFUQABrACFgAQBqACEHTQAAdQAwTgAANwAQTwAAdQAwUAEAagAhUgEAagAhVEAAawAhYQEAagAhC00AAHYAME4AACEAEE8AAHYAMFABAGoAIVRAAGsAIWIBAGoAIWMBAGoAIWQBAHcAIWYAAHhmImcBAHcAIWhAAGsAIQ4GAAB8ACAZAAB9ACAaAAB9ACBVAQAAAAFWAQAAAAVXAQAAAAVYAQAAAAFZAQAAAAFaAQAAAAFbAQAAAAFcAQB7ACFdAQAAAAFeAQAAAAFfAQAAAAEHBgAAbQAgGQAAegAgGgAAegAgVQAAAGYCVgAAAGYIVwAAAGYIXAAAeWYiBwYAAG0AIBkAAHoAIBoAAHoAIFUAAABmAlYAAABmCFcAAABmCFwAAHlmIgRVAAAAZgJWAAAAZghXAAAAZghcAAB6ZiIOBgAAfAAgGQAAfQAgGgAAfQAgVQEAAAABVgEAAAAFVwEAAAAFWAEAAAABWQEAAAABWgEAAAABWwEAAAABXAEAewAhXQEAAAABXgEAAAABXwEAAAABCFUCAAAAAVYCAAAABVcCAAAABVgCAAAAAVkCAAAAAVoCAAAAAVsCAAAAAVwCAHwAIQtVAQAAAAFWAQAAAAVXAQAAAAVYAQAAAAFZAQAAAAFaAQAAAAFbAQAAAAFcAQB9ACFdAQAAAAFeAQAAAAFfAQAAAAENBAAAgQEAIAUAAIIBACBNAAB-ADBOAAAOABBPAAB-ADBQAQByACFUQABzACFiAQByACFjAQByACFkAQB_ACFmAACAAWYiZwEAfwAhaEAAcwAhC1UBAAAAAVYBAAAABVcBAAAABVgBAAAAAVkBAAAAAVoBAAAAAVsBAAAAAVwBAH0AIV0BAAAAAV4BAAAAAV8BAAAAAQRVAAAAZgJWAAAAZghXAAAAZghcAAB6ZiIDaQAAAwAgagAAAwAgawAAAwAgA2kAAAcAIGoAAAcAIGsAAAcAIAgDAACEAQAgTQAAgwEAME4AAAcAEE8AAIMBADBQAQByACFSAQByACFUQABzACFgAQByACEPBAAAgQEAIAUAAIIBACBNAAB-ADBOAAAOABBPAAB-ADBQAQByACFUQABzACFiAQByACFjAQByACFkAQB_ACFmAACAAWYiZwEAfwAhaEAAcwAhbQAADgAgbgAADgAgAlIBAAAAAWEBAAAAAQgDAACEAQAgTQAAhgEAME4AAAMAEE8AAIYBADBQAQByACFSAQByACFUQABzACFhAQByACEAAAABcgEAAAABAXJAAAAAAQAAAAUTAADCAQAgFAAAxQEAIG8AAMMBACBwAADEAQAgdQAAAQAgAxMAAMIBACBvAADDAQAgdQAAAQAgAAAABRMAAL0BACAUAADAAQAgbwAAvgEAIHAAAL8BACB1AAABACADEwAAvQEAIG8AAL4BACB1AAABACAAAAAAAXIBAAAAAQFyAAAAZgILEwAAqgEAMBQAAK8BADBvAACrAQAwcAAArAEAMHEAAK0BACByAACuAQAwcwAArgEAMHQAAK4BADB1AACuAQAwdgAAsAEAMHcAALEBADALEwAAngEAMBQAAKMBADBvAACfAQAwcAAAoAEAMHEAAKEBACByAACiAQAwcwAAogEAMHQAAKIBADB1AACiAQAwdgAApAEAMHcAAKUBADADUAEAAAABVEAAAAABYAEAAAABAgAAAAkAIBMAAKkBACADAAAACQAgEwAAqQEAIBQAAKgBACABDAAAvAEAMAgDAACEAQAgTQAAgwEAME4AAAcAEE8AAIMBADBQAQAAAAFSAQByACFUQABzACFgAQByACECAAAACQAgDAAAqAEAIAIAAACmAQAgDAAApwEAIAdNAAClAQAwTgAApgEAEE8AAKUBADBQAQByACFSAQByACFUQABzACFgAQByACEHTQAApQEAME4AAKYBABBPAAClAQAwUAEAcgAhUgEAcgAhVEAAcwAhYAEAcgAhA1ABAIoBACFUQACLAQAhYAEAigEAIQNQAQCKAQAhVEAAiwEAIWABAIoBACEDUAEAAAABVEAAAAABYAEAAAABA1ABAAAAAVRAAAAAAWEBAAAAAQIAAAAFACATAAC1AQAgAwAAAAUAIBMAALUBACAUAAC0AQAgAQwAALsBADAJAwAAhAEAIE0AAIYBADBOAAADABBPAACGAQAwUAEAAAABUgEAcgAhVEAAcwAhYQEAcgAhbAAAhQEAIAIAAAAFACAMAAC0AQAgAgAAALIBACAMAACzAQAgB00AALEBADBOAACyAQAQTwAAsQEAMFABAHIAIVIBAHIAIVRAAHMAIWEBAHIAIQdNAACxAQAwTgAAsgEAEE8AALEBADBQAQByACFSAQByACFUQABzACFhAQByACEDUAEAigEAIVRAAIsBACFhAQCKAQAhA1ABAIoBACFUQACLAQAhYQEAigEAIQNQAQAAAAFUQAAAAAFhAQAAAAEEEwAAqgEAMG8AAKsBADBxAACtAQAgdQAArgEAMAQTAACeAQAwbwAAnwEAMHEAAKEBACB1AACiAQAwAAAEBAAAuAEAIAUAALkBACBkAACWAQAgZwAAlgEAIANQAQAAAAFUQAAAAAFhAQAAAAEDUAEAAAABVEAAAAABYAEAAAABCQUAALcBACBQAQAAAAFUQAAAAAFiAQAAAAFjAQAAAAFkAQAAAAFmAAAAZgJnAQAAAAFoQAAAAAECAAAAAQAgEwAAvQEAIAMAAAAOACATAAC9AQAgFAAAwQEAIAsAAAAOACAFAACdAQAgDAAAwQEAIFABAIoBACFUQACLAQAhYgEAigEAIWMBAIoBACFkAQCaAQAhZgAAmwFmImcBAJoBACFoQACLAQAhCQUAAJ0BACBQAQCKAQAhVEAAiwEAIWIBAIoBACFjAQCKAQAhZAEAmgEAIWYAAJsBZiJnAQCaAQAhaEAAiwEAIQkEAAC2AQAgUAEAAAABVEAAAAABYgEAAAABYwEAAAABZAEAAAABZgAAAGYCZwEAAAABaEAAAAABAgAAAAEAIBMAAMIBACADAAAADgAgEwAAwgEAIBQAAMYBACALAAAADgAgBAAAnAEAIAwAAMYBACBQAQCKAQAhVEAAiwEAIWIBAIoBACFjAQCKAQAhZAEAmgEAIWYAAJsBZiJnAQCaAQAhaEAAiwEAIQkEAACcAQAgUAEAigEAIVRAAIsBACFiAQCKAQAhYwEAigEAIWQBAJoBACFmAACbAWYiZwEAmgEAIWhAAIsBACEDBAYCBQoDBgAEAQMAAQEDAAECBAsABQwAAAAAAwYACRkAChoACwAAAAMGAAkZAAoaAAsBAwABAQMAAQMGABAZABEaABIAAAADBgAQGQARGgASAQMAAQEDAAEDBgAXGQAYGgAZAAAAAwYAFxkAGBoAGQAAAAMGAB8ZACAaACEAAAADBgAfGQAgGgAhBwIBCA0BCRABChEBCxIBDRQBDhYFDxcGEBkBERsFEhwHFR0BFh4BFx8FGyIIHCMMHSQCHiUCHyYCICcCISgCIioCIywFJC0NJS8CJjEFJzIOKDMCKTQCKjUFKzgPLDkTLToDLjsDLzwDMD0DMT4DMkADM0IFNEMUNUUDNkcFN0gVOEkDOUoDOksFO04WPE8aPVEbPlIbP1UbQFYbQVcbQlkbQ1sFRFwcRV4bRmAFR2EdSGIbSWMbSmQFS2ceTGgi"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("node:buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
__name(decodeBase64AsWasm, "decodeBase64AsWasm");
config.compilerWasm = {
  getRuntime: /* @__PURE__ */ __name(async () => await import("./query_compiler_fast_bg.postgresql-MWK4OMPX.mjs"), "getRuntime"),
  getQueryCompilerWasmModule: /* @__PURE__ */ __name(async () => {
    const { wasm } = await import("./query_compiler_fast_bg.postgresql.wasm-base64-ALRFBBBJ.mjs");
    return await decodeBase64AsWasm(wasm);
  }, "getQueryCompilerWasmModule"),
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}
__name(getPrismaClientClass, "getPrismaClientClass");

// app/generated/prisma/internal/prismaNamespace.ts
init_esm();
var runtime2 = __toESM(require_client());
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes3 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// app/generated/prisma/enums.ts
init_esm();

// app/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// node_modules/@prisma/adapter-pg/dist/index.mjs
init_esm();

// node_modules/@prisma/driver-adapter-utils/dist/index.mjs
init_esm();

// node_modules/@prisma/debug/dist/index.mjs
init_esm();
var __defProp = Object.defineProperty;
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
}, "__export");
var colors_exports = {};
__export(colors_exports, {
  $: /* @__PURE__ */ __name(() => $, "$"),
  bgBlack: /* @__PURE__ */ __name(() => bgBlack, "bgBlack"),
  bgBlue: /* @__PURE__ */ __name(() => bgBlue, "bgBlue"),
  bgCyan: /* @__PURE__ */ __name(() => bgCyan, "bgCyan"),
  bgGreen: /* @__PURE__ */ __name(() => bgGreen, "bgGreen"),
  bgMagenta: /* @__PURE__ */ __name(() => bgMagenta, "bgMagenta"),
  bgRed: /* @__PURE__ */ __name(() => bgRed, "bgRed"),
  bgWhite: /* @__PURE__ */ __name(() => bgWhite, "bgWhite"),
  bgYellow: /* @__PURE__ */ __name(() => bgYellow, "bgYellow"),
  black: /* @__PURE__ */ __name(() => black, "black"),
  blue: /* @__PURE__ */ __name(() => blue, "blue"),
  bold: /* @__PURE__ */ __name(() => bold, "bold"),
  cyan: /* @__PURE__ */ __name(() => cyan, "cyan"),
  dim: /* @__PURE__ */ __name(() => dim, "dim"),
  gray: /* @__PURE__ */ __name(() => gray, "gray"),
  green: /* @__PURE__ */ __name(() => green, "green"),
  grey: /* @__PURE__ */ __name(() => grey, "grey"),
  hidden: /* @__PURE__ */ __name(() => hidden, "hidden"),
  inverse: /* @__PURE__ */ __name(() => inverse, "inverse"),
  italic: /* @__PURE__ */ __name(() => italic, "italic"),
  magenta: /* @__PURE__ */ __name(() => magenta, "magenta"),
  red: /* @__PURE__ */ __name(() => red, "red"),
  reset: /* @__PURE__ */ __name(() => reset, "reset"),
  strikethrough: /* @__PURE__ */ __name(() => strikethrough, "strikethrough"),
  underline: /* @__PURE__ */ __name(() => underline, "underline"),
  white: /* @__PURE__ */ __name(() => white, "white"),
  yellow: /* @__PURE__ */ __name(() => yellow, "yellow")
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x2, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x2}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
__name(init, "init");
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
var MAX_ARGS_HISTORY = 100;
var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
  enable(namespace) {
    if (typeof namespace === "string") {
      globalThis.DEBUG = namespace;
    }
  },
  disable() {
    const prev = globalThis.DEBUG;
    globalThis.DEBUG = "";
    return prev;
  },
  // this is the core logic to check if logging should happen or not
  enabled(namespace) {
    const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
      return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    });
    const isListened = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
      return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
    });
    const isExcluded = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
      return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
    });
    return isListened && !isExcluded;
  },
  log: /* @__PURE__ */ __name((...args) => {
    const [namespace, format, ...rest] = args;
    const logWithFormatting = console.warn ?? console.log;
    logWithFormatting(`${namespace} ${format}`, ...rest);
  }, "log"),
  formatters: {}
  // not implemented
};
function debugCreate(namespace) {
  const instanceProps = {
    color: COLORS[lastColor++ % COLORS.length],
    enabled: topProps.enabled(namespace),
    namespace,
    log: topProps.log,
    extend: /* @__PURE__ */ __name(() => {
    }, "extend")
    // not implemented
  };
  const debugCall = /* @__PURE__ */ __name((...args) => {
    const { enabled, namespace: namespace2, color, log } = instanceProps;
    if (args.length !== 0) {
      argsHistory.push([namespace2, ...args]);
    }
    if (argsHistory.length > MAX_ARGS_HISTORY) {
      argsHistory.shift();
    }
    if (topProps.enabled(namespace2) || enabled) {
      const stringArgs = args.map((arg) => {
        if (typeof arg === "string") {
          return arg;
        }
        return safeStringify(arg);
      });
      const ms = `+${Date.now() - lastTimestamp}ms`;
      lastTimestamp = Date.now();
      if (globalThis.DEBUG_COLORS) {
        log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
      } else {
        log(namespace2, ...stringArgs, ms);
      }
    }
  }, "debugCall");
  return new Proxy(debugCall, {
    get: /* @__PURE__ */ __name((_, prop) => instanceProps[prop], "get"),
    set: /* @__PURE__ */ __name((_, prop, value) => instanceProps[prop] = value, "set")
  });
}
__name(debugCreate, "debugCreate");
var Debug2 = new Proxy(debugCreate, {
  get: /* @__PURE__ */ __name((_, prop) => topProps[prop], "get"),
  set: /* @__PURE__ */ __name((_, prop, value) => topProps[prop] = value, "set")
});
function safeStringify(value, indent = 2) {
  const cache = /* @__PURE__ */ new Set();
  return JSON.stringify(
    value,
    (key, value2) => {
      if (typeof value2 === "object" && value2 !== null) {
        if (cache.has(value2)) {
          return `[Circular *]`;
        }
        cache.add(value2);
      } else if (typeof value2 === "bigint") {
        return value2.toString();
      }
      return value2;
    },
    indent
  );
}
__name(safeStringify, "safeStringify");

// node_modules/@prisma/driver-adapter-utils/dist/index.mjs
var DriverAdapterError = class extends Error {
  static {
    __name(this, "DriverAdapterError");
  }
  name = "DriverAdapterError";
  cause;
  constructor(payload) {
    super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
    this.cause = payload;
  }
};
var debug = Debug2("driver-adapter-utils");
var ColumnTypeEnum = {
  // Scalars
  Int32: 0,
  Int64: 1,
  Float: 2,
  Double: 3,
  Numeric: 4,
  Boolean: 5,
  Character: 6,
  Text: 7,
  Date: 8,
  Time: 9,
  DateTime: 10,
  Json: 11,
  Enum: 12,
  Bytes: 13,
  Set: 14,
  Uuid: 15,
  // Arrays
  Int32Array: 64,
  Int64Array: 65,
  FloatArray: 66,
  DoubleArray: 67,
  NumericArray: 68,
  BooleanArray: 69,
  CharacterArray: 70,
  TextArray: 71,
  DateArray: 72,
  TimeArray: 73,
  DateTimeArray: 74,
  JsonArray: 75,
  EnumArray: 76,
  BytesArray: 77,
  UuidArray: 78,
  // Custom
  UnknownNumber: 128
};
var mockAdapterErrors = {
  queryRaw: new Error("Not implemented: queryRaw"),
  executeRaw: new Error("Not implemented: executeRaw"),
  startTransaction: new Error("Not implemented: startTransaction"),
  executeScript: new Error("Not implemented: executeScript"),
  dispose: new Error("Not implemented: dispose")
};

// node_modules/pg/esm/index.mjs
init_esm();
var import_lib = __toESM(require_lib2(), 1);
var Client = import_lib.default.Client;
var Pool = import_lib.default.Pool;
var Connection = import_lib.default.Connection;
var types = import_lib.default.types;
var Query = import_lib.default.Query;
var DatabaseError = import_lib.default.DatabaseError;
var escapeIdentifier = import_lib.default.escapeIdentifier;
var escapeLiteral = import_lib.default.escapeLiteral;
var Result = import_lib.default.Result;
var TypeOverrides = import_lib.default.TypeOverrides;
var defaults = import_lib.default.defaults;
var esm_default = import_lib.default;

// node_modules/@prisma/adapter-pg/dist/index.mjs
var import_postgres_array = __toESM(require_postgres_array2(), 1);
var name = "@prisma/adapter-pg";
var FIRST_NORMAL_OBJECT_ID = 16384;
var { types: types2 } = esm_default;
var { builtins: ScalarColumnType, getTypeParser } = types2;
var AdditionalScalarColumnType = {
  NAME: 19
};
var ArrayColumnType = {
  BIT_ARRAY: 1561,
  BOOL_ARRAY: 1e3,
  BYTEA_ARRAY: 1001,
  BPCHAR_ARRAY: 1014,
  CHAR_ARRAY: 1002,
  CIDR_ARRAY: 651,
  DATE_ARRAY: 1182,
  FLOAT4_ARRAY: 1021,
  FLOAT8_ARRAY: 1022,
  INET_ARRAY: 1041,
  INT2_ARRAY: 1005,
  INT4_ARRAY: 1007,
  INT8_ARRAY: 1016,
  JSONB_ARRAY: 3807,
  JSON_ARRAY: 199,
  MONEY_ARRAY: 791,
  NUMERIC_ARRAY: 1231,
  OID_ARRAY: 1028,
  TEXT_ARRAY: 1009,
  TIMESTAMP_ARRAY: 1115,
  TIMESTAMPTZ_ARRAY: 1185,
  TIME_ARRAY: 1183,
  UUID_ARRAY: 2951,
  VARBIT_ARRAY: 1563,
  VARCHAR_ARRAY: 1015,
  XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
  static {
    __name(this, "_UnsupportedNativeDataType");
  }
  // map of type codes to type names
  static typeNames = {
    16: "bool",
    17: "bytea",
    18: "char",
    19: "name",
    20: "int8",
    21: "int2",
    22: "int2vector",
    23: "int4",
    24: "regproc",
    25: "text",
    26: "oid",
    27: "tid",
    28: "xid",
    29: "cid",
    30: "oidvector",
    32: "pg_ddl_command",
    71: "pg_type",
    75: "pg_attribute",
    81: "pg_proc",
    83: "pg_class",
    114: "json",
    142: "xml",
    194: "pg_node_tree",
    269: "table_am_handler",
    325: "index_am_handler",
    600: "point",
    601: "lseg",
    602: "path",
    603: "box",
    604: "polygon",
    628: "line",
    650: "cidr",
    700: "float4",
    701: "float8",
    705: "unknown",
    718: "circle",
    774: "macaddr8",
    790: "money",
    829: "macaddr",
    869: "inet",
    1033: "aclitem",
    1042: "bpchar",
    1043: "varchar",
    1082: "date",
    1083: "time",
    1114: "timestamp",
    1184: "timestamptz",
    1186: "interval",
    1266: "timetz",
    1560: "bit",
    1562: "varbit",
    1700: "numeric",
    1790: "refcursor",
    2202: "regprocedure",
    2203: "regoper",
    2204: "regoperator",
    2205: "regclass",
    2206: "regtype",
    2249: "record",
    2275: "cstring",
    2276: "any",
    2277: "anyarray",
    2278: "void",
    2279: "trigger",
    2280: "language_handler",
    2281: "internal",
    2283: "anyelement",
    2287: "_record",
    2776: "anynonarray",
    2950: "uuid",
    2970: "txid_snapshot",
    3115: "fdw_handler",
    3220: "pg_lsn",
    3310: "tsm_handler",
    3361: "pg_ndistinct",
    3402: "pg_dependencies",
    3500: "anyenum",
    3614: "tsvector",
    3615: "tsquery",
    3642: "gtsvector",
    3734: "regconfig",
    3769: "regdictionary",
    3802: "jsonb",
    3831: "anyrange",
    3838: "event_trigger",
    3904: "int4range",
    3906: "numrange",
    3908: "tsrange",
    3910: "tstzrange",
    3912: "daterange",
    3926: "int8range",
    4072: "jsonpath",
    4089: "regnamespace",
    4096: "regrole",
    4191: "regcollation",
    4451: "int4multirange",
    4532: "nummultirange",
    4533: "tsmultirange",
    4534: "tstzmultirange",
    4535: "datemultirange",
    4536: "int8multirange",
    4537: "anymultirange",
    4538: "anycompatiblemultirange",
    4600: "pg_brin_bloom_summary",
    4601: "pg_brin_minmax_multi_summary",
    5017: "pg_mcv_list",
    5038: "pg_snapshot",
    5069: "xid8",
    5077: "anycompatible",
    5078: "anycompatiblearray",
    5079: "anycompatiblenonarray",
    5080: "anycompatiblerange"
  };
  type;
  constructor(code) {
    super();
    this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
    this.message = `Unsupported column type ${this.type}`;
  }
};
function fieldToColumnType(fieldTypeId) {
  switch (fieldTypeId) {
    case ScalarColumnType.INT2:
    case ScalarColumnType.INT4:
      return ColumnTypeEnum.Int32;
    case ScalarColumnType.INT8:
      return ColumnTypeEnum.Int64;
    case ScalarColumnType.FLOAT4:
      return ColumnTypeEnum.Float;
    case ScalarColumnType.FLOAT8:
      return ColumnTypeEnum.Double;
    case ScalarColumnType.BOOL:
      return ColumnTypeEnum.Boolean;
    case ScalarColumnType.DATE:
      return ColumnTypeEnum.Date;
    case ScalarColumnType.TIME:
    case ScalarColumnType.TIMETZ:
      return ColumnTypeEnum.Time;
    case ScalarColumnType.TIMESTAMP:
    case ScalarColumnType.TIMESTAMPTZ:
      return ColumnTypeEnum.DateTime;
    case ScalarColumnType.NUMERIC:
    case ScalarColumnType.MONEY:
      return ColumnTypeEnum.Numeric;
    case ScalarColumnType.JSON:
    case ScalarColumnType.JSONB:
      return ColumnTypeEnum.Json;
    case ScalarColumnType.UUID:
      return ColumnTypeEnum.Uuid;
    case ScalarColumnType.OID:
      return ColumnTypeEnum.Int64;
    case ScalarColumnType.BPCHAR:
    case ScalarColumnType.TEXT:
    case ScalarColumnType.VARCHAR:
    case ScalarColumnType.BIT:
    case ScalarColumnType.VARBIT:
    case ScalarColumnType.INET:
    case ScalarColumnType.CIDR:
    case ScalarColumnType.XML:
    case AdditionalScalarColumnType.NAME:
      return ColumnTypeEnum.Text;
    case ScalarColumnType.BYTEA:
      return ColumnTypeEnum.Bytes;
    case ArrayColumnType.INT2_ARRAY:
    case ArrayColumnType.INT4_ARRAY:
      return ColumnTypeEnum.Int32Array;
    case ArrayColumnType.FLOAT4_ARRAY:
      return ColumnTypeEnum.FloatArray;
    case ArrayColumnType.FLOAT8_ARRAY:
      return ColumnTypeEnum.DoubleArray;
    case ArrayColumnType.NUMERIC_ARRAY:
    case ArrayColumnType.MONEY_ARRAY:
      return ColumnTypeEnum.NumericArray;
    case ArrayColumnType.BOOL_ARRAY:
      return ColumnTypeEnum.BooleanArray;
    case ArrayColumnType.CHAR_ARRAY:
      return ColumnTypeEnum.CharacterArray;
    case ArrayColumnType.BPCHAR_ARRAY:
    case ArrayColumnType.TEXT_ARRAY:
    case ArrayColumnType.VARCHAR_ARRAY:
    case ArrayColumnType.VARBIT_ARRAY:
    case ArrayColumnType.BIT_ARRAY:
    case ArrayColumnType.INET_ARRAY:
    case ArrayColumnType.CIDR_ARRAY:
    case ArrayColumnType.XML_ARRAY:
      return ColumnTypeEnum.TextArray;
    case ArrayColumnType.DATE_ARRAY:
      return ColumnTypeEnum.DateArray;
    case ArrayColumnType.TIME_ARRAY:
      return ColumnTypeEnum.TimeArray;
    case ArrayColumnType.TIMESTAMP_ARRAY:
      return ColumnTypeEnum.DateTimeArray;
    case ArrayColumnType.TIMESTAMPTZ_ARRAY:
      return ColumnTypeEnum.DateTimeArray;
    case ArrayColumnType.JSON_ARRAY:
    case ArrayColumnType.JSONB_ARRAY:
      return ColumnTypeEnum.JsonArray;
    case ArrayColumnType.BYTEA_ARRAY:
      return ColumnTypeEnum.BytesArray;
    case ArrayColumnType.UUID_ARRAY:
      return ColumnTypeEnum.UuidArray;
    case ArrayColumnType.INT8_ARRAY:
    case ArrayColumnType.OID_ARRAY:
      return ColumnTypeEnum.Int64Array;
    default:
      if (fieldTypeId >= FIRST_NORMAL_OBJECT_ID) {
        return ColumnTypeEnum.Text;
      }
      throw new UnsupportedNativeDataType(fieldTypeId);
  }
}
__name(fieldToColumnType, "fieldToColumnType");
function normalize_array(element_normalizer) {
  return (str) => (0, import_postgres_array.parse)(str, element_normalizer);
}
__name(normalize_array, "normalize_array");
function normalize_numeric(numeric) {
  return numeric;
}
__name(normalize_numeric, "normalize_numeric");
function normalize_date(date) {
  return date;
}
__name(normalize_date, "normalize_date");
function normalize_timestamp(time) {
  return `${time.replace(" ", "T")}+00:00`;
}
__name(normalize_timestamp, "normalize_timestamp");
function normalize_timestamptz(time) {
  return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
__name(normalize_timestamptz, "normalize_timestamptz");
function normalize_time(time) {
  return time;
}
__name(normalize_time, "normalize_time");
function normalize_timez(time) {
  return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
__name(normalize_timez, "normalize_timez");
function normalize_money(money) {
  return money.slice(1);
}
__name(normalize_money, "normalize_money");
function normalize_xml(xml) {
  return xml;
}
__name(normalize_xml, "normalize_xml");
function toJson(json) {
  return json;
}
__name(toJson, "toJson");
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
  return parsePgBytes(serializedBytes);
}
__name(convertBytes, "convertBytes");
function normalizeBit(bit) {
  return bit;
}
__name(normalizeBit, "normalizeBit");
var customParsers = {
  [ScalarColumnType.NUMERIC]: normalize_numeric,
  [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
  [ScalarColumnType.TIME]: normalize_time,
  [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
  [ScalarColumnType.TIMETZ]: normalize_timez,
  [ScalarColumnType.DATE]: normalize_date,
  [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
  [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
  [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
  [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
  [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
  [ScalarColumnType.MONEY]: normalize_money,
  [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
  [ScalarColumnType.JSON]: toJson,
  [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
  [ScalarColumnType.JSONB]: toJson,
  [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
  [ScalarColumnType.BYTEA]: convertBytes,
  [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
  [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
  [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
  [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
  if (arg === null) {
    return null;
  }
  if (Array.isArray(arg) && argType.arity === "list") {
    return arg.map((value) => mapArg(value, argType));
  }
  if (typeof arg === "string" && argType.scalarType === "datetime") {
    arg = new Date(arg);
  }
  if (arg instanceof Date) {
    switch (argType.dbType) {
      case "TIME":
      case "TIMETZ":
        return formatTime(arg);
      case "DATE":
        return formatDate(arg);
      default:
        return formatDateTime(arg);
    }
  }
  if (typeof arg === "string" && argType.scalarType === "bytes") {
    return Buffer.from(arg, "base64");
  }
  if (ArrayBuffer.isView(arg)) {
    return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
  }
  return arg;
}
__name(mapArg, "mapArg");
function formatDateTime(date) {
  const pad = /* @__PURE__ */ __name((n, z = 2) => String(n).padStart(z, "0"), "pad");
  const ms = date.getUTCMilliseconds();
  return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
__name(formatDateTime, "formatDateTime");
function formatDate(date) {
  const pad = /* @__PURE__ */ __name((n, z = 2) => String(n).padStart(z, "0"), "pad");
  return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
__name(formatDate, "formatDate");
function formatTime(date) {
  const pad = /* @__PURE__ */ __name((n, z = 2) => String(n).padStart(z, "0"), "pad");
  const ms = date.getUTCMilliseconds();
  return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
__name(formatTime, "formatTime");
var TLS_ERRORS = /* @__PURE__ */ new Set([
  "UNABLE_TO_GET_ISSUER_CERT",
  "UNABLE_TO_GET_CRL",
  "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
  "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
  "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
  "CERT_SIGNATURE_FAILURE",
  "CRL_SIGNATURE_FAILURE",
  "CERT_NOT_YET_VALID",
  "CERT_HAS_EXPIRED",
  "CRL_NOT_YET_VALID",
  "CRL_HAS_EXPIRED",
  "ERROR_IN_CERT_NOT_BEFORE_FIELD",
  "ERROR_IN_CERT_NOT_AFTER_FIELD",
  "ERROR_IN_CRL_LAST_UPDATE_FIELD",
  "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_CHAIN_TOO_LONG",
  "CERT_REVOKED",
  "INVALID_CA",
  "INVALID_PURPOSE",
  "CERT_UNTRUSTED",
  "CERT_REJECTED",
  "HOSTNAME_MISMATCH",
  "ERR_TLS_CERT_ALTNAME_FORMAT",
  "ERR_TLS_CERT_ALTNAME_INVALID"
]);
var SOCKET_ERRORS = /* @__PURE__ */ new Set(["ENOTFOUND", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT"]);
function convertDriverError(error) {
  if (isSocketError(error)) {
    return mapSocketError(error);
  }
  if (isTlsError(error)) {
    return {
      kind: "TlsConnectionError",
      reason: error.message
    };
  }
  if (isDriverError(error)) {
    return {
      originalCode: error.code,
      originalMessage: error.message,
      ...mapDriverError(error)
    };
  }
  throw error;
}
__name(convertDriverError, "convertDriverError");
function mapDriverError(error) {
  switch (error.code) {
    case "22001":
      return {
        kind: "LengthMismatch",
        column: error.column
      };
    case "22003":
      return {
        kind: "ValueOutOfRange",
        cause: error.message
      };
    case "22P02":
      return {
        kind: "InvalidInputValue",
        message: error.message
      };
    case "23505": {
      const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
      return {
        kind: "UniqueConstraintViolation",
        constraint: fields !== void 0 ? { fields } : void 0
      };
    }
    case "23502": {
      const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
      return {
        kind: "NullConstraintViolation",
        constraint: fields !== void 0 ? { fields } : void 0
      };
    }
    case "23503": {
      let constraint;
      if (error.column) {
        constraint = { fields: [error.column] };
      } else if (error.constraint) {
        constraint = { index: error.constraint };
      }
      return {
        kind: "ForeignKeyConstraintViolation",
        constraint
      };
    }
    case "3D000":
      return {
        kind: "DatabaseDoesNotExist",
        db: error.message.split(" ").at(1)?.split('"').at(1)
      };
    case "28000":
      return {
        kind: "DatabaseAccessDenied",
        db: error.message.split(",").find((s) => s.startsWith(" database"))?.split('"').at(1)
      };
    case "28P01":
      return {
        kind: "AuthenticationFailed",
        user: error.message.split(" ").pop()?.split('"').at(1)
      };
    case "40001":
      return {
        kind: "TransactionWriteConflict"
      };
    case "42P01":
      return {
        kind: "TableDoesNotExist",
        table: error.message.split(" ").at(1)?.split('"').at(1)
      };
    case "42703": {
      const rawColumn = error.message.match(/^column (.+) does not exist$/)?.at(1);
      return {
        kind: "ColumnNotFound",
        column: rawColumn?.replace(/"((?:""|[^"])*)"/g, (_, id) => id.replaceAll('""', '"'))
      };
    }
    case "42P04":
      return {
        kind: "DatabaseAlreadyExists",
        db: error.message.split(" ").at(1)?.split('"').at(1)
      };
    case "53300":
      return {
        kind: "TooManyConnections",
        cause: error.message
      };
    default:
      return {
        kind: "postgres",
        code: error.code ?? "N/A",
        severity: error.severity ?? "N/A",
        message: error.message,
        detail: error.detail,
        column: error.column,
        hint: error.hint
      };
  }
}
__name(mapDriverError, "mapDriverError");
function isDriverError(error) {
  return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
__name(isDriverError, "isDriverError");
function mapSocketError(error) {
  switch (error.code) {
    case "ENOTFOUND":
    case "ECONNREFUSED":
      return {
        kind: "DatabaseNotReachable",
        host: error.address ?? error.hostname,
        port: error.port
      };
    case "ECONNRESET":
      return {
        kind: "ConnectionClosed"
      };
    case "ETIMEDOUT":
      return {
        kind: "SocketTimeout"
      };
  }
}
__name(mapSocketError, "mapSocketError");
function isSocketError(error) {
  return typeof error.code === "string" && typeof error.syscall === "string" && typeof error.errno === "number" && SOCKET_ERRORS.has(error.code);
}
__name(isSocketError, "isSocketError");
function isTlsError(error) {
  if (typeof error.code === "string") {
    return TLS_ERRORS.has(error.code);
  }
  switch (error.message) {
    case "The server does not support SSL connections":
    case "There was an error establishing an SSL connection":
      return true;
  }
  return false;
}
__name(isTlsError, "isTlsError");
var types22 = esm_default.types;
var debug2 = Debug2("prisma:driver-adapter:pg");
var PgQueryable = class {
  static {
    __name(this, "PgQueryable");
  }
  constructor(client, pgOptions) {
    this.client = client;
    this.pgOptions = pgOptions;
  }
  provider = "postgres";
  adapterName = name;
  /**
   * Execute a query given as SQL, interpolating the given parameters.
   */
  async queryRaw(query) {
    const tag = "[js::query_raw]";
    debug2(`${tag} %O`, query);
    const { fields, rows } = await this.performIO(query);
    const columnNames = fields.map((field) => field.name);
    let columnTypes = [];
    try {
      columnTypes = fields.map((field) => fieldToColumnType(field.dataTypeID));
    } catch (e) {
      if (e instanceof UnsupportedNativeDataType) {
        throw new DriverAdapterError({
          kind: "UnsupportedNativeDataType",
          type: e.type
        });
      }
      throw e;
    }
    const udtParser = this.pgOptions?.userDefinedTypeParser;
    if (udtParser) {
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if (field.dataTypeID >= FIRST_NORMAL_OBJECT_ID && !Object.hasOwn(customParsers, field.dataTypeID)) {
          for (let j = 0; j < rows.length; j++) {
            rows[j][i] = await udtParser(field.dataTypeID, rows[j][i], this);
          }
        }
      }
    }
    return {
      columnNames,
      columnTypes,
      rows
    };
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */
  async executeRaw(query) {
    const tag = "[js::execute_raw]";
    debug2(`${tag} %O`, query);
    return (await this.performIO(query)).rowCount ?? 0;
  }
  /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */
  async performIO(query) {
    const { sql, args } = query;
    const values = args.map((arg, i) => mapArg(arg, query.argTypes[i]));
    try {
      const result = await this.client.query(
        {
          name: this.pgOptions?.statementNameGenerator?.(query),
          text: sql,
          values,
          rowMode: "array",
          types: {
            getTypeParser: /* @__PURE__ */ __name((oid, format) => {
              if (format === "text" && customParsers[oid]) {
                return customParsers[oid];
              }
              return types22.getTypeParser(oid, format);
            }, "getTypeParser")
          }
        },
        values
      );
      return result;
    } catch (e) {
      this.onError(e);
    }
  }
  onError(error) {
    debug2("Error in performIO: %O", error);
    throw new DriverAdapterError(convertDriverError(error));
  }
};
var PgTransaction = class extends PgQueryable {
  static {
    __name(this, "PgTransaction");
  }
  constructor(client, options, pgOptions, cleanup) {
    super(client, pgOptions);
    this.options = options;
    this.pgOptions = pgOptions;
    this.cleanup = cleanup;
  }
  async commit() {
    debug2(`[js::commit]`);
    this.cleanup?.();
    this.client.release();
  }
  async rollback() {
    debug2(`[js::rollback]`);
    this.cleanup?.();
    this.client.release();
  }
  async createSavepoint(name2) {
    await this.executeRaw({ sql: `SAVEPOINT ${name2}`, args: [], argTypes: [] });
  }
  async rollbackToSavepoint(name2) {
    await this.executeRaw({ sql: `ROLLBACK TO SAVEPOINT ${name2}`, args: [], argTypes: [] });
  }
  async releaseSavepoint(name2) {
    await this.executeRaw({ sql: `RELEASE SAVEPOINT ${name2}`, args: [], argTypes: [] });
  }
};
var PrismaPgAdapter = class extends PgQueryable {
  static {
    __name(this, "PrismaPgAdapter");
  }
  constructor(client, pgOptions, release) {
    super(client);
    this.pgOptions = pgOptions;
    this.release = release;
  }
  async startTransaction(isolationLevel) {
    const options = {
      usePhantomQuery: false
    };
    const tag = "[js::startTransaction]";
    debug2("%s options: %O", tag, options);
    const conn = await this.client.connect().catch((error) => this.onError(error));
    const onError = /* @__PURE__ */ __name((err) => {
      debug2(`Error from pool connection: ${err.message} %O`, err);
      this.pgOptions?.onConnectionError?.(err);
    }, "onError");
    conn.on("error", onError);
    const cleanup = /* @__PURE__ */ __name(() => {
      conn.removeListener("error", onError);
    }, "cleanup");
    try {
      const tx = new PgTransaction(conn, options, this.pgOptions, cleanup);
      await tx.executeRaw({ sql: "BEGIN", args: [], argTypes: [] });
      if (isolationLevel) {
        await tx.executeRaw({
          sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
          args: [],
          argTypes: []
        });
      }
      return tx;
    } catch (error) {
      cleanup();
      conn.release(error);
      this.onError(error);
    }
  }
  async executeScript(script) {
    const statements = script.split(";").map((stmt) => stmt.trim()).filter((stmt) => stmt.length > 0);
    for (const stmt of statements) {
      try {
        await this.client.query(stmt);
      } catch (error) {
        this.onError(error);
      }
    }
  }
  getConnectionInfo() {
    return {
      schemaName: this.pgOptions?.schema,
      supportsRelationJoins: true
    };
  }
  async dispose() {
    return this.release?.();
  }
  underlyingDriver() {
    return this.client;
  }
};
var PrismaPgAdapterFactory = class {
  static {
    __name(this, "PrismaPgAdapterFactory");
  }
  constructor(poolOrConfig, options) {
    this.options = options;
    if (poolOrConfig instanceof esm_default.Pool) {
      this.externalPool = poolOrConfig;
      this.config = poolOrConfig.options;
    } else if (typeof poolOrConfig === "string") {
      this.externalPool = null;
      this.config = { connectionString: poolOrConfig };
    } else {
      this.externalPool = null;
      this.config = poolOrConfig;
    }
  }
  provider = "postgres";
  adapterName = name;
  config;
  externalPool;
  async connect() {
    const client = this.externalPool ?? new esm_default.Pool(this.config);
    const onIdleClientError = /* @__PURE__ */ __name((err) => {
      debug2(`Error from idle pool client: ${err.message} %O`, err);
      this.options?.onPoolError?.(err);
    }, "onIdleClientError");
    client.on("error", onIdleClientError);
    return new PrismaPgAdapter(client, this.options, async () => {
      if (this.externalPool) {
        if (this.options?.disposeExternalPool) {
          await this.externalPool.end();
          this.externalPool = null;
        } else {
          this.externalPool.removeListener("error", onIdleClientError);
        }
      } else {
        await client.end();
      }
    });
  }
  async connectToShadowDb() {
    const conn = await this.connect();
    const database = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
    await conn.executeScript(`CREATE DATABASE "${database}"`);
    const client = new esm_default.Pool({ ...this.config, database });
    return new PrismaPgAdapter(client, void 0, async () => {
      await conn.executeScript(`DROP DATABASE "${database}"`);
      await client.end();
    });
  }
};

// node_modules/@prisma/extension-accelerate/dist/index.js
init_esm();
var import_default_index = __toESM(require_default_index(), 1);
var import_default_index2 = __toESM(require_default_index(), 1);
function f(a, n) {
  let [c = 0, u = 0, m = 0] = a.split(".").map(Number), [o = 0, h = 0, i = 0] = n.split(".").map(Number), r = o - c, e = h - u, t = i - m;
  return r || e || t;
}
__name(f, "f");
function p() {
  let a = import_default_index2.default.Prisma.prismaVersion;
  return [F(), `PrismaEngine/${a.engine}`, `PrismaClient/${a.client}`].join(" ");
}
__name(p, "p");
function F() {
  return typeof navigator < "u" ? navigator.userAgent : typeof process < "u" && typeof process.versions < "u" ? `Node/${process.versions.node} (${process.platform}; ${process.arch})` : "EdgeRuntime" in globalThis ? "Vercel-Edge-Runtime" : "UnknownRuntime";
}
__name(F, "F");
var P = "@prisma/extension-accelerate";
var x = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function S(a) {
  let n = p(), c;
  return async (u) => {
    let { args: m } = u, { cacheStrategy: o, __accelerateInfo: h = false, ...i } = m, r = null, { __internalParams: e, query: t } = u;
    return e.customDataProxyFetch = () => async (s, d) => {
      let A = new Array();
      typeof o?.ttl == "number" && A.push(`max-age=${o.ttl}`), typeof o?.swr == "number" && A.push(`stale-while-revalidate=${o.swr}`);
      let y = o?.tags?.join(",") ?? "";
      d.headers = { ...d.headers, "cache-control": A.length > 0 ? A.join(",") : "no-cache", "user-agent": n, ...y.length > 0 ? { "accelerate-cache-tags": y } : {} }, c && (d.headers["accelerate-query-engine-jwt"] = c);
      try {
        let g = await a(s, d);
        return r = { cacheStatus: g.headers.get("accelerate-cache-status"), lastModified: new Date(g.headers.get("last-modified") ?? ""), region: g.headers.get("cf-ray")?.split("-")[1] ?? "unspecified", requestId: g.headers.get("cf-ray") ?? "unspecified", signature: g.headers.get("accelerate-signature") ?? "unspecified" }, c = g.headers.get("accelerate-query-engine-jwt") ?? void 0, g;
      } catch {
        throw new Error(x);
      }
    }, h ? { data: await t(i, e), info: r } : t(i, e);
  };
}
__name(S, "S");
function T(a) {
  let n = f("5.1.0", import_default_index.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index.default.Prisma.defineExtension((c) => {
    let { apiKeyPromise: u, baseURL: m } = b(c), o = S(a);
    async function h(r) {
      let e = await u;
      if (!e) return { requestId: "unspecified" };
      let t;
      try {
        t = await a(new URL("/invalidate", m).href, { method: "POST", headers: { authorization: `Bearer ${e}`, "content-type": "application/json" }, body: JSON.stringify(r) });
      } catch {
        throw new Error(x);
      }
      if (!t?.ok) {
        let s = await t.text();
        throw new Error(`Failed to invalidate Accelerate cache. Response was ${t.status} ${t.statusText}. ${s}`);
      }
      return t.body?.cancel(), { requestId: t.headers.get("cf-ray") ?? "unspecified" };
    }
    __name(h, "h");
    let i = c.$extends({ name: P, query: { $allModels: { $allOperations: o } } });
    return i.$extends({ name: P, client: { $accelerate: { invalidate: /* @__PURE__ */ __name((r) => h(r), "invalidate"), invalidateAll: /* @__PURE__ */ __name(() => h({ tags: "all" }), "invalidateAll") } }, model: { $allModels: { aggregate(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.aggregate(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.aggregate({ ...r, __accelerateInfo: true });
      } });
    }, count(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.count(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.count({ ...r, __accelerateInfo: true });
      } });
    }, findFirst(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findFirst(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findFirst({ ...r, __accelerateInfo: true });
      } });
    }, findFirstOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findFirstOrThrow(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findFirstOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, findMany(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findMany(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findMany({ ...r, __accelerateInfo: true });
      } });
    }, findUnique(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findUnique(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findUnique({ ...r, __accelerateInfo: true });
      } });
    }, findUniqueOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findUniqueOrThrow(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findUniqueOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, groupBy(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.groupBy(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.groupBy({ ...r, __accelerateInfo: true });
      } });
    } } } });
  });
}
__name(T, "T");
function b(a) {
  let n = Reflect.get(a, "_accelerateEngineConfig");
  try {
    let { host: c, hostname: u, protocol: m, searchParams: o } = new URL(n?.accelerateUtils?.resolveDatasourceUrl?.(n));
    if (m === "prisma+postgres:" && (u === "localhost" || u === "127.0.0.1")) return { apiKeyPromise: Promise.resolve(o.get("api_key")), baseURL: new URL(`http://${c}`) };
  } catch {
  }
  return { apiKeyPromise: a._engine.start().then(() => a._engine.apiKey?.() ?? null), baseURL: new URL("https://accelerate.prisma-data.net") };
}
__name(b, "b");
function k(a) {
  let n = a?.fetch ?? fetch;
  return T(n);
}
__name(k, "k");

// lib/prisma.ts
import dns from "dns";
var databaseUrl = process.env.DATABASE_URL || "";
var globalForPrisma = globalThis;
var prismaInstance;
if (databaseUrl.startsWith("prisma+postgres://")) {
  prismaInstance = globalForPrisma.prisma ?? new PrismaClient({
    accelerateUrl: databaseUrl
  }).$extends(k());
} else {
  const poolConfig = {
    connectionString: databaseUrl
  };
  if (process.env.PRISMA_FORCE_POOLED_IP) {
    poolConfig.lookup = (hostname, options, callback) => {
      if (hostname === "pooled.db.prisma.io") {
        const isAll = options && options.all;
        if (isAll) {
          return callback(null, [{ address: "217.69.3.105", family: 4 }]);
        }
        return callback(null, "217.69.3.105", 4);
      }
      return dns.lookup(hostname, options, callback);
    };
  }
  const pool = new Pool(poolConfig);
  const adapter = new PrismaPgAdapterFactory(pool);
  prismaInstance = globalForPrisma.prisma ?? new PrismaClient({
    adapter
  });
}
var prisma = prismaInstance;
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
export {
  prisma
};
/*! Bundled license information:

@prisma/client-runtime-utils/dist/index.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.5.0
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)

@prisma/client/runtime/client.js:
  (*! Bundled license information:
  
  @noble/hashes/utils.js:
    (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  *)
*/
//# sourceMappingURL=prisma-DDPQBYBW.mjs.map
